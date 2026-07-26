import {
  BatteryCharging,
  Building2,
  ClipboardCheck,
  Factory,
  GraduationCap,
  HeartPulse,
  Home,
  IndianRupee,
  Landmark,
  MapPinned,
  PlugZap,
  ShieldCheck,
  Store,
  SunMedium,
  Tractor,
  Wrench,
  Zap,
} from "lucide-react";
import type { BlogPost, NavItem, Product, Project, Service } from "@/types/site";

export const siteConfig = {
  name: "SUNPIP SOLUTIONS LLP",
  shortName: "SunPip Solutions",
  url: "https://sunpipsolutions.com",
  founded: "2025",
  businessType: "Limited Liability Partnership (LLP)",
  industry: "Solar EPC",
  primaryBusiness: "Residential Rooftop Solar EPC",
  operatingArea: "Entire Rajasthan",
  phone: "8999088903",
  phoneHref: "tel:+918999088903",
  whatsapp: "917023945096",
  whatsappDisplay: "7023945096",
  email: "sunpipsolutions@gmail.com",
  instagram: "@sunpipsolutionsllp",
  address: "Rajasthan, India",
  description:
    "SUNPIP SOLUTIONS LLP is a Rajasthan-focused Solar EPC company providing complete rooftop solar consultation, design, subsidy assistance, installation, commissioning, and maintenance.",
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Subsidy", href: "/government-subsidy" },
  { label: "Calculators", href: "/solar-savings-calculator" },
  { label: "Contact", href: "/contact" },
];

export const calculatorRoutes = [
  "/solar-savings-calculator",
  "/solar-system-size-calculator",
  "/rooftop-area-calculator",
  "/solar-emi-calculator",
  "/solar-roi-calculator",
];

const defaultBenefits = [
  "Lower monthly electricity bills",
  "Clear documentation and approval support",
  "Professional installation with safety checks",
  "Long-term performance and maintenance guidance",
];

const defaultProcess = [
  "Requirement discussion and bill review",
  "Site survey and roof assessment",
  "Solar design, proposal, and approvals",
  "Installation, commissioning, and training",
  "Monitoring, support, and annual maintenance",
];

