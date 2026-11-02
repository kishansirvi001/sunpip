import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { createMetadata } from "@/lib/metadata";
import { blogArticles } from "@/lib/seoContent";
import { breadcrumbSchema, webPageSchema } from "@/lib/structuredData";

export const metadata: Metadata = createMetadata(
  "Solar Blog Rajasthan",
  "SEO-ready SunPip solar guides for Rajasthan customers covering solar price, subsidy, generation, roof area, inverters, maintenance and system choices.",
  "/blog",
  { keywords: ["solar blog Rajasthan", "solar price Rajasthan", "solar subsidy Rajasthan"] },
);

export default function BlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema({ name: "Solar Blog Rajasthan", description: "SunPip solar guides for Rajasthan rooftop solar customers.", path: "/blog" })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }])) }} />
      <PageHero eyebrow="Solar Blog" title="Practical solar guides for Rajasthan customers." description="SEO-ready articles that answer high-intent questions about price, subsidy, generation, roof area, inverters and maintenance." ctaHref="/get-quote" ctaLabel="Ask a question" />
      <section className="section bg-white dark:bg-slate-950">
        <div className="container">
          <SectionHeader eyebrow="Guides" title="Solar buying and planning articles." />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {blogArticles.map((article) => (
              <Link key={article.slug} href={`/blog/${article.slug}`} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:border-sun-blue dark:border-white/10 dark:bg-white/[0.03]">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-sun-blue">{article.category}</p>
                <h2 className="mt-3 text-xl font-bold text-slate-950 dark:text-white">{article.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{article.excerpt}</p>
                <p className="mt-5 text-sm font-bold text-slate-500 dark:text-slate-400">{article.readTime}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
