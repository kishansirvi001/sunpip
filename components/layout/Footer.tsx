import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { navItems, services, siteConfig } from "@/lib/constants";
import { Newsletter } from "@/components/forms/Newsletter";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="container grid gap-10 py-14 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="" width={752} height={740} className="h-20 w-auto rounded-md bg-white p-1.5" />
          </div>
          <p className="mt-5 max-w-sm text-sm leading-6 text-slate-300">{siteConfig.description}</p>
          <div className="mt-6 space-y-3 text-sm text-slate-300">
            <p className="flex gap-2"><Phone aria-hidden="true" className="h-5 w-5 text-sun-blue" /> {siteConfig.phone}</p>
            <p className="flex gap-2"><Phone aria-hidden="true" className="h-5 w-5 text-sun-blue" /> WhatsApp {siteConfig.whatsappDisplay}</p>
            <p className="flex gap-2"><Mail aria-hidden="true" className="h-5 w-5 text-sun-blue" /> {siteConfig.email}</p>
            <p className="flex gap-2"><MapPin aria-hidden="true" className="h-5 w-5 text-sun-blue" /> {siteConfig.address}</p>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-slate-300">Pages</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-slate-300 transition hover:text-white">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-slate-300">Services</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {services.slice(0, 6).map((service) => (
              <li key={service.slug} className="text-slate-300">{service.title}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-slate-300">Newsletter</h2>
          <p className="mt-5 text-sm leading-6 text-slate-300">Solar policy, project finance, and maintenance notes for decision-makers.</p>
          <Newsletter />
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="container flex flex-col gap-3 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} SunPip Solutions. All rights reserved.</p>
          <p><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link> · <Link href="/terms" className="hover:text-white">Terms</Link></p>
        </div>
      </div>
    </footer>
  );
}
