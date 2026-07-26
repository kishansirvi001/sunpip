import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { PageHero } from "@/components/ui/PageHero";
import { siteConfig } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata("Contact", "Contact SUNPIP SOLUTIONS LLP for rooftop solar EPC, subsidy assistance, net metering, UPS, inverter, and battery backup services in Rajasthan.", "/contact");

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Talk to a Rajasthan solar EPC specialist." description="Share your city, electricity bill, roof type, and project requirement. We will help you understand feasibility, sizing, subsidy, approvals, and next steps." />
      <section className="section bg-white dark:bg-slate-950">
        <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-lg border border-slate-200 p-6 dark:border-white/10">
            <h2 className="text-2xl font-bold text-slate-950 dark:text-white">Office</h2>
            <div className="mt-5 space-y-3 text-slate-600 dark:text-slate-300">
              <p>{siteConfig.address}</p>
              <p>Call: {siteConfig.phone}</p>
              <p>WhatsApp: {siteConfig.whatsappDisplay}</p>
              <p>{siteConfig.email}</p>
              <p>Instagram: {siteConfig.instagram}</p>
            </div>
            <div className="mt-6 overflow-hidden rounded-lg border border-slate-200 dark:border-white/10">
              <iframe
                title="SUNPIP SOLUTIONS LLP service area map"
                src="https://www.google.com/maps?q=Rajasthan%2C%20India&output=embed"
                loading="lazy"
                className="h-64 w-full"
              />
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
