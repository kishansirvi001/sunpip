import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { ContentArticle } from "@/lib/seoContent";
import { articleSchema, breadcrumbSchema, faqSchemaForItems, webPageSchema } from "@/lib/structuredData";
import { pageHeroImages } from "@/lib/visuals";

type ArticlePageViewProps = {
  article: ContentArticle;
  basePath: string;
  parentLabel: string;
};

export function ArticlePageView({ article, basePath, parentLabel }: ArticlePageViewProps) {
  const path = `${basePath}/${article.slug}`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema({ name: article.metaTitle, description: article.metaDescription, path })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema({ title: article.title, description: article.metaDescription, path, datePublished: article.date })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaForItems(article.faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", path: "/" }, { name: parentLabel, path: basePath }, { name: article.title, path }])) }} />
      <PageHero eyebrow={article.category} title={article.title} description={article.excerpt} ctaHref="/get-quote" ctaLabel="Ask SunPip" imageSrc={pageHeroImages.default} imageAlt={`${article.title} rooftop solar guide`} />
      <section className="section bg-white dark:bg-slate-950">
        <div className="container grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <aside className="rounded-lg border border-slate-200 p-5 dark:border-white/10">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-sun-blue">{article.readTime}</p>
            <p className="mt-3 text-sm font-semibold text-slate-600 dark:text-slate-300">Published {article.date}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {article.keywords.map((keyword) => (
                <span key={keyword} className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-sun-blue dark:bg-blue-400/10">
                  {keyword}
                </span>
              ))}
            </div>
          </aside>
          <div className="grid gap-8">
            {article.sections.map((section) => (
              <article key={section.title}>
                <h2 className="text-2xl font-bold text-slate-950 dark:text-white">{section.title}</h2>
                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{section.body}</p>
                {section.points?.length ? (
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {section.points.map((point) => (
                      <div key={point} className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-slate-800 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-100">
                        {point}
                      </div>
                    ))}
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-slate-50 dark:bg-white/[0.03]">
        <div className="container grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader eyebrow="FAQ" title="Related customer questions." />
          <div className="grid gap-4">
            {article.faqs.map((item) => (
              <article key={item.question} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
                <h2 className="text-lg font-bold text-slate-950 dark:text-white">{item.question}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-white dark:bg-slate-950">
        <div className="container">
          <SectionHeader eyebrow="Next steps" title="Plan with related pages." />
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {article.links.map((link) => (
              <Link key={link.href} href={link.href} className="rounded-lg border border-slate-200 bg-white p-4 text-sm font-bold text-slate-800 transition hover:border-sun-blue hover:text-sun-blue dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-100">
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <ButtonLink href="/contact" variant="ghost">Book a site survey</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
