import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SolarSystemPageView } from "@/components/seo/SolarSystemPage";
import { createMetadata } from "@/lib/metadata";
import { getSolarSystemPage } from "@/lib/seoContent";

const page = getSolarSystemPage("2kw-solar-system");

export const metadata: Metadata = page ? createMetadata(page.metaTitle, page.metaDescription, `/${page.slug}`, { keywords: ["2kW solar system Sojat", "2kW solar system Pali"] }) : {};

export default function TwoKwSolarSystemPage() {
  if (!page) notFound();
  return <SolarSystemPageView page={page} />;
}
