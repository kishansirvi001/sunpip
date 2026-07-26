import type { Metadata } from "next";
import { SolarCalculatorClient } from "@/components/calculators/SolarCalculatorClient";
import { PageHero } from "@/components/ui/PageHero";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata(
  "Solar Savings Calculator",
  "Estimate rooftop solar monthly savings, annual savings, recommended system size, and payback period.",
  "/solar-savings-calculator",
);

export default function SolarSavingsCalculatorPage() {
  return (
    <>
      <PageHero eyebrow="Solar Calculator" title="Solar Savings Calculator" description="Estimate how much a rooftop solar plant can reduce your electricity bill." ctaHref="/get-quote" ctaLabel="Validate with site survey" />
      <section className="section bg-slate-50 dark:bg-white/[0.03]">
        <div className="container"><SolarCalculatorClient kind="savings" /></div>
      </section>
    </>
  );
}
