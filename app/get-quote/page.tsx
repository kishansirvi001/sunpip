import type { Metadata } from "next";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { PageHero } from "@/components/ui/PageHero";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata("Quote Request", "Request a solar EPC quote from SunPip Solutions for residential, commercial, industrial, government, O&M, and net metering work.", "/get-quote");

export default function GetQuotePage() {
  return (
    <>
      <PageHero eyebrow="Quote Request" title="Get a solar proposal grounded in your real energy use." description="Tell us about your site, monthly bill, roof type, and project need. The form is validated and ready for backend integration." />
      <section className="section bg-slate-50 dark:bg-white/[0.03]">
        <div className="container max-w-4xl"><QuoteForm /></div>
      </section>
    </>
  );
}
