import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SeoLandingPageView } from "@/components/seo/SeoLandingPage";
import { createMetadata } from "@/lib/metadata";
import { getSeoLandingPage } from "@/lib/seoContent";

const page = getSeoLandingPage("solar-epc");

export const metadata: Metadata = page
  ? createMetadata(page.metaTitle, page.metaDescription, `/${page.slug}`, { keywords: ["solar EPC company Rajasthan", "solar company in Sojat", "solar installation Rajasthan"], imageAlt: page.imageAlt })
  : {};

export default function SolarEpcPage() {
  if (!page) notFound();
  return <SeoLandingPageView page={page} />;
}
