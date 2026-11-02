import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SeoLandingPageView } from "@/components/seo/SeoLandingPage";
import { createMetadata } from "@/lib/metadata";
import { getSeoLandingPage, pmSuryaGharArticles } from "@/lib/seoContent";

const page = getSeoLandingPage("pm-surya-ghar-solar-subsidy");

export const metadata: Metadata = page
  ? createMetadata(page.metaTitle, page.metaDescription, `/${page.slug}`, { keywords: ["PM Surya Ghar Pali", "solar subsidy Pali", "rooftop solar subsidy Rajasthan"], imageAlt: page.imageAlt })
  : {};

export default function PmSuryaGharSolarSubsidyPage() {
  if (!page) notFound();
  return (
    <>
      <SeoLandingPageView page={page} />
      <section className="section bg-white dark:bg-slate-950">
        <div className="container">
          <SectionHeader
            eyebrow="Content hub"
            title="PM Surya Ghar guides for Rajasthan customers."
            description="Use these pages to understand the subsidy process before finalizing a rooftop solar quotation. Current official rules should always be verified before financial decisions."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {pmSuryaGharArticles.map((article) => (
              <Link key={article.slug} href={`/pm-surya-ghar-solar-subsidy/${article.slug}`} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:border-sun-blue dark:border-white/10 dark:bg-white/[0.03]">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-sun-blue">{article.category}</p>
                <h2 className="mt-3 text-xl font-bold text-slate-950 dark:text-white">{article.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{article.excerpt}</p>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <ButtonLink href="/get-quote">Check site feasibility</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
