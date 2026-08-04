import type { Metadata } from "next";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { PageHero } from "@/components/ui/PageHero";
import { createMetadata } from "@/lib/metadata";
import { pageHeroImages } from "@/lib/visuals";

export const metadata: Metadata = createMetadata("Quote Request", "Request a solar EPC quote from SunPip Solutions for residential, commercial, industrial, government, O&M, and net metering work.", "/get-quote");

export default function GetQuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Quote Request"
        title="Get a solar proposal grounded in your real energy use."
        description="Tell us about your site, monthly bill, roof type, and project need. The form is validated and ready for backend integration."
        imageSrc={pageHeroImages.quote}
        imageAlt="Solar consultation and proposal planning"
      />
      <section className="bg-slate-50 py-8 dark:bg-white/[0.03] sm:py-10 lg:py-12">
        <div className="container max-w-4xl"><QuoteForm /></div>
      </section>
    </>
  );
}
