import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SeoLandingPageView } from "@/components/seo/SeoLandingPage";
import { createMetadata } from "@/lib/metadata";
import { getSeoLandingPage } from "@/lib/seoContent";

const page = getSeoLandingPage("commercial-solar");

export const metadata: Metadata = page
  ? createMetadata(page.metaTitle, page.metaDescription, `/${page.slug}`, { keywords: ["commercial solar installation Rajasthan", "solar company in Pali", "solar installation Rajasthan"], imageAlt: page.imageAlt })
  : {};

export default function CommercialSolarPage() {
  if (!page) notFound();
  return <SeoLandingPageView page={page} />;
}
