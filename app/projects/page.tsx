import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { projects } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";
import { pageHeroImages } from "@/lib/visuals";

export const metadata: Metadata = createMetadata(
  "Solar Projects",
  "SunPip Solutions will publish verified rooftop solar project case studies for residential and commercial customers in Rajasthan.",
  "/projects",
  {
    keywords: ["solar projects Rajasthan", "rooftop solar projects Pali", "solar installation Sojat"],
  },
);

export default function ProjectsPage() {
  const verifiedProjects = projects.filter((project) => !project.isPlaceholder);

  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Rooftop solar project portfolio."
        description="Verified solar installations will be published with system size, location, components, and performance outcomes after customer approval."
        ctaHref="/get-quote"
        ctaLabel="Plan your project"
        imageSrc={pageHeroImages.projects}
        imageAlt="Rooftop solar project with rows of solar panels"
      />
      <section className="section bg-slate-50 dark:bg-white/[0.03]">
        <div className="container">
          <SectionHeader eyebrow="Portfolio" title="Solar installations and case studies." description="Project case studies are shown here after details and customer approval are verified." />
          {verifiedProjects.length > 0 ? (
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {verifiedProjects.map((project) => (
                <ProjectCard key={`${project.title}-${project.category}`} project={project} />
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-lg border border-slate-200 bg-white p-6 text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300">
              <p className="font-semibold text-slate-950 dark:text-white">Verified project case studies are being prepared.</p>
              <p className="mt-3 text-sm leading-6">
                For now, contact SunPip Solutions for a site-specific proposal based on your electricity bill, roof condition, location, and savings goal.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
