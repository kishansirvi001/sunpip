import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export function ButtonLink({ href, children, variant = "primary", className = "" }: ButtonLinkProps) {
  const styles = {
    primary: "bg-sun-blue text-white shadow-sm hover:bg-blue-700",
    secondary: "bg-sun-blue text-white shadow-sm hover:bg-blue-700",
    ghost: "border border-slate-300 bg-white text-slate-900 shadow-sm hover:border-sun-blue hover:text-sun-blue dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:bg-white/15",
  };

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-sun-blue focus:ring-offset-2 dark:focus:ring-offset-slate-950 ${styles[variant]} ${className}`}
    >
      {children}
      <ArrowRight aria-hidden="true" className="h-4 w-4" />
    </Link>
  );
}
