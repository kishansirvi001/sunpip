"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  calculateRooftopArea,
  calculateSolarEmi,
  calculateSolarRoi,
  calculateSolarSavings,
  calculateSolarSystemSize,
  downloadTextAsPdf,
  formatCurrency,
  formatIndianNumber,
  type CustomerType,
  type RoofUnit,
  type SolarSystemType,
} from "@/utils/solarCalculators";
import { siteConfig, solarAssumptions } from "@/lib/constants";

type CalculatorKind = "savings" | "size" | "roof" | "emi" | "roi";
type FieldType = "number" | "select";
type Result = { label: string; value: string };
type Values = Record<string, string>;

type Field = {
  name: string;
  label: string;
  type: FieldType;
  suffix?: string;
  min?: number;
  max?: number;
  step?: number;
  options?: string[];
  helper?: string;
};

type Config = {
  kind: CalculatorKind;
  title: string;
  description: string;
  initialValues: Values;
  fields: Field[];
  validate: (values: Values) => string[];
  results: (values: Values) => Result[];
};

const calculatorLinks = [
  { href: "/solar-savings-calculator", label: "Savings" },
  { href: "/solar-system-size-calculator", label: "System Size" },
  { href: "/rooftop-area-calculator", label: "Roof Area" },
  { href: "/solar-emi-calculator", label: "EMI" },
  { href: "/solar-roi-calculator", label: "ROI" },
];

function parseCalculatorNumberInput(value: string) {
  const normalized = value
    .trim()
    .replace(/[₹,%\s]/g, "")
    .replace(/,/g, "");

  if (!normalized) return { value: 0, valid: true };

  const match = normalized.match(/^[+-]?(?:\d+\.?\d*|\.\d+)(?:e[+-]?\d+)?$/i);
  if (!match) return { value: 0, valid: false };

  const parsed = Number(normalized);
  return Number.isFinite(parsed) ? { value: parsed, valid: true } : { value: 0, valid: false };
}

const numberValue = (values: Values, key: string) => parseCalculatorNumberInput(values[key] || "").value;
const hasBillOrUnits = (values: Values) => numberValue(values, "monthlyBill") > 0 || numberValue(values, "monthlyConsumption") > 0;
const customerType = (values: Values) => values.customerType as CustomerType;

function validateNumberFields(config: Config, values: Values) {
  return config.fields.flatMap((field) => {
    if (field.type !== "number") return [];

    const rawValue = values[field.name] || "";
    const parsed = parseCalculatorNumberInput(rawValue);
    const value = parsed.value;

    if (!rawValue.trim()) return [];
    if (!parsed.valid) return [`Enter a valid number for ${field.label}.`];
    if (field.min !== undefined && value < field.min) return [`${field.label} must be at least ${field.min}.`];
    if (field.max !== undefined && value > field.max) return [`${field.label} must be ${field.max} or less.`];
    return [];
  });
}

