"use client";

import Link from "next/link";
import { services } from "@/lib/constants";

export function MegaMenu() {
  return (
    <div className="absolute left-1/2 top-full hidden w-[820px] -translate-x-1/2 pt-5 group-hover:block group-focus-within:block">
      <div className="grid grid-cols-3 gap-3 rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-soft backdrop-blur dark:border-white/10 dark:bg-slate-900/95">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="rounded-xl p-3 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sun-blue dark:hover:bg-white/5"
            >
              <div className="flex items-start gap-3">
                <Icon aria-hidden="true" className="mt-1 h-5 w-5 text-sun-blue" />
                <div>
                  <p className="text-sm font-bold text-slate-950 dark:text-white">{service.title}</p>
                  <p className="mt-1 line-clamp-2 text-xs leading-5 text-slate-500 dark:text-slate-400">{service.description}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
