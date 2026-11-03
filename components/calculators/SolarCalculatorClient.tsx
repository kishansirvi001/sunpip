"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
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
import { trackEvent } from "@/lib/analytics";
import { SolarSavingsCharts } from "@/components/calculators/SolarSavingsCharts";
import { subsidyRules } from "@/lib/subsidy";
import { solarConfig } from "@/lib/solar-config";

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
      monthlyBill: "",
      monthlyConsumption: "",
      sanctionedLoadKw: "",
      roofAreaSqft: "",
      daytimeUsagePercent: "65",
      stateSubsidy: "",
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
      { name: "sanctionedLoadKw", label: "Sanctioned Load (optional)", type: "number", suffix: "kW", min: 0, step: 0.5 },
      { name: "roofAreaSqft", label: "Usable Roof Area (optional)", type: "number", suffix: "sq.ft.", min: 0, step: 10 },
      { name: "daytimeUsagePercent", label: "Daytime Usage", type: "number", suffix: "%", min: 0, max: 100, step: 5, helper: "Share of your electricity used while solar is generating." },
      { name: "stateSubsidy", label: "Optional State Subsidy", type: "number", suffix: "INR", min: 0, step: 1000, helper: "Only enter an amount confirmed for your connection." },
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
        averageTariff: numberValue(values, "averageTariff"),
        location: values.location,
        daytimeUsagePercent: numberValue(values, "daytimeUsagePercent"),
        sanctionedLoadKw: numberValue(values, "sanctionedLoadKw"),
        roofAreaSqft: numberValue(values, "roofAreaSqft"),
        stateSubsidy: numberValue(values,"stateSubsidy"),
      });
      return [
        { label: "Recommended Solar System Size", value: formatIndianNumber(result.recommendedKw, " kW") },
        { label: "Estimated Monthly Generation", value: formatIndianNumber(result.monthlyGeneration, " kWh") },
        { label: "Estimated Annual Generation", value: formatIndianNumber(result.annualGeneration, " kWh") },
        { label: "Estimated Monthly Savings", value: formatCurrency(result.monthlySavings) },
        { label: "Estimated Monthly Bill After Solar", value: formatCurrency(result.billAfter) },
        { label: "Estimated Annual Savings", value: formatCurrency(result.annualSavings) },
        { label: "Approximate System Cost", value: formatCurrency(result.systemCost) },
        { label: "Indicative Subsidy", value: formatCurrency(result.subsidy) },
        { label: "Indicative Net Cost", value: formatCurrency(result.netCost) },
        { label: "Cash Needed Before Subsidy", value: formatCurrency(result.grossCost) },
        { label: "Indicative CO₂ Avoided / Year", value: formatIndianNumber(result.co2SavedKg, " kg") },
        { label: "Estimated Payback Period", value: formatIndianNumber(result.paybackYears, " years") },
      ];
    },
  },
  size: {
    kind: "size",
    title: "Solar System Size Calculator",
    description: "Recommend solar capacity, panel quantity, generation, and roof area.",
    initialValues: { monthlyBill: "", monthlyConsumption: "", customerType: "Residential", panelWattage: "550", customPanelWattage: "650", sanctionedLoadKw: "", roofAreaSqft: "" },
    fields: [
      { name: "monthlyBill", label: "Monthly Electricity Bill", type: "number", suffix: "INR", min: 0, step: 100 },
      { name: "monthlyConsumption", label: "Monthly Electricity Consumption", type: "number", suffix: "kWh", min: 0, step: 10 },
      { name: "sanctionedLoadKw", label: "Sanctioned Load (optional)", type: "number", suffix: "kW", min: 0, step: 0.5 },
      { name: "roofAreaSqft", label: "Usable Roof Area (optional)", type: "number", suffix: "sq.ft.", min: 0, step: 10 },
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
        sanctionedLoadKw: numberValue(values,"sanctionedLoadKw"),
        roofAreaSqft: numberValue(values,"roofAreaSqft"),
      });
      return [
        { label: "Recommended Solar Capacity", value: formatIndianNumber(result.recommendedKw, " kW") },
        { label: "Number of Solar Panels Required", value: formatIndianNumber(result.panels) },
        { label: "Estimated Daily Energy Generation", value: formatIndianNumber(result.dailyGeneration, " kWh") },
        { label: "Estimated Annual Energy Generation", value: formatIndianNumber(result.annualGeneration, " kWh") },
        { label: "Required Roof Area", value: formatIndianNumber(result.roofArea, " sq.ft.") },
        { label: "Suggested Inverter Size", value: formatIndianNumber(result.inverterKw, " kW") },
        { label: "DC / AC Ratio", value: formatIndianNumber(result.dcAcRatio, ":1") },
        { label: "Capacity Check", value: result.loadOrRoofLimited ? "Reduced to fit entered limits" : "No entered capacity limit" },
      ];
    },
  },
  roof: {
    kind: "roof",
    title: "Rooftop Area Calculator",
    description: "Calculate total roof area, usable solar area, and maximum rooftop capacity.",
    initialValues: { length: "", width: "", unit: "Feet", roofType: "RCC", obstructionPercent: "15", panelWattage: "550", tiltDegrees: "10", rowSpacingFt: "2" },
    fields: [
      { name: "length", label: "Roof Length", type: "number", min: 1, step: 1 },
      { name: "width", label: "Roof Width", type: "number", min: 1, step: 1 },
      { name: "unit", label: "Unit", type: "select", options: ["Feet", "Meter"] },
      { name: "roofType", label: "Roof Type", type: "select", options: ["RCC", "Metal Sheet", "Tile Roof"] },
      { name: "obstructionPercent", label: "Roof Obstruction", type: "number", suffix: "%", min: 0, max: 100, step: 1 },
      { name: "panelWattage", label: "Panel Wattage", type: "select", options: ["550", "585", "600"] },
      { name: "tiltDegrees", label: "Panel Tilt", type: "number", suffix: "°", min: 0, max: 45, step: 1 },
      { name: "rowSpacingFt", label: "Row Spacing", type: "number", suffix: "ft", min: 0, step: 0.5 },
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
        roofType: values.roofType,
        panelWattage: numberValue(values,"panelWattage"),
        tiltDegrees: numberValue(values,"tiltDegrees"),
        rowSpacingFt: numberValue(values,"rowSpacingFt"),
      });
      return [
        { label: "Total Roof Area", value: values.unit === "Meter" ? formatIndianNumber(result.totalArea, " sq.m.") : formatIndianNumber(result.totalArea, " sq.ft.") },
        { label: "Usable Roof Area", value: formatIndianNumber(result.usableSqft, " sq.ft.") },
        { label: "Maximum Solar Capacity", value: formatIndianNumber(result.maxCapacityKw, " kW") },
        { label: "Estimated Panel Count", value: formatIndianNumber(result.panelCount) },
      ];
    },
  },
  emi: {
    kind: "emi",
    title: "Solar EMI Calculator",
    description: "Estimate monthly EMI, interest payable, and total solar loan repayment.",
    initialValues: { totalCost: "", downPayment: "0", interestRate: String(solarConfig.performance.loanRatePercent), tenureYears: "5", monthlySaving: "", prepayment: "0" },
    fields: [
      { name: "totalCost", label: "Total System Cost", type: "number", suffix: "INR", min: 1, step: 1000 },
      { name: "downPayment", label: "Down Payment", type: "number", suffix: "INR", min: 0, step: 1000 },
      { name: "interestRate", label: "Interest Rate", type: "number", suffix: "%", min: 0, step: 0.1 },
      { name: "tenureYears", label: "Loan Tenure", type: "number", suffix: "Years", min: 1, step: 1 },
      { name: "monthlySaving", label: "Estimated Monthly Solar Saving", type: "number", suffix: "INR", min: 0, step: 500 },
      { name: "prepayment", label: "Monthly Extra Prepayment (optional)", type: "number", suffix: "INR", min: 0, step: 500 },
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
        monthlySaving: numberValue(values, "monthlySaving"),
        prepayment: numberValue(values, "prepayment"),
      });
      return [
        { label: "Loan Amount", value: formatCurrency(result.loanAmount) },
        { label: "Monthly EMI", value: formatCurrency(result.monthlyEmi) },
        { label: "Total Interest Payable", value: formatCurrency(result.totalInterest) },
        { label: "Total Amount Payable", value: formatCurrency(result.totalAmount) },
        { label: "Monthly Saving Minus EMI", value: formatCurrency(result.monthlyNetCashFlow) },
        { label: "Break-even", value: result.breakEvenMonth === null ? "Savings below EMI" : "Positive from month 1" },
        { label: "Cash Purchase", value: formatCurrency(numberValue(values,"totalCost")) },
      ];
    },
  },
  roi: {
    kind: "roi",
    title: "Solar ROI Calculator",
    description: "Model simple and discounted payback, 25-year net profit, and IRR with degradation and replacement costs.",
    initialValues: { totalCost: "", subsidy: "", annualSavings: "", annualMaintenance: "", systemKw: "5", gridTariff: String(solarConfig.tariff.defaultResidential) },
    fields: [
      { name: "totalCost", label: "Total Solar System Cost", type: "number", suffix: "INR", min: 1, step: 1000 },
      { name: "subsidy", label: "Government Subsidy", type: "number", suffix: "INR", min: 0, step: 1000 },
      { name: "annualSavings", label: "Annual Electricity Savings", type: "number", suffix: "INR", min: 0, step: 1000 },
      { name: "annualMaintenance", label: "Annual Maintenance Cost", type: "number", suffix: "INR", min: 0, step: 500, helper: `Leave blank to use ${solarConfig.performance.omPercent}% of system cost.` },
      { name: "systemKw", label: "Solar System Size", type: "number", suffix: "kW", min: 0.1, step: 0.5 },
      { name: "gridTariff", label: "Current Grid Tariff", type: "number", suffix: "INR/kWh", min: 0, step: 0.5 },
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
        annualMaintenance: numberValue(values, "annualMaintenance") || numberValue(values,"totalCost")*solarConfig.performance.omPercent/100,
        systemKw: numberValue(values,"systemKw"),
        gridTariff: numberValue(values,"gridTariff"),
      });
      return [
        { label: "Net Investment", value: formatCurrency(result.netInvestment) },
        { label: "Simple Payback", value: formatIndianNumber(result.paybackYears, " years") },
        { label: "Discounted Payback (8%)", value: result.discountedPaybackYears ? formatIndianNumber(result.discountedPaybackYears, " years") : "Beyond 25 years" },
        { label: "25-Year Net Profit", value: formatCurrency(result.netProfit25Year) },
        { label: "Estimated IRR", value: formatIndianNumber(result.irrPercent, "%") },
        { label: "Estimated Solar LCOE", value: formatIndianNumber(result.lcoe, " ₹/kWh") },
        { label: "Current Grid Tariff", value: formatIndianNumber(result.gridTariff, " ₹/kWh") },
        { label: "LCOE vs Grid", value: result.lcoe < result.gridTariff ? "Below entered tariff" : "At or above entered tariff" },
        { label: "Worst / Base / Best 25-Year Profit", value: `${formatCurrency(calculateSolarRoi({totalCost:numberValue(values,"totalCost"),subsidy:numberValue(values,"subsidy"),annualSavings:numberValue(values,"annualSavings")*0.85,annualMaintenance:(numberValue(values,"annualMaintenance")||numberValue(values,"totalCost")*solarConfig.performance.omPercent/100)*1.2,systemKw:numberValue(values,"systemKw")}).netProfit25Year)} / ${formatCurrency(result.netProfit25Year)} / ${formatCurrency(calculateSolarRoi({totalCost:numberValue(values,"totalCost"),subsidy:numberValue(values,"subsidy"),annualSavings:numberValue(values,"annualSavings")*1.15,annualMaintenance:(numberValue(values,"annualMaintenance")||numberValue(values,"totalCost")*solarConfig.performance.omPercent/100)*0.9,systemKw:numberValue(values,"systemKw")}).netProfit25Year)}` },
      ];
    },
  },
};

