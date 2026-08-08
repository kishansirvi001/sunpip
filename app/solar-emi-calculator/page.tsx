import type { Metadata } from "next";
import { SolarCalculatorClient } from "@/components/calculators/SolarCalculatorClient";
import { PageHero } from "@/components/ui/PageHero";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata(
  "Solar EMI Calculator for Rooftop Solar",
  "Estimate monthly EMI, loan amount, total interest and repayment for a rooftop solar project in Rajasthan.",
  "/solar-emi-calculator",
);

export default function SolarEmiCalculatorPage() {
  return (
    <>
      <PageHero eyebrow="Solar Calculator" title="Solar EMI Calculator" description="Plan a financed rooftop solar project with EMI, interest, and repayment estimates." ctaHref="/get-quote" ctaLabel="Request finance-ready quote" />
      <section className="section bg-slate-50 dark:bg-white/[0.03]">
        <div className="container"><SolarCalculatorClient kind="emi" /></div>
      </section>
    </>
  );
}
