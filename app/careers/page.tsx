import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata("Careers", "Join SunPip Solutions and help build high-quality solar EPC projects across engineering, execution, sales, and operations.", "/careers");

export default function CareersPage() {
  const roles = ["Solar Design Engineer", "Project Site Engineer", "O&M Technician", "Business Development Manager"];
  return (
    <>
      <PageHero eyebrow="Careers" title="Build solar infrastructure with people who care about the details." description="We look for practical engineers, clear communicators, disciplined site teams, and customer-focused operators." ctaHref="/contact" ctaLabel="Send your profile" />
      <section className="section bg-slate-50 dark:bg-white/[0.03]">
        <div className="container grid gap-5 md:grid-cols-2">
          {roles.map((role) => (
            <article key={role} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
              <h2 className="text-xl font-bold text-slate-950 dark:text-white">{role}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">Share your resume, location preference, and relevant solar or electrical project experience.</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
