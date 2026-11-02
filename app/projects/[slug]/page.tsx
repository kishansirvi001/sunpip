import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema, webPageSchema } from "@/lib/structuredData";

type Props = { params: Promise<{ slug: string }> };
const caseStudies = projects.filter((project) => !project.isPlaceholder && project.slug);

export function generateStaticParams() { return caseStudies.map((project) => ({ slug: project.slug! })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = caseStudies.find((item) => item.slug === slug);
  return project ? createMetadata(`${project.capacity} Rooftop Solar Project`, `Verified rooftop solar case study in ${project.location}.`, `/projects/${slug}`, { noIndex: caseStudies.length < 3 }) : {};
}

export default async function ProjectDetail({ params }: Props) {
  const { slug } = await params;
  const project = caseStudies.find((item) => item.slug === slug);
  if (!project) notFound();
  const path = `/projects/${slug}`;
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema({ name: project.title, description: project.projectDetails ?? "Verified rooftop solar installation case study.", path })) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Projects", path: "/projects" }, { name: project.title, path }])) }} />
    <section className="section bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-white"><article className="container max-w-5xl"><p className="font-bold text-amber-800">{project.location} · {project.category}</p><h1 className="mt-3 text-4xl font-black">{project.title}</h1><div className="relative mt-8 aspect-video overflow-hidden rounded-2xl"><Image src={project.image} alt={`${project.title} installation`} fill sizes="(min-width: 1024px) 960px, 100vw" className="object-cover" placeholder="blur" blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwIiBoZWlnaHQ9IjkwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxNjAiIGhlaWdodD0iOTAiIGZpbGw9IiNlZWYyZjMiLz48L3N2Zz4=" /></div><dl className="mt-8 grid gap-3 sm:grid-cols-2">{[["System size",project.capacity],["Panel brand",project.panelBrand],["Inverter brand",project.inverterBrand],["Installation date",project.installationDate],["Monthly bill before",project.monthlyBillBefore],["Monthly bill after",project.monthlyBillAfter],["Generation",project.generation],["Warranty terms",project.warrantyTerms],["Verified savings",project.savings]].filter((row): row is [string,string]=>Boolean(row[1])).map(([label,value])=><div key={label} className="rounded-xl border border-slate-200 bg-white p-4 text-slate-950 dark:border-white/10 dark:bg-white/[0.04] dark:text-white"><dt className="text-sm text-slate-600 dark:text-slate-300">{label}</dt><dd className="mt-1 font-bold">{value}</dd></div>)}</dl><p className="mt-8 leading-7 text-slate-700 dark:text-slate-300">{project.projectDetails}</p><p className="mt-5 text-xs text-slate-600 dark:text-slate-300">Performance and bill details are specific to this site and are not a guarantee of future results.</p></article></section>
  </>;
}
