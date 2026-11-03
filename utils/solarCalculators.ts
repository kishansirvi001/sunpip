import { solarAssumptions } from "@/lib/constants";
import { solarConfig, squareFeetPerKw, systemCost } from "@/lib/solar-config";
import { calculateSubsidy } from "@/lib/subsidy";

export type CustomerType = "Residential" | "Commercial" | "Industrial";
export type SolarSystemType = "On-Grid" | "Hybrid" | "Off-Grid";
export type RoofUnit = "Feet" | "Meter";
export const rupeeFormatter = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });
export const indianNumberFormatter = new Intl.NumberFormat("en-IN", { maximumFractionDigits: 2 });
export function safeNumber(value: number) { return Number.isFinite(value) ? value : 0; }
export function formatCurrency(value: number) { return rupeeFormatter.format(Math.round(safeNumber(value))); }
export function formatIndianNumber(value: number, suffix = "") { return `${indianNumberFormatter.format(safeNumber(value))}${suffix}`; }

export function monthlyUnitsFromInput(monthlyBill: number, monthlyConsumption: number, customer: CustomerType) {
  if (monthlyConsumption > 0) return monthlyConsumption;
  const bill = Math.max(monthlyBill - solarConfig.tariff.fixedMonthly, 0);
  const slabs = customer === "Residential" ? solarConfig.tariff.residentialSlabs : solarConfig.tariff.commercialSlabs;
  let units = 0, previous = 0, remaining = bill;
  for (const slab of slabs) {
    const width = slab.upTo - previous, used = Math.min(remaining, width * slab.rate);
    units += used / slab.rate; remaining -= used; previous = slab.upTo;
    if (remaining <= 0) break;
  }
  return Math.max(units, monthlyBill > 0 ? monthlyBill / (customer === "Residential" ? solarAssumptions.defaultResidentialTariff : solarAssumptions.defaultCommercialTariff) : 0);
}

export function calculateTariffBill(units: number, customer: CustomerType, averageTariff?: number) {
  const slabs=customer==="Residential"?solarConfig.tariff.residentialSlabs:solarConfig.tariff.commercialSlabs;
  let remaining=Math.max(0,units), previous=0, energy=0;
  for(const slab of slabs){const width=Math.min(remaining,slab.upTo-previous);energy+=width*slab.rate;remaining-=width;previous=slab.upTo;if(remaining<=0)break;}
  if(averageTariff&&averageTariff>0)energy=units*averageTariff;
  const fuel=Math.max(0,units)*solarConfig.tariff.fuelSurchargePerUnit;
  return Math.max(solarConfig.tariff.minimumMonthly,(energy+fuel)*(1+solarConfig.tariff.electricityDutyPercent/100)+solarConfig.tariff.fixedMonthly);
}

export function calculateSolarSavings(input: { monthlyBill:number; monthlyConsumption:number; customerType:CustomerType; systemType:SolarSystemType; averageTariff?:number; location?:string; daytimeUsagePercent?:number; sanctionedLoadKw?:number; roofAreaSqft?:number; stateSubsidy?:number }) {
  const monthlyBill = Math.max(safeNumber(input.monthlyBill),0);
  const units = monthlyUnitsFromInput(monthlyBill,input.monthlyConsumption,input.customerType);
  const location = input.location?.includes("Jodhpur") ? "Jodhpur" : input.location?.includes("Jaipur") ? "Jaipur" : "Pali";
  const dailyYield = solarConfig.generation.kwhPerKwDay[location];
  const multiplier = input.systemType === "Hybrid" ? 1.1 : input.systemType === "Off-Grid" ? 1.2 : 1;
  let recommendedKw = units / (dailyYield * 30) * multiplier;
  const caps = [input.sanctionedLoadKw, input.roofAreaSqft ? input.roofAreaSqft / squareFeetPerKw() : undefined].filter((n): n is number => !!n && n > 0);
  if (caps.length) recommendedKw = Math.min(recommendedKw,...caps);
  const annualGeneration = solarConfig.generation.monthlySeasonalFactors.reduce((sum,factor)=>sum+recommendedKw*dailyYield*30*factor,0);
  const monthlyGeneration = annualGeneration/12;
  const daytime = Math.min(100,Math.max(0,input.daytimeUsagePercent ?? solarConfig.tariff.daytimeSelfConsumption*100))/100;
  const before = monthlyBill || calculateTariffBill(units,input.customerType,input.averageTariff);
  const selfUse = Math.min(units,monthlyGeneration*daytime);
  const exportCredit = solarConfig.tariff.netMeterBanking ? Math.max(0,monthlyGeneration-selfUse)*solarConfig.tariff.exportCreditPerUnit : 0;
  const remainingUnits=Math.max(0,units-selfUse);
  const postSolarModeled=calculateTariffBill(remainingUnits,input.customerType,input.averageTariff);
  const after = Math.max(solarConfig.tariff.minimumMonthly,Math.min(before,postSolarModeled-exportCredit));
  const monthlySavings = Math.max(0,before-after);
  const grossCost = systemCost(recommendedKw,input.customerType);
  const subsidy = calculateSubsidy(recommendedKw,input.customerType,input.systemType,input.stateSubsidy).totalSubsidy;
  const netCost = Math.max(0,grossCost-subsidy), annualSavings=monthlySavings*12;
  return { recommendedKw, monthlySavings, annualSavings, paybackYears:annualSavings>0?netCost/annualSavings:0, monthlyGeneration, annualGeneration, systemCost:grossCost, grossCost, subsidy, netCost, estimatedCustomerContribution:netCost, subsidyNote:solarAssumptions.subsidyNote, billBefore:before, billAfter:after, residualMonthlyBill:after, co2SavedKg:annualGeneration*solarConfig.performance.co2KgPerKwh, costCapReason:caps.length?"Limited by entered sanctioned load and/or available roof area.":"No sanctioned-load or roof-area limit was entered." };
}

