import type { Metadata } from "next";
import { ProductCard } from "@/components/ui/ProductCard";
import { PageHero } from "@/components/ui/PageHero";
import { products } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";
import { pageHeroImages } from "@/lib/visuals";

export const metadata: Metadata = createMetadata("Products", "Solar modules, inverters, pump controllers, and balance-of-system products selected for reliable solar EPC outcomes.", "/products");

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Solar products selected for field performance."
        description="We recommend modules, inverters, controllers, and BOS components according to project context, warranty strength, and maintainability."
        ctaHref="/contact"
        ctaLabel="Discuss products"
        imageSrc={pageHeroImages.products}
        imageAlt="Solar inverter and electrical equipment"
      />
      <section className="section bg-slate-50 dark:bg-white/[0.03]">
        <div className="container grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => <ProductCard key={product.title} product={product} />)}
        </div>
      </section>
    </>
  );
}
