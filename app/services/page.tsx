import type { Metadata } from "next";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { PageHero } from "@/components/ui/PageHero";
import { services } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata("Services", "Residential, commercial, industrial, EPC, government, solar pumps, O&M, net metering, and annual maintenance services.", "/services");

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services" title="Complete solar EPC and lifecycle support." description="Choose a partner that can size, engineer, approve, build, commission, and maintain your solar asset." ctaHref="/get-quote" ctaLabel="Request service quote" />
      <section className="section bg-slate-50 dark:bg-white/[0.03]">
        <div className="container grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => <ServiceCard key={service.slug} service={service} />)}
        </div>
      </section>
    </>
  );
}
