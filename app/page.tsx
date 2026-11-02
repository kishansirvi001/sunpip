import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, BadgeCheck, Sun, Zap } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { services, siteConfig, faqItems } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";
import { faqSchema, servicesSchema, breadcrumbSchema } from "@/lib/structuredData";

export const metadata: Metadata = createMetadata("Rooftop Solar in Sojat & Pali", "Plan rooftop solar for your home, shop, school or farm in Sojat and Pali. Get a free site survey and a clear quote.", "");

const featured = [services[0], services[1], services[3], services[6]];

export default function Home() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema()) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema()) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", path: "/" }])) }} />
    <section className="relative isolate overflow-hidden bg-sun-ink text-white">
      <Image src="/images/project-placeholder.svg" alt="Illustration placeholder for a local rooftop solar installation" fill priority sizes="100vw" className="-z-20 object-cover opacity-30" placeholder="blur" blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwIiBoZWlnaHQ9IjkwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxNjAiIGhlaWdodD0iOTAiIGZpbGw9IiMxNzI1M2MiLz48L3N2Zz4=" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/35" />
      <div className="container grid min-h-[620px] items-center py-16 md:min-h-[680px]">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-amber-300/10 px-4 py-2 text-sm font-bold text-amber-100"><Sun className="h-4 w-4" /> Sojat • Pali • Nearby towns</p>
          <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-6xl">Cut your electricity bill with rooftop solar<span className="mt-3 block text-3xl text-amber-300 sm:text-5xl">बिजली बिल घटाएं, सोलर लगवाएं</span></h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">A local team to help plan your solar system, paperwork and installation—from the first roof survey to handover.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/get-quote">Get Free Quote</ButtonLink>
            <ButtonLink href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Namaste, I would like a free rooftop solar quote.")}`} variant="ghost">WhatsApp Us</ButtonLink>
          </div>
          <div className="mt-10 grid gap-3 text-sm sm:grid-cols-3">
            {["Free site survey", "Subsidy & net metering support", "Local team in Sojat"].map((item) => <div key={item} className="flex min-h-12 items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-3"><BadgeCheck className="h-5 w-5 shrink-0 text-amber-300" />{item}</div>)}
          </div>
          <p className="mt-4 text-xs text-slate-300">Image slot: replace with an approved SUNPIP project photo in <code>/public/images/</code>.</p>
        </div>
      </div>
    </section>

    <section className="border-b border-amber-100 bg-amber-50 py-5">
      <div className="container grid gap-3 text-sm font-semibold text-slate-800 sm:grid-cols-3"><span>✓ Free site survey before final quote</span><span>✓ Subsidy and net metering guidance</span><span>✓ Serving Sojat, Pali and nearby areas</span></div>
    </section>

    <section className="section bg-white dark:bg-slate-950"><div className="container">
      <SectionHeader align="center" eyebrow="Solar services" title="Practical solar support, from survey to handover." description="Every proposal starts with your electricity bill, roof and actual requirements." />
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{featured.map((service) => { const Icon = service.icon; const href = service.slug === "government-subsidy-assistance" ? "/pm-surya-ghar-solar-subsidy" : `/services/${service.slug}`; const title = service.slug === "government-subsidy-assistance" ? "Subsidy & Net Metering" : service.title; return <article key={service.slug} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.04]"><Icon className="h-8 w-8 text-amber-800" aria-hidden="true"/><h3 className="mt-4 text-lg font-bold text-slate-950 dark:text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">{service.description}</p><Link className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-sun-blue" href={href}>Learn more <ArrowRight className="h-4 w-4"/></Link></article>; })}</div>
      <details className="mt-6 rounded-xl border border-slate-200 p-5 text-slate-950 dark:border-white/15 dark:text-white"><summary className="cursor-pointer font-bold">More services</summary><div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{services.filter((s)=>!featured.includes(s)).map((s)=><Link key={s.slug} className="rounded-lg bg-slate-50 p-4 text-sm font-semibold text-slate-900 hover:text-sun-blue dark:bg-white/[0.06] dark:text-slate-100" href={`/services/${s.slug}`}>{s.title}</Link>)}</div></details>
    </div></section>

    <section className="section bg-amber-50 dark:bg-slate-950"><div className="container grid gap-10 lg:grid-cols-2 lg:items-center"><div><SectionHeader eyebrow="How it works" title="Five clear steps to rooftop solar." description="EPC means engineering, purchasing the equipment, and building the system. We explain each step before work begins."/><ol className="mt-6 grid gap-3">{["Free site survey", "Design and quote", "Subsidy paperwork", "Installation", "Net metering and handover"].map((s,i)=><li key={s} className="flex items-center gap-4 rounded-xl bg-white p-4 text-slate-950 dark:bg-white/[0.04] dark:text-white"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-100 font-black text-amber-900">{i+1}</span><span className="font-semibold">{s}</span></li>)}</ol></div><div className="rounded-2xl bg-slate-950 p-7 text-white"><Zap className="h-8 w-8 text-amber-300"/><h3 className="mt-4 text-2xl font-bold">Get a free quote on WhatsApp</h3><p className="mt-3 text-slate-300">Share your recent electricity bill and location to start a no-obligation discussion.</p><div className="mt-6"><ButtonLink href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Namaste, I would like a free rooftop solar quote.")}`} variant="secondary">WhatsApp {siteConfig.whatsappDisplay}</ButtonLink></div></div></div></section>

    <section className="section bg-white dark:bg-slate-950"><div className="container"><SectionHeader eyebrow="Questions" title="Rooftop solar FAQs"/><div className="mt-8 grid gap-3">{faqItems.map((item)=><details key={item.question} className="rounded-xl border border-slate-200 p-5 text-slate-950 dark:border-white/10 dark:text-white"><summary className="cursor-pointer font-bold">{item.question}</summary><p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300">{item.answer}</p></details>)}</div><p className="mt-5 text-sm text-slate-600 dark:text-slate-300">Project photos, team details, registrations, brands and warranty terms will be added when verified.</p></div></section>
  </>;
}
