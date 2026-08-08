import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SolarSystemPageView } from "@/components/seo/SolarSystemPage";
import { createMetadata } from "@/lib/metadata";
import { getSolarSystemPage } from "@/lib/seoContent";

const page = getSolarSystemPage("5kw-solar-system");

export const metadata: Metadata = page ? createMetadata(page.metaTitle, page.metaDescription, `/${page.slug}`, { keywords: ["5kW solar system Sojat", "5kW solar system Pali", "rooftop solar Rajasthan"] }) : {};

export default function FiveKwSolarSystemPage() {
  if (!page) notFound();
  return <SolarSystemPageView page={page} />;
}
