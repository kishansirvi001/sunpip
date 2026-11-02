import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { LocationPage } from "@/lib/seoContent";
import { solarSystemPages } from "@/lib/seoContent";
import { breadcrumbSchema, faqSchemaForItems, localServiceSchema, webPageSchema } from "@/lib/structuredData";
import { pageHeroImages } from "@/lib/visuals";

export function LocationLandingPageView({ page }: { page: LocationPage }) {
  const path = `/solar-company/${page.slug}`;
  const localArea = [
    {
      "@type": "City",
      name: page.city,
    },
    {
      "@type": "AdministrativeArea",
      name: page.districtContext,
    },
  ];
  const relatedLinks = [
    { label: "Residential solar", href: "/services/residential-rooftop-solar" },
    { label: "Rooftop solar", href: "/rooftop-solar" },
    { label: "PM Surya Ghar guide", href: "/pm-surya-ghar-solar-subsidy" },
    { label: "Solar savings calculator", href: "/solar-savings-calculator" },
    { label: "Request quote", href: "/get-quote" },
    { label: "Book site visit", href: "/contact" },
    ...solarSystemPages.slice(0, 3).map((item) => ({ label: `${item.capacity} solar system`, href: `/${item.slug}` })),
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema({ name: page.metaTitle, description: page.metaDescription, path })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localServiceSchema({ name: page.serviceType, description: page.metaDescription, path, serviceType: page.serviceType, areaServed: localArea })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaForItems(page.faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Service Areas", path: "/solar-company/sojat" }, { name: page.city, path }])) }} />
      <PageHero eyebrow={`${page.city} Solar Service`} title={page.heroTitle} description={page.heroDescription} ctaHref="/get-quote" ctaLabel="Request local quote" imageSrc={pageHeroImages.default} imageAlt={`Rooftop solar installation planning in ${page.city}, Rajasthan`} />
      <section className="section bg-white dark:bg-slate-950">
        <div className="container grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader eyebrow="Local fit" title={`Solar planning for ${page.city}.`} description={`Useful context for ${page.city} customers in ${page.districtContext}.`} />
          <div className="grid gap-4">
            {page.localNotes.map((note) => (
              <div key={note} className="rounded-lg border border-slate-200 bg-white p-5 font-semibold text-slate-900 shadow-sm dark:border-white/10 dark:bg-white/[0.03] dark:text-white">
                {note}
              </div>
            ))}
          </div>
        </div>
      </section>
      {page.sections.map((section, index) => (
        <section key={section.title} className={`section ${index % 2 === 0 ? "bg-slate-50 dark:bg-white/[0.03]" : "bg-white dark:bg-slate-950"}`}>
          <div className="container grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <SectionHeader title={section.title} description={section.body} />
            <div className="grid gap-3 sm:grid-cols-2">
              {section.points.map((point) => (
                <div key={point} className="rounded-lg border border-slate-200 bg-white p-4 text-sm font-bold text-slate-800 shadow-sm dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-100">
                  {point}
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
      <section className="section bg-white dark:bg-slate-950">
        <div className="container">
          <SectionHeader eyebrow="Compare" title="Useful solar planning links." description="Move between local pages, system sizes, subsidy guidance and calculators without repeating the same content." />
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {relatedLinks.map((link) => (
              <Link key={`${link.href}-${link.label}`} href={link.href} className="rounded-lg border border-slate-200 bg-white p-4 text-sm font-bold text-slate-800 transition hover:border-sun-blue hover:text-sun-blue dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-100">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-slate-50 dark:bg-white/[0.03]">
        <div className="container grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader eyebrow="FAQ" title={`${page.city} solar FAQs.`} />
          <div className="grid gap-4">
            {page.faqs.map((item) => (
              <article key={item.question} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
                <h2 className="text-lg font-bold text-slate-950 dark:text-white">{item.question}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-slate-950 text-white">
        <div className="container flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-3xl font-bold">Ready to check solar feasibility in {page.city}?</h2>
          <ButtonLink href="/contact" variant="secondary">Book site visit</ButtonLink>
        </div>
      </section>
    </>
  );
}
