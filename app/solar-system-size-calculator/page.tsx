import type { Metadata } from "next";
import { SolarCalculatorClient } from "@/components/calculators/SolarCalculatorClient";
import { PageHero } from "@/components/ui/PageHero";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata(
  "Solar System Size Calculator for Sojat & Pali",
  "Calculate recommended solar capacity, panel count, daily generation and rooftop area for solar installation planning in Sojat, Pali and Rajasthan.",
  "/solar-system-size-calculator",
);

export default function SolarSystemSizeCalculatorPage() {
  return (
    <>
      <PageHero eyebrow="Solar Calculator" title="Solar System Size Calculator" description="Find the right rooftop solar capacity from your electricity bill or monthly consumption." ctaHref="/get-quote" ctaLabel="Request quote" />
      <section className="section bg-slate-50 dark:bg-white/[0.03]">
        <div className="container"><SolarCalculatorClient kind="size" /></div>
      </section>
    </>
  );
}
