import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/constants";
import hi from "@/messages/hi.json";

export const metadata: Metadata = {
  title: "घर के लिए रूफटॉप सोलर | SUNPIP SOLUTIONS LLP",
  description: hi.hero.description,
  alternates: { canonical: `${siteConfig.url}/hi`, languages: { en: siteConfig.url, hi: `${siteConfig.url}/hi` } },
};

export default function HindiHome() {
  return <div lang="hi" className="bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
    <section className="bg-sun-ink py-20 text-white"><div className="container max-w-4xl">
      <p className="text-sm font-bold text-amber-300">सोजत • पाली • आसपास के इलाके</p>
      <h1 className="mt-5 text-4xl font-black leading-tight sm:text-6xl">{hi.hero.title}</h1>
      <p className="mt-4 text-2xl font-bold text-amber-300">{hi.hero.subtitle}</p>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-100">{hi.hero.description}</p>
      <div className="mt-8 flex flex-wrap gap-3"><Link className="rounded-xl bg-amber-800 px-6 py-4 font-bold text-white" href="/get-quote">{hi.hero.quote}</Link><a className="rounded-xl border border-white/40 px-6 py-4 font-bold" href={`https://wa.me/${siteConfig.whatsapp}`}>{hi.hero.whatsapp}</a></div>
      <div className="mt-8 grid gap-3 sm:grid-cols-3">{Object.values(hi.trust).map((item)=><div className="rounded-xl border border-white/20 p-4" key={item}>{item}</div>)}</div>
    </div></section>
      <section className="section"><div className="container"><h2 className="text-3xl font-bold">सोलर सेवाएं</h2><div className="mt-6 grid gap-4 sm:grid-cols-2">{[["घर के लिए रूफटॉप सोलर","/services/residential-rooftop-solar"],["दुकान और व्यवसाय के लिए सोलर","/services/commercial-solar-installation"],["सब्सिडी और नेट मीटरिंग सहायता","/pm-surya-ghar-solar-subsidy"],["सोलर की देखभाल और AMC","/services/operation-maintenance"]].map(([title,href])=><Link className="rounded-xl border border-slate-200 bg-white p-5 font-bold dark:border-white/10 dark:bg-white/[0.04]" href={href} key={href}>{title}</Link>)}</div><div className="mt-8 flex flex-wrap gap-4"><Link className="font-bold text-sun-blue underline" href="/solar-savings-calculator">सोलर बचत कैलकुलेटर</Link><Link className="font-bold text-sun-blue underline" href="/">अंग्रेज़ी में देखें</Link></div></div></section>
  </div>;
}
