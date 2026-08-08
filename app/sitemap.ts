import type { MetadataRoute } from "next";
import { calculatorRoutes, navItems, projects, services, siteConfig } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    ...navItems.map((item) => item.href),
    ...calculatorRoutes,
    "/get-quote",
    "/government-subsidy",
    "/products",
    ...(projects.some((project) => !project.isPlaceholder) ? ["/projects"] : []),
    "/careers",
    "/privacy-policy",
    "/terms",
  ];
  const routes = Array.from(new Set(staticRoutes));
  const serviceRoutes = services.map((service) => `/services/${service.slug}`);

  return [...routes, ...serviceRoutes].map((href) => ({
    url: `${siteConfig.url}${href === "/" ? "" : href}`,
    lastModified: new Date("2026-08-08"),
    changeFrequency: "monthly",
    priority: href === "/" ? 1 : href.startsWith("/services") ? 0.85 : 0.8,
  }));
}
