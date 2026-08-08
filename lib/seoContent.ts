export type SeoFaq = {
  question: string;
  answer: string;
};

export type SeoLink = {
  label: string;
  href: string;
};

export type SeoLandingPage = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keyword: string;
  heroTitle: string;
  heroDescription: string;
  serviceType: string;
  imageAlt: string;
  sections: Array<{ title: string; body: string; points: string[] }>;
  faqs: SeoFaq[];
  links: SeoLink[];
};

export type SolarSystemPage = {
  slug: string;
  capacity: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroDescription: string;
  bestFor: string[];
  planningNotes: string[];
  faqs: SeoFaq[];
};

const commonLinks: SeoLink[] = [
  { label: "Request a solar quote", href: "/get-quote" },
  { label: "Book a site visit", href: "/contact" },
  { label: "Solar savings calculator", href: "/solar-savings-calculator" },
  { label: "Solar system size calculator", href: "/solar-system-size-calculator" },
];

export const seoLandingPages: SeoLandingPage[] = [
  {
    slug: "residential-solar",
    title: "Residential Solar",
    metaTitle: "Residential Solar Company in Sojat & Pali",
    metaDescription: "Residential rooftop solar installation in Sojat, Pali and Rajasthan with site survey, system sizing, subsidy guidance, net metering help and after-sales support.",
    keyword: "residential solar in Sojat",
    heroTitle: "Residential solar installation in Sojat and Pali.",
    heroDescription: "Plan a home rooftop solar system around your electricity bill, roof area, shade, subsidy eligibility and future energy needs.",
    serviceType: "Residential rooftop solar installation",
    imageAlt: "Residential rooftop solar panels installed on a home in Rajasthan",
    sections: [
      {
        title: "Home solar planned around your real electricity use.",
        body: "SunPip Solutions helps homeowners in Sojat, Pali and nearby Rajasthan areas evaluate rooftop solar without confusing claims or generic packages.",
        points: ["Electricity bill review before sizing", "Roof and shade assessment before final quotation", "Guidance for PM Surya Ghar and net metering steps", "Installation, commissioning and handover support"],
      },
      {
        title: "What affects a residential solar quote?",
        body: "The right capacity depends on monthly units, sanctioned load, roof type, available shadow-free space and the kind of backup you expect during power cuts.",
        points: ["Monthly electricity bill and daytime usage", "RCC, metal sheet, tile or ground-mount conditions", "On-grid, hybrid or backup requirement", "DISCOM process and document readiness"],
      },
    ],
    faqs: [
      { question: "Is residential solar suitable for homes in Sojat and Pali?", answer: "Often yes, if the home has usable shadow-free roof area and a suitable electricity connection. A site survey confirms the practical capacity." },
      { question: "Can SunPip help with subsidy documentation?", answer: "SunPip can guide eligible residential consumers through documents and process steps. Approval and subsidy release depend on current scheme and DISCOM rules." },
      { question: "How do I start a home solar quotation?", answer: "Share your location, recent electricity bill, roof type and expected usage. A bill review and site visit make the quotation more reliable." },
    ],
    links: [
      { label: "Residential rooftop solar service", href: "/services/residential-rooftop-solar" },
      { label: "PM Surya Ghar subsidy guidance", href: "/pm-surya-ghar-solar-subsidy" },
      { label: "3kW solar system guide", href: "/3kw-solar-system" },
      ...commonLinks,
    ],
  },
  {
    slug: "commercial-solar",
    title: "Commercial Solar",
    metaTitle: "Commercial Solar Installation in Sojat, Pali & Rajasthan",
    metaDescription: "Commercial rooftop solar installation for shops, offices, schools, hospitals and businesses in Sojat, Pali and Rajasthan with ROI planning and O&M support.",
    keyword: "commercial solar installation Rajasthan",
    heroTitle: "Commercial solar installation for businesses in Rajasthan.",
    heroDescription: "Reduce long-term electricity cost with a solar proposal based on load profile, daytime consumption, roof condition and business operating hours.",
    serviceType: "Commercial solar installation",
    imageAlt: "Commercial rooftop solar installation on a business building",
    sections: [
      {
        title: "Solar for shops, offices and institutions.",
        body: "Commercial solar needs practical planning because usage pattern, working hours and roof access affect savings and maintenance.",
        points: ["Load and bill analysis", "ROI-focused capacity planning", "Component selection for maintainability", "Monitoring and O&M guidance"],
      },
      {
        title: "Built for repeat business operations.",
        body: "SunPip Solutions supports commercial consumers from feasibility to commissioning so the installation fits daily operations.",
        points: ["Site survey and cable route review", "Safety-first mounting and electrical checks", "Documentation and net metering guidance", "After-sales support for generation issues"],
      },
    ],
    faqs: [
      { question: "Which businesses can consider commercial solar?", answer: "Shops, offices, schools, hospitals, warehouses and similar consumers can evaluate solar after bill and roof review." },
      { question: "Does commercial solar qualify for residential subsidy?", answer: "Residential subsidy schemes generally apply to eligible residential consumers, not most commercial connections. Rules should be verified for the current connection type." },
      { question: "What should I share for a commercial solar quote?", answer: "Share recent bills, sanctioned load, roof details, business hours and whether backup is required for critical loads." },
    ],
    links: [
      { label: "Commercial solar service", href: "/services/commercial-solar-installation" },
      { label: "Solar ROI calculator", href: "/solar-roi-calculator" },
      { label: "10kW solar system guide", href: "/10kw-solar-system" },
      ...commonLinks,
    ],
  },
  {
    slug: "rooftop-solar",
    title: "Rooftop Solar",
    metaTitle: "Rooftop Solar Rajasthan | Sojat & Pali Installation",
    metaDescription: "Rooftop solar installation in Rajasthan for homes and businesses. SunPip Solutions supports Sojat and Pali customers with design, installation and net metering guidance.",
    keyword: "rooftop solar Rajasthan",
    heroTitle: "Rooftop solar installation in Sojat, Pali and Rajasthan.",
    heroDescription: "Use your roof to generate clean power with a system designed around space, shade, structure, load and local documentation requirements.",
    serviceType: "Rooftop solar installation",
    imageAlt: "Rooftop solar panels installed in Rajasthan sunlight",
    sections: [
      {
        title: "Rooftop solar starts with roof reality.",
        body: "A strong rooftop solar plan checks more than panel count. Structure, shadow, access, cable routing and inverter location all matter.",
        points: ["Shadow-free roof area estimate", "Roof type and mounting review", "Panel layout and inverter placement", "Safety and commissioning checklist"],
      },
      {
        title: "For homes and businesses.",
        body: "SunPip supports residential, commercial and institutional rooftop solar users with practical advice before equipment is finalized.",
        points: ["Residential subsidy and net metering guidance", "Commercial ROI planning", "System size recommendations", "Maintenance and cleaning guidance"],
      },
    ],
    faqs: [
      { question: "How much roof area is needed for rooftop solar?", answer: "A rough planning estimate is about 80 to 100 sq.ft. per kW, but panel wattage, layout and shade can change the final area." },
      { question: "Can rooftop solar work on a metal shed?", answer: "Often yes, but sheet condition, structure, mounting method, waterproofing and wind load must be checked." },
      { question: "What is the first step for rooftop solar in Rajasthan?", answer: "Start with an electricity bill review and site survey so capacity, roof feasibility and documentation can be checked together." },
    ],
    links: [
      { label: "Rooftop area calculator", href: "/rooftop-area-calculator" },
      { label: "Site survey service", href: "/services/site-survey" },
      { label: "5kW solar system guide", href: "/5kw-solar-system" },
      ...commonLinks,
    ],
  },
  {
    slug: "solar-epc",
    title: "Solar EPC",
    metaTitle: "Solar EPC Company in Sojat, Pali & Rajasthan",
    metaDescription: "Solar EPC company in Sojat, Pali and Rajasthan for engineering, procurement, installation, commissioning, subsidy guidance and after-sales solar support.",
    keyword: "solar EPC company Rajasthan",
    heroTitle: "Solar EPC company for Sojat, Pali and Rajasthan projects.",
    heroDescription: "Work with a local EPC team for solar consultation, design, procurement, installation, commissioning, net metering guidance and support.",
    serviceType: "Solar EPC",
    imageAlt: "Solar EPC project planning and rooftop installation",
    sections: [
      {
        title: "Engineering, procurement and construction in one flow.",
        body: "A good EPC process connects bill analysis, site constraints, system design, documentation and safe installation.",
        points: ["Requirement discussion and bill review", "Site survey and technical feasibility", "Component planning and proposal", "Installation, testing and handover"],
      },
      {
        title: "Local support for solar decisions.",
        body: "SunPip Solutions focuses on clear planning for customers in Sojat, Pali and Rajasthan rather than unsupported project claims.",
        points: ["Residential and commercial solar planning", "UPS, inverter and battery backup guidance", "O&M and annual maintenance support", "Single contact point for project coordination"],
      },
    ],
    faqs: [
      { question: "What does a solar EPC company do?", answer: "A solar EPC company manages engineering, procurement and construction, including design, equipment planning, installation, commissioning and handover support." },
      { question: "Is SunPip Solutions local to Sojat and Pali?", answer: "SunPip Solutions lists its office/service focus as Sojat, Pali and nearby areas in Rajasthan." },
      { question: "Can EPC include battery backup?", answer: "Yes, backup can be planned separately with UPS, inverter or hybrid battery options depending on selected loads and budget." },
    ],
    links: [
      { label: "Complete solar EPC service", href: "/services/complete-solar-epc" },
      { label: "Solar system design", href: "/services/solar-system-design" },
      { label: "Commercial solar", href: "/commercial-solar" },
      ...commonLinks,
    ],
  },
  {
    slug: "pm-surya-ghar-solar-subsidy",
    title: "PM Surya Ghar Solar Subsidy",
    metaTitle: "PM Surya Ghar Pali | Solar Subsidy Guidance",
    metaDescription: "PM Surya Ghar and rooftop solar subsidy guidance for eligible residential consumers in Pali, Sojat and Rajasthan. Get help with documents and process steps.",
    keyword: "PM Surya Ghar Pali",
    heroTitle: "PM Surya Ghar and solar subsidy guidance in Pali.",
    heroDescription: "Understand rooftop solar subsidy steps, document readiness, eligibility checks, installation flow and net metering requirements before you apply.",
    serviceType: "Solar subsidy assistance",
    imageAlt: "Solar subsidy paperwork and rooftop solar planning",
    sections: [
      {
        title: "Subsidy guidance without unsupported promises.",
        body: "Subsidy approval, amount and release depend on current government rules, portal requirements, DISCOM process and customer documents.",
        points: ["Eligibility and connection details review", "Document checklist guidance", "Portal and application process support", "Inspection and net metering readiness"],
      },
      {
        title: "Designed for residential consumers.",
        body: "PM Surya Ghar guidance is most relevant for eligible residential electricity consumers planning rooftop solar.",
        points: ["Recent electricity bill review", "Identity and bank detail readiness", "Roof feasibility before installation", "Commissioning and follow-up support"],
      },
    ],
    faqs: [
      { question: "Can SunPip guarantee subsidy approval?", answer: "No. SunPip can provide process guidance, but approval and release depend on current rules, portal status, DISCOM process and customer documents." },
      { question: "Who should ask about PM Surya Ghar in Pali?", answer: "Eligible residential electricity consumers in Pali, Sojat and nearby areas can ask for guidance before planning a rooftop solar system." },
      { question: "What documents are commonly needed?", answer: "A recent electricity bill, identity documents, bank details and property or consumer authorization details may be required, depending on current portal rules." },
    ],
    links: [
      { label: "Government subsidy page", href: "/government-subsidy" },
      { label: "Subsidy assistance service", href: "/services/government-subsidy-assistance" },
      { label: "Residential solar", href: "/residential-solar" },
      ...commonLinks,
    ],
  },
];

