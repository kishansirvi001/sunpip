import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticlePageView } from "@/components/seo/ArticlePage";
import { createMetadata } from "@/lib/metadata";
import { blogArticles, getBlogArticle } from "@/lib/seoContent";

type BlogArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getBlogArticle(slug);
  if (!article) return {};

  return createMetadata(article.metaTitle, article.metaDescription, `/blog/${article.slug}`, {
    keywords: article.keywords,
  });
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const article = getBlogArticle(slug);
  if (!article) notFound();

  return <ArticlePageView article={article} basePath="/blog" parentLabel="Blog" />;
}
