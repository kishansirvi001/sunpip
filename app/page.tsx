import Image from "next/image";
import type { Metadata } from "next";
import { ArrowUpRight, BadgeCheck, Leaf, Zap } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { StatsCounter } from "@/components/ui/StatsCounter";
import { Timeline } from "@/components/ui/Timeline";
import { ButtonLink } from "@/components/ui/ButtonLink";
import {
  brandPartners,
  services,
  siteConfig,
  stats,
  targetCustomers,
  tickerItems,
  whyChooseUs,
} from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";
import { seoLandingPages, solarSystemPages } from "@/lib/seoContent";
import { faqSchema, servicesSchema } from "@/lib/structuredData";
import Link from "next/link";

export const metadata: Metadata = createMetadata(
  "Solar Company in Sojat & Pali",
  "SunPip Solutions LLP is a solar company in Sojat and Pali for rooftop solar, solar panel installation, Solar EPC, PM Surya Ghar guidance and solar installation across Rajasthan.",
  "",
  { keywords: ["solar company in Sojat", "solar company in Pali", "solar panel installation in Sojat", "rooftop solar Rajasthan", "solar installation Rajasthan"] },
);

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema()) }} />
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <Image priority src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1800&q=88" alt="Rooftop solar panels installed under clear sunlight" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/78 to-slate-950/25" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950/80 to-transparent" />
        <div className="container relative grid min-h-[calc(100vh-6rem)] items-center py-16">
          <div className="max-w-4xl">
            <p className="mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur">
              Residential rooftop solar EPC across Rajasthan
            </p>
            <h1 className="max-w-4xl text-5xl font-black tracking-tight sm:text-7xl">
              Clean, affordable solar energy for Rajasthan homes and businesses.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              SUNPIP SOLUTIONS LLP provides consultation, system design, government subsidy assistance, installation, commissioning, and after-sales maintenance.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/get-quote">Request a quote</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">Book site visit</ButtonLink>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {[
                ["Founded", siteConfig.founded],
                ["Coverage", siteConfig.operatingArea],
                ["Support", "Subsidy and net metering"],
              ].map(([title, text]) => (
                <div key={title} className="rounded-2xl border border-white/15 bg-white/10 p-4 shadow-sm backdrop-blur">
                  <p className="font-bold text-white">{title}</p>
                  <p className="mt-1 text-sm text-slate-200">{text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-10 right-6 hidden w-72 rounded-2xl border border-white/15 bg-white/10 p-5 shadow-soft backdrop-blur lg:block">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sun-blue text-white">
                <Zap aria-hidden="true" className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-slate-200">Solar proposal basis</p>
                <p className="text-2xl font-black text-white">Bill + site survey</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative border-y border-white/10 bg-white/10 py-4 backdrop-blur">
          <div className="container flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-semibold text-slate-100">
            {tickerItems.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
      </section>

      <section className="section bg-white dark:bg-slate-950">
        <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <SectionHeader eyebrow="Company" title="A disciplined solar EPC partner for measurable savings." description="We help homeowners, commercial businesses, schools, hospitals, and farmers reduce electricity costs by switching to clean solar energy." />
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              [BadgeCheck, "Turnkey execution", "Consultation, design, subsidy support, installation, and commissioning."],
              [Leaf, "Mission-led solar", "Reducing pollution with clean and affordable solar energy."],
              [ArrowUpRight, "Rajasthan focus", "Local solar planning for homes, businesses, institutions, and farms."],
            ].map(([Icon, title, text]) => (
              <div key={String(title)} className="rounded-lg border border-slate-200 p-5 dark:border-white/10">
                {typeof Icon !== "string" ? <Icon aria-hidden="true" className="h-6 w-6 text-sun-blue" /> : null}
                <h3 className="mt-4 font-bold text-slate-950 dark:text-white">{title as string}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{text as string}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-50 dark:bg-white/[0.03]">
        <div className="container">
          <SectionHeader align="center" eyebrow="Services" title="Complete solar, inverter, UPS, and backup services." description="A full EPC and asset-care portfolio for homes, businesses, schools, hospitals, and farmers." />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 9).map((service) => <ServiceCard key={service.slug} service={service} />)}
          </div>
        </div>
      </section>

      <section className="section bg-white dark:bg-slate-950">
        <div className="container">
          <SectionHeader
            align="center"
            eyebrow="Solar Solutions"
            title="Solar pages for Sojat, Pali and Rajasthan searches."
            description="Explore focused guides for residential solar, commercial solar, rooftop solar, Solar EPC and common system sizes."
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {[...seoLandingPages, ...solarSystemPages].map((page) => (
              <Link key={page.slug} href={`/${page.slug}`} className="rounded-lg border border-slate-200 bg-white p-4 text-sm font-bold text-slate-800 shadow-sm transition hover:border-sun-blue hover:text-sun-blue dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-100">
                {"capacity" in page ? `${page.capacity} Solar System` : page.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white dark:bg-slate-950">
        <div className="container">
          <SectionHeader align="center" eyebrow="Customers" title="Solar use cases for Rajasthan customers." description="Every customer has a different load profile, roof condition, and savings goal. We plan around that reality." />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {targetCustomers.map((customer) => {
              const Icon = customer.icon;
              return (
                <article key={customer.title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
                  <Icon aria-hidden="true" className="h-7 w-7 text-sun-blue" />
                  <h3 className="mt-4 font-bold text-slate-950 dark:text-white">{customer.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{customer.useCase}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section bg-white dark:bg-slate-950">
        <div className="container">
          <SectionHeader eyebrow="Process" title="From bill analysis to supported generation." />
          <div className="mt-10"><Timeline /></div>
        </div>
      </section>

      <section className="section bg-slate-50 dark:bg-white/[0.03]">
        <div className="container"><StatsCounter stats={stats} /></div>
      </section>

      <section className="section bg-white dark:bg-slate-950">
        <div className="container">
          <SectionHeader eyebrow="Why Choose Us" title="A customer-focused solar EPC experience." description="Premium solar is about clarity, safety, documentation, savings, and long-term support." />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((point) => (
              <div key={point} className="rounded-lg border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-800 shadow-sm dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-100">
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white dark:bg-slate-950">
        <div className="container">
          <div className="rounded-lg bg-slate-950 p-8 text-white shadow-soft">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-300">Government Subsidy</p>
            <h2 className="mt-4 text-3xl font-bold">Guided subsidy and documentation support.</h2>
            <p className="mt-4 max-w-3xl text-slate-300">We help eligible homeowners understand subsidy steps, documents, net metering, inspection readiness, and commissioning requirements.</p>
            <div className="mt-6"><ButtonLink href="/government-subsidy" variant="secondary">Explore subsidy</ButtonLink></div>
          </div>
        </div>
      </section>

      <section className="section bg-slate-50 dark:bg-white/[0.03]">
        <div className="container">
          <SectionHeader align="center" eyebrow="Products" title="Trusted solar and power categories." />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {brandPartners.map((brand) => (
              <div key={brand} className="flex min-h-24 items-center justify-center rounded-lg border border-slate-200 bg-white px-4 text-center font-black text-slate-800 shadow-sm dark:border-white/10 dark:bg-white/[0.03] dark:text-white">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-950 text-white">
        <div className="container flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-300">Ready</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Turn your electricity bill into a solar savings plan.</h2>
          </div>
          <ButtonLink href="/get-quote" variant="secondary">Start a project</ButtonLink>
        </div>
      </section>
    </>
  );
}