export const solarSystemPages: SolarSystemPage[] = [
  {
    slug: "1kw-solar-system",
    capacity: "1kW",
    metaTitle: "1kW Solar System in Sojat & Pali",
    metaDescription: "Plan a 1kW solar system in Sojat, Pali or Rajasthan for small homes and low monthly electricity usage with roof area and bill-based guidance.",
    heroTitle: "1kW solar system planning for small homes.",
    heroDescription: "A 1kW rooftop solar system may suit lower consumption homes when roof area, shade and electricity usage are aligned.",
    bestFor: ["Small homes with modest electricity use", "Basic daytime loads", "Customers starting with limited roof space"],
    planningNotes: ["Check monthly units before selecting capacity", "Confirm shadow-free roof area", "Review whether backup is needed separately"],
    faqs: [
      { question: "Is a 1kW solar system enough for a home?", answer: "It can support limited usage, but the right answer depends on monthly units and load pattern." },
      { question: "Can 1kW qualify for subsidy?", answer: "Eligibility depends on current residential scheme rules and the consumer connection." },
    ],
  },
  {
    slug: "2kw-solar-system",
    capacity: "2kW",
    metaTitle: "2kW Solar System in Sojat & Pali",
    metaDescription: "2kW solar system guidance for homes in Sojat, Pali and Rajasthan with capacity sizing, roof area review, subsidy guidance and quote support.",
    heroTitle: "2kW solar system guidance for Rajasthan homes.",
    heroDescription: "A 2kW system may fit homes with moderate consumption and enough usable rooftop area after shade review.",
    bestFor: ["Small to medium homes", "Moderate monthly electricity bills", "Residential users comparing 1kW and 3kW options"],
    planningNotes: ["Compare bill units with expected generation", "Review sanctioned load and DISCOM process", "Plan inverter placement and cable route"],
    faqs: [
      { question: "How do I know if 2kW is the right size?", answer: "Review monthly electricity units, roof area and daytime usage with a solar advisor." },
      { question: "Is battery included in a 2kW solar system?", answer: "Battery backup is separate for most on-grid systems and should be designed around selected backup loads." },
    ],
  },
  {
    slug: "3kw-solar-system",
    capacity: "3kW",
    metaTitle: "3kW Solar System in Sojat, Pali & Rajasthan",
    metaDescription: "3kW rooftop solar system planning for homes in Sojat, Pali and Rajasthan with subsidy guidance, net metering support and site survey.",
    heroTitle: "3kW solar system planning for homes in Sojat and Pali.",
    heroDescription: "A 3kW rooftop solar system is a common planning point for residential customers, but final sizing should follow a bill and roof survey.",
    bestFor: ["Residential homes with regular appliance usage", "Customers evaluating PM Surya Ghar guidance", "Homes with enough shadow-free roof area"],
    planningNotes: ["Check monthly units and seasonal usage", "Confirm net metering process for the connection", "Validate final capacity after site survey"],
    faqs: [
      { question: "Is 3kW popular for residential rooftop solar?", answer: "It is a common planning range for many homes, but the right capacity depends on actual consumption and roof space." },
      { question: "Can SunPip quote a 3kW system in Pali?", answer: "SunPip can review the bill, roof type and location to prepare a suitable quotation." },
    ],
  },
  {
    slug: "5kw-solar-system",
    capacity: "5kW",
    metaTitle: "5kW Solar System in Sojat, Pali & Rajasthan",
    metaDescription: "5kW solar system guidance for larger homes and small businesses in Sojat, Pali and Rajasthan with ROI, roof area and installation planning.",
    heroTitle: "5kW solar system planning for larger homes and businesses.",
    heroDescription: "A 5kW system may suit higher electricity use, but the final design depends on bill units, roof conditions and connection type.",
    bestFor: ["Larger homes with higher consumption", "Small commercial users", "Customers comparing payback and ROI"],
    planningNotes: ["Use the solar ROI calculator before finalizing", "Review available roof area and shade", "Check whether the connection is residential or commercial"],
    faqs: [
      { question: "Who should consider a 5kW solar system?", answer: "Homes or businesses with higher electricity bills may consider 5kW after bill and roof review." },
      { question: "Does 5kW need more roof space?", answer: "Yes. Capacity increases roof area needs, so a site survey is important." },
    ],
  },
  {
    slug: "10kw-solar-system",
    capacity: "10kW",
    metaTitle: "10kW Solar System in Sojat, Pali & Rajasthan",
    metaDescription: "10kW solar system planning for commercial buildings, institutions and high-usage homes in Sojat, Pali and Rajasthan with EPC and O&M support.",
    heroTitle: "10kW solar system planning for high-usage sites.",
    heroDescription: "A 10kW system is usually planned for larger homes, businesses or institutions after load study, roof survey and commercial feasibility review.",
    bestFor: ["Commercial rooftops and institutions", "High-usage residential sites", "Customers needing structured EPC planning"],
    planningNotes: ["Review load profile and business hours", "Plan mounting, access and safety carefully", "Include O&M expectations in the proposal"],
    faqs: [
      { question: "Is 10kW suitable for commercial solar?", answer: "It can be suitable for some commercial sites, depending on load, roof area and daytime consumption." },
      { question: "Should I get a site survey for 10kW?", answer: "Yes. Larger systems need careful structure, shadow, cable route and safety review." },
    ],
  },
];

export function getSeoLandingPage(slug: string) {
  return seoLandingPages.find((page) => page.slug === slug);
}

export function getSolarSystemPage(slug: string) {
  return solarSystemPages.find((page) => page.slug === slug);
}
