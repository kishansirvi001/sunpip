import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SolarSystemPageView } from "@/components/seo/SolarSystemPage";
import { createMetadata } from "@/lib/metadata";
import { getSolarSystemPage } from "@/lib/seoContent";

const page = getSolarSystemPage("3kw-solar-system");

export const metadata: Metadata = page ? createMetadata(page.metaTitle, page.metaDescription, `/${page.slug}`, { keywords: ["3kW solar system Sojat", "3kW solar system Pali", "PM Surya Ghar Pali"] }) : {};

export default function ThreeKwSolarSystemPage() {
  if (!page) notFound();
  return <SolarSystemPageView page={page} />;
}
