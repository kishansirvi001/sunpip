import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { legalUpdated, siteConfig } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata("Privacy Policy", "Privacy policy for SUNPIP SOLUTIONS LLP website enquiries, quote requests, and lead forms.", "/privacy-policy");

export default function PrivacyPolicyPage() {
  const policySections = [
    {
      title: "Information We Collect",
      body: [
        "We may collect your name, phone number, email address, city, address, roof type, electricity bill details, electricity consumer number, preferred system size, message, and any documents or photos you share for consultation, quote preparation, subsidy assistance, net metering, installation, or service support.",
        "When you use this website, basic technical information such as browser type, device details, pages visited, and enquiry source may also be collected through normal website logs or analytics tools.",
      ],
    },
    {
      title: "How We Use Information",
      body: [
        "We use enquiry and project details to respond to requests, call or message you, review feasibility, prepare solar proposals, schedule site surveys, coordinate installation, support DISCOM or subsidy documentation, provide maintenance, and improve our services.",
        "We may also use your contact details to share project updates, service reminders, and relevant solar information. You can ask us to stop promotional communication at any time.",
      ],
    },
    {
      title: "Sharing Of Information",
      body: [
        "We do not sell customer data. We may share relevant information with installation partners, component suppliers, financing partners, DISCOM representatives, government portals, auditors, consultants, or service providers only when needed to deliver the requested service or meet legal and operational requirements.",
      ],
    },
    {
      title: "Data Security And Retention",
      body: [
        "We take reasonable steps to protect customer information from unauthorized access, misuse, loss, or disclosure. No online system is completely secure, so please avoid sending sensitive information unless it is required for your project.",
        "We retain information for as long as needed for enquiry handling, project records, warranty support, accounting, legal compliance, and customer service.",
      ],
    },
    {
      title: "Your Choices",
      body: [
        `You may contact us to request access, correction, or deletion of your personal information, subject to records we must keep for service, warranty, tax, legal, or compliance purposes. For privacy questions, contact ${siteConfig.email}.`,
      ],
    },
  ];

  return (
    <>
      <PageHero eyebrow="Privacy" title="Privacy Policy" description={`Last updated ${legalUpdated}. We collect only the information needed to respond to solar enquiries and service requests.`} />
      <section className="section bg-white dark:bg-slate-950">
        <div className="container max-w-3xl space-y-6 text-slate-600 dark:text-slate-300">
          <p>
            This Privacy Policy explains how {siteConfig.name} collects, uses, stores, and shares information when you visit our website,
            submit an enquiry, request a quote, book a consultation, or use our solar EPC, subsidy, net metering, UPS, inverter, battery,
            and maintenance services.
          </p>
          {policySections.map((section) => (
            <div key={section.title} className="space-y-3">
              <h2 className="text-2xl font-bold text-slate-950 dark:text-white">{section.title}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          ))}
          <p>
            By using this website or submitting your details, you agree to this Privacy Policy. This policy may be updated from time to
            time, and the latest version will be posted on this page.
          </p>
        </div>
      </section>
    </>
  );
}
