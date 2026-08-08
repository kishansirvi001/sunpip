import type { Metadata } from "next";
import { SolarCalculatorClient } from "@/components/calculators/SolarCalculatorClient";
import { PageHero } from "@/components/ui/PageHero";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata(
  "Rooftop Area Calculator for Solar Installation",
  "Calculate usable roof area and maximum rooftop solar capacity before planning solar panel installation in Sojat, Pali or Rajasthan.",
  "/rooftop-area-calculator",
);

export default function RooftopAreaCalculatorPage() {
  return (
    <>
      <PageHero eyebrow="Solar Calculator" title="Rooftop Area Calculator" description="Estimate usable roof space and maximum solar capacity before a site survey." ctaHref="/contact" ctaLabel="Book site visit" />
      <section className="section bg-slate-50 dark:bg-white/[0.03]">
        <div className="container"><SolarCalculatorClient kind="roof" /></div>
      </section>
    </>
  );
}
