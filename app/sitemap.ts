import type { MetadataRoute } from "next";
import { calculatorRoutes, navItems, projects, services, siteConfig } from "@/lib/constants";
import { blogArticles, pmSuryaGharArticles, seoLandingPages, solarSystemPages } from "@/lib/seoContent";

const lastModified = new Date("2026-08-16");

function getPriority(href: string) {
  if (href === "/") return 1;
  if (href.startsWith("/services/")) return 0.85;
  if (href.startsWith("/solar-company/")) return 0.86;
  if (href.startsWith("/pm-surya-ghar-solar-subsidy/")) return 0.78;
  if (href.startsWith("/blog/")) return 0.72;
  if (href === "/services") return 0.9;
  if (href === "/get-quote" || href === "/contact") return 0.9;
  if (seoLandingPages.some((page) => `/${page.slug}` === href)) return 0.85;
  if (solarSystemPages.some((page) => `/${page.slug}` === href)) return 0.8;
  if (calculatorRoutes.includes(href)) return 0.75;
  if (href === "/privacy-policy" || href === "/terms") return 0.35;
  return 0.7;
}

function getChangeFrequency(href: string): MetadataRoute.Sitemap[number]["changeFrequency"] {
  if (href === "/" || href === "/services") return "weekly";
  if (href === "/privacy-policy" || href === "/terms") return "yearly";
  return "monthly";
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    ...navItems.map((item) => item.href),
    "/hi",
    ...calculatorRoutes,
    ...seoLandingPages.filter((page) => !["residential-solar", "solar-epc", "government-subsidy"].includes(page.slug)).map((page) => `/${page.slug}`),
    ...solarSystemPages.map((page) => `/${page.slug}`),
    ...pmSuryaGharArticles.map((article) => `/pm-surya-ghar-solar-subsidy/${article.slug}`),
    "/blog",
    ...blogArticles.map((article) => `/blog/${article.slug}`),
    "/get-quote",
    "/products",
    ...(projects.filter((project) => !project.isPlaceholder).length >= 3 ? ["/projects"] : []),
    "/careers",
    "/privacy-policy",
    "/terms",
  ];
  const hasVerifiedProjects = projects.filter((project) => !project.isPlaceholder).length >= 3;
  const routes = Array.from(new Set(staticRoutes)).filter((href) => href !== "/projects" || hasVerifiedProjects);
  const serviceRoutes = services.filter((service) => service.slug !== "government-subsidy-assistance").map((service) => `/services/${service.slug}`);

  return [...routes, ...serviceRoutes].map((href) => ({
    url: `${siteConfig.url}${href === "/" ? "" : href}`,
    lastModified,
    changeFrequency: getChangeFrequency(href),
    priority: getPriority(href),
  }));
}
