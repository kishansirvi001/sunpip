"use client";

import { siteConfig } from "@/lib/constants";
import { trackEvent } from "@/lib/analytics";
import { usePathname } from "next/navigation";
import hi from "@/messages/hi.json";

export function StickyCTA() {
  const pathname = usePathname();
  const isHindi = pathname.startsWith("/hi");
  return <nav aria-label="Contact SUNPIP" className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-slate-200 bg-white p-2 pb-[max(.5rem,env(safe-area-inset-bottom))] shadow-[0_-8px_30px_rgba(15,23,42,.12)] md:hidden">
    <a onClick={()=>trackEvent("call_click", {placement:"sticky"})} className="flex min-h-11 items-center justify-center rounded-lg bg-slate-900 px-3 text-sm font-bold text-white" href={siteConfig.phoneHref}>{isHindi ? "कॉल" : "Call"}: {siteConfig.phone}</a>
    <a onClick={()=>trackEvent("whatsapp_click", {placement:"sticky"})} className="flex min-h-11 items-center justify-center rounded-lg bg-[#168b45] px-3 text-sm font-bold text-white" href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}>{isHindi ? hi.hero.whatsapp : "WhatsApp"}: {siteConfig.whatsappDisplay}</a>
  </nav>;
}
