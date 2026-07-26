import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { legalUpdated, siteConfig } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata("Terms", "Website terms for SUNPIP SOLUTIONS LLP solar EPC information and enquiry forms.", "/terms");

export default function TermsPage() {
  const termsSections = [
    {
      title: "Website Use",
      body: [
        "The information on this website is provided for general planning, awareness, and enquiry purposes. You agree not to misuse the website, submit false information, attempt unauthorized access, or use the content in a way that may harm our business, customers, or service providers.",
      ],
    },
    {
      title: "Solar Estimates And Proposals",
      body: [
        "Solar generation, savings, subsidy, EMI, ROI, system size, and rooftop area estimates are indicative only. Final recommendations and commercial proposals depend on site survey, roof condition, shadow analysis, electrical load, component availability, DISCOM requirements, tariff, eligibility, government policy, and approvals.",
        "A website enquiry, calculator result, phone discussion, WhatsApp message, or email does not create a binding contract. A project becomes binding only after a written proposal, scope, price, payment terms, and project terms are accepted by both parties.",
      ],
    },
    {
      title: "Customer Responsibilities",
      body: [
        "Customers must provide accurate electricity bill details, site information, identity or ownership documents, access permissions, structural information, and approvals required for survey, installation, subsidy, net metering, commissioning, and maintenance.",
        "Any delay caused by incorrect documents, unavailable site access, pending payments, DISCOM processing, government portal issues, weather, civil work, structural limitations, or third-party approvals may affect project timelines.",
      ],
    },
    {
      title: "Payments, Pricing, And Availability",
      body: [
        "Prices, offers, component specifications, and timelines may change based on market conditions, site requirements, statutory charges, taxes, logistics, and component availability. Unless stated otherwise in writing, prices shown or discussed are estimates and may be revised in the final proposal.",
        "Payment milestones, cancellation terms, refund eligibility, and handover conditions will follow the accepted written proposal or invoice terms.",
      ],
    },
    {
      title: "Warranties And Service",
      body: [
        "Product warranties are provided by the respective manufacturers and are subject to their warranty terms. Workmanship, service, and maintenance commitments will be as stated in the accepted proposal, invoice, warranty document, or annual maintenance contract.",
        "Warranty or service support may not cover damage caused by misuse, unauthorized repair, poor maintenance, grid issues, force majeure events, structural changes, water seepage, pests, fire, theft, accident, negligence, or other conditions outside our control.",
      ],
    },
    {
      title: "Limitation Of Liability",
      body: [
        `${siteConfig.name} is not liable for indirect, incidental, consequential, or special losses, including loss of savings, loss of generation, business interruption, financing loss, or delay caused by DISCOM, government agencies, suppliers, weather, grid outages, force majeure, or customer-side issues.`,
        "Nothing in these terms limits rights or remedies that cannot be excluded under applicable law.",
      ],
    },
    {
      title: "Intellectual Property And Contact",
      body: [
        `Website text, branding, layout, images, calculators, and other materials belong to ${siteConfig.name} or their respective owners and may not be copied or reused without permission.`,
        `For questions about these Terms and Conditions, contact ${siteConfig.email}.`,
      ],
    },
  ];

  return (
    <>
      <PageHero eyebrow="Terms" title="Terms And Conditions" description={`Last updated ${legalUpdated}. Website content is for planning guidance and does not replace a professional site survey.`} />
      <section className="section bg-white dark:bg-slate-950">
        <div className="container max-w-3xl space-y-6 text-slate-600 dark:text-slate-300">
          <p>
            These Terms and Conditions govern your use of this website and your enquiries with {siteConfig.name}, a Rajasthan-focused
            solar EPC company providing rooftop solar consultation, design, subsidy assistance, installation, commissioning, UPS,
            inverter, battery backup, and maintenance services.
          </p>
          {termsSections.map((section) => (
            <div key={section.title} className="space-y-3">
              <h2 className="text-2xl font-bold text-slate-950 dark:text-white">{section.title}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          ))}
          <p>
            By using this website or submitting an enquiry, you agree to these Terms and Conditions. We may update these terms from time
            to time, and the latest version will be posted on this page.
          </p>
        </div>
      </section>
    </>
  );
}
