import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticlePageView } from "@/components/seo/ArticlePage";
import { createMetadata } from "@/lib/metadata";
import { getPmSuryaGharArticle, pmSuryaGharArticles } from "@/lib/seoContent";

type PmArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return pmSuryaGharArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PmArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getPmSuryaGharArticle(slug);
  if (!article) return {};

  return createMetadata(article.metaTitle, article.metaDescription, `/pm-surya-ghar-solar-subsidy/${article.slug}`, {
    keywords: article.keywords,
  });
}

export default async function PmSuryaGharArticlePage({ params }: PmArticlePageProps) {
  const { slug } = await params;
  const article = getPmSuryaGharArticle(slug);
  if (!article) notFound();

  return <ArticlePageView article={article} basePath="/pm-surya-ghar-solar-subsidy" parentLabel="PM Surya Ghar" />;
}
