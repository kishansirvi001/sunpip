/** Planning values only. Items marked TODO(verify) require business / DISCOM confirmation. */
export const solarConfig = {
  generation: { kwhPerKwDay: { default: 4.2, Pali: 4.2, Jodhpur: 4.4, Jaipur: 4.3 }, monthlySeasonalFactors: [0.83, 0.91, 1.08, 1.12, 1.15, 1.05, 0.91, 0.89, 0.93, 1.02, 0.99, 0.92] },
  panels: { wattages: [550, 585, 600], defaultWattage: 550, moduleAreaSqm: 2.58, layoutFactor: 1.35 },
  prices: { bands: [{ maxKw: 2, rupeesPerKw: 58000 }, { maxKw: 3, rupeesPerKw: 52000 }, { maxKw: 5, rupeesPerKw: 50000 }, { maxKw: Infinity, rupeesPerKw: 48000 }], commercialRupeesPerKw: 45000, verification: "TODO(verify): confirm current installed prices by system size and customer type." },
  performance: { omPercent: 1, degradationPercent: 0.5, tariffEscalationPercent: 4, inverterReplacementYear: 12, inverterReplacementCostPerKw: 8000, loanRatePercent: 9, co2KgPerKwh: 0.82, analysisYears: 25 },
  tariff: { defaultResidential: 8, defaultCommercial: 10, fixedMonthly: 150, fuelSurchargePerUnit: 0.4, electricityDutyPercent: 5, minimumMonthly: 100, exportCreditPerUnit: 4, daytimeSelfConsumption: 0.65, netMeterBanking: true, residentialSlabs: [{upTo:50, rate:3}, {upTo:150, rate:5}, {upTo:300, rate:6.5}, {upTo:Infinity, rate:8}], commercialSlabs: [{upTo:100, rate:7}, {upTo:500, rate:9}, {upTo:Infinity, rate:11}], verification: "TODO(verify): confirm Rajasthan DISCOM tariff, fixed charge, fuel surcharge, duty, export credit and banking rules." },
  roof: { usableFraction: { RCC: 0.75, "Metal Sheet": 0.8, Tile: 0.65 }, obstructionDefaultPercent: 15 },
  subsidyNote: "Subsidy is indicative and subject to eligibility, commissioning, inspection and approval. Verify at pmsuryaghar.gov.in.",
} as const;

export const squareFeetPerKw = (panelWattage: number = solarConfig.panels.defaultWattage) => {
  const panelsPerKw = 1000 / panelWattage;
  return panelsPerKw * solarConfig.panels.moduleAreaSqm * solarConfig.panels.layoutFactor * 10.7639;
};

export function systemCost(kw: number, customerType: "Residential" | "Commercial" | "Industrial" = "Residential") {
  if (customerType !== "Residential") return kw * solarConfig.prices.commercialRupeesPerKw;
  const band = solarConfig.prices.bands.find((item) => kw <= item.maxKw) ?? solarConfig.prices.bands.at(-1)!;
  return kw * band.rupeesPerKw;
}
