import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocationLandingPageView } from "@/components/seo/LocationLandingPage";
import { createMetadata } from "@/lib/metadata";
import { getLocationPage, locationPages } from "@/lib/seoContent";

type LocationPageProps = {
  params: Promise<{ city: string }>;
};

export function generateStaticParams() {
  return locationPages.map((page) => ({ city: page.slug }));
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { city } = await params;
  const page = getLocationPage(city);
  if (!page) return {};

  return createMetadata(page.metaTitle, page.metaDescription, `/solar-company/${page.slug}`, {
    keywords: [
      `solar company in ${page.city}`,
      `solar panel installation in ${page.city}`,
      `rooftop solar ${page.city}`,
      "rooftop solar Rajasthan",
    ],
    imageAlt: `Rooftop solar installation in ${page.city}, Rajasthan`,
    noIndex: true,
  });
}

export default async function SolarCompanyLocationPage({ params }: LocationPageProps) {
  const { city } = await params;
  const page = getLocationPage(city);
  if (!page) notFound();

  return <LocationLandingPageView page={page} />;
}