export function calculateSolarSystemSize(input:{monthlyBill:number;monthlyConsumption:number;customerType:CustomerType;panelWattage:number;sanctionedLoadKw?:number;roofAreaSqft?:number}) {
  const units=monthlyUnitsFromInput(input.monthlyBill,input.monthlyConsumption,input.customerType);
  const targetKw=units/(solarConfig.generation.kwhPerKwDay.default*30), panelWattage=Math.max(safeNumber(input.panelWattage),1);
  const caps=[input.sanctionedLoadKw,input.roofAreaSqft?input.roofAreaSqft/squareFeetPerKw(panelWattage):undefined].filter((n):n is number=>!!n&&n>0);
  const recommendedKw=caps.length?Math.min(targetKw,...caps):targetKw;
  const annualGeneration=recommendedKw*solarConfig.generation.kwhPerKwDay.default*30*solarConfig.generation.monthlySeasonalFactors.reduce((sum,factor)=>sum+factor,0);
  const dailyGeneration=annualGeneration/365;
  return {recommendedKw,targetKw,panels:Math.ceil(recommendedKw*1000/panelWattage),dailyGeneration,roofArea:recommendedKw*squareFeetPerKw(panelWattage),inverterKw:recommendedKw/1.2,dcAcRatio:1.2,annualGeneration,systemCost:systemCost(recommendedKw,input.customerType),loadOrRoofLimited:caps.length>0&&recommendedKw<targetKw};
}

export function calculateRooftopArea(input:{length:number;width:number;unit:RoofUnit;obstructionPercent:number;roofType?:string;panelWattage?:number;tiltDegrees?:number;rowSpacingFt?:number}) {
  const area=input.length*input.width, totalSqft=input.unit==="Meter"?area*10.7639:area;
  const unobstructed=totalSqft*Math.max(0,1-Math.min(100,Math.max(0,input.obstructionPercent))/100);
  const type=input.roofType==="Metal Sheet"?"Metal Sheet":input.roofType?.includes("Tile")?"Tile":"RCC";
  const tilt=Math.max(0,Math.min(45,input.tiltDegrees??10))*Math.PI/180;
  const spacingPenalty=Math.min(0.25,Math.max(0,input.rowSpacingFt??2)*Math.sin(tilt)/Math.max(1,input.width));
  const usableSqft=unobstructed*solarConfig.roof.usableFraction[type]*(1-spacingPenalty), wattage=input.panelWattage??solarConfig.panels.defaultWattage;
  const layoutArea=squareFeetPerKw(wattage), maxCapacityKw=usableSqft/layoutArea;
  return {totalArea:area,totalSqft,usableSqft,layoutUsableSqft:usableSqft,maxCapacityKw,panelCount:Math.floor(maxCapacityKw*1000/wattage),layoutAreaSqftPerKw:layoutArea};
}

export function calculateSolarEmi(input:{totalCost:number;downPayment:number;interestRate:number;tenureYears:number;monthlySaving?:number;prepayment?:number}) {
  const loanAmount=Math.max(input.totalCost-input.downPayment,0), months=Math.max(0,input.tenureYears*12), rate=input.interestRate/1200;
  const monthlyEmi=rate>0&&months>0?loanAmount*rate*Math.pow(1+rate,months)/(Math.pow(1+rate,months)-1):months>0?loanAmount/months:0;
  let balance=loanAmount, totalInterest=0; const amortization=Array.from({length:months},(_,index)=>{const interest=balance*rate, principal=Math.min(balance,monthlyEmi-interest), extra=Math.min(Math.max(input.prepayment??0,0),Math.max(0,balance-principal)); balance=Math.max(0,balance-principal-extra); totalInterest+=interest; return {month:index+1,emi:monthlyEmi,principal:principal+extra,interest,balance};});
  return {loanAmount,monthlyEmi,totalInterest,totalAmount:loanAmount+totalInterest,amortization,monthlyNetCashFlow:(input.monthlySaving??0)-monthlyEmi,breakEvenMonth:input.monthlySaving&&input.monthlySaving>=monthlyEmi?0:null};
}

