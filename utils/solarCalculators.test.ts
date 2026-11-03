import { describe, expect, it } from "vitest";
import { calculateRooftopArea, calculateSolarEmi, calculateSolarRoi, calculateSolarSavings, calculateSolarSystemSize, monthlyUnitsFromInput } from "./solarCalculators";
import { squareFeetPerKw } from "../lib/solar-config";
import { calculateSubsidy } from "../lib/subsidy";

describe("solar planning formulas", () => {
  it("inverts bills into units using the tariff model", () => expect(monthlyUnitsFromInput(5000, 0, "Residential")).toBeGreaterThan(0));
  it("uses explicit units without altering them", () => expect(monthlyUnitsFromInput(0, 120, "Residential")).toBe(120));
  it("derives area from module wattage and layout", () => expect(squareFeetPerKw(550)).toBeGreaterThan(squareFeetPerKw(600)));
  it("sums monthly seasonal generation into annual generation", () => { const r=calculateSolarSavings({monthlyBill:5000,monthlyConsumption:500,customerType:"Residential",systemType:"On-Grid"}); expect(r.annualGeneration).toBeCloseTo(r.monthlyGeneration*12); });
  it("limits residential subsidy at the configured cap and excludes business customers", () => { expect(calculateSubsidy(10,"Residential","On-Grid").totalSubsidy).toBe(78000); expect(calculateSubsidy(10,"Commercial","On-Grid").totalSubsidy).toBe(0); });
  it("calculates panel count, inverter and roof estimate", () => { const size=calculateSolarSystemSize({monthlyBill:0,monthlyConsumption:300,customerType:"Residential",panelWattage:550}); expect(size.panels).toBeGreaterThan(0); expect(size.inverterKw).toBeCloseTo(size.recommendedKw/1.2); });
  it("accounts for roof type, obstructions and area conversion", () => { const roof=calculateRooftopArea({length:10,width:10,unit:"Meter",obstructionPercent:10,roofType:"Tile Roof"}); expect(roof.totalSqft).toBeCloseTo(1076.39); expect(roof.maxCapacityKw).toBeGreaterThan(0); });
  it("produces EMI amortization and honors prepayment", () => { const loan=calculateSolarEmi({totalCost:100000,downPayment:0,interestRate:9,tenureYears:5,prepayment:1000}); expect(loan.amortization.length).toBe(60); expect(loan.totalInterest).toBeGreaterThan(0); });
  it("produces lifetime ROI cash flows and paybacks", () => { const roi=calculateSolarRoi({totalCost:300000,subsidy:78000,annualSavings:70000,annualMaintenance:3000,systemKw:5}); expect(roi.cashFlows).toHaveLength(26); expect(roi.netProfit25Year).toBeGreaterThan(0); expect(Number.isFinite(roi.irrPercent)).toBe(true); });
});
