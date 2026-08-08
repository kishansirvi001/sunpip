import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { createMetadata } from "@/lib/metadata";
import { services } from "@/lib/constants";
import { breadcrumbSchema, serviceSchema } from "@/lib/structuredData";
import { serviceImageBySlug } from "@/lib/visuals";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return createMetadata(service.title, `${service.title} by SUNPIP SOLUTIONS LLP across Rajasthan. ${service.description}`, `/services/${service.slug}`);
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  const related = services.filter((item) => service.related?.includes(item.slug)).slice(0, 3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema(service.slug)) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
              { name: service.title, path: `/services/${service.slug}` },
            ]),
          ),
        }}
      />
      <PageHero
        eyebrow="Solar Service"
        title={service.title}
        description={service.description}
        ctaHref="/get-quote"
        ctaLabel="Request quote"
        imageSrc={serviceImageBySlug[service.slug]}
        imageAlt={`${service.title} service`}
      />
      <section className="section bg-white dark:bg-slate-950">
        <div className="container grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeader eyebrow="Benefits" title={`Why choose ${service.title}?`} />
            <div className="mt-8 grid gap-4">
              {(service.benefits ?? service.features).map((benefit) => (
                <div key={benefit} className="rounded-lg border border-slate-200 bg-white p-5 font-semibold text-slate-950 shadow-sm dark:border-white/10 dark:bg-white/[0.03] dark:text-white">
                  {benefit}
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeader eyebrow="Process" title="Simple, documented, and professionally managed." />
            <ol className="mt-8 grid gap-4">
              {(service.process ?? []).map((step, index) => (
                <li key={step} className="flex gap-4 rounded-lg border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/[0.03]">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sun-blue text-sm font-bold text-white">{index + 1}</span>
                  <span className="font-semibold text-slate-900 dark:text-white">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
      <section className="section bg-white dark:bg-slate-950">
        <div className="container">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader eyebrow="Related" title="Related solar services" />
            <ButtonLink href="/contact" variant="ghost">Book site visit</ButtonLink>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {related.map((item) => <ServiceCard key={item.slug} service={item} />)}
          </div>
        </div>
      </section>
    </>
  );
}
