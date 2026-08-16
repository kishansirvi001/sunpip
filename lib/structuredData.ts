import { faqItems, services, siteConfig } from "@/lib/constants";

const organizationId = `${siteConfig.url}/#organization`;

const serviceArea = [
  {
    "@type": "City",
    name: "Sojat",
  },
  {
    "@type": "City",
    name: "Pali",
  },
  {
    "@type": "State",
    name: "Rajasthan",
  },
];

const sameAsProfiles = [
  siteConfig.googleBusinessProfileUrl,
  siteConfig.instagram
    ? `https://www.instagram.com/${siteConfig.instagram.replace(/^@/, "")}`
    : "",
].filter(Boolean);

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": organizationId,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    image: `${siteConfig.url}/og-image.svg`,
    description: siteConfig.description,
    telephone: `+91${siteConfig.phone}`,
    email: siteConfig.email,
    foundingDate: siteConfig.founded,
    priceRange: "Moderate",

    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressLocality: "Sojat",
      addressRegion: "Rajasthan",
      postalCode: "306104",
      addressCountry: "IN",
    },

    areaServed: serviceArea,

    contactPoint: {
      "@type": "ContactPoint",
      telephone: `+91${siteConfig.phone}`,
      email: siteConfig.email,
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },

    sameAs: sameAsProfiles,
  };
}

export function servicesSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${siteConfig.url}/#services`,
    name: `${siteConfig.name} Solar Services`,
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        "@id": `${siteConfig.url}/services/${service.slug}#service`,
        name: service.title,
        description: service.description,
        serviceType: service.title,
        url: `${siteConfig.url}/services/${service.slug}`,
        provider: {
          "@id": organizationId,
        },
        areaServed: serviceArea,
      },
    })),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: {
      "@id": organizationId,
    },
    inLanguage: "en-IN",
  };
}

export function webPageSchema({
  name,
  description,
  path,
  primaryImage = `${siteConfig.url}/og-image.svg`,
}: {
  name: string;
  description: string;
  path: string;
  primaryImage?: string;
}) {
  const url = `${siteConfig.url}${path}`;

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    image: primaryImage,
    isPartOf: {
      "@id": `${siteConfig.url}/#website`,
    },
    about: {
      "@id": organizationId,
    },
    publisher: {
      "@id": organizationId,
    },
    inLanguage: "en-IN",
  };
}

export function serviceSchema(slug: string) {
  const service = services.find((item) => item.slug === slug);

  if (!service) return null;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.url}/services/${service.slug}#service`,
    name: service.title,
    description: service.description,
    serviceType: service.title,
    url: `${siteConfig.url}/services/${service.slug}`,

    provider: {
      "@id": organizationId,
    },

    areaServed: serviceArea,
  };
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${siteConfig.url}/#faq`,
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function faqSchemaForItems(
  items: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function localServiceSchema({
  name,
  description,
  path,
  serviceType,
}: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.url}${path}#service`,
    name,
    description,
    serviceType,
    url: `${siteConfig.url}${path}`,

    provider: {
      "@id": organizationId,
    },

    areaServed: serviceArea,
  };
}

export function breadcrumbSchema(
  items: Array<{ name: string; path: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}
