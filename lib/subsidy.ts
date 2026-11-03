import rules from "./subsidy-rules.json";
export { rules as subsidyRules };
export function calculateSubsidy(kw: number, customerType: string, systemType: string, stateSubsidy = 0) {
  let central = 0;
  if (customerType === "Residential" && systemType === "On-Grid") {
    let previous = 0;
    for (const slab of rules.central.slabs) {
      const width = Math.max(0, Math.min(kw, slab.upToKw) - previous);
      central += width * slab.rupeesPerKw;
      previous = slab.upToKw;
    }
    central = Math.min(central, rules.central.capRupees);
  }
  return { centralSubsidy: central, stateSubsidy: Math.max(0, stateSubsidy), totalSubsidy: central + Math.max(0, stateSubsidy), arrivesAfterCommissioning: true };
}
