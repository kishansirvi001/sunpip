import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants";

type MetadataOptions = {
  keywords?: string[];
  imageAlt?: string;
  noIndex?: boolean;
};

export function createMetadata(title: string, description: string, path = "", options: MetadataOptions = {}): Metadata {
  const url = `${siteConfig.url}${path}`;
  const fullTitle = `${title} | ${siteConfig.name}`;

  return {
    title: fullTitle,
    description,
    keywords: options.keywords,
    robots: {
      index: !options.noIndex,
      follow: true,
      googleBot: {
        index: !options.noIndex,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      locale: "en_IN",
      images: [
        {
          url: "/og-image.svg",
          width: 1200,
          height: 630,
          alt: options.imageAlt ?? `${siteConfig.name} solar EPC in Rajasthan`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/og-image.svg"],
    },
  };
}
