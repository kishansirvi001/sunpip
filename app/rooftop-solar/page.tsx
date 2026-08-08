import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SeoLandingPageView } from "@/components/seo/SeoLandingPage";
import { createMetadata } from "@/lib/metadata";
import { getSeoLandingPage } from "@/lib/seoContent";

const page = getSeoLandingPage("rooftop-solar");

export const metadata: Metadata = page
  ? createMetadata(page.metaTitle, page.metaDescription, `/${page.slug}`, { keywords: ["rooftop solar Rajasthan", "solar panel installation in Sojat", "solar company in Pali"], imageAlt: page.imageAlt })
  : {};

export default function RooftopSolarPage() {
  if (!page) notFound();
  return <SeoLandingPageView page={page} />;
}
