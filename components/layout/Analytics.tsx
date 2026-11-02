"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const id = process.env.NEXT_PUBLIC_GA4_ID;

export function Analytics() {
  const [consented, setConsented] = useState(false);
  useEffect(() => {
    const sync = () => setConsented(window.localStorage.getItem("cookie-consent") === "accepted");
    sync();
    window.addEventListener("storage", sync);
    const timer = window.setInterval(sync, 1500);
    return () => { window.removeEventListener("storage", sync); window.clearInterval(timer); };
  }, []);
  if (!id || !consented) return null;
  return <>
    <Script src={`https://www.googletagmanager.com/gtag/js?id=${id}`} strategy="afterInteractive" />
    <Script id="ga4-init" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];window.gtag=function(){dataLayer.push(arguments)};window.gtag('js',new Date());window.gtag('config','${id}',{anonymize_ip:true});`}</Script>
  </>;
}