export const services: Service[] = [
  {
    title: "Residential Rooftop Solar",
    slug: "residential-rooftop-solar",
    description: "Premium rooftop solar solutions for Rajasthan homeowners who want lower electricity bills and clean energy.",
    features: ["Bill analysis", "Subsidy assistance", "Net metering", "After-sales maintenance"],
    benefits: ["Reduce household electricity bills", "Use available rooftop space", "Improve long-term energy independence", "Support clean energy adoption"],
    process: defaultProcess,
    related: ["government-subsidy-assistance", "net-metering-assistance", "annual-maintenance-contracts"],
    icon: Home,
  },
  {
    title: "Commercial Solar Installation",
    slug: "commercial-solar-installation",
    description: "Solar power systems for shops, offices, schools, hospitals, and commercial buildings.",
    features: ["Load study", "ROI planning", "Tier-1 components", "Remote monitoring"],
    benefits: defaultBenefits,
    process: defaultProcess,
    related: ["solar-system-design", "operation-maintenance", "net-metering-assistance"],
    icon: Store,
  },
  {
    title: "Industrial Solar Solutions",
    slug: "industrial-solar-solutions",
    description: "Robust rooftop and ground-mount solar solutions for factories, warehouses, and industrial consumers.",
    features: ["HT/LT integration", "Energy savings planning", "Safety-first execution", "O&M support"],
    benefits: defaultBenefits,
    process: defaultProcess,
    related: ["complete-solar-epc", "solar-consultation", "annual-maintenance-contracts"],
    icon: Factory,
  },
  {
    title: "Government Subsidy Assistance",
    slug: "government-subsidy-assistance",
    description: "Documentation and process guidance for eligible rooftop solar subsidy applications.",
    features: ["Eligibility guidance", "Application support", "Document checklist", "DISCOM coordination"],
    benefits: ["Reduce upfront project cost", "Avoid documentation errors", "Understand eligibility clearly", "Move through approvals faster"],
    process: defaultProcess,
    related: ["residential-rooftop-solar", "net-metering-assistance", "site-survey"],
    icon: Landmark,
  },
  {
    title: "Complete Solar EPC",
    slug: "complete-solar-epc",
    description: "End-to-end engineering, procurement, construction, commissioning, and handover for solar projects.",
    features: ["Engineering", "Procurement", "Installation", "Commissioning"],
    benefits: defaultBenefits,
    process: defaultProcess,
    related: ["solar-system-design", "operation-maintenance", "solar-consultation"],
    icon: SunMedium,
  },
  {
    title: "Solar System Design",
    slug: "solar-system-design",
    description: "Customized solar system design based on electricity bill, roof area, shade, load, and future usage.",
    features: ["Capacity sizing", "Shadow planning", "Layout design", "Component selection"],
    benefits: defaultBenefits,
    process: defaultProcess,
    related: ["site-survey", "complete-solar-epc", "solar-consultation"],
    icon: ClipboardCheck,
  },
  {
    title: "Operation & Maintenance (O&M)",
    slug: "operation-maintenance",
    description: "Reliable preventive and corrective maintenance to protect solar generation and warranties.",
    features: ["Panel cleaning", "Fault checks", "Performance audits", "Service reports"],
    benefits: defaultBenefits,
    process: defaultProcess,
    related: ["annual-maintenance-contracts", "complete-solar-epc", "inverter-solutions"],
    icon: Wrench,
  },
  {
    title: "UPS Systems",
    slug: "ups-systems",
    description: "UPS solutions for homes, businesses, schools, hospitals, and essential backup loads.",
    features: ["Load selection", "Backup planning", "Installation", "Maintenance"],
    benefits: defaultBenefits,
    process: defaultProcess,
    related: ["battery-backup-systems", "inverter-solutions", "solar-consultation"],
    icon: Zap,
  },
  {
    title: "Inverter Solutions",
    slug: "inverter-solutions",
    description: "Grid-tie, hybrid, and backup inverter guidance for solar and power backup needs.",
    features: ["Inverter sizing", "Brand guidance", "Protection checks", "Monitoring setup"],
    benefits: defaultBenefits,
    process: defaultProcess,
    related: ["battery-backup-systems", "operation-maintenance", "ups-systems"],
    icon: PlugZap,
  },
  {
    title: "Battery Backup Systems",
    slug: "battery-backup-systems",
    description: "Battery and hybrid backup solutions for critical loads and power reliability.",
    features: ["Backup sizing", "Battery selection", "Hybrid setup", "Safety guidance"],
    benefits: defaultBenefits,
    process: defaultProcess,
    related: ["ups-systems", "inverter-solutions", "solar-system-design"],
    icon: BatteryCharging,
  },
  {
    title: "Annual Maintenance Contracts",
    slug: "annual-maintenance-contracts",
    description: "Annual maintenance plans for solar systems, inverters, batteries, and backup equipment.",
    features: ["Scheduled visits", "Cleaning", "Health checks", "Support reports"],
    benefits: defaultBenefits,
    process: defaultProcess,
    related: ["operation-maintenance", "inverter-solutions", "battery-backup-systems"],
    icon: ShieldCheck,
  },
  {
    title: "Solar Consultation",
    slug: "solar-consultation",
    description: "Expert consultation for savings, feasibility, ROI, subsidy, and installation planning.",
    features: ["Bill review", "Savings estimate", "ROI advice", "Technology guidance"],
    benefits: defaultBenefits,
    process: defaultProcess,
    related: ["site-survey", "solar-system-design", "government-subsidy-assistance"],
    icon: ClipboardCheck,
  },
  {
    title: "Net Metering Assistance",
    slug: "net-metering-assistance",
    description: "Support for net metering documentation, application, inspection, and activation.",
    features: ["DISCOM documents", "Application support", "Inspection readiness", "Meter activation"],
    benefits: defaultBenefits,
    process: defaultProcess,
    related: ["government-subsidy-assistance", "residential-rooftop-solar", "complete-solar-epc"],
    icon: IndianRupee,
  },
  {
    title: "Site Survey",
    slug: "site-survey",
    description: "Professional roof, load, shadow, and feasibility survey before solar project planning.",
    features: ["Roof inspection", "Load review", "Shade check", "Feasibility note"],
    benefits: defaultBenefits,
    process: defaultProcess,
    related: ["solar-consultation", "solar-system-design", "complete-solar-epc"],
    icon: MapPinned,
  },
];

export const stats = [
  { label: "Years Experience", value: 2, suffix: "+" },
  { label: "Projects Completed", value: 17, suffix: "+" },
  { label: "Solar Installed", value: 40, suffix: " kW+" },
  { label: "Customer Support", value: 100, suffix: "%" },
];

