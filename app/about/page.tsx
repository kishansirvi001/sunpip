import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Timeline } from "@/components/ui/Timeline";
import { createMetadata } from "@/lib/metadata";
import { siteConfig, targetCustomers } from "@/lib/constants";
import { breadcrumbSchema, webPageSchema } from "@/lib/structuredData";

export const metadata: Metadata = createMetadata(
  "About SunPip Solutions LLP",
  "Learn about SUNPIP SOLUTIONS LLP, a solar EPC and rooftop solar installation company serving Sojat, Pali and nearby Rajasthan areas.",
  "/about",
  { keywords: ["SunPip Solutions LLP", "solar company in Sojat", "solar EPC Pali"] },
);

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema({ name: "About SunPip Solutions LLP", description: "About SunPip Solutions LLP solar EPC and rooftop solar installation company serving Sojat, Pali and Rajasthan.", path: "/about" })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])) }} />
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
      <section className="section bg-amber-50 dark:bg-slate-950"><div className="container"><SectionHeader eyebrow="Our story" title="A local solar company serving Sojat and Pali." description="[ADD APPROVED COMPANY STORY: why SUNPIP SOLUTIONS LLP was founded, the people it aims to serve, and the principles behind its work.]"/></div></section>
      <section className="section bg-white dark:bg-slate-950">
        <div className="container">
          <SectionHeader eyebrow="Founder and team" title="Meet the people behind your project." description="Names and profiles are intentionally left as placeholders until approved details and photos are provided." />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{["Founder", "Project team member", "Installation team"].map((role)=><article key={role} className="rounded-xl border border-dashed border-slate-300 p-5 dark:border-white/20"><div className="flex aspect-[4/3] items-center justify-center rounded-lg bg-slate-100 text-center text-sm text-slate-700 dark:bg-white/[0.06] dark:text-slate-200">[ADD APPROVED TEAM PHOTO]</div><h2 className="mt-4 font-bold text-slate-950 dark:text-white">[ADD NAME] · {role}</h2><p className="mt-2 text-sm text-slate-700 dark:text-slate-300">[ADD APPROVED SHORT BIO]</p></article>)}</div>
        </div>
      </section>
      <section className="section bg-slate-50 dark:bg-white/[0.03]"><div className="container grid gap-8 md:grid-cols-2"><SectionHeader eyebrow="Credentials" title="Registration and installation details" description="Vendor status, DISCOM credentials, product brands and warranty terms will appear here after verification."/><dl className="grid gap-3">{[["LLPIN","[TO BE PROVIDED]"],["GSTIN","[TO BE PROVIDED]"],["PM Surya Ghar registered vendor","[VERIFY STATUS]"],["DISCOM empanelment","[VERIFY STATUS]"],["Panel / inverter brands","[CONFIRM BRANDS]"],["Warranty terms","[ADD WRITTEN TERMS]"]].map(([label,value])=><div key={label} className="flex flex-wrap justify-between gap-3 rounded-lg bg-white p-4 text-slate-950 dark:bg-white/[0.04] dark:text-white"><dt className="font-semibold">{label}</dt><dd className="text-slate-700 dark:text-slate-300">{value}</dd></div>)}</dl></div></section>
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
