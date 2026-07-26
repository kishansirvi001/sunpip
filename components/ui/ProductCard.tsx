import Image from "next/image";
import type { Product } from "@/types/site";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft dark:border-white/10 dark:bg-white/[0.03]">
      <div className="relative aspect-[5/3]">
        <Image src={product.image} alt={product.title} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
      </div>
      <div className="p-5">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-sun-blue">{product.category}</p>
        <h3 className="mt-2 text-xl font-bold text-slate-950 dark:text-white">{product.title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{product.description}</p>
      </div>
    </article>
  );
}
