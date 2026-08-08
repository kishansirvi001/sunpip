import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SeoLandingPageView } from "@/components/seo/SeoLandingPage";
import { createMetadata } from "@/lib/metadata";
import { getSeoLandingPage } from "@/lib/seoContent";

const page = getSeoLandingPage("pm-surya-ghar-solar-subsidy");

export const metadata: Metadata = page
  ? createMetadata(page.metaTitle, page.metaDescription, `/${page.slug}`, { keywords: ["PM Surya Ghar Pali", "solar subsidy Pali", "rooftop solar subsidy Rajasthan"], imageAlt: page.imageAlt })
  : {};

export default function PmSuryaGharSolarSubsidyPage() {
  if (!page) notFound();
  return <SeoLandingPageView page={page} />;
}
