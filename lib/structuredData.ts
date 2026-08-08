import { faqItems, services, siteConfig } from "@/lib/constants";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    image: `${siteConfig.url}/og-image.svg`,
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
    areaServed: [
      { "@type": "City", name: "Sojat" },
      { "@type": "City", name: "Pali" },
      { "@type": "State", name: "Rajasthan" },
    ],
    description: siteConfig.description,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: `+91${siteConfig.phone}`,
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
    sameAs: siteConfig.googleBusinessProfileUrl ? [siteConfig.googleBusinessProfileUrl] : [],
  };
}

export function servicesSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((service, index) => ({
      "@type": "Service",
      position: index + 1,
      name: service.title,
      description: service.description,
      url: `${siteConfig.url}/services/${service.slug}`,
      provider: {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
      },
      areaServed: "Rajasthan",
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
      "@id": `${siteConfig.url}/#organization`,
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
    areaServed: [
      { "@type": "City", name: "Sojat" },
      { "@type": "City", name: "Pali" },
      { "@type": "State", name: "Rajasthan" },
    ],
    provider: {
      "@id": `${siteConfig.url}/#organization`,
    },
    url: `${siteConfig.url}/services/${service.slug}`,
  };
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
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

export function faqSchemaForItems(items: Array<{ question: string; answer: string }>) {
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
    areaServed: [
      { "@type": "City", name: "Sojat" },
      { "@type": "City", name: "Pali" },
      { "@type": "State", name: "Rajasthan" },
    ],
    provider: {
      "@id": `${siteConfig.url}/#organization`,
    },
    url: `${siteConfig.url}${path}`,
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
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
