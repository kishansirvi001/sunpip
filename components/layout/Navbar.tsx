"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

import { navItems, siteConfig } from "@/lib/constants";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { MegaMenu } from "@/components/layout/MegaMenu";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-white/95 shadow-[0_12px_36px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/92">
      <div className="container flex h-24 items-center justify-between gap-4">
        <Link href="/" className="flex shrink-0 items-center gap-3 rounded-full focus:outline-none focus:ring-2 focus:ring-sun-blue focus:ring-offset-4 dark:focus:ring-offset-slate-950">
          <Image
            src="/logo.png"
            alt={siteConfig.name}
            width={752}
            height={740}
            priority
            className="h-[4.5rem] w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-slate-200 bg-white p-1.5 shadow-sm dark:border-white/10 dark:bg-white/[0.06] lg:flex">
          {navItems.map((item) => (
            <div key={item.href} className={item.label === "Services" ? "group relative" : "relative"}>
              <Link
                href={item.href}
                className={`flex items-center gap-1 rounded-full px-4 py-2.5 text-sm font-bold transition ${
                  pathname === item.href
                    ? "bg-sun-blue text-white shadow-sm"
                    : "text-slate-700 hover:bg-slate-100 hover:text-sun-blue dark:text-slate-200 dark:hover:bg-white/10"
                }`}
              >
                {item.label}
                {item.label === "Services" ? <ChevronDown aria-hidden="true" className="h-4 w-4" /> : null}
              </Link>

              {item.label === "Services" ? <MegaMenu /> : null}
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <ButtonLink href={siteConfig.phoneHref} variant="ghost" className="px-4 py-2.5">
            <Phone aria-hidden="true" className="h-4 w-4" />
            Call Now
          </ButtonLink>
          <ButtonLink href="/get-quote" className="px-5 py-2.5">
            Get Quote
          </ButtonLink>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="icon-button"
          >
            {mobileOpen ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white shadow-xl dark:border-white/10 dark:bg-slate-950 lg:hidden">
          <div className="container grid gap-2 py-5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`rounded-lg px-4 py-3 text-base font-bold transition ${
                  pathname === item.href
                    ? "bg-sun-blue text-white"
                    : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <div className="mt-3 grid gap-3">
              <ButtonLink href={siteConfig.phoneHref} variant="ghost" onClick={() => setMobileOpen(false)}>
                <Phone aria-hidden="true" className="h-4 w-4" />
                Call Now
              </ButtonLink>
              <ButtonLink href="/get-quote" onClick={() => setMobileOpen(false)}>
                Get Free Quote
              </ButtonLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
