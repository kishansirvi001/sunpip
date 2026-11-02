// Replace these labelled local slots with approved company photography.
const slot = "/images/project-placeholder.svg";
export const imageBlurData = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwIiBoZWlnaHQ9IjkwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxNjAiIGhlaWdodD0iOTAiIGZpbGw9IiNlZWYyZjMiLz48L3N2Zz4=";
export const pageHeroImages = {
  default: slot,
  quote: slot,
  services: slot,
  products: slot,
  projects: slot,
};
export const serviceImages: Record<string, string> = Object.fromEntries([
  "residential-rooftop-solar", "commercial-solar-installation", "industrial-solar-solutions",
  "government-subsidy-assistance", "complete-solar-epc", "solar-system-design",
  "operation-maintenance", "ups-systems", "inverter-solutions", "battery-backup-systems",
  "annual-maintenance-contracts", "solar-consultation", "net-metering-assistance", "site-survey",
].map((slug) => [slug, slot]));
export const serviceImageBySlug = serviceImages;