export const whyChooseUs = [
  "Complete turnkey EPC solutions",
  "High quality tier-1 solar components",
  "Government subsidy assistance",
  "Professional installation team",
  "Transparent pricing",
  "Fast installation",
  "Customized solar design",
  "Long product warranty",
  "Excellent after-sales service",
  "Remote system monitoring",
  "Energy savings consultation",
  "Safety-first installation standards",
  "Trusted solar brands",
  "On-time project delivery",
  "Dedicated customer support",
  "Maximum return on investment",
  "Hassle-free documentation",
  "Net metering support",
  "High customer satisfaction",
  "Reliable maintenance services",
];

export const targetCustomers = [
  {
    title: "Homeowners",
    icon: Home,
    useCase: "Reduce monthly bills with subsidized residential rooftop solar and net metering support.",
  },
  {
    title: "Businesses",
    icon: Building2,
    useCase: "Control operating costs with professionally designed solar for shops, offices, and commercial buildings.",
  },
  {
    title: "Schools",
    icon: GraduationCap,
    useCase: "Lower institutional energy bills while demonstrating clean energy leadership to students.",
  },
  {
    title: "Hospitals",
    icon: HeartPulse,
    useCase: "Support critical facilities with dependable solar, inverter, UPS, and battery backup planning.",
  },
  {
    title: "Farmers",
    icon: Tractor,
    useCase: "Use solar consultation and energy planning for agriculture, pumping, and rural power needs.",
  },
];

export const brandPartners = ["Tata Power Solar", "Waaree", "Adani Solar", "Luminous", "Rayzon Solar", "Premier Energies"];

export const projects: Project[] = [
  {
    title: "Residential Rooftop Solar",
    location: "Jaipur, Rajasthan",
    capacity: "5 kW",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
    result: "Lower monthly electricity bill with subsidy guidance",
  },
  {
    title: "Commercial Solar Plant",
    location: "Jodhpur, Rajasthan",
    capacity: "15 kW",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80",
    result: "Improved daytime energy savings for business operations",
  },
  {
    title: "Institution Solar Installation",
    location: "Udaipur, Rajasthan",
    capacity: "20 kW",
    category: "Institutional",
    image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=1200&q=80",
    result: "Clean energy adoption with long-term maintenance planning",
  },
];

export const products: Product[] = [
  {
    title: "Tier-1 Solar Modules",
    category: "Panels",
    description: "Reliable high-efficiency modules from trusted solar brands for Rajasthan rooftop conditions.",
    image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Solar Inverters",
    category: "Inverters",
    description: "Grid-tie, hybrid, and backup inverter options selected according to site load and monitoring needs.",
    image: "https://images.unsplash.com/photo-1566093097221-ac2335b09e68?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Battery Backup Systems",
    category: "Backup",
    description: "Battery and UPS solutions for homes, businesses, schools, hospitals, and critical power needs.",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=900&q=80",
  },
];

export const processSteps = [
  "Free consultation and bill analysis",
  "Site survey and roof feasibility",
  "Custom solar design and proposal",
  "Subsidy, documentation, and net metering support",
  "Installation, commissioning, and after-sales maintenance",
];

export const blogPosts: BlogPost[] = [
  {
    title: "Rooftop Solar Subsidy in Rajasthan: What Homeowners Should Know",
    excerpt: "A practical guide to eligibility, documentation, net metering, and planning a residential rooftop solar project.",
    date: "2026-06-18",
    readTime: "5 min read",
  },
  {
    title: "How Much Can a 5 kW Solar System Save?",
    excerpt: "Understand generation, bill reduction, payback, and maintenance expectations for a typical home solar system.",
    date: "2026-05-22",
    readTime: "4 min read",
  },
  {
    title: "Why Site Survey Matters Before Solar Installation",
    excerpt: "Roof type, shadow, load, structure, and cable route all affect safety, cost, and long-term generation.",
    date: "2026-04-12",
    readTime: "6 min read",
  },
];

export const serviceStates = ["Rajasthan"];

export const roofTypes = ["RCC roof", "Metal shed", "Tile roof", "Ground mount"];

export const tickerItems = [
  "Residential rooftop solar EPC",
  "Government subsidy assistance",
  "Net metering support",
  "Entire Rajasthan coverage",
  "UPS, inverter, and battery backup solutions",
];

export const legalUpdated = "July 11, 2026";
