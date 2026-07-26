import { ButtonLink } from "@/components/ui/ButtonLink";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] bg-white py-24 dark:bg-slate-950">
      <div className="container max-w-2xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-sun-blue">404</p>
        <h1 className="mt-4 text-4xl font-black text-slate-950 dark:text-white">This solar page is not available.</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300">The page may have moved, but SUNPIP SOLUTIONS LLP can still help you plan a rooftop solar project.</p>
        <div className="mt-8 flex justify-center"><ButtonLink href="/">Go home</ButtonLink></div>
      </div>
    </section>
  );
}
