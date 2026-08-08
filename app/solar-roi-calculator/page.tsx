import type { Metadata } from "next";
import { SolarCalculatorClient } from "@/components/calculators/SolarCalculatorClient";
import { PageHero } from "@/components/ui/PageHero";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata(
  "Solar ROI Calculator for Rajasthan",
  "Calculate rooftop solar net investment, annual savings, payback period and ROI for residential or commercial solar in Rajasthan.",
  "/solar-roi-calculator",
);

export default function SolarRoiCalculatorPage() {
  return (
    <>
      <PageHero eyebrow="Solar Calculator" title="Solar ROI Calculator" description="Understand the financial return from rooftop solar after subsidy and maintenance costs." ctaHref="/get-quote" ctaLabel="Validate ROI" />
      <section className="section bg-slate-50 dark:bg-white/[0.03]">
        <div className="container"><SolarCalculatorClient kind="roi" /></div>
      </section>
    </>
  );
}
