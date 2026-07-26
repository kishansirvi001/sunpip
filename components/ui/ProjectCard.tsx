import Image from "next/image";
import type { Project } from "@/types/site";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
      <div className="relative aspect-[4/3]">
        <Image src={project.image} alt={`${project.title} solar project`} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
      </div>
      <div className="p-5">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide">
          <span className="rounded-full bg-blue-50 px-3 py-1 text-sun-blue dark:bg-blue-400/10">{project.category}</span>
          <span className="rounded-full bg-blue-50 px-3 py-1 text-sun-blue dark:bg-blue-400/10">{project.capacity}</span>
        </div>
        <h3 className="mt-4 text-xl font-bold text-slate-950 dark:text-white">{project.title}</h3>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{project.location}</p>
        <p className="mt-4 text-sm font-semibold text-sun-blue dark:text-blue-300">{project.result}</p>
      </div>
    </article>
  );
}