const configs: Record<CalculatorKind, Config> = {
  savings: {
    kind: "savings",
    title: "Solar Savings Calculator",
    description: "Estimate rooftop solar savings, annual bill reduction, and payback period.",
    initialValues: {
      monthlyBill: "5000",
      monthlyConsumption: "",
      averageTariff: "",
      location: "Sojat / Pali",
      customerType: "Residential",
      roofType: "RCC",
      state: "Rajasthan",
      systemType: "On-Grid",
    },
    fields: [
      { name: "monthlyBill", label: "Monthly Electricity Bill", type: "number", suffix: "INR", min: 0, step: 100, helper: "Enter bill or consumption. One is enough." },
      { name: "monthlyConsumption", label: "Monthly Electricity Consumption", type: "number", suffix: "kWh", min: 0, step: 10 },
      { name: "averageTariff", label: "Average Electricity Tariff", type: "number", suffix: "INR/kWh", min: 0, step: 0.5, helper: "Optional. Leave blank to use planning assumptions." },
      { name: "location", label: "Location", type: "select", options: ["Sojat / Pali", "Other Rajasthan location"] },
      { name: "customerType", label: "Customer Type", type: "select", options: ["Residential", "Commercial"] },
      { name: "roofType", label: "Roof Type", type: "select", options: ["RCC", "Metal Sheet", "Tile", "Ground", "Other"] },
      { name: "state", label: "State", type: "select", options: ["Rajasthan"] },
      { name: "systemType", label: "Solar System Type", type: "select", options: ["On-Grid", "Hybrid", "Off-Grid"] },
    ],
    validate: (values) => hasBillOrUnits(values) ? [] : ["Enter either monthly bill or monthly consumption."],
    results: (values) => {
      const result = calculateSolarSavings({
        monthlyBill: numberValue(values, "monthlyBill"),
        monthlyConsumption: numberValue(values, "monthlyConsumption") || (numberValue(values, "averageTariff") > 0 ? numberValue(values, "monthlyBill") / numberValue(values, "averageTariff") : 0),
        customerType: customerType(values),
        systemType: values.systemType as SolarSystemType,
      });
      return [
        { label: "Recommended Solar System Size", value: formatIndianNumber(result.recommendedKw, " kW") },
        { label: "Estimated Monthly Generation", value: formatIndianNumber(result.monthlyGeneration, " kWh") },
        { label: "Estimated Annual Generation", value: formatIndianNumber(result.annualGeneration, " kWh") },
        { label: "Estimated Monthly Savings", value: formatCurrency(result.monthlySavings) },
        { label: "Estimated Annual Savings", value: formatCurrency(result.annualSavings) },
        { label: "Approximate System Cost", value: formatCurrency(result.systemCost) },
        { label: "Applicable Subsidy", value: values.customerType === "Residential" ? "To be verified during eligibility check" : "Usually not applicable for commercial projects" },
        { label: "Approximate Customer Contribution", value: formatCurrency(result.estimatedCustomerContribution) },
        { label: "Estimated Payback Period", value: formatIndianNumber(result.paybackYears, " years") },
      ];
    },
  },
  size: {
    kind: "size",
    title: "Solar System Size Calculator",
    description: "Recommend solar capacity, panel quantity, generation, and roof area.",
    initialValues: { monthlyBill: "5000", monthlyConsumption: "", customerType: "Residential", panelWattage: "550", customPanelWattage: "650" },
    fields: [
      { name: "monthlyBill", label: "Monthly Electricity Bill", type: "number", suffix: "INR", min: 0, step: 100 },
      { name: "monthlyConsumption", label: "Monthly Electricity Consumption", type: "number", suffix: "kWh", min: 0, step: 10 },
      { name: "customerType", label: "Customer Type", type: "select", options: ["Residential", "Commercial"] },
      { name: "panelWattage", label: "Solar Panel Wattage", type: "select", options: ["550", "585", "600", "Custom"] },
      { name: "customPanelWattage", label: "Custom Panel Wattage", type: "number", suffix: "W", min: 1, step: 5, helper: "Used when Custom is selected." },
    ],
    validate: (values) => {
      const errors = hasBillOrUnits(values) ? [] : ["Enter either monthly bill or monthly consumption."];
      if (values.panelWattage === "Custom" && numberValue(values, "customPanelWattage") <= 0) errors.push("Enter valid custom panel wattage.");
      return errors;
    },
    results: (values) => {
      const result = calculateSolarSystemSize({
        monthlyBill: numberValue(values, "monthlyBill"),
        monthlyConsumption: numberValue(values, "monthlyConsumption"),
        customerType: customerType(values),
        panelWattage: values.panelWattage === "Custom" ? numberValue(values, "customPanelWattage") : numberValue(values, "panelWattage"),
      });
      return [
        { label: "Recommended Solar Capacity", value: formatIndianNumber(result.recommendedKw, " kW") },
        { label: "Number of Solar Panels Required", value: formatIndianNumber(result.panels) },
        { label: "Estimated Daily Energy Generation", value: formatIndianNumber(result.dailyGeneration, " kWh") },
        { label: "Required Roof Area", value: formatIndianNumber(result.roofArea, " sq.ft.") },
      ];
    },
  },
  roof: {
    kind: "roof",
    title: "Rooftop Area Calculator",
    description: "Calculate total roof area, usable solar area, and maximum rooftop capacity.",
    initialValues: { length: "40", width: "25", unit: "Feet", roofType: "RCC", obstructionPercent: "15" },
    fields: [
      { name: "length", label: "Roof Length", type: "number", min: 1, step: 1 },
      { name: "width", label: "Roof Width", type: "number", min: 1, step: 1 },
      { name: "unit", label: "Unit", type: "select", options: ["Feet", "Meter"] },
      { name: "roofType", label: "Roof Type", type: "select", options: ["RCC", "Metal Sheet", "Tile Roof"] },
      { name: "obstructionPercent", label: "Roof Obstruction", type: "number", suffix: "%", min: 0, max: 100, step: 1 },
    ],
    validate: (values) => {
      const errors = [];
      if (numberValue(values, "length") <= 0 || numberValue(values, "width") <= 0) errors.push("Enter valid roof length and width.");
      if (numberValue(values, "obstructionPercent") < 0 || numberValue(values, "obstructionPercent") > 100) errors.push("Obstruction must be between 0 and 100%.");
      return errors;
    },
    results: (values) => {
      const result = calculateRooftopArea({
        length: numberValue(values, "length"),
        width: numberValue(values, "width"),
        unit: values.unit as RoofUnit,
        obstructionPercent: numberValue(values, "obstructionPercent"),
      });
      return [
        { label: "Total Roof Area", value: values.unit === "Meter" ? formatIndianNumber(result.totalArea, " sq.m.") : formatIndianNumber(result.totalArea, " sq.ft.") },
        { label: "Usable Roof Area", value: formatIndianNumber(result.usableSqft, " sq.ft.") },
        { label: "Maximum Solar Capacity", value: formatIndianNumber(result.maxCapacityKw, " kW") },
      ];
    },
  },
  emi: {
    kind: "emi",
    title: "Solar EMI Calculator",
    description: "Estimate monthly EMI, interest payable, and total solar loan repayment.",
    initialValues: { totalCost: "300000", downPayment: "50000", interestRate: "9", tenureYears: "5" },
    fields: [
      { name: "totalCost", label: "Total System Cost", type: "number", suffix: "INR", min: 1, step: 1000 },
      { name: "downPayment", label: "Down Payment", type: "number", suffix: "INR", min: 0, step: 1000 },
      { name: "interestRate", label: "Interest Rate", type: "number", suffix: "%", min: 0, step: 0.1 },
      { name: "tenureYears", label: "Loan Tenure", type: "number", suffix: "Years", min: 1, step: 1 },
    ],
    validate: (values) => {
      const errors = [];
      if (numberValue(values, "totalCost") <= 0) errors.push("Enter a valid total system cost.");
      if (numberValue(values, "downPayment") > numberValue(values, "totalCost")) errors.push("Down payment cannot be higher than total cost.");
      if (numberValue(values, "tenureYears") <= 0) errors.push("Loan tenure must be at least 1 year.");
      return errors;
    },
    results: (values) => {
      const result = calculateSolarEmi({
        totalCost: numberValue(values, "totalCost"),
        downPayment: numberValue(values, "downPayment"),
        interestRate: numberValue(values, "interestRate"),
        tenureYears: numberValue(values, "tenureYears"),
      });
      return [
        { label: "Loan Amount", value: formatCurrency(result.loanAmount) },
        { label: "Monthly EMI", value: formatCurrency(result.monthlyEmi) },
        { label: "Total Interest Payable", value: formatCurrency(result.totalInterest) },
        { label: "Total Amount Payable", value: formatCurrency(result.totalAmount) },
      ];
    },
  },
  roi: {
    kind: "roi",
    title: "Solar ROI Calculator",
    description: "Calculate net investment, payback, annual net savings, and ROI.",
    initialValues: { totalCost: "300000", subsidy: "78000", annualSavings: "72000", annualMaintenance: "5000" },
    fields: [
      { name: "totalCost", label: "Total Solar System Cost", type: "number", suffix: "INR", min: 1, step: 1000 },
      { name: "subsidy", label: "Government Subsidy", type: "number", suffix: "INR", min: 0, step: 1000 },
      { name: "annualSavings", label: "Annual Electricity Savings", type: "number", suffix: "INR", min: 0, step: 1000 },
      { name: "annualMaintenance", label: "Annual Maintenance Cost", type: "number", suffix: "INR", min: 0, step: 500 },
    ],
    validate: (values) => {
      const errors = [];
      if (numberValue(values, "totalCost") <= 0) errors.push("Enter a valid solar system cost.");
      if (numberValue(values, "subsidy") > numberValue(values, "totalCost")) errors.push("Subsidy cannot be higher than total cost.");
      return errors;
    },
    results: (values) => {
      const result = calculateSolarRoi({
        totalCost: numberValue(values, "totalCost"),
        subsidy: numberValue(values, "subsidy"),
        annualSavings: numberValue(values, "annualSavings"),
        annualMaintenance: numberValue(values, "annualMaintenance"),
      });
      return [
        { label: "Net Investment", value: formatCurrency(result.netInvestment) },
        { label: "Annual Net Savings", value: formatCurrency(result.annualNetSavings) },
        { label: "Payback Period", value: formatIndianNumber(result.paybackYears, " years") },
        { label: "ROI", value: formatIndianNumber(result.roiPercent, "%") },
      ];
    },
  },
};

