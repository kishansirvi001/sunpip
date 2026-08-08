import type { Metadata } from "next";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { PageHero } from "@/components/ui/PageHero";
import { services } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";
import { seoLandingPages, solarSystemPages } from "@/lib/seoContent";
import { pageHeroImages } from "@/lib/visuals";
import Link from "next/link";

export const metadata: Metadata = createMetadata(
  "Solar Services in Sojat, Pali & Rajasthan",
  "Explore SunPip Solutions solar installation, rooftop solar, Solar EPC, subsidy assistance, net metering, inverter, UPS and O&M services in Rajasthan.",
  "/services",
  { keywords: ["solar services Sojat", "solar installation Rajasthan", "solar EPC Pali"] },
);

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Complete solar EPC and lifecycle support."
        description="Choose a partner that can size, engineer, approve, build, commission, and maintain your solar asset."
        ctaHref="/get-quote"
        ctaLabel="Request service quote"
        imageSrc={pageHeroImages.services}
        imageAlt="Commercial solar installation on a large roof"
      />
      <section className="section bg-slate-50 dark:bg-white/[0.03]">
        <div className="container grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => <ServiceCard key={service.slug} service={service} />)}
        </div>
      </section>
      <section className="section bg-white dark:bg-slate-950">
        <div className="container">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[...seoLandingPages, ...solarSystemPages].map((page) => (
              <Link key={page.slug} href={`/${page.slug}`} className="rounded-lg border border-slate-200 bg-white p-4 text-sm font-bold text-slate-800 transition hover:border-sun-blue hover:text-sun-blue dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-100">
                {"capacity" in page ? `${page.capacity} Solar System` : page.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
