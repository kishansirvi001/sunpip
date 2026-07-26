import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Timeline } from "@/components/ui/Timeline";
import { createMetadata } from "@/lib/metadata";
import { siteConfig, targetCustomers } from "@/lib/constants";

export const metadata: Metadata = createMetadata("About Us", "Learn about SUNPIP SOLUTIONS LLP, a Rajasthan Solar EPC company founded in 2025 for residential rooftop solar and clean energy services.", "/about");

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" title="Rajasthan rooftop solar made simple, professional, and affordable." description="SUNPIP SOLUTIONS LLP is a professional Solar EPC company providing complete rooftop solar solutions across Rajasthan." ctaHref="/get-quote" ctaLabel="Work with us" />
      <section className="section bg-white dark:bg-slate-950">
        <div className="container grid gap-10 lg:grid-cols-2">
          <SectionHeader title="We manage the complete solar journey." description="Our team helps with consultation, system design, government subsidy assistance, installation, commissioning, and after-sales maintenance." />
          <div className="grid gap-4 sm:grid-cols-2">
            {["Founded in 2025", siteConfig.businessType, siteConfig.primaryBusiness, siteConfig.operatingArea].map((item) => (
              <div key={item} className="rounded-lg border border-slate-200 p-5 font-semibold text-slate-950 dark:border-white/10 dark:text-white">{item}</div>
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-slate-50 dark:bg-white/[0.03]">
        <div className="container">
          <SectionHeader eyebrow="Customers" title="Who we serve." description="We help homeowners, commercial businesses, schools, hospitals, and farmers reduce electricity costs by switching to clean solar energy." />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {targetCustomers.map((customer) => {
              const Icon = customer.icon;
              return (
                <div key={customer.title} className="rounded-lg border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/[0.03]">
                  <Icon aria-hidden="true" className="h-7 w-7 text-sun-blue" />
                  <h2 className="mt-4 font-bold text-slate-950 dark:text-white">{customer.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{customer.useCase}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="section bg-slate-50 dark:bg-white/[0.03]">
        <div className="container">
          <SectionHeader eyebrow="Mission" title="Reduce pollution with clean and affordable solar energy." />
          <div className="mt-10"><Timeline /></div>
        </div>
      </section>
    </>
  );
}
