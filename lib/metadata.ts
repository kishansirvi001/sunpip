import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants";

type MetadataOptions = {
  keywords?: string[];
  imageAlt?: string;
  noIndex?: boolean;
};

const defaultOgImage = "/og-image.svg";

export function createMetadata(
  title: string,
  description: string,
  path = "",
  options: MetadataOptions = {}
): Metadata {
  const cleanPath = path
    ? `/${path.replace(/^\/+|\/+$/g, "")}`
    : "";

  const url = `${siteConfig.url}${cleanPath}`;

  const fullTitle =
    title.length > 45
      ? title
      : `${title} | ${siteConfig.name}`;

  const robots = {
    index: !options.noIndex,
    follow: true,
    googleBot: {
      index: !options.noIndex,
      follow: true,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  };

  return {
    metadataBase: new URL(siteConfig.url),

    title: fullTitle,

    description,

    applicationName: siteConfig.name,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    category: "Solar EPC and rooftop solar installation",
    referrer: "origin-when-cross-origin",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },

    ...(options.keywords?.length
      ? {
          keywords: options.keywords,
        }
      : {}),

    robots,

    icons: {
      icon: [
        { url: "/favicon.svg", type: "image/svg+xml" },
        { url: "/logo.png", type: "image/png" },
      ],
      apple: [{ url: "/logo.png", type: "image/png" }],
    },

    alternates: {
      canonical: url,
    },

    openGraph: {
      type: "website",
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_IN",

      images: [
        {
          url: defaultOgImage,
          width: 1200,
          height: 630,
          alt:
            options.imageAlt ??
            `${siteConfig.name} solar EPC and rooftop solar services in Rajasthan`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [defaultOgImage],
    },
  };
}
