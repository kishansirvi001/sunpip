"use client";

import { formatCurrency } from "@/utils/solarCalculators";
import { solarAssumptions } from "@/lib/constants";

export function SolarSavingsCharts({ monthlyBill, monthlySavings, netCost }: { monthlyBill: number; monthlySavings: number; netCost: number }) {
  const after = Math.max(0, monthlyBill - monthlySavings);
  const scale = Math.max(monthlyBill, 1);
  const years = solarAssumptions.analysisYears;
  const values = Array.from({ length: years + 1 }, (_, year) => Math.max(0, 1 - Math.pow(1 - solarAssumptions.annualGenerationDegradation, year)) * monthlySavings * 12 * year - netCost);
  const min = Math.min(...values, 0);
  const max = Math.max(...values, 1);
  const points = values.map((value, i) => `${30 + i * (260 / years)},${170 - ((value - min) / (max - min || 1)) * 145}`).join(" ");
  return <div className="mt-5 grid gap-4 md:grid-cols-2">
    <figure className="rounded-xl border border-slate-200 p-4 dark:border-white/10"><figcaption className="font-bold">Estimated monthly bill: before vs. after</figcaption><div className="mt-4 grid gap-4"><div><div className="mb-1 flex justify-between text-xs"><span>Before</span><span>{formatCurrency(monthlyBill)}</span></div><div className="h-4 rounded bg-slate-100"><div className="h-4 rounded bg-slate-700" style={{ width: `${Math.max(3, monthlyBill / scale * 100)}%` }} /></div></div><div><div className="mb-1 flex justify-between text-xs"><span>After (estimate)</span><span>{formatCurrency(after)}</span></div><div className="h-4 rounded bg-amber-50"><div className="h-4 rounded bg-amber-600" style={{ width: `${Math.max(0, after / scale * 100)}%` }} /></div></div></div></figure>
    <figure className="rounded-xl border border-slate-200 p-4 dark:border-white/10"><figcaption className="font-bold">Estimated {years}-year cumulative savings</figcaption><svg viewBox="0 0 320 190" role="img" aria-label={`Estimated cumulative savings after system cost over ${years} years`} className="mt-2 w-full"><line x1="30" y1="170" x2="290" y2="170" stroke="currentColor" opacity=".25"/><polyline points={points} fill="none" stroke="#b45309" strokeWidth="4" strokeLinejoin="round"/><text x="30" y="188" fontSize="10">Year 0</text><text x="260" y="188" fontSize="10">Year {years}</text></svg><p className="text-xs text-slate-500">Illustration assumes {(solarAssumptions.annualGenerationDegradation*100).toFixed(1)}% annual output reduction and current estimate values; actual generation, tariff changes and savings vary.</p></figure>
  </div>;
}
