import Image from "next/image";
import type { Project } from "@/types/site";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
      <div className="relative aspect-[4/3]">
        <Image src={project.image} alt={`${project.title} solar project placeholder`} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" placeholder="blur" blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwIiBoZWlnaHQ9IjkwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxNjAiIGhlaWdodD0iOTAiIGZpbGw9IiNlZWYyZjMiLz48L3N2Zz4=" />
      </div>
      <div className="p-5">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide">
          <span className="rounded-full bg-blue-50 px-3 py-1 text-sun-blue dark:bg-blue-400/10">{project.category}</span>
          <span className="rounded-full bg-blue-50 px-3 py-1 text-sun-blue dark:bg-blue-400/10">{project.capacity}</span>
        </div>
        <h3 className="mt-4 text-xl font-bold text-slate-950 dark:text-white">{project.title}</h3>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{project.location}</p>
        <dl className="mt-4 grid gap-2 text-sm text-slate-600 dark:text-slate-300">
          {project.systemType ? (
            <div className="flex justify-between gap-4">
              <dt className="font-semibold">System</dt>
              <dd>{project.systemType}</dd>
            </div>
          ) : null}
          {project.panelBrand ? (
            <div className="flex justify-between gap-4">
              <dt className="font-semibold">Panels</dt>
              <dd>{project.panelBrand}</dd>
            </div>
          ) : null}
          {project.inverterBrand ? (
            <div className="flex justify-between gap-4">
              <dt className="font-semibold">Inverter</dt>
              <dd>{project.inverterBrand}</dd>
            </div>
          ) : null}
          {project.monthlyBillBefore ? <div className="flex justify-between gap-4"><dt className="font-semibold">Monthly bill before</dt><dd>{project.monthlyBillBefore}</dd></div> : null}
          {project.monthlyBillAfter ? <div className="flex justify-between gap-4"><dt className="font-semibold">Monthly bill after</dt><dd>{project.monthlyBillAfter}</dd></div> : null}
          {project.installationDate ? <div className="flex justify-between gap-4"><dt className="font-semibold">Installation date</dt><dd>{project.installationDate}</dd></div> : null}
          {project.generation ? (
            <div className="flex justify-between gap-4">
              <dt className="font-semibold">Generation</dt>
              <dd>{project.generation}</dd>
            </div>
          ) : null}
        </dl>
        {project.projectDetails ? <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{project.projectDetails}</p> : null}
        <p className="mt-4 text-sm font-semibold text-sun-blue dark:text-blue-300">{project.result}</p>
      </div>
    </article>
  );
}
