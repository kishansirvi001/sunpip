"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/constants";

export function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${siteConfig.whatsapp}?text=Hello%20SUNPIP%20SOLUTIONS%2C%20I%20want%20a%20solar%20quote.`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with SunPip Solutions on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-sun-blue text-white shadow-soft transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sun-blue focus:ring-offset-2 dark:focus:ring-offset-slate-950"
    >
      <MessageCircle aria-hidden="true" className="h-6 w-6" />
    </a>
  );
}
