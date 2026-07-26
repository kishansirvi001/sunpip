import { processSteps } from "@/lib/constants";

export function Timeline() {
  return (
    <ol className="grid gap-4 lg:grid-cols-5">
      {processSteps.map((step, index) => (
        <li key={step} className="rounded-lg border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/[0.03]">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sun-blue text-sm font-bold text-white">
            {index + 1}
          </span>
          <p className="mt-4 font-semibold text-slate-950 dark:text-white">{step}</p>
        </li>
      ))}
    </ol>
  );
}