export function SolarCalculatorClient({ kind }: { kind: CalculatorKind }) {
  const config = configs[kind];
  const [values, setValues] = useState<Values>(config.initialValues);
  const [message, setMessage] = useState("");
  const [leadName, setLeadName] = useState("");
  const [leadPhone, setLeadPhone] = useState("");
  const [leadCaptured, setLeadCaptured] = useState(false);
  const [website, setWebsite] = useState("");
  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const params = new URLSearchParams(window.location.search);
      let prior: Values = {};
      try { prior = JSON.parse(sessionStorage.getItem("sunpip-calculator-inputs") || "{}") as Values; } catch { prior = {}; }
      const fromUrl = Object.fromEntries([...params.entries()].filter(([key]) => key in config.initialValues));
      const next = { ...config.initialValues, ...prior, ...fromUrl };
      setValues(next);
      sessionStorage.setItem("sunpip-calculator-inputs", JSON.stringify(next));
      trackEvent("calculator_started", { calculator: config.kind });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [config]);
  const errors = useMemo(() => [...validateNumberFields(config, values), ...config.validate(values)], [config, values]);
  const results = useMemo(() => config.results(values), [config, values]);
  const resultLines = results.map((result) => `${result.label}: ${result.value}`);
  const hasErrors = errors.length > 0;
  const savings = kind === "savings" ? calculateSolarSavings({ monthlyBill: numberValue(values, "monthlyBill"), monthlyConsumption: numberValue(values, "monthlyConsumption") || (numberValue(values, "averageTariff") > 0 ? numberValue(values, "monthlyBill") / numberValue(values, "averageTariff") : 0), customerType: customerType(values), systemType: values.systemType as SolarSystemType, averageTariff: numberValue(values, "averageTariff"), location: values.location, daytimeUsagePercent: numberValue(values,"daytimeUsagePercent"), sanctionedLoadKw: numberValue(values,"sanctionedLoadKw"), roofAreaSqft: numberValue(values,"roofAreaSqft"), stateSubsidy:numberValue(values,"stateSubsidy") }) : null;
  const emiSchedule = kind === "emi" ? calculateSolarEmi({ totalCost:numberValue(values,"totalCost"), downPayment:numberValue(values,"downPayment"), interestRate:numberValue(values,"interestRate"), tenureYears:numberValue(values,"tenureYears"), prepayment:numberValue(values,"prepayment") }) : null;
  const roiModel = kind === "roi" ? calculateSolarRoi({totalCost:numberValue(values,"totalCost"),subsidy:numberValue(values,"subsidy"),annualSavings:numberValue(values,"annualSavings"),annualMaintenance:numberValue(values,"annualMaintenance")||numberValue(values,"totalCost")*solarConfig.performance.omPercent/100,systemKw:numberValue(values,"systemKw"),gridTariff:numberValue(values,"gridTariff")}) : null;
  const hasInputs = kind === "savings" || kind === "size" ? hasBillOrUnits(values) : kind === "roof" ? numberValue(values,"length")>0 && numberValue(values,"width")>0 : numberValue(values,"totalCost")>0;

  function updateValue(name: string, value: string) {
    setValues((current) => {
      const next = { ...current, [name]: value };
      sessionStorage.setItem("sunpip-calculator-inputs", JSON.stringify(next));
      return next;
    });
    setMessage("");
  }

  async function copyResults() {
    await navigator.clipboard.writeText(`${config.title}\n${resultLines.join("\n")}`);
    setMessage("Results copied.");
  }

  function shareResults() {
    const inputLines = Object.entries(values).map(([key,value]) => `${key}: ${value}`);
    const text = encodeURIComponent(`${config.title}\nInputs:\n${inputLines.join("\n")}\n\nResults:\n${resultLines.join("\n")}`);
    trackEvent("whatsapp_clicked", { calculator: config.kind });
    window.open(`https://wa.me/${siteConfig.whatsapp}?text=${text}`, "_blank", "noopener,noreferrer");
  }

  async function captureLead() {
    if (leadCaptured) return true;
    if (!leadName.trim() || leadPhone.replace(/\D/g, "").length !== 10) {
      setMessage("Enter your name and a valid 10-digit phone number first.");
      return false;
    }
    try {
      const response = await fetch("/api/quote", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ leadSource: "calculator", name: leadName.trim(), phone: leadPhone, website, calculatorSource: config.title, calculatorInputs: values, calculatorOutputs: results, utm: Object.fromEntries(new URLSearchParams(window.location.search).entries()), message: resultLines.join("; ") }) });
      const result = await response.json() as { message?: string };
      if (!response.ok) { setMessage(result.message || "Could not send your details."); return false; }
      setLeadCaptured(true);
      trackEvent("calculator_completed", { calculator: config.kind });
      trackEvent("lead_submitted", { calculator: config.kind });
      setMessage("Details sent. You can now download your estimate or request a quote.");
      return true;
    } catch { setMessage("Could not send your details. Please try again or contact us on WhatsApp."); return false; }
  }

  async function requestQuoteWithResults() {
    if (!(await captureLead())) return;
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

  async function downloadResults() {
    if (!(await captureLead())) return;
    downloadTextAsPdf(config.title, [...resultLines, "", `SUNPIP SOLUTIONS LLP | ${siteConfig.phone} | ${siteConfig.email}`, `Estimate date: ${new Date().toLocaleDateString("en-IN")}`, "Planning assumptions: seasonal yield, tariff escalation, degradation, O&M and inverter replacement included where applicable.", `Subsidy rules effective: ${subsidyRules.effectiveDate}. Verify at pmsuryaghar.gov.in.`]);
    trackEvent("pdf_downloaded", { calculator: config.kind });
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
            if (!hasErrors) trackEvent("calculator_completed", { calculator: config.kind });
          }}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.03]"
        >
          <div>
            <h2 className="text-2xl font-bold text-slate-950 dark:text-white">{config.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{config.description}</p>
              <p className="mt-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                Estimates use editable assumptions: {solarAssumptions.dailyGenerationPerKw} kWh/day per kW, size-based indicative pricing from {formatCurrency(solarAssumptions.costBands[0].costPerKw)}/kW, and tariff slabs unless you enter a bill rate.
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
              <h2 className="mt-2 text-2xl font-bold text-slate-950 dark:text-white">{hasInputs ? "Your estimate" : kind === "savings" || kind === "size" ? "Enter your bill to see results" : "Enter your details to see results"}</h2>
            </div>
            {message ? <p className="rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-sun-blue dark:bg-blue-400/10">{message}</p> : null}
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {results.map((result) => (
              <div key={result.label} className="rounded-lg border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/[0.04]">
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">{result.label}</p>
                <p className="mt-2 text-2xl font-black text-slate-950 dark:text-white">{!hasInputs || hasErrors ? "—" : result.value}</p>
              </div>
            ))}
          </div>

          {kind === "savings" && savings && hasBillOrUnits(values) && !hasErrors ? <><SolarSavingsCharts monthlyBill={savings.billBefore} monthlySavings={savings.monthlySavings} netCost={savings.netCost} /><p className="mt-3 text-sm text-slate-600">{savings.costCapReason} Generation uses monthly seasonal factors. Net-metering credits and minimum charges are planning estimates.</p></> : null}
          {kind === "size" && hasInputs && !hasErrors ? <p className="mt-3 rounded-lg bg-amber-50 p-3 text-sm text-amber-900">{numberValue(values,"sanctionedLoadKw")>0&&numberValue(values,"roofAreaSqft")>0?"The recommended size is capped at the lower of your sanctioned load and roof capacity.":numberValue(values,"sanctionedLoadKw")>0?"The recommendation is capped at your sanctioned load.":numberValue(values,"roofAreaSqft")>0?"The recommendation is capped at your usable roof area.":"Add sanctioned load and usable roof area to see capacity warnings."}</p> : null}
          {kind === "emi" && emiSchedule && !hasErrors ? <details className="mt-5 rounded-xl border border-slate-200 p-4 dark:border-white/10"><summary className="cursor-pointer font-bold">Amortization schedule (first 24 months)</summary><div className="mt-3 max-h-80 overflow-auto"><table className="w-full text-left text-sm"><thead><tr><th className="p-2">Month</th><th className="p-2">EMI</th><th className="p-2">Interest</th><th className="p-2">Principal + extra</th><th className="p-2">Balance</th></tr></thead><tbody>{emiSchedule.amortization.slice(0,24).map(row=><tr className="border-t" key={row.month}><td className="p-2">{row.month}</td><td className="p-2">{formatCurrency(row.emi)}</td><td className="p-2">{formatCurrency(row.interest)}</td><td className="p-2">{formatCurrency(row.principal)}</td><td className="p-2">{formatCurrency(row.balance)}</td></tr>)}</tbody></table></div><p className="mt-3 text-xs text-slate-500">Illustrative schedule; lender fees and terms may change the actual repayment.</p></details> : null}
          {kind === "roof" && hasInputs && !hasErrors ? <figure className="mt-5 rounded-xl border border-slate-200 p-4 dark:border-white/10"><figcaption className="font-bold">Indicative top-down panel layout</figcaption><svg viewBox="0 0 320 180" role="img" aria-label="Illustrative solar panel layout on roof" className="mt-3 w-full rounded-lg bg-slate-100 p-3">{Array.from({length:Math.min(48, calculateRooftopArea({length:numberValue(values,"length"),width:numberValue(values,"width"),unit:values.unit as RoofUnit,obstructionPercent:numberValue(values,"obstructionPercent"),roofType:values.roofType,panelWattage:numberValue(values,"panelWattage")}).panelCount)},(_,index)=><rect key={index} x={12+(index%8)*37} y={12+Math.floor(index/8)*25} width="32" height="19" rx="2" fill="#0b4f78" stroke="#fff" strokeWidth="1"/> )}</svg><p className="mt-2 text-xs text-slate-500">Layout is illustrative. Final spacing depends on tilt, structure, access paths, shade and site survey.</p></figure> : null}
          {kind === "roi" && roiModel && !hasErrors ? <><figure className="mt-5 rounded-xl border border-slate-200 p-4 dark:border-white/10"><figcaption className="font-bold">25-year cumulative cash flow</figcaption><svg viewBox="0 0 320 190" role="img" aria-label="Cumulative solar project cash flow over 25 years" className="mt-2 w-full"><line x1="30" y1="95" x2="290" y2="95" stroke="currentColor" opacity=".35"/><polyline points={roiModel.cumulativeCashFlow.map((amount,year)=>`${30+year*(260/25)},${170-((amount-Math.min(...roiModel.cumulativeCashFlow))/(Math.max(...roiModel.cumulativeCashFlow)-Math.min(...roiModel.cumulativeCashFlow)||1))*145}`).join(" ")} fill="none" stroke="#b45309" strokeWidth="4" strokeLinejoin="round"/></svg></figure><details className="mt-4 rounded-xl border border-slate-200 p-4 dark:border-white/10"><summary className="cursor-pointer font-bold">Advanced assumptions</summary><p className="mt-3 text-sm text-slate-600">Degradation {solarAssumptions.annualGenerationDegradation*100}% per year; tariff escalation {solarConfig.performance.tariffEscalationPercent}% per year; O&amp;M {solarConfig.performance.omPercent}% planning benchmark; inverter replacement in year {solarConfig.performance.inverterReplacementYear}; discount rate 8%.</p></details></> : null}
          <div className="mt-5"><Link className="inline-flex rounded-full bg-sun-blue px-5 py-3 font-bold text-white" href={`${kind === "size" ? "/solar-savings-calculator" : kind === "roof" ? "/solar-system-size-calculator" : kind === "savings" ? "/solar-roi-calculator" : "/get-quote"}?${new URLSearchParams(values).toString()}`}>{kind === "size" ? "Next: check savings" : kind === "roof" ? "Next: size your system" : kind === "savings" ? "Next: explore 25-year ROI" : "Next: request a site review"}</Link></div>
          {kind === "savings" && savings && !hasErrors && values.customerType === "Residential" && savings.recommendedKw > 3 ? (() => {
            const rateFor = (kw: number) => solarAssumptions.costBands.find((band) => kw <= band.maxKw)?.costPerKw ?? solarAssumptions.costBands.at(-1)!.costPerKw;
            const cost3kw = 3 * rateFor(3) - subsidyRules.central.capRupees;
            return <p className="mt-4 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-950">For eligible residential systems, the subsidy stops increasing above 3 kW. Indicative net cost: 3 kW {formatCurrency(cost3kw)}; recommended {formatIndianNumber(savings.recommendedKw, " kW")} {formatCurrency(savings.netCost)}. Final price after site survey.</p>;
          })() : null}

          <p className="mt-5 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm font-semibold text-amber-900 dark:border-amber-300/20 dark:bg-amber-300/10 dark:text-amber-100">
            {solarAssumptions.subsidyNote} Subsidy is received after commissioning and approval; plan for the gross cost upfront. Current calculator rules: {subsidyRules.lastUpdated}. These are indicative planning estimates, not guaranteed savings; final size, price, eligibility and payback depend on site survey, components, DISCOM and approvals.
          </p>

          <div className="mt-5 rounded-xl border border-slate-200 p-4 dark:border-white/10">
            <p className="font-bold">Get your detailed estimate</p>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Enter your name and phone before downloading a PDF or requesting a detailed quote.</p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <label className="field-label">Name<input className="field-input" autoComplete="name" value={leadName} onChange={(e)=>{setLeadName(e.target.value);setLeadCaptured(false);}} /></label>
              <label className="field-label">Phone<input className="field-input" type="tel" inputMode="numeric" autoComplete="tel-national" maxLength={10} value={leadPhone} onChange={(e)=>{setLeadPhone(e.target.value.replace(/\D/g, "").slice(0,10));setLeadCaptured(false);}} /></label>
            </div>
            <label aria-hidden="true" className="absolute -left-[10000px] h-px w-px overflow-hidden">Leave empty<input tabIndex={-1} autoComplete="off" value={website} onChange={(e)=>setWebsite(e.target.value)} /></label>
          </div>

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
