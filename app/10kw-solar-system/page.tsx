import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SolarSystemPageView } from "@/components/seo/SolarSystemPage";
import { createMetadata } from "@/lib/metadata";
import { getSolarSystemPage } from "@/lib/seoContent";

const page = getSolarSystemPage("10kw-solar-system");

export const metadata: Metadata = page ? createMetadata(page.metaTitle, page.metaDescription, `/${page.slug}`, { keywords: ["10kW solar system Pali", "commercial solar installation Rajasthan", "solar EPC company Rajasthan"] }) : {};

export default function TenKwSolarSystemPage() {
  if (!page) notFound();
  return <SolarSystemPageView page={page} />;
}
