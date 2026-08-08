import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata: Metadata = createMetadata(
  "Solar Subsidy Assistance in Pali & Rajasthan",
  "Government rooftop solar subsidy and PM Surya Ghar guidance for eligible residential customers in Pali, Sojat and Rajasthan.",
  "/government-subsidy",
  { keywords: ["PM Surya Ghar Pali", "solar subsidy Rajasthan", "rooftop solar subsidy Pali"] },
);

export default function GovernmentSubsidyPage() {
  const steps = ["Check eligibility and electricity connection details", "Prepare documents and rooftop feasibility", "Submit application and coordinate requirements", "Install approved system with commissioning support", "Complete inspection, net metering, and subsidy follow-up"];
  return (
    <>
      <PageHero eyebrow="Subsidy Assistance" title="Make rooftop solar more affordable with guided subsidy support." description="SUNPIP SOLUTIONS LLP helps eligible Rajasthan homeowners understand government subsidy requirements, documentation, and net metering steps." ctaHref="/get-quote" ctaLabel="Check eligibility" />
      <section className="section bg-white dark:bg-slate-950">
        <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader title="Documentation support without confusion." description="Subsidy rules and DISCOM processes can feel complex. We help you understand what is required, what depends on eligibility, and how to keep the project moving responsibly." />
          <ol className="grid gap-4">
            {steps.map((step, index) => (
              <li key={step} className="rounded-lg border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/[0.03]">
                <span className="text-sm font-bold text-sun-blue">Step {index + 1}</span>
                <p className="mt-2 font-semibold text-slate-950 dark:text-white">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="section bg-slate-50 dark:bg-white/[0.03]">
        <div className="container grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "PM Surya Ghar Pali guide", href: "/pm-surya-ghar-solar-subsidy" },
            { label: "Residential solar", href: "/residential-solar" },
            { label: "3kW solar system", href: "/3kw-solar-system" },
            { label: "Subsidy assistance service", href: "/services/government-subsidy-assistance" },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="rounded-lg border border-slate-200 bg-white p-4 text-sm font-bold text-slate-800 transition hover:border-sun-blue hover:text-sun-blue dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-100">
              {link.label}
            </Link>
          ))}
        </div>
      </section>
      <section className="section bg-slate-950 text-white">
        <div className="container flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-3xl font-bold">Want a subsidy-ready solar proposal?</h2>
          <ButtonLink href="/get-quote" variant="secondary">Request quote</ButtonLink>
        </div>
      </section>
    </>
  );
}
