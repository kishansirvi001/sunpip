import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SeoLandingPageView } from "@/components/seo/SeoLandingPage";
import { createMetadata } from "@/lib/metadata";
import { getSeoLandingPage } from "@/lib/seoContent";

const page = getSeoLandingPage("residential-solar");

export const metadata: Metadata = page
  ? createMetadata(page.metaTitle, page.metaDescription, `/${page.slug}`, { keywords: ["solar company in Sojat", "solar panel installation in Sojat", "residential solar Pali"], imageAlt: page.imageAlt })
  : {};

export default function ResidentialSolarPage() {
  if (!page) notFound();
  return <SeoLandingPageView page={page} />;
}
