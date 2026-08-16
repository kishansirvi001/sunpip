import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { SolarSystemPage } from "@/lib/seoContent";
import { breadcrumbSchema, faqSchemaForItems, localServiceSchema, webPageSchema } from "@/lib/structuredData";
import { pageHeroImages } from "@/lib/visuals";

export function SolarSystemPageView({ page }: { page: SolarSystemPage }) {
  const path = `/${page.slug}`;
  const links = [
    { label: "Solar system size calculator", href: "/solar-system-size-calculator" },
    { label: "Solar savings calculator", href: "/solar-savings-calculator" },
    { label: "Residential solar", href: "/residential-solar" },
    { label: "Commercial solar", href: "/commercial-solar" },
    { label: "Request quote", href: "/get-quote" },
    { label: "Book site visit", href: "/contact" },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema({ name: page.metaTitle, description: page.metaDescription, path })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localServiceSchema({ name: `${page.capacity} Solar System`, description: page.metaDescription, path, serviceType: `${page.capacity} rooftop solar system planning` })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaForItems(page.faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", path: "/" }, { name: `${page.capacity} Solar System`, path }])) }} />
      <PageHero eyebrow={`${page.capacity} Solar System`} title={page.heroTitle} description={page.heroDescription} ctaHref="/get-quote" ctaLabel="Request quote" imageSrc={pageHeroImages.default} imageAlt={`${page.capacity} rooftop solar system planning in Rajasthan`} />
      <section className="section bg-white dark:bg-slate-950">
        <div className="container grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeader eyebrow="Best fit" title={`Who should consider a ${page.capacity} solar system?`} description="Capacity should always be confirmed from your electricity bill, roof condition, shade and connection details." />
            <div className="mt-8 grid gap-4">
              {page.bestFor.map((item) => (
                <div key={item} className="rounded-lg border border-slate-200 bg-white p-5 font-semibold text-slate-950 shadow-sm dark:border-white/10 dark:bg-white/[0.03] dark:text-white">{item}</div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeader eyebrow="Planning" title="What to verify before installation." />
            <ol className="mt-8 grid gap-4">
              {page.planningNotes.map((item, index) => (
                <li key={item} className="flex gap-4 rounded-lg border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/[0.03]">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sun-blue text-sm font-bold text-white">{index + 1}</span>
                  <span className="font-semibold text-slate-900 dark:text-white">{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
      <section className="section bg-slate-50 dark:bg-white/[0.03]">
        <div className="container">
          <SectionHeader eyebrow="Related pages" title="Compare capacity, savings and services." />
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="rounded-lg border border-slate-200 bg-white p-4 text-sm font-bold text-slate-800 transition hover:border-sun-blue hover:text-sun-blue dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-100">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-white dark:bg-slate-950">
        <div className="container grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader eyebrow="FAQ" title={`${page.capacity} solar system FAQs.`} />
          <div className="grid gap-4">
            {page.faqs.map((item) => (
              <article key={item.question} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
                <h3 className="text-lg font-bold text-slate-950 dark:text-white">{item.question}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-slate-950 text-white">
        <div className="container flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-3xl font-bold">Validate the right capacity with SunPip Solutions.</h2>
          <ButtonLink href="/get-quote" variant="secondary">Get capacity quote</ButtonLink>
        </div>
      </section>
    </>
  );
}
