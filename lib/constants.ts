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
  url: "https://www.sunpipsolutions.com",
  founded: "2025",
  businessType: "Limited Liability Partnership (LLP)",
  industry: "Solar EPC",
  primaryBusiness: "Rooftop Solar EPC and Installation",
  operatingArea: "Sojat, Pali and surrounding areas in Rajasthan",
  phone: "8999088903",
  phoneHref: "tel:+918999088903",
  whatsapp: "917023945096",
  whatsappDisplay: "7023945096",
  email: "sunpipsolutions@gmail.com",
  instagram: "@sunpipsolutionsllp",
  address: "Sojat, Pali, Rajasthan, India",
  googleBusinessProfileUrl: "",
  whatsappMessage:
    "Hi Sunpip Solutions, I want to know about rooftop solar installation. Please help me with a quotation.",
  description:
    "SUNPIP SOLUTIONS LLP is a solar EPC and rooftop solar installation company in Sojat, Pali, Rajasthan, helping homes and businesses with solar design, installation, subsidy assistance, net metering guidance, and after-sales support.",
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Solar Solutions", href: "/residential-solar" },
  { label: "Services", href: "/services" },
  { label: "Calculator", href: "/solar-savings-calculator" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
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
  { label: "Local Office", value: 1, suffix: " in Sojat/Pali" },
  { label: "Site Survey", value: 1, suffix: " before final quote" },
  { label: "Support", value: 1, suffix: " contact point" },
  { label: "Real Projects", value: 0, suffix: " listed yet" },
];

export const whyChooseUs = [
  "Local solar installation support in Sojat and Pali",
  "Complete EPC service from survey to handover",
  "Electricity bill analysis before system sizing",
  "Roof and shadow assessment before final proposal",
  "Subsidy and application process guidance",
  "Net metering documentation guidance",
  "Residential, commercial, and O&M support",
  "After-sales support for installed systems",
];

export const trustPlaceholders = [
  "[ADD REAL CERTIFICATION IF APPLICABLE]",
  "[ADD REAL GOVERNMENT/DISCOM EMPANELMENT ONLY IF APPLICABLE]",
  "[ADD REAL PROJECT COUNT AFTER VERIFICATION]",
];

export const serviceAreas = [
  "Sojat",
  "Pali",
  "Rajasthan",
];

export const solarAssumptions = {
  defaultResidentialTariff: 8,
  defaultCommercialTariff: 10,
  dailyGenerationPerKw: 4.2,
  sqftPerKw: 90,
  onGridCostPerKw: 65000,
  hybridCostPerKw: 78000,
  offGridCostPerKw: 85000,
  residentialSubsidyNote:
    "Subsidy is not auto-calculated on this site. Add current verified PM Surya Ghar subsidy values in this config before displaying exact amounts.",
};

export const pmSuryaGharContent = {
  title: "PM Surya Ghar Yojana - Rooftop Solar Subsidy Assistance",
  subsidyAmountNote:
    "[ADD CURRENT VERIFIED SUBSIDY AMOUNTS FROM OFFICIAL GOVERNMENT/DISCOM SOURCES BEFORE DISPLAYING FIGURES]",
  documents: [
    "Recent electricity bill",
    "Aadhaar/PAN or applicable identity document",
    "Bank account details where required",
    "Property/consumer ownership or authorization details where required",
    "Passport-size photo or other portal-required documents, if applicable",
  ],
  disclaimer:
    "Subsidy eligibility, amount, approval, inspection, net metering, and release of subsidy depend on current government rules, portal requirements, DISCOM process, and customer documents.",
};

export const customerTypes = ["Residential", "Commercial", "Industrial", "Other"];
export const enquiryInterests = [
  "Solar Installation",
  "Government subsidy assistance",
  "Commercial Solar",
  "Solar O&M",
  "UPS/Battery",
  "Other",
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

export const brandPartners = [
  "Solar Modules",
  "Solar Inverters",
  "UPS Systems",
  "Battery Backup",
  "Mounting Structures",
  "Protection & BOS",
];

export const projects: Project[] = [
  {
    title: "Add your first residential project here",
    location: "[ADD REAL LOCATION]",
    capacity: "[ADD SYSTEM SIZE]",
    category: "Residential",
    panelBrand: "[ADD PANEL BRAND]",
    inverterBrand: "[ADD INVERTER BRAND]",
    image: "/images/project-placeholder.svg",
    result: "Placeholder only. Replace with a real Sunpip installation before publishing as a project.",
    isPlaceholder: true,
  },
  {
    title: "Add your first commercial project here",
    location: "[ADD REAL LOCATION]",
    capacity: "[ADD SYSTEM SIZE]",
    category: "Commercial",
    panelBrand: "[ADD PANEL BRAND]",
    inverterBrand: "[ADD INVERTER BRAND]",
    image: "/images/project-placeholder.svg",
    result: "Placeholder only. Add real photographs, system size, brands, and customer type.",
    isPlaceholder: true,
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
  "Enquiry",
  "Electricity bill analysis",
  "Site assessment",
  "System design",
  "Quotation",
  "Documentation/application support",
  "Installation",
  "Testing and commissioning",
  "Net metering/applicable process",
  "Handover",
  "After-sales support",
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

export const roofTypes = ["RCC", "Metal Sheet", "Tile", "Ground", "Other"];

export const tickerItems = [
  "Rooftop solar for homes and businesses",
  "PM Surya Ghar guidance",
  "Net metering support",
  "Serving Sojat, Pali and nearby areas",
  "UPS, inverter, and battery backup solutions",
];

export const legalUpdated = "July 11, 2026";

export const faqItems = [
  {
    question: "How much solar capacity do I need?",
    answer: "Capacity depends on your monthly electricity units, sanctioned load, roof space, shade, and daytime usage. A site survey and bill review give the most reliable recommendation.",
  },
  {
    question: "How much roof space is required?",
    answer: "As a rough estimate, 1 kW of rooftop solar may need around 80 to 100 sq.ft. of usable shadow-free roof area. Final area depends on panel wattage and layout.",
  },
  {
    question: "What happens during a power cut?",
    answer: "Most on-grid solar systems shut down during a power cut for safety. Backup requires a UPS, battery, or hybrid system designed for selected loads.",
  },
  {
    question: "What is PM Surya Ghar?",
    answer: "PM Surya Ghar is a government rooftop solar scheme for eligible residential consumers. Eligibility and subsidy release depend on current rules and DISCOM processes.",
  },
  {
    question: "What is net metering?",
    answer: "Net metering records solar electricity exported to the grid and adjusts it as per applicable DISCOM rules. The process and approval depend on your connection and local requirements.",
  },
  {
    question: "Can businesses install rooftop solar?",
    answer: "Yes. Shops, offices, schools, hospitals, factories, and warehouses can use rooftop solar after load analysis, roof assessment, and commercial feasibility review.",
  },
  {
    question: "Can solar be installed on a metal roof?",
    answer: "Often yes, but structure, sheet condition, mounting method, wind load, and waterproofing must be checked before final design.",
  },
  {
    question: "How do I get a quotation?",
    answer: "Share your name, mobile number, location, electricity bill, customer type, roof type, and requirement. Sunpip can then review feasibility and suggest next steps.",
  },
];
