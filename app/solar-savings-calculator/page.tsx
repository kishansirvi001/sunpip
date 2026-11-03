import type { Metadata } from "next";
import { SolarCalculatorClient } from "@/components/calculators/SolarCalculatorClient";
import { CalculatorSeoSupport, calculatorSeoSupport } from "@/components/seo/CalculatorSeoSupport";
import { PageHero } from "@/components/ui/PageHero";
import { createMetadata } from "@/lib/metadata";
import { solarAssumptions } from "@/lib/constants";
import { formatCurrency } from "@/utils/solarCalculators";
import { calculateSubsidy } from "@/lib/subsidy";
import { systemCost } from "@/lib/solar-config";

export const metadata: Metadata = createMetadata(
  "Solar Savings Calculator for Rajasthan",
  "Estimate rooftop solar monthly savings, annual savings, recommended system size and payback period for homes and businesses in Rajasthan.",
  "/solar-savings-calculator",
  { keywords: ["solar savings calculator Rajasthan", "solar calculator Pali", "solar savings Sojat"] },
);

export default function SolarSavingsCalculatorPage() {
  return (
    <>
      <PageHero eyebrow="Solar Calculator" title="Solar Savings Calculator" description="Estimate how much a rooftop solar plant can reduce your electricity bill." ctaHref="/get-quote" ctaLabel="Validate with site survey" />
      <section className="section bg-slate-50 dark:bg-white/[0.03]">
        <div className="container"><SolarCalculatorClient kind="savings" />
          <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
            <h2 className="text-2xl font-bold">Indicative residential pricing</h2>
            <p className="mt-2 text-sm text-slate-600">Indicative only; final quote after site survey. Subsidy eligibility and release are subject to approval.</p>
            <div className="mt-5 overflow-x-auto"><table className="w-full min-w-[560px] border-collapse text-left text-sm"><thead><tr className="border-b"><th className="p-3">System</th><th className="p-3">Before subsidy</th><th className="p-3">Indicative subsidy</th><th className="p-3">Net cost</th></tr></thead><tbody>{[1,2,3,5].map((kw)=>{const gross=systemCost(kw); const subsidy=calculateSubsidy(kw,"Residential","On-Grid").totalSubsidy; return <tr key={kw} className="border-b last:border-0"><th className="p-3">{kw} kW</th><td className="p-3">{formatCurrency(gross)}</td><td className="p-3">{formatCurrency(subsidy)}</td><td className="p-3 font-bold">{formatCurrency(gross-subsidy)}</td></tr>;})}</tbody></table></div>
            <p className="mt-4 text-xs text-slate-500">{solarAssumptions.subsidyNote}</p>
          </section>
        </div>
      </section>
      <CalculatorSeoSupport support={calculatorSeoSupport.savings} />
    </>
  );
}