export function calculateSolarRoi(input:{totalCost:number;subsidy:number;annualSavings:number;annualMaintenance:number;systemKw?:number;gridTariff?:number}) {
  const netInvestment=Math.max(input.totalCost-input.subsidy,0), cashFlows=[-netInvestment];
  for(let year=1;year<=solarConfig.performance.analysisYears;year++){
    const escalation=Math.pow(1+solarConfig.performance.tariffEscalationPercent/100,year-1), degradation=Math.pow(1-solarConfig.performance.degradationPercent/100,year-1);
    const replacement=year===solarConfig.performance.inverterReplacementYear?solarConfig.performance.inverterReplacementCostPerKw*(input.systemKw??1):0;
    cashFlows.push(input.annualSavings*degradation*escalation-input.annualMaintenance*escalation-replacement);
  }
  let cumulative=-netInvestment, discounted=-netInvestment, discountedPaybackYears=0; const cumulativeCashFlow=[cumulative];
  for(let year=1;year<cashFlows.length;year++){cumulative+=cashFlows[year]; discounted+=cashFlows[year]/Math.pow(1.08,year); if(!discountedPaybackYears&&discounted>=0)discountedPaybackYears=year; cumulativeCashFlow.push(cumulative);}
  const irr=cashFlows.some((flow,index)=>index>0&&flow>0)?(()=>{let lo=-0.9,hi=2;for(let i=0;i<100;i++){const m=(lo+hi)/2,npv=cashFlows.reduce((s,c,y)=>s+c/Math.pow(1+m,y),0);if(npv>0)lo=m;else hi=m;}return(lo+hi)/2*100;})():0;
  const annualNetSavings=Math.max(input.annualSavings-input.annualMaintenance,0), paybackYears=annualNetSavings?netInvestment/annualNetSavings:0;
  const systemKw=input.systemKw??3;
  const annualUnits=systemKw*solarConfig.generation.kwhPerKwDay.default*30*solarConfig.generation.monthlySeasonalFactors.reduce((sum,factor)=>sum+factor,0);
  const lifetimeUnits=Array.from({length:solarConfig.performance.analysisYears},(_,i)=>annualUnits*Math.pow(1-solarConfig.performance.degradationPercent/100,i)).reduce((sum,value)=>sum+value,0);
  const lifecycleCost=netInvestment+input.annualMaintenance*solarConfig.performance.analysisYears+solarConfig.performance.inverterReplacementCostPerKw*systemKw;
  const lcoe=lifetimeUnits>0?lifecycleCost/lifetimeUnits:0;
  return {netInvestment,annualNetSavings,paybackYears,roiPercent:netInvestment?annualNetSavings/netInvestment*100:0,discountedPaybackYears,netProfit25Year:cumulative,irrPercent:irr,cashFlows,cumulativeCashFlow,lcoe,gridTariff:input.gridTariff??solarConfig.tariff.defaultResidential};
}

export function downloadTextAsPdf(title:string,lines:string[]) {
  const escaped=[title,"",...lines].map(line=>line.replace(/[()\\]/g,"\\$&"));
  const content=escaped.map((line,index)=>`BT /F1 12 Tf 50 ${760-index*22} Td (${line}) Tj ET`).join("\n");
  const objects=["1 0 obj << /Type /Catalog /Pages 2 0 R >> endobj","2 0 obj << /Type /Pages /Kids [3 0 R] /Count 1 >> endobj","3 0 obj << /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >> endobj","4 0 obj << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> endobj",`5 0 obj << /Length ${content.length} >> stream\n${content}\nendstream endobj`];
  let pdf="%PDF-1.4\n";const offsets=[0];objects.forEach(object=>{offsets.push(pdf.length);pdf+=`${object}\n`;});const xref=pdf.length;pdf+=`xref\n0 ${objects.length+1}\n0000000000 65535 f \n`;offsets.slice(1).forEach(offset=>pdf+=`${String(offset).padStart(10,"0")} 00000 n \n`);pdf+=`trailer << /Size ${objects.length+1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`;
  const url=URL.createObjectURL(new Blob([pdf],{type:"application/pdf"})),link=document.createElement("a");link.href=url;link.download=`${title.toLowerCase().replace(/[^a-z0-9]+/g,"-")}.pdf`;link.click();URL.revokeObjectURL(url);
}
