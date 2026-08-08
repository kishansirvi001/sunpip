import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { SeoLandingPage } from "@/lib/seoContent";
import { breadcrumbSchema, faqSchemaForItems, localServiceSchema } from "@/lib/structuredData";
import { pageHeroImages } from "@/lib/visuals";

export function SeoLandingPageView({ page }: { page: SeoLandingPage }) {
  const path = `/${page.slug}`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localServiceSchema({ name: page.title, description: page.metaDescription, path, serviceType: page.serviceType })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaForItems(page.faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", path: "/" }, { name: page.title, path }])) }} />
      <PageHero eyebrow={page.keyword} title={page.heroTitle} description={page.heroDescription} ctaHref="/get-quote" ctaLabel="Request quote" imageSrc={pageHeroImages.default} imageAlt={page.imageAlt} />
      {page.sections.map((section, index) => (
        <section key={section.title} className={`section ${index % 2 === 0 ? "bg-white dark:bg-slate-950" : "bg-slate-50 dark:bg-white/[0.03]"}`}>
          <div className="container grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <SectionHeader title={section.title} description={section.body} />
            <div className="grid gap-4 sm:grid-cols-2">
              {section.points.map((point) => (
                <div key={point} className="rounded-lg border border-slate-200 bg-white p-5 font-semibold text-slate-900 shadow-sm dark:border-white/10 dark:bg-white/[0.03] dark:text-white">
                  {point}
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
      <section className="section bg-white dark:bg-slate-950">
        <div className="container">
          <SectionHeader eyebrow="Helpful links" title="Plan the next step." description="Use these related pages to compare services, estimate system size and contact SunPip Solutions with better project details." />
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {page.links.map((link) => (
              <Link key={link.href} href={link.href} className="rounded-lg border border-slate-200 bg-white p-4 text-sm font-bold text-slate-800 transition hover:border-sun-blue hover:text-sun-blue dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-100">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-slate-50 dark:bg-white/[0.03]">
        <div className="container grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader eyebrow="FAQ" title="Common questions." description="Useful answers for solar customers in Sojat, Pali and Rajasthan without keyword stuffing or unsupported promises." />
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
          <h2 className="text-3xl font-bold">Ready for a bill-based solar proposal?</h2>
          <ButtonLink href="/get-quote" variant="secondary">Start with a quote</ButtonLink>
        </div>
      </section>
    </>
  );
}
