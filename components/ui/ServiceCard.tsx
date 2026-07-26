import type { Service } from "@/types/site";
import Image from "next/image";
import Link from "next/link";

const serviceImages: Record<string, string> = {
  "residential-rooftop-solar": "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=85",
  "commercial-solar-installation": "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=900&q=85",
  "industrial-solar-solutions": "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=900&q=85",
  "government-subsidy-assistance": "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=85",
  "complete-solar-epc": "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=85",
  "solar-system-design": "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=900&q=85",
  "operation-maintenance": "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=900&q=85",
  "ups-systems": "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=900&q=85",
  "inverter-solutions": "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=900&q=85",
  "battery-backup-systems": "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=900&q=85",
  "annual-maintenance-contracts": "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=85",
  "solar-consultation": "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=900&q=85",
  "net-metering-assistance": "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=900&q=85",
  "site-survey": "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=85",
};

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  const image = serviceImages[service.slug] ?? serviceImages["complete-solar-epc"];

  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft dark:border-white/10 dark:bg-white/[0.03]">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image src={image} alt={`${service.title} solar service`} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/5 to-transparent" />
        <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/95 text-sun-blue shadow-sm">
          <Icon aria-hidden="true" className="h-6 w-6" />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-950 dark:text-white">{service.title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{service.description}</p>
        <ul className="mt-5 space-y-2 text-sm text-slate-600 dark:text-slate-300">
          {service.features.slice(0, 3).map((feature) => (
            <li key={feature} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sun-blue" />
              {feature}
            </li>
          ))}
        </ul>
        <Link href={`/services/${service.slug}`} className="mt-5 inline-flex text-sm font-bold text-sun-blue transition hover:text-blue-700">
          View service
        </Link>
      </div>
    </article>
  );
}
