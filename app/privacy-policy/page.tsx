import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { legalUpdated, siteConfig } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata("Privacy Policy", "Privacy policy for SUNPIP SOLUTIONS LLP website enquiries, quote requests, and lead forms.", "/privacy-policy");

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero eyebrow="Privacy" title="Privacy Policy" description={`Last updated ${legalUpdated}. We collect only the information needed to respond to solar enquiries and service requests.`} />
      <section className="section bg-white dark:bg-slate-950">
        <div className="container max-w-3xl space-y-6 text-slate-600 dark:text-slate-300">
          <p>{siteConfig.name} uses enquiry details such as name, phone, email, city, electricity bill, roof type, and message to respond to quote requests, site visits, and service support.</p>
          <p>We do not sell customer data. Information may be used for consultation, documentation, project coordination, and customer support.</p>
          <p>For privacy questions, contact {siteConfig.email}.</p>
        </div>
      </section>
    </>
  );
}
