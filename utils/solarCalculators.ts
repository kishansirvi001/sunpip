export type CustomerType = "Residential" | "Commercial";
export type SolarSystemType = "On-Grid" | "Hybrid" | "Off-Grid";
export type RoofUnit = "Feet" | "Meter";

export const rupeeFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

export const indianNumberFormatter = new Intl.NumberFormat("en-IN", {
  maximumFractionDigits: 2,
});

const DEFAULT_TARIFF = 8;
const COMMERCIAL_TARIFF = 10;
const DAILY_GENERATION_PER_KW = 4.2;
const SQFT_PER_KW = 90;

export function safeNumber(value: number) {
  return Number.isFinite(value) ? value : 0;
}

export function formatCurrency(value: number) {
  return rupeeFormatter.format(Math.round(safeNumber(value)));
}

export function formatIndianNumber(value: number, suffix = "") {
  return `${indianNumberFormatter.format(safeNumber(value))}${suffix}`;
}

export function monthlyUnitsFromInput(monthlyBill: number, monthlyConsumption: number, customerType: CustomerType) {
  const bill = Math.max(safeNumber(monthlyBill), 0);
  const consumption = Math.max(safeNumber(monthlyConsumption), 0);
  if (consumption > 0) return consumption;
  const tariff = customerType === "Commercial" ? COMMERCIAL_TARIFF : DEFAULT_TARIFF;
  return bill > 0 ? bill / tariff : 0;
}

export function calculateSolarSavings(input: {
  monthlyBill: number;
  monthlyConsumption: number;
  customerType: CustomerType;
  systemType: SolarSystemType;
}) {
  const monthlyBill = Math.max(safeNumber(input.monthlyBill), 0);
  const monthlyUnits = monthlyUnitsFromInput(monthlyBill, input.monthlyConsumption, input.customerType);
  const tariff = input.customerType === "Commercial" ? COMMERCIAL_TARIFF : DEFAULT_TARIFF;
  const systemMultiplier = input.systemType === "Hybrid" ? 1.1 : input.systemType === "Off-Grid" ? 1.2 : 1;
  const recommendedKw = (monthlyUnits / 125) * systemMultiplier;
  const monthlySavings = Math.min(monthlyUnits * tariff * 0.9, monthlyBill || monthlyUnits * tariff);
  const annualSavings = monthlySavings * 12;
  const costPerKw = input.systemType === "Off-Grid" ? 85000 : input.systemType === "Hybrid" ? 78000 : 65000;
  const paybackYears = annualSavings > 0 ? (recommendedKw * costPerKw) / annualSavings : 0;

  return {
    recommendedKw,
    monthlySavings,
    annualSavings,
    paybackYears,
  };
}

export function calculateSolarSystemSize(input: {
  monthlyBill: number;
  monthlyConsumption: number;
  customerType: CustomerType;
  panelWattage: number;
}) {
  const monthlyUnits = monthlyUnitsFromInput(input.monthlyBill, input.monthlyConsumption, input.customerType);
  const recommendedKw = monthlyUnits / 125;
  const panelWattage = Math.max(safeNumber(input.panelWattage), 0);
  const panels = panelWattage > 0 ? Math.ceil((recommendedKw * 1000) / panelWattage) : 0;
  const dailyGeneration = recommendedKw * DAILY_GENERATION_PER_KW;
  const roofArea = recommendedKw * SQFT_PER_KW;

  return {
    recommendedKw,
    panels,
    dailyGeneration,
    roofArea,
  };
}

export function calculateRooftopArea(input: {
  length: number;
  width: number;
  unit: RoofUnit;
  obstructionPercent: number;
}) {
  const length = Math.max(safeNumber(input.length), 0);
  const width = Math.max(safeNumber(input.width), 0);
  const obstructionPercent = Math.min(Math.max(safeNumber(input.obstructionPercent), 0), 100);
  const areaInSelectedUnit = length * width;
  const totalSqft = input.unit === "Meter" ? areaInSelectedUnit * 10.7639 : areaInSelectedUnit;
  const usableSqft = totalSqft * Math.max(0, 1 - obstructionPercent / 100);
  const maxCapacityKw = usableSqft / SQFT_PER_KW;

  return {
    totalArea: input.unit === "Meter" ? areaInSelectedUnit : totalSqft,
    totalSqft,
    usableSqft,
    maxCapacityKw,
  };
}

export function calculateSolarEmi(input: {
  totalCost: number;
  downPayment: number;
  interestRate: number;
  tenureYears: number;
}) {
  const totalCost = Math.max(safeNumber(input.totalCost), 0);
  const downPayment = Math.max(safeNumber(input.downPayment), 0);
  const interestRate = Math.max(safeNumber(input.interestRate), 0);
  const tenureYears = Math.max(safeNumber(input.tenureYears), 0);
  const loanAmount = Math.max(totalCost - downPayment, 0);
  const months = tenureYears * 12;
  const monthlyRate = interestRate / 12 / 100;
  const monthlyEmi = monthlyRate > 0 && months > 0
    ? (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1)
    : months > 0 ? loanAmount / months : 0;
  const totalAmount = monthlyEmi * months;
  const totalInterest = Math.max(totalAmount - loanAmount, 0);

  return {
    loanAmount,
    monthlyEmi,
    totalInterest,
    totalAmount,
  };
}

export function calculateSolarRoi(input: {
  totalCost: number;
  subsidy: number;
  annualSavings: number;
  annualMaintenance: number;
}) {
  const totalCost = Math.max(safeNumber(input.totalCost), 0);
  const subsidy = Math.max(safeNumber(input.subsidy), 0);
  const annualSavings = Math.max(safeNumber(input.annualSavings), 0);
  const annualMaintenance = Math.max(safeNumber(input.annualMaintenance), 0);
  const netInvestment = Math.max(totalCost - subsidy, 0);
  const annualNetSavings = Math.max(annualSavings - annualMaintenance, 0);
  const paybackYears = annualNetSavings > 0 ? netInvestment / annualNetSavings : 0;
  const roiPercent = netInvestment > 0 ? (annualNetSavings / netInvestment) * 100 : 0;

  return {
    netInvestment,
    annualNetSavings,
    paybackYears,
    roiPercent,
  };
}

export function downloadTextAsPdf(title: string, lines: string[]) {
  const escapedLines = [title, "", ...lines].map((line) => line.replace(/[()\\]/g, "\\$&"));
  const content = escapedLines.map((line, index) => `BT /F1 12 Tf 50 ${760 - index * 22} Td (${line}) Tj ET`).join("\n");
  const objects = [
    "1 0 obj << /Type /Catalog /Pages 2 0 R >> endobj",
    "2 0 obj << /Type /Pages /Kids [3 0 R] /Count 1 >> endobj",
    "3 0 obj << /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >> endobj",
    "4 0 obj << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> endobj",
    `5 0 obj << /Length ${content.length} >> stream\n${content}\nendstream endobj`,
  ];
  let pdf = "%PDF-1.4\n";
  const offsets = [0];
  objects.forEach((object) => {
    offsets.push(pdf.length);
    pdf += `${object}\n`;
  });
  const xrefStart = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  offsets.slice(1).forEach((offset) => {
    pdf += `${String(offset).padStart(10, "0")} 00000 n \n`;
  });
  pdf += `trailer << /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`;

  const blob = new Blob([pdf], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.pdf`;
  link.click();
  URL.revokeObjectURL(url);
}
