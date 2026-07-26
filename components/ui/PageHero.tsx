import { ButtonLink } from "@/components/ui/ButtonLink";
import Image from "next/image";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  ctaHref?: string;
  ctaLabel?: string;
};

export function PageHero({ eyebrow, title, description, ctaHref, ctaLabel }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-slate-950 py-24 text-white dark:border-white/10 sm:py-28">
      <Image src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=1800&q=86" alt="Solar panels producing clean energy" fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/35" />
      <div className="container relative">
        <div className="max-w-4xl">
          <p className="mb-4 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-white backdrop-blur">{eyebrow}</p>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">{description}</p>
          {ctaHref && ctaLabel ? (
            <div className="mt-8">
              <ButtonLink href={ctaHref}>{ctaLabel}</ButtonLink>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
