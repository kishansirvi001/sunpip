import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { legalUpdated, siteConfig } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata("Terms", "Website terms for SUNPIP SOLUTIONS LLP solar EPC information and enquiry forms.", "/terms");

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Terms" title="Terms of Use" description={`Last updated ${legalUpdated}. Website content is for planning guidance and does not replace a professional site survey.`} />
      <section className="section bg-white dark:bg-slate-950">
        <div className="container max-w-3xl space-y-6 text-slate-600 dark:text-slate-300">
          <p>Solar estimates, savings, and subsidy references are indicative. Final proposals depend on site survey, component selection, DISCOM requirements, eligibility, tariff, and approvals.</p>
          <p>Using this website or submitting a form does not create a binding contract until a written proposal is accepted by both parties.</p>
          <p>For terms questions, contact {siteConfig.email}.</p>
        </div>
      </section>
    </>
  );
}