export function SolarCalculatorClient({ kind }: { kind: CalculatorKind }) {
  const config = configs[kind];
  const [values, setValues] = useState<Values>(config.initialValues);
  const [message, setMessage] = useState("");
  const errors = useMemo(() => [...validateNumberFields(config, values), ...config.validate(values)], [config, values]);
  const results = useMemo(() => config.results(values), [config, values]);
  const resultLines = results.map((result) => `${result.label}: ${result.value}`);
  const hasErrors = errors.length > 0;

  function updateValue(name: string, value: string) {
    setValues((current) => ({ ...current, [name]: value }));
    setMessage("");
  }

  async function copyResults() {
    await navigator.clipboard.writeText(`${config.title}\n${resultLines.join("\n")}`);
    setMessage("Results copied.");
  }

  function shareResults() {
    const text = encodeURIComponent(`${config.title}\n${resultLines.join("\n")}`);
    window.open(`https://wa.me/?text=${text}`, "_blank", "noopener,noreferrer");
  }

  function requestQuoteWithResults() {
    const params = new URLSearchParams({
      source: config.title,
      calculator: config.kind,
      monthlyBill: values.monthlyBill || "",
      customerType: values.customerType || "",
      roofType: values.roofType || "",
      city: values.location || "",
      message: resultLines.join("; "),
    });
    window.location.href = `/get-quote?${params.toString()}`;
  }

  function downloadResults() {
    downloadTextAsPdf(config.title, resultLines);
    setMessage("PDF downloaded.");
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
      <aside className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
        <p className="px-2 text-sm font-bold uppercase tracking-[0.18em] text-sun-blue">Calculators</p>
        <div className="mt-4 grid gap-2">
          {calculatorLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-lg px-4 py-3 text-sm font-bold transition ${
                item.href.includes(config.kind === "size" ? "system-size" : config.kind)
                  ? "bg-sun-blue text-white"
                  : "text-slate-700 hover:bg-slate-100 hover:text-sun-blue dark:text-slate-200 dark:hover:bg-white/10"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </aside>

      <div className="grid gap-6">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setMessage(hasErrors ? "Please fix the highlighted inputs." : "Results updated.");
          }}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.03]"
        >
          <div>
            <h2 className="text-2xl font-bold text-slate-950 dark:text-white">{config.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{config.description}</p>
              <p className="mt-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                Estimates use configurable assumptions: {solarAssumptions.dailyGenerationPerKw} kWh/day per kW, {formatCurrency(solarAssumptions.onGridCostPerKw)} per kW for on-grid systems, and typical tariffs unless you enter your own.
              </p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {config.fields.map((field) => (
              <label key={field.name} className="field-label">
                {field.label}
                {field.type === "select" ? (
                  <select value={values[field.name]} onChange={(event) => updateValue(field.name, event.target.value)} className="field-input">
                    {field.options?.map((option) => <option key={option} value={option}>{field.name === "panelWattage" && option !== "Custom" ? `${option}W` : option}</option>)}
                  </select>
                ) : (
                  <span className="relative">
                    <input
                      value={values[field.name]}
                      onChange={(event) => updateValue(field.name, event.target.value)}
                      type="text"
                      inputMode="decimal"
                      autoComplete="off"
                      className="field-input pr-16"
                    />
                    {field.suffix ? <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">{field.suffix}</span> : null}
                  </span>
                )}
                {field.helper ? <span className="text-xs font-medium text-slate-500 dark:text-slate-400">{field.helper}</span> : null}
              </label>
            ))}
          </div>

          {hasErrors ? (
            <div className="mt-5 rounded-lg border border-blue-200 bg-blue-50 p-4 text-sm font-semibold text-sun-blue dark:border-blue-400/20 dark:bg-blue-400/10">
              {errors.map((error) => <p key={error}>{error}</p>)}
            </div>
          ) : null}

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button type="submit" className="rounded-full bg-sun-blue px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700">
              Calculate
            </button>
            <button type="button" onClick={() => { setValues(config.initialValues); setMessage("Calculator reset."); }} className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-900 transition hover:border-sun-blue hover:text-sun-blue dark:border-white/15 dark:bg-white/10 dark:text-white">
              Reset
            </button>
          </div>
        </form>

        <section aria-live="polite" className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-sun-blue">Results</p>
              <h2 className="mt-2 text-2xl font-bold text-slate-950 dark:text-white">Live estimate</h2>
            </div>
            {message ? <p className="rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-sun-blue dark:bg-blue-400/10">{message}</p> : null}
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {results.map((result) => (
              <div key={result.label} className="rounded-lg border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/[0.04]">
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">{result.label}</p>
                <p className="mt-2 text-2xl font-black text-slate-950 dark:text-white">{hasErrors ? "-" : result.value}</p>
              </div>
            ))}
          </div>

          <p className="mt-5 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm font-semibold text-amber-900 dark:border-amber-300/20 dark:bg-amber-300/10 dark:text-amber-100">
            These are planning estimates, not guaranteed savings. Final system size, cost, subsidy, generation, and payback depend on your bill, roof, DISCOM rules, site survey, components, and approvals.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <button type="button" disabled={hasErrors} onClick={copyResults} className="rounded-full border border-slate-300 bg-white px-4 py-3 text-sm font-bold text-slate-900 transition hover:border-sun-blue hover:text-sun-blue disabled:cursor-not-allowed disabled:opacity-50 dark:border-white/15 dark:bg-white/10 dark:text-white">
              Copy Results
            </button>
            <button type="button" disabled={hasErrors} onClick={downloadResults} className="rounded-full border border-slate-300 bg-white px-4 py-3 text-sm font-bold text-slate-900 transition hover:border-sun-blue hover:text-sun-blue disabled:cursor-not-allowed disabled:opacity-50 dark:border-white/15 dark:bg-white/10 dark:text-white">
              Download PDF
            </button>
            <button type="button" disabled={hasErrors} onClick={shareResults} className="rounded-full bg-sun-blue px-4 py-3 text-sm font-bold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50">
              Share on WhatsApp
            </button>
            <button type="button" disabled={hasErrors} onClick={requestQuoteWithResults} className="rounded-full bg-slate-950 px-4 py-3 text-sm font-bold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-white dark:text-slate-950">
              Get Detailed Quote
            </button>
          </div>
          <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">For help, WhatsApp {siteConfig.whatsappDisplay} or submit the quote form.</p>
        </section>
      </div>
    </div>
  );
}
