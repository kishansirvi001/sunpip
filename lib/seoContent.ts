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
  sections: Array<{
    title: string;
    body: string;
    points: string[];
  }>;
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
  guidance: Array<{
    title: string;
    body: string;
    points: string[];
  }>;
  faqs: SeoFaq[];
};

export type LocationPage = {
  slug: string;
  city: string;
  districtContext: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroDescription: string;
  serviceType: string;
  localNotes: string[];
  sections: Array<{
    title: string;
    body: string;
    points: string[];
  }>;
  faqs: SeoFaq[];
};

export type ContentArticle = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  keywords: string[];
  sections: Array<{
    title: string;
    body: string;
    points?: string[];
  }>;
  faqs: SeoFaq[];
  links: SeoLink[];
};

/*
 * SEO CONTENT STRATEGY
 *
 * Primary local market:
 * - Sojat
 * - Pali
 * - Rajasthan
 *
 * Main search intents:
 * - residential rooftop solar
 * - commercial solar
 * - rooftop solar installation
 * - solar EPC
 * - PM Surya Ghar / subsidy guidance
 * - capacity-specific solar systems
 *
 * Important:
 * Do not add exact subsidy amounts, generation guarantees,
 * project counts, certifications, or government empanelment
 * claims here unless they are verified and current.
 */

const commonLinks: SeoLink[] = [
  {
    label: "Request a solar quote",
    href: "/get-quote",
  },
  {
    label: "Book a solar site visit",
    href: "/contact",
  },
  {
    label: "Calculate solar savings",
    href: "/solar-savings-calculator",
  },
  {
    label: "Calculate solar system size",
    href: "/solar-system-size-calculator",
  },
];

const residentialLinks: SeoLink[] = [
  {
    label: "Residential rooftop solar service",
    href: "/services/residential-rooftop-solar",
  },
  {
    label: "Solar subsidy assistance",
    href: "/pm-surya-ghar-solar-subsidy",
  },
  {
    label: "Net metering assistance",
    href: "/services/net-metering-assistance",
  },
  {
    label: "3kW solar system guide",
    href: "/3kw-solar-system",
  },
  ...commonLinks,
];

const commercialLinks: SeoLink[] = [
  {
    label: "Commercial solar installation",
    href: "/services/commercial-solar-installation",
  },
  {
    label: "Complete solar EPC",
    href: "/services/complete-solar-epc",
  },
  {
    label: "Solar ROI calculator",
    href: "/solar-roi-calculator",
  },
  {
    label: "10kW solar system guide",
    href: "/10kw-solar-system",
  },
  ...commonLinks,
];

const rooftopLinks: SeoLink[] = [
  {
    label: "Solar site survey",
    href: "/services/site-survey",
  },
  {
    label: "Solar system design",
    href: "/services/solar-system-design",
  },
  {
    label: "Residential rooftop solar",
    href: "/services/residential-rooftop-solar",
  },
  {
    label: "Commercial solar",
    href: "/commercial-solar",
  },
  {
    label: "Rooftop area calculator",
    href: "/rooftop-area-calculator",
  },
  ...commonLinks,
];

const epcLinks: SeoLink[] = [
  {
    label: "Complete solar EPC service",
    href: "/services/complete-solar-epc",
  },
  {
    label: "Solar system design",
    href: "/services/solar-system-design",
  },
  {
    label: "Solar site survey",
    href: "/services/site-survey",
  },
  {
    label: "Commercial solar installation",
    href: "/commercial-solar",
  },
  {
    label: "Solar O&M service",
    href: "/services/operation-maintenance",
  },
  ...commonLinks,
];

const subsidyLinks: SeoLink[] = [
  {
    label: "Government subsidy assistance",
    href: "/pm-surya-ghar-solar-subsidy",
  },
  {
    label: "Residential solar",
    href: "/services/residential-rooftop-solar",
  },
  {
    label: "Net metering assistance",
    href: "/services/net-metering-assistance",
  },
  {
    label: "3kW solar system guide",
    href: "/3kw-solar-system",
  },
  ...commonLinks,
];

export const seoLandingPages: SeoLandingPage[] = [
  {
    slug: "residential-solar",
    title: "Residential Solar",
    metaTitle: "Residential Solar Company in Sojat & Pali",
    metaDescription:
      "Residential rooftop solar installation in Sojat, Pali and nearby Rajasthan areas. Get bill-based system sizing, site survey, subsidy guidance, net metering support and installation assistance.",
    keyword: "residential solar company in Sojat",
    heroTitle:
      "Residential rooftop solar installation in Sojat and Pali.",
    heroDescription:
      "Plan a home solar system around your electricity consumption, roof area, shade, connection details and budget with practical guidance from SunPip Solutions.",
    serviceType: "Residential rooftop solar installation",
    imageAlt:
      "Residential rooftop solar panels installed on a home in Rajasthan",
    sections: [
      {
        title: "Solar for homes based on your actual electricity use.",
        body:
          "SunPip Solutions helps homeowners in Sojat, Pali and nearby Rajasthan areas plan rooftop solar using their electricity bill, roof conditions and expected energy needs instead of choosing a system only by its advertised capacity.",
        points: [
          "Electricity bill and monthly consumption review",
          "Roof area and shadow assessment",
          "Solar capacity planning based on household usage",
          "Guidance for applicable subsidy and net metering processes",
          "Installation, commissioning and handover support",
        ],
      },
      {
        title: "How we plan a residential solar system.",
        body:
          "The right residential solar system depends on more than the number of panels. Roof direction, shade, available space, sanctioned load, daytime consumption and the type of electricity connection can all affect the final design.",
        points: [
          "Review recent electricity bills",
          "Check usable shadow-free roof space",
          "Assess roof type and mounting requirements",
          "Select an appropriate system configuration",
          "Plan inverter location and cable routing",
        ],
      },
      {
        title: "Residential rooftop solar in Sojat and Pali.",
        body:
          "SunPip Solutions provides local solar installation support for homeowners looking to understand system sizing, project requirements, documentation and installation before committing to a final quotation.",
        points: [
          "Local site survey and feasibility review",
          "Residential rooftop solar planning",
          "Subsidy process guidance for eligible consumers",
          "Net metering process guidance",
          "After-sales and maintenance support",
        ],
      },
    ],
    faqs: [
      {
        question:
          "Which solar system is suitable for a home in Sojat or Pali?",
        answer:
          "The suitable capacity depends on monthly electricity consumption, sanctioned load, roof area, shade and usage pattern. A recent electricity bill and site assessment provide a better basis for selecting the system size.",
      },
      {
        question:
          "How much roof area is needed for residential solar?",
        answer:
          "A rough planning estimate is around 80 to 100 square feet of usable shadow-free roof area per kW, although the actual requirement depends on panel wattage, layout, setbacks and roof conditions.",
      },
      {
        question:
          "Can SunPip Solutions help with solar subsidy procedures?",
        answer:
          "SunPip Solutions can provide guidance on documents and the applicable application and installation process. Eligibility, approval and subsidy release depend on the current government scheme, portal requirements and DISCOM process.",
      },
      {
        question:
          "Does an on-grid solar system work during a power cut?",
        answer:
          "A standard grid-connected solar system normally shuts down during a grid outage for safety. Backup during outages requires an appropriate UPS, battery or hybrid configuration for selected loads.",
      },
      {
        question:
          "How can I get a residential solar quotation?",
        answer:
          "Share your recent electricity bill, location, roof type and approximate requirement. A bill review followed by a site assessment can help determine a practical system size and quotation.",
      },
    ],
    links: residentialLinks,
  },

  {
    slug: "commercial-solar",
    title: "Commercial Solar",
    metaTitle: "Commercial Solar Installation in Sojat, Pali & Rajasthan",
    metaDescription:
      "Commercial rooftop solar installation for shops, offices, schools, hospitals and businesses in Sojat, Pali and Rajasthan. Plan capacity around load, usage, roof space and ROI.",
    keyword: "commercial solar installation in Rajasthan",
    heroTitle:
      "Commercial solar installation for businesses in Rajasthan.",
    heroDescription:
      "Reduce dependence on grid electricity with a commercial solar proposal based on your electricity consumption, operating hours, roof condition and connection requirements.",
    serviceType: "Commercial solar installation",
    imageAlt:
      "Commercial rooftop solar installation on a business building in Rajasthan",
    sections: [
      {
        title: "Commercial solar starts with your electricity consumption.",
        body:
          "Businesses have different load patterns, operating hours and electricity requirements. SunPip Solutions uses bill information, site conditions and usage patterns to help businesses evaluate whether rooftop solar is practical.",
        points: [
          "Electricity bill and load review",
          "Daytime consumption analysis",
          "Roof and shadow assessment",
          "System capacity and layout planning",
          "ROI and savings estimation",
        ],
      },
      {
        title: "Solar for shops, offices and institutions.",
        body:
          "Commercial rooftop solar can be considered by shops, offices, schools, hospitals, warehouses and other suitable buildings after technical and financial feasibility is reviewed.",
        points: [
          "Commercial rooftop feasibility",
          "System design and component planning",
          "Electrical and mounting assessment",
          "Monitoring and maintenance planning",
          "Installation and commissioning support",
        ],
      },
      {
        title: "Commercial solar EPC support in Sojat and Pali.",
        body:
          "SunPip Solutions supports commercial customers through planning, site assessment, system design, installation and commissioning, with documentation and applicable net metering guidance.",
        points: [
          "Site survey before final design",
          "Capacity planning based on actual usage",
          "Safe mounting and electrical installation",
          "Documentation and applicable approval guidance",
          "O&M and after-sales support",
        ],
      },
    ],
    faqs: [
      {
        question:
          "Which businesses can install commercial rooftop solar?",
        answer:
          "Shops, offices, schools, hospitals, warehouses, factories and other suitable commercial or institutional buildings can evaluate rooftop solar after reviewing their electricity usage, roof conditions and connection requirements.",
      },
      {
        question:
          "How is commercial solar system capacity decided?",
        answer:
          "Capacity should be evaluated using electricity consumption, load profile, operating hours, available roof space, connection details and the customer's savings objectives.",
      },
      {
        question:
          "Is residential solar subsidy available for commercial connections?",
        answer:
          "Residential rooftop solar subsidy schemes generally apply to eligible residential consumers. Commercial and institutional consumers should check the rules applicable to their specific connection and current government programs.",
      },
      {
        question:
          "Can SunPip provide a commercial solar quotation?",
        answer:
          "Yes. A commercial proposal can be prepared after reviewing recent electricity bills, sanctioned load, operating hours, roof details and the required system configuration.",
      },
    ],
    links: commercialLinks,
  },

  {
    slug: "rooftop-solar",
    title: "Rooftop Solar",
    metaTitle: "Rooftop Solar Installation in Rajasthan | Sojat & Pali",
    metaDescription:
      "Rooftop solar installation for homes and businesses in Sojat, Pali and Rajasthan. Get roof assessment, system design, installation, net metering and solar planning support.",
    keyword: "rooftop solar installation in Rajasthan",
    heroTitle:
      "Rooftop solar installation in Sojat, Pali and Rajasthan.",
    heroDescription:
      "Turn suitable roof space into a solar generation system with planning based on shade, structure, electricity use, roof layout and connection requirements.",
    serviceType: "Rooftop solar installation",
    imageAlt:
      "Rooftop solar panels installed on a building in Rajasthan",
    sections: [
      {
        title: "A rooftop solar system starts with the roof.",
        body:
          "Before selecting panel quantity or system capacity, the usable roof area, shade, structure, orientation, access, inverter location and cable route should be assessed.",
        points: [
          "Shadow-free roof area assessment",
          "RCC, metal sheet and other roof condition review",
          "Panel layout planning",
          "Mounting and structural considerations",
          "Inverter and cable route planning",
        ],
      },
      {
        title: "Rooftop solar for homes and businesses.",
        body:
          "SunPip Solutions supports residential and commercial customers who want to understand the practical requirements of a rooftop solar project before installation.",
        points: [
          "Residential rooftop solar planning",
          "Commercial solar feasibility",
          "Solar capacity and layout design",
          "Applicable subsidy and net metering guidance",
          "Installation and commissioning support",
        ],
      },
      {
        title: "Solar installation with a site-first approach.",
        body:
          "A site survey helps identify practical constraints before the final proposal. This can reduce surprises related to shade, roof access, structure, cable routing and equipment placement.",
        points: [
          "Roof and shade inspection",
          "Electricity bill and load review",
          "System design",
          "Installation planning",
          "Testing and commissioning",
        ],
      },
    ],
    faqs: [
      {
        question:
          "How much roof area is needed for rooftop solar?",
        answer:
          "A rough estimate is around 80 to 100 square feet of usable shadow-free roof area per kW. Actual space requirements depend on panel wattage, layout, roof shape and required access space.",
      },
      {
        question:
          "Can solar panels be installed on a metal sheet roof?",
        answer:
          "Solar can often be installed on suitable metal roofs, but the sheet condition, supporting structure, mounting method, wind considerations and waterproofing requirements should be assessed first.",
      },
      {
        question:
          "What is the first step before installing rooftop solar?",
        answer:
          "A good starting point is reviewing your recent electricity bill and arranging a site assessment to check roof space, shade, structure, electrical requirements and suitable system capacity.",
      },
      {
        question:
          "Can rooftop solar be installed on a commercial building?",
        answer:
          "Yes, suitable commercial buildings can evaluate rooftop solar after reviewing electricity consumption, roof condition, available space, connection details and project feasibility.",
      },
    ],
    links: rooftopLinks,
  },

  {
    slug: "solar-epc",
    title: "Solar EPC",
    metaTitle: "Solar EPC Company in Sojat, Pali & Rajasthan",
    metaDescription:
      "Solar EPC services in Sojat, Pali and Rajasthan covering solar design, procurement, installation, commissioning, documentation guidance and after-sales support.",
    keyword: "solar EPC company in Rajasthan",
    heroTitle:
      "Solar EPC services for projects in Sojat, Pali and Rajasthan.",
    heroDescription:
      "Plan your solar project through one coordinated process covering feasibility, system design, equipment planning, installation, commissioning and handover.",
    serviceType: "Solar EPC",
    imageAlt:
      "Solar EPC planning and rooftop solar installation in Rajasthan",
    sections: [
      {
        title: "What does solar EPC mean?",
        body:
          "EPC stands for Engineering, Procurement and Construction. A solar EPC approach connects technical planning, equipment selection, installation, testing and commissioning into one project workflow.",
        points: [
          "Engineering and technical feasibility",
          "Solar system design",
          "Equipment and component planning",
          "Installation and electrical work",
          "Testing, commissioning and handover",
        ],
      },
      {
        title: "Solar EPC for residential and commercial projects.",
        body:
          "The project process can vary depending on system size, roof type, customer category and electricity connection. SunPip Solutions focuses on matching the design and installation process to the site.",
        points: [
          "Residential rooftop solar",
          "Commercial rooftop solar",
          "Solar system design",
          "Site survey and feasibility",
          "O&M and after-sales support",
        ],
      },
      {
        title: "A structured solar project from survey to handover.",
        body:
          "Good project planning begins before equipment reaches the site. Bill analysis, roof assessment, system design and documentation help establish the requirements for installation.",
        points: [
          "Requirement and electricity bill review",
          "Site survey and technical feasibility",
          "System design and quotation",
          "Installation and commissioning",
          "Handover and support",
        ],
      },
    ],
    faqs: [
      {
        question:
          "What does a solar EPC company do?",
        answer:
          "A solar EPC company can coordinate engineering, procurement and construction activities such as system design, equipment planning, installation, testing, commissioning and project handover.",
      },
      {
        question:
          "Does SunPip Solutions provide solar EPC services in Sojat?",
        answer:
          "SunPip Solutions provides solar EPC and rooftop solar installation support in Sojat, Pali and surrounding Rajasthan areas, subject to project feasibility and service availability.",
      },
      {
        question:
          "Can solar EPC include battery backup?",
        answer:
          "Battery backup can be planned as part of a suitable hybrid, UPS or backup configuration. The required battery capacity depends on which loads need backup and for how long.",
      },
      {
        question:
          "Is a site survey required before a solar EPC quotation?",
        answer:
          "A site survey is strongly recommended because roof condition, shade, access, electrical layout, cable routing and equipment placement can affect the final design and quotation.",
      },
    ],
    links: epcLinks,
  },

  {
    slug: "pm-surya-ghar-solar-subsidy",
    title: "PM Surya Ghar Solar Subsidy",
    metaTitle: "PM Surya Ghar Subsidy in Pali & Sojat | Solar Guidance",
    metaDescription:
      "PM Surya Ghar and rooftop solar subsidy guidance for eligible residential consumers in Pali, Sojat and Rajasthan, including documentation, installation and net metering process support.",
    keyword: "PM Surya Ghar subsidy Pali",
    heroTitle:
      "PM Surya Ghar and rooftop solar subsidy guidance in Pali and Sojat.",
    heroDescription:
      "Understand the residential rooftop solar process, documents, eligibility considerations, installation steps and applicable net metering requirements before proceeding.",
    serviceType: "Residential solar subsidy assistance",
    imageAlt:
      "Residential rooftop solar subsidy planning and documentation in Rajasthan",
    sections: [
      {
        title: "Understand the solar subsidy process before installation.",
        body:
          "Government rooftop solar schemes have specific eligibility, portal, documentation, inspection and DISCOM requirements. SunPip Solutions helps eligible residential consumers understand the practical process without promising approval or subsidy release.",
        points: [
          "Consumer and electricity connection review",
          "Document checklist guidance",
          "Application process guidance",
          "Installation coordination",
          "Inspection and applicable net metering readiness",
        ],
      },
      {
        title: "Who should explore PM Surya Ghar?",
        body:
          "PM Surya Ghar is relevant to eligible residential electricity consumers planning rooftop solar. The applicable rules, subsidy amount and process should always be checked against current official requirements before making a financial decision.",
        points: [
          "Residential electricity consumers",
          "Homeowners planning rooftop solar",
          "Customers comparing solar system capacities",
          "Consumers preparing required documents",
          "Customers who need installation and process guidance",
        ],
      },
      {
        title: "Solar subsidy guidance in Pali and Sojat.",
        body:
          "SunPip Solutions can help customers understand the connection between rooftop feasibility, system selection, installation and applicable subsidy or net metering procedures.",
        points: [
          "Electricity bill review",
          "Roof feasibility assessment",
          "System capacity planning",
          "Document and application guidance",
          "Installation and follow-up support",
        ],
      },
    ],
    faqs: [
      {
        question:
          "What is PM Surya Ghar?",
        answer:
          "PM Surya Ghar is a government rooftop solar initiative for eligible residential electricity consumers. Eligibility, subsidy, application requirements and release procedures depend on current official rules and the applicable DISCOM process.",
      },
      {
        question:
          "Can SunPip Solutions guarantee PM Surya Ghar subsidy approval?",
        answer:
          "No. SunPip Solutions can provide process and documentation guidance, but eligibility, approval, inspection and subsidy release are determined by the applicable government scheme, portal and DISCOM process.",
      },
      {
        question:
          "What documents may be required for a rooftop solar subsidy application?",
        answer:
          "Documents can include a recent electricity bill, identity information, bank details and consumer or property-related documents where required. The exact requirements should be checked against the current official application process.",
      },
      {
        question:
          "Is PM Surya Ghar subsidy available for commercial solar?",
        answer:
          "PM Surya Ghar is primarily a residential rooftop solar scheme. Commercial consumers should check programs and incentives applicable to their specific connection category.",
      },
      {
        question:
          "Should I select the solar capacity before applying?",
        answer:
          "System capacity should be planned using electricity consumption, connection details and roof feasibility. The applicable scheme rules and permitted capacity should also be checked before finalizing the project.",
      },
    ],
    links: subsidyLinks,
  },
];

/*
 * Capacity-specific SEO pages.
 *
 * These pages target users searching for a particular system size.
 * They deliberately avoid publishing fixed prices, guaranteed savings,
 * exact generation or subsidy amounts because those figures depend on
 * site conditions, components, tariff, connection and current rules.
 */

export const solarSystemPages: SolarSystemPage[] = [
  {
    slug: "1kw-solar-system",
    capacity: "1kW",
    metaTitle: "1kW Solar System in Sojat & Pali | Rajasthan",
    metaDescription:
      "1kW solar system planning for homes in Sojat, Pali and Rajasthan. Check electricity usage, roof area, shade, connection requirements and suitable system configuration.",
    heroTitle:
      "1kW solar system planning for small homes.",
    heroDescription:
      "A 1kW rooftop solar system may suit lower-consumption homes, but the right capacity should be checked against your electricity bill, roof space and usage pattern.",
    bestFor: [
      "Homes with relatively low electricity consumption",
      "Customers with limited usable rooftop space",
      "Households comparing smaller solar system sizes",
      "Customers starting with a bill-based solar assessment",
    ],
    planningNotes: [
      "Review recent monthly electricity units",
      "Check shadow-free roof area",
      "Confirm connection and sanctioned-load requirements",
      "Decide whether backup power is required separately",
      "Validate final capacity during site assessment",
    ],
    guidance: [
      {
        title: "1kW price, subsidy and savings planning.",
        body:
          "A 1kW quotation should be prepared after confirming panel wattage, inverter type, structure, wiring route, protections and current subsidy eligibility. Avoid comparing only the headline price because low-quality balance-of-system choices can affect safety and service life.",
        points: [
          "Ask for a component-wise quotation instead of a single lump sum",
          "Check whether the system is on-grid, hybrid or backup-linked",
          "Use current official PM Surya Ghar rules before assuming subsidy",
          "Estimate savings from your actual bill and tariff",
        ],
      },
      {
        title: "Generation, panels, inverter and roof area.",
        body:
          "For initial planning, SunPip uses conservative calculator assumptions and then validates them on site. A 1kW system usually needs limited roof space, but shade from parapets, tanks or nearby buildings can still affect layout.",
        points: [
          "Plan around roughly 80 to 100 sq.ft. per kW before survey",
          "Panel count depends on selected module wattage",
          "Inverter selection depends on system type and grid requirements",
          "Warranty terms should be checked on the actual quote and product datasheets",
        ],
      },
      {
        title: "Installation checklist for small residential systems.",
        body:
          "Even a smaller solar plant should have proper mounting, DC/AC protection, earthing, cable routing, commissioning checks and customer handover. The site survey should confirm whether the available roof is practical for long-term maintenance.",
        points: [
          "Bill review and capacity validation",
          "Roof survey and shade check",
          "Mounting and electrical safety planning",
          "Commissioning, net metering guidance and handover",
        ],
      },
    ],
    faqs: [
      {
        question:
          "Is a 1kW solar system enough for a home?",
        answer:
          "A 1kW system may suit a home with relatively low electricity consumption, but the correct capacity depends on monthly units, daytime usage, roof space and connection details.",
      },
      {
        question:
          "How much roof space does a 1kW solar system need?",
        answer:
          "A rough planning estimate is around 80 to 100 square feet of usable shadow-free roof area per kW. The final requirement depends on panel wattage and layout.",
      },
      {
        question:
          "Can a 1kW system include battery backup?",
        answer:
          "Battery backup is generally designed separately from a standard on-grid solar system. The required battery depends on the appliances or loads that need backup.",
      },
      {
        question:
          "Can I get a 1kW solar quotation in Sojat?",
        answer:
          "Yes. Share your electricity bill and location so the required capacity and site feasibility can be reviewed before preparing a quotation.",
      },
    ],
  },

  {
    slug: "2kw-solar-system",
    capacity: "2kW",
    metaTitle: "2kW Solar System in Sojat & Pali | Rajasthan",
    metaDescription:
      "2kW solar system planning for homes in Sojat, Pali and Rajasthan with bill-based sizing, roof assessment, installation planning and applicable subsidy guidance.",
    heroTitle:
      "2kW solar system planning for Rajasthan homes.",
    heroDescription:
      "A 2kW system may suit homes with moderate electricity consumption. Final sizing should be based on your electricity bill, roof space and connection requirements.",
    bestFor: [
      "Small and medium-sized homes",
      "Homes with moderate monthly electricity usage",
      "Customers comparing 1kW, 2kW and 3kW systems",
      "Residential customers planning rooftop solar",
    ],
    planningNotes: [
      "Compare monthly electricity consumption",
      "Check usable shadow-free roof area",
      "Review sanctioned load and connection details",
      "Plan inverter location and cable route",
      "Check applicable residential subsidy requirements",
    ],
    guidance: [
      {
        title: "2kW price guidance without unsupported figures.",
        body:
          "The final cost of a 2kW system depends on module brand and wattage, inverter configuration, structure height, cable length, protections, monitoring and installation conditions. SunPip should verify these details before quoting.",
        points: [
          "Compare quotations by components, warranty and scope",
          "Confirm what is included for net metering documentation support",
          "Check subsidy eligibility from current official scheme rules",
          "Avoid assuming battery backup is included in on-grid pricing",
        ],
      },
      {
        title: "Expected planning inputs for 2kW solar.",
        body:
          "A 2kW system is commonly evaluated by small homes, but the right decision still depends on actual units consumed and future load. The calculator can estimate panel count, generation and roof area before a survey.",
        points: [
          "Approximate roof planning range: 160 to 200 sq.ft.",
          "Panel count changes with 550W, 585W, 600W or custom modules",
          "Monthly generation varies by season, orientation and shade",
          "Savings depend on tariff and self-consumption/export rules",
        ],
      },
      {
        title: "Installation and warranty points to confirm.",
        body:
          "Before installation, confirm mounting type, structure warranty, module warranty, inverter warranty, AC/DC protection and who handles service requests after commissioning.",
        points: [
          "Survey roof access and inverter location",
          "Confirm cable routing and earthing",
          "Prepare documents for eligible residential subsidy process",
          "Keep product invoices and warranty documents after handover",
        ],
      },
    ],
    faqs: [
      {
        question:
          "How do I know whether 2kW solar is right for my home?",
        answer:
          "Compare your monthly electricity units, daytime usage, roof area and connection details. A bill review and site assessment can help confirm whether 2kW is appropriate.",
      },
      {
        question:
          "How much roof area is required for 2kW solar?",
        answer:
          "A rough planning estimate is around 160 to 200 square feet of usable shadow-free roof area, although actual requirements vary with panel wattage and layout.",
      },
      {
        question:
          "Does a 2kW solar system include a battery?",
        answer:
          "A standard on-grid system normally does not include battery backup. A battery or hybrid system can be considered separately if backup is required.",
      },
      {
        question:
          "Can SunPip install a 2kW system in Pali?",
        answer:
          "SunPip Solutions can review the electricity bill, roof conditions and location to determine whether a 2kW installation is suitable and prepare a project proposal.",
      },
    ],
  },

  {
    slug: "3kw-solar-system",
    capacity: "3kW",
    metaTitle: "3kW Solar System in Sojat, Pali & Rajasthan",
    metaDescription:
      "3kW rooftop solar system planning for homes in Sojat, Pali and Rajasthan. Get bill-based sizing, roof assessment, subsidy guidance and installation support.",
    heroTitle:
      "3kW solar system planning for homes in Sojat and Pali.",
    heroDescription:
      "3kW is a common residential system size to evaluate, but the right capacity depends on actual electricity consumption, roof area, shade and connection details.",
    bestFor: [
      "Homes with regular household electricity consumption",
      "Customers comparing residential solar capacities",
      "Homeowners evaluating applicable rooftop solar subsidy",
      "Homes with sufficient shadow-free roof area",
    ],
    planningNotes: [
      "Review monthly and seasonal electricity usage",
      "Check roof area and shadow conditions",
      "Confirm connection and sanctioned load",
      "Review applicable subsidy requirements",
      "Validate final capacity through site assessment",
    ],
    guidance: [
      {
        title: "3kW system price, subsidy and bill reduction.",
        body:
          "A 3kW system is a high-intent search because many homeowners compare it with residential subsidy slabs. SunPip should still quote only after checking current government rules, consumer category, roof conditions and component choices.",
        points: [
          "Use official PM Surya Ghar information before estimating subsidy",
          "Review sanctioned load and connection name before application",
          "Separate solar plant cost from optional backup or hybrid equipment",
          "Estimate savings from units, tariff and usage pattern",
        ],
      },
      {
        title: "Generation, roof area and equipment planning.",
        body:
          "A 3kW plant should be planned around annual usage, seasonal generation and usable roof space. Shading for even part of the day can reduce output, so the site survey matters as much as the advertised capacity.",
        points: [
          "Approximate roof planning range: 240 to 300 sq.ft.",
          "Panel quantity depends on actual module wattage",
          "Inverter capacity and monitoring should match the design",
          "Generation estimates should be treated as planning estimates, not guarantees",
        ],
      },
      {
        title: "Installation flow for Sojat and Pali homes.",
        body:
          "For local residential customers, the practical flow is bill review, site survey, design and quote, application guidance where applicable, installation, commissioning and handover.",
        points: [
          "Check roof strength, shade and access",
          "Confirm mounting layout before installation",
          "Keep documentation ready for subsidy or net metering steps",
          "Plan annual cleaning and maintenance access",
        ],
      },
    ],
    faqs: [
      {
        question:
          "Is 3kW solar suitable for a residential home?",
        answer:
          "3kW can be a suitable capacity for some homes, but the correct size depends on electricity consumption, daytime usage, roof area and connection details.",
      },
      {
        question:
          "How much roof area is needed for a 3kW solar system?",
        answer:
          "A rough planning estimate is around 240 to 300 square feet of usable shadow-free roof area. Actual requirements depend on the selected panels and installation layout.",
      },
      {
        question:
          "Can a 3kW solar system be used with PM Surya Ghar?",
        answer:
          "Eligible residential consumers can evaluate the applicable PM Surya Ghar requirements, but permitted capacity, subsidy and approval depend on the current scheme and application process.",
      },
      {
        question:
          "Can SunPip provide a 3kW solar quotation in Pali?",
        answer:
          "Yes. A recent electricity bill and site details can be reviewed to determine whether a 3kW system is appropriate before preparing a quotation.",
      },
    ],
  },

  {
    slug: "5kw-solar-system",
    capacity: "5kW",
    metaTitle: "5kW Solar System in Sojat, Pali & Rajasthan",
    metaDescription:
      "5kW solar system planning for larger homes and small businesses in Sojat, Pali and Rajasthan. Compare roof area, electricity use, ROI and installation requirements.",
    heroTitle:
      "5kW solar system planning for larger homes and businesses.",
    heroDescription:
      "A 5kW solar system can be evaluated for higher electricity consumption, but final sizing should follow a bill review, roof assessment and connection check.",
    bestFor: [
      "Larger homes with higher electricity consumption",
      "Small businesses with suitable rooftop space",
      "Customers comparing savings and project payback",
      "Sites with sufficient shadow-free roof area",
    ],
    planningNotes: [
      "Review monthly electricity units and tariff",
      "Assess daytime consumption",
      "Check roof area, structure and shade",
      "Compare expected savings and project cost",
      "Confirm residential or commercial connection category",
    ],
    guidance: [
      {
        title: "5kW price and ROI guidance.",
        body:
          "For 5kW projects, small differences in structure, inverter, wiring, protections and monitoring can materially affect cost and service quality. A useful proposal should explain the scope and expected savings assumptions.",
        points: [
          "Compare total scope, not only price per kW",
          "Confirm whether the site is residential or commercial",
          "Use ROI calculator outputs only as early estimates",
          "Verify subsidy applicability before assuming customer contribution",
        ],
      },
      {
        title: "Generation, roof area, panels and inverter.",
        body:
          "A 5kW system needs enough shadow-free space and a layout that leaves safe access for cleaning and maintenance. Commercial buildings should also consider daytime load and operating hours.",
        points: [
          "Approximate roof planning range: 400 to 500 sq.ft.",
          "Panel count depends on selected wattage and available rows",
          "Inverter and protection design should reflect connection requirements",
          "Generation varies with weather, dust, tilt, orientation and shade",
        ],
      },
      {
        title: "Installation and warranty checkpoints.",
        body:
          "A 5kW installation should include careful routing, earthing, protection devices, commissioning checks and clear handover documents so the owner knows how to monitor and maintain the system.",
        points: [
          "Confirm maintenance access around panel rows",
          "Review equipment datasheets and warranty terms",
          "Plan cleaning frequency for local dust conditions",
          "Document commissioning readings and support contact details",
        ],
      },
    ],
    faqs: [
      {
        question:
          "Who should consider a 5kW solar system?",
        answer:
          "Larger homes and businesses with higher electricity consumption may evaluate a 5kW system after reviewing their electricity bill, roof space, connection type and daytime usage.",
      },
      {
        question:
          "How much roof space is required for 5kW solar?",
        answer:
          "A rough planning estimate is around 400 to 500 square feet of usable shadow-free roof area. The actual requirement depends on panel wattage, layout and access requirements.",
      },
      {
        question:
          "Is 5kW solar suitable for a small business?",
        answer:
          "It may be suitable for some small businesses, but capacity should be selected according to electricity consumption, operating hours, roof space and connection requirements.",
      },
      {
        question:
          "How can I estimate the savings from a 5kW system?",
        answer:
          "Use the solar savings or ROI calculator as an initial estimate, then confirm the calculation using your actual electricity bill, tariff, system design and site conditions.",
      },
    ],
  },

  {
    slug: "10kw-solar-system",
    capacity: "10kW",
    metaTitle: "10kW Solar System in Sojat, Pali & Rajasthan",
    metaDescription:
      "10kW solar system planning for businesses, institutions and high-consumption sites in Sojat, Pali and Rajasthan with load analysis, roof assessment and EPC support.",
    heroTitle:
      "10kW solar system planning for high-consumption sites.",
    heroDescription:
      "A 10kW system may suit larger homes, businesses or institutions, but the final design requires careful review of load, roof area, shade, electrical infrastructure and project requirements.",
    bestFor: [
      "Commercial rooftops with suitable electricity consumption",
      "Schools, hospitals and institutions",
      "Larger homes with higher electricity usage",
      "Businesses evaluating structured solar EPC projects",
    ],
    planningNotes: [
      "Review load profile and monthly electricity consumption",
      "Assess daytime operating hours",
      "Check roof structure, access and shadow",
      "Plan inverter, cable routing and protection",
      "Include O&M and monitoring requirements in project planning",
    ],
    guidance: [
      {
        title: "10kW pricing, savings and project scope.",
        body:
          "A 10kW proposal should be treated as a proper EPC project rather than a simple product purchase. Final cost depends on structure design, electrical integration, inverter choice, protection equipment, monitoring and site complexity.",
        points: [
          "Ask for an EPC scope with components, warranties and exclusions",
          "Use business tariffs and daytime load for savings estimates",
          "Check whether subsidy is relevant to the connection category",
          "Plan O&M, monitoring and service response before commissioning",
        ],
      },
      {
        title: "Generation, roof area and electrical planning.",
        body:
          "Larger rooftop systems need more attention to structure, cable routing, distribution board integration and future maintenance access. The site survey should review both roof feasibility and electrical readiness.",
        points: [
          "Approximate roof planning range: 800 to 1,000 sq.ft.",
          "Panel layout should allow safe access for service and cleaning",
          "Inverter location should be ventilated, accessible and protected",
          "Generation projections should use local site conditions and realistic assumptions",
        ],
      },
      {
        title: "Installation flow for commercial and high-load sites.",
        body:
          "For 10kW systems, SunPip should review bills, load pattern, sanctioned load, roof access, safety requirements and downtime constraints before finalizing the installation plan.",
        points: [
          "Load and bill analysis before capacity lock-in",
          "Roof structure and safety assessment",
          "Protection, earthing and cable route planning",
          "Commissioning report, monitoring setup and maintenance plan",
        ],
      },
    ],
    faqs: [
      {
        question:
          "Is a 10kW solar system suitable for commercial use?",
        answer:
          "It can be suitable for some commercial and institutional sites, depending on electricity consumption, daytime load, roof area, connection type and project feasibility.",
      },
      {
        question:
          "How much roof area is needed for 10kW solar?",
        answer:
          "A rough planning estimate is around 800 to 1,000 square feet of usable shadow-free roof area. Final requirements depend on panel wattage, layout, access and installation conditions.",
      },
      {
        question:
          "Does a 10kW system require a site survey?",
        answer:
          "Yes. A site survey is strongly recommended for larger systems to evaluate structure, shade, electrical infrastructure, cable routes, equipment placement and installation access.",
      },
      {
        question:
          "Can SunPip provide a 10kW commercial solar proposal?",
        answer:
          "SunPip Solutions can review the electricity bills, load information, roof details and project requirements to determine feasibility and prepare an appropriate solar proposal.",
      },
    ],
  },
];

export const locationPages: LocationPage[] = [
  {
    slug: "sojat",
    city: "Sojat",
    districtContext: "Pali district",
    metaTitle: "Solar Company in Sojat | Rooftop Solar Installation",
    metaDescription:
      "Solar company in Sojat for rooftop solar installation, PM Surya Ghar guidance, net metering support and bill-based solar EPC proposals for homes and businesses.",
    heroTitle: "Solar company in Sojat for rooftop solar that starts with your bill.",
    heroDescription:
      "SunPip Solutions is based in Sojat and helps local homes, shops and institutions plan rooftop solar with roof surveys, capacity sizing, subsidy guidance and installation support.",
    serviceType: "Solar panel installation in Sojat",
    localNotes: [
      "Useful for homes and shops around Sojat city, Sojat Road and nearby villages",
      "Site visits can review roof shade from parapets, water tanks and nearby buildings",
      "Residential customers can discuss PM Surya Ghar and net metering readiness",
    ],
    sections: [
      {
        title: "Local solar installation support in Sojat.",
        body:
          "Because Sojat customers can speak with a nearby team, the project can begin with a practical bill review and roof check instead of a generic package recommendation.",
        points: [
          "Electricity bill and sanctioned-load review",
          "RCC and metal-roof feasibility checks",
          "Residential and commercial rooftop solar planning",
          "Quotation based on usable roof area and project scope",
        ],
      },
      {
        title: "What Sojat customers should verify before buying solar.",
        body:
          "The right system size depends on current units, future appliances, roof access, shade and connection category. A short survey helps avoid under-sizing, over-sizing and mounting surprises.",
        points: [
          "Monthly units and tariff",
          "Usable shadow-free roof area",
          "Inverter placement and cable route",
          "Applicable subsidy and net metering documents",
        ],
      },
    ],
    faqs: [
      {
        question: "Does SunPip Solutions provide solar installation in Sojat?",
        answer:
          "Yes. SunPip Solutions serves Sojat and nearby areas with rooftop solar consultation, system sizing, installation planning, subsidy guidance and after-sales support.",
      },
      {
        question: "How do I get a solar quote in Sojat?",
        answer:
          "Share your recent electricity bill, roof type, location and requirement. A site survey can then confirm usable roof area, shade and suitable system capacity.",
      },
      {
        question: "Is PM Surya Ghar subsidy available in Sojat?",
        answer:
          "Eligible residential consumers can evaluate the current PM Surya Ghar process. Approval and subsidy release depend on current scheme rules, portal requirements and DISCOM process.",
      },
    ],
  },
  {
    slug: "pali",
    city: "Pali",
    districtContext: "Pali district",
    metaTitle: "Solar Company in Pali | Rooftop Solar Rajasthan",
    metaDescription:
      "Solar company in Pali for rooftop solar, commercial solar, residential subsidy guidance, net metering and solar EPC proposals based on bill and roof survey.",
    heroTitle: "Solar company in Pali for homes, shops and institutions.",
    heroDescription:
      "Plan rooftop solar in Pali with bill-based system sizing, roof assessment, component guidance, net metering support and clear installation steps.",
    serviceType: "Solar panel installation in Pali",
    localNotes: [
      "Useful for Pali city homes, commercial buildings, schools and clinics",
      "Commercial customers should compare daytime load with solar generation",
      "Dust, shade and roof access should be considered in the maintenance plan",
    ],
    sections: [
      {
        title: "Rooftop solar planning for Pali buildings.",
        body:
          "Pali has a mix of homes, shops and commercial rooftops, so solar planning should account for connection category, daytime consumption and roof access before finalizing capacity.",
        points: [
          "Residential rooftop solar feasibility",
          "Commercial solar ROI review",
          "System size and roof area calculations",
          "Installation and commissioning coordination",
        ],
      },
      {
        title: "A better proposal starts with real consumption.",
        body:
          "A Pali solar proposal should explain the expected system size, roof area, panel count, inverter type, savings assumptions, warranty documents and service scope.",
        points: [
          "Bill-led capacity planning",
          "Shade and structure assessment",
          "PM Surya Ghar and net metering guidance where applicable",
          "After-sales support and maintenance planning",
        ],
      },
    ],
    faqs: [
      {
        question: "Can SunPip install residential solar in Pali?",
        answer:
          "SunPip Solutions can review residential requirements in Pali and prepare a proposal after checking bill usage, roof space, shade and eligibility considerations.",
      },
      {
        question: "Can businesses in Pali install rooftop solar?",
        answer:
          "Many businesses can evaluate rooftop solar after checking daytime electricity usage, roof condition, connection details and expected savings.",
      },
      {
        question: "What details are needed for a Pali solar quotation?",
        answer:
          "A recent electricity bill, customer category, roof type, location, backup requirement and available roof information are useful for the first estimate.",
      },
    ],
  },
  {
    slug: "sumerpur",
    city: "Sumerpur",
    districtContext: "near Pali district solar service area",
    metaTitle: "Solar Company in Sumerpur | Rooftop Solar Installation",
    metaDescription:
      "Rooftop solar installation guidance in Sumerpur for homes and businesses, including system sizing, roof survey, subsidy process guidance and solar quotation support.",
    heroTitle: "Rooftop solar installation support for Sumerpur.",
    heroDescription:
      "SunPip helps Sumerpur customers compare solar capacity, roof feasibility, expected savings and documentation steps before final quotation.",
    serviceType: "Solar panel installation in Sumerpur",
    localNotes: [
      "Helpful for homes, shops and institutional rooftops around Sumerpur",
      "Commercial users should evaluate daytime load before deciding capacity",
      "Survey should check shade, access, structure and inverter location",
    ],
    sections: [
      {
        title: "Solar for Sumerpur homes and businesses.",
        body:
          "Sumerpur customers often need clarity on whether rooftop solar fits their bill, roof and budget. A structured survey helps separate practical options from rough guesses.",
        points: [
          "Home solar capacity planning",
          "Commercial rooftop feasibility",
          "Savings and payback estimate",
          "Quote preparation after site details are reviewed",
        ],
      },
      {
        title: "What the site survey should cover.",
        body:
          "Before equipment is selected, the roof should be checked for usable space, shade, structure, cable routing and safe access for installation and future cleaning.",
        points: [
          "Roof measurements and obstructions",
          "Panel layout and maintenance access",
          "Grid and inverter location",
          "Documentation readiness for eligible consumers",
        ],
      },
    ],
    faqs: [
      {
        question: "Does SunPip serve Sumerpur?",
        answer:
          "SunPip can evaluate rooftop solar enquiries from Sumerpur and nearby service areas subject to site feasibility and scheduling.",
      },
      {
        question: "Which system size is suitable in Sumerpur?",
        answer:
          "The suitable size depends on monthly units, roof area, shade and connection details. Use the calculator for an estimate and confirm through a survey.",
      },
      {
        question: "Can I get subsidy guidance for Sumerpur?",
        answer:
          "Eligible residential customers can receive process guidance, but eligibility and subsidy release depend on current official rules and DISCOM requirements.",
      },
    ],
  },
  {
    slug: "jaitaran",
    city: "Jaitaran",
    districtContext: "Pali district service area",
    metaTitle: "Solar Company in Jaitaran | Solar Panel Installation",
    metaDescription:
      "Solar panel installation planning in Jaitaran with bill analysis, roof survey, residential subsidy guidance, commercial solar feasibility and rooftop solar EPC support.",
    heroTitle: "Solar panel installation planning for Jaitaran.",
    heroDescription:
      "Compare residential and commercial rooftop solar options in Jaitaran with practical guidance on capacity, roof area, installation and documents.",
    serviceType: "Solar panel installation in Jaitaran",
    localNotes: [
      "Useful for homes, shops, small institutions and rural rooftops",
      "Capacity should be checked against bill units and roof feasibility",
      "Metal-roof and RCC structures may need different mounting approaches",
    ],
    sections: [
      {
        title: "Jaitaran solar projects need site-specific planning.",
        body:
          "A solar plant should be sized for real consumption and built around the site conditions. Jaitaran customers should confirm structure, access and connection details before installation.",
        points: [
          "Bill-led sizing for homes and shops",
          "Roof type and mounting method review",
          "On-grid, hybrid and backup requirement discussion",
          "Installation timeline and handover planning",
        ],
      },
      {
        title: "Avoid thin solar package comparisons.",
        body:
          "Two solar quotes can look similar while using different components, structures, protections and service scope. A useful quote explains what is included and what requires verification.",
        points: [
          "Panel and inverter brand/model details",
          "Structure and electrical protection scope",
          "Warranty and maintenance responsibilities",
          "Subsidy/net metering process support where applicable",
        ],
      },
    ],
    faqs: [
      {
        question: "Can rooftop solar reduce electricity bills in Jaitaran?",
        answer:
          "It can reduce grid electricity dependence when the system is correctly sized and the roof is suitable. Final savings depend on tariff, usage and generation conditions.",
      },
      {
        question: "How much roof area is needed?",
        answer:
          "Use 80 to 100 sq.ft. per kW as an early planning range, then verify actual usable area after accounting for shade, tanks, parapets and access space.",
      },
      {
        question: "What should I share for a quotation?",
        answer:
          "Share your electricity bill, connection category, roof photos if available, roof type, location and whether backup power is required.",
      },
    ],
  },
  {
    slug: "bali",
    city: "Bali",
    districtContext: "Pali district service area",
    metaTitle: "Solar Company in Bali Rajasthan | Rooftop Solar",
    metaDescription:
      "Rooftop solar installation support in Bali, Rajasthan for homes and businesses with bill review, roof feasibility, subsidy guidance and solar EPC quotation planning.",
    heroTitle: "Rooftop solar support for Bali, Rajasthan.",
    heroDescription:
      "Plan a solar system for your Bali home or business with practical checks for bill units, roof area, shading, installation access and documentation.",
    serviceType: "Solar installation in Bali Rajasthan",
    localNotes: [
      "Suitable for homeowners and local businesses evaluating rooftop solar",
      "Hill-side or uneven roof access should be checked during survey where relevant",
      "Quotes should separate on-grid solar from optional battery or UPS backup",
    ],
    sections: [
      {
        title: "Solar planning for Bali customers.",
        body:
          "For Bali customers, a reliable first step is checking the electricity bill and roof photographs before scheduling a deeper site assessment.",
        points: [
          "Residential solar suitability review",
          "Commercial savings estimate",
          "Roof area and shade check",
          "Component and warranty discussion",
        ],
      },
      {
        title: "Build for long-term maintenance.",
        body:
          "Solar panels need safe access for cleaning and service. The mounting plan should keep walkways, cable routes and inverter placement practical.",
        points: [
          "Panel row spacing and access",
          "Cable protection and earthing",
          "Dust and cleaning considerations",
          "Monitoring and after-sales support",
        ],
      },
    ],
    faqs: [
      {
        question: "Does SunPip provide solar service in Bali?",
        answer:
          "SunPip can evaluate solar enquiries from Bali and nearby service areas subject to site feasibility and scheduling.",
      },
      {
        question: "Is battery backup included with rooftop solar?",
        answer:
          "Standard on-grid systems usually do not include battery backup. Backup requires a separate UPS, battery or hybrid configuration for selected loads.",
      },
      {
        question: "Can I compare 3kW and 5kW options?",
        answer:
          "Yes. Compare them using your electricity bill, roof area and savings goal, then validate the final system size through a site survey.",
      },
    ],
  },
  {
    slug: "marwar-junction",
    city: "Marwar Junction",
    districtContext: "Pali district service area",
    metaTitle: "Solar Company in Marwar Junction | Rooftop Solar",
    metaDescription:
      "Solar company serving Marwar Junction with rooftop solar installation planning, solar EPC guidance, subsidy process support and site survey-based quotation.",
    heroTitle: "Solar installation planning for Marwar Junction.",
    heroDescription:
      "SunPip helps Marwar Junction customers assess rooftop solar feasibility with bill review, roof checks, installation planning and local support.",
    serviceType: "Solar panel installation in Marwar Junction",
    localNotes: [
      "Useful for homes, shops, farms with building rooftops and institutions",
      "Roof access and shade should be checked before final capacity",
      "Commercial users should review daily operating hours and load profile",
    ],
    sections: [
      {
        title: "A practical route to rooftop solar.",
        body:
          "Marwar Junction customers can begin with a phone consultation and electricity bill review before deciding whether a site visit and detailed quote are worthwhile.",
        points: [
          "Initial bill and load discussion",
          "Roof area and obstruction review",
          "System type comparison",
          "Quotation after site-specific details",
        ],
      },
      {
        title: "Residential and commercial considerations.",
        body:
          "Residential projects often focus on subsidy and net metering. Commercial projects often focus on ROI, daytime usage and uninterrupted operations during installation.",
        points: [
          "PM Surya Ghar guidance for eligible residential consumers",
          "ROI and payback review for businesses",
          "Safety and protection equipment planning",
          "O&M and cleaning schedule discussion",
        ],
      },
    ],
    faqs: [
      {
        question: "Can SunPip quote a project in Marwar Junction?",
        answer:
          "SunPip can review enquiries from Marwar Junction and prepare a quote after checking bill details, roof suitability and project scope.",
      },
      {
        question: "What is the first step?",
        answer:
          "Share your latest electricity bill, location, roof type and whether you need an on-grid, hybrid or backup-linked solution.",
      },
      {
        question: "Are savings guaranteed?",
        answer:
          "No calculator or proposal should be treated as a generation guarantee. Savings depend on tariff, weather, shade, usage, maintenance and final approved design.",
      },
    ],
  },
  {
    slug: "rani",
    city: "Rani",
    districtContext: "Pali district service area",
    metaTitle: "Solar Company in Rani Rajasthan | Solar Installation",
    metaDescription:
      "Solar installation planning in Rani, Rajasthan for homes and businesses with rooftop feasibility, system sizing, subsidy guidance and solar EPC support.",
    heroTitle: "Solar installation guidance for Rani, Rajasthan.",
    heroDescription:
      "Evaluate rooftop solar in Rani with SunPip's bill-based sizing, roof survey guidance, installation planning and clear quotation process.",
    serviceType: "Solar installation in Rani Rajasthan",
    localNotes: [
      "Useful for homeowners, shops and institutional buildings in and around Rani",
      "Survey should verify roof strength, access, shade and equipment placement",
      "Customers comparing quotes should check component and warranty details",
    ],
    sections: [
      {
        title: "Solar feasibility for Rani rooftops.",
        body:
          "The right rooftop solar decision comes from matching the system to electricity usage and the physical roof. Rani customers can start with a simple bill and roof review.",
        points: [
          "Monthly units and bill review",
          "Roof area and layout estimate",
          "Residential subsidy process guidance",
          "Installation and commissioning support",
        ],
      },
      {
        title: "Plan the full project, not only the panel count.",
        body:
          "A complete rooftop system includes panels, inverter, mounting structure, wiring, protection devices, earthing, monitoring, documentation and after-sales support.",
        points: [
          "Component selection discussion",
          "Cable route and inverter location",
          "Warranty and maintenance documents",
          "Quote based on verified site conditions",
        ],
      },
    ],
    faqs: [
      {
        question: "Does SunPip serve Rani?",
        answer:
          "SunPip can evaluate rooftop solar enquiries from Rani and nearby areas subject to project feasibility and scheduling.",
      },
      {
        question: "Which solar system size should I choose?",
        answer:
          "Start with your electricity bill and roof area. The 1kW, 2kW, 3kW, 5kW and 10kW guides can help compare options before survey confirmation.",
      },
      {
        question: "Can I request a site survey?",
        answer:
          "Yes. Share your location, bill and roof details so SunPip can advise the next step for a site-specific proposal.",
      },
    ],
  },
];

export const pmSuryaGharArticles: ContentArticle[] = [
  {
    slug: "subsidy",
    title: "PM Surya Ghar Subsidy Guidance for Rajasthan Homes",
    metaTitle: "PM Surya Ghar Subsidy Rajasthan | SunPip Guide",
    metaDescription:
      "Understand PM Surya Ghar rooftop solar subsidy guidance for Rajasthan homes, including eligibility checks, documents, application flow and net metering caveats.",
    excerpt:
      "A careful, non-promissory guide to residential rooftop solar subsidy planning for Rajasthan customers.",
    date: "2026-08-16",
    readTime: "6 min read",
    category: "PM Surya Ghar",
    keywords: ["PM Surya Ghar Rajasthan", "solar subsidy Pali", "solar subsidy Sojat"],
    sections: [
      {
        title: "Start with eligibility, not the subsidy number.",
        body:
          "Residential solar subsidy should be evaluated only after checking the consumer category, electricity connection details, roof feasibility and current official scheme rules. SunPip can help customers understand the process, but approval and subsidy release remain with the official portal and DISCOM process.",
        points: [
          "Confirm the electricity connection is eligible under current rules",
          "Check consumer name and bill details before application",
          "Use official portal information for current subsidy values",
          "Keep quote decisions separate from unverified subsidy assumptions",
        ],
      },
      {
        title: "How SunPip supports the process.",
        body:
          "SunPip can help with site feasibility, capacity planning, document readiness, installation coordination and follow-up steps such as inspection and net metering readiness.",
        points: [
          "Bill and roof feasibility review",
          "Capacity planning for eligible residential consumers",
          "Document checklist guidance",
          "Installation and commissioning support",
        ],
      },
    ],
    faqs: [
      {
        question: "Can SunPip guarantee subsidy approval?",
        answer:
          "No. SunPip can provide process guidance, but eligibility, approval, inspection and subsidy release depend on official scheme rules, portal requirements and DISCOM process.",
      },
      {
        question: "Should I rely on old subsidy screenshots?",
        answer:
          "No. Subsidy details can change, so customers should verify current values from the official PM Surya Ghar portal before making financial decisions.",
      },
    ],
    links: subsidyLinks,
  },
  {
    slug: "eligibility",
    title: "PM Surya Ghar Eligibility for Residential Solar",
    metaTitle: "PM Surya Ghar Eligibility | Residential Solar Rajasthan",
    metaDescription:
      "Eligibility planning for PM Surya Ghar residential rooftop solar in Rajasthan, including consumer category, roof suitability and documentation readiness.",
    excerpt:
      "What Rajasthan homeowners should check before starting a rooftop solar subsidy application.",
    date: "2026-08-16",
    readTime: "5 min read",
    category: "PM Surya Ghar",
    keywords: ["PM Surya Ghar eligibility", "residential solar subsidy Rajasthan"],
    sections: [
      {
        title: "Eligibility is site and consumer specific.",
        body:
          "A household should check whether the consumer connection, ownership/authorization details, roof suitability and proposed system capacity match current scheme requirements.",
        points: [
          "Residential electricity connection details",
          "Consumer name and bill information",
          "Usable roof area and safety feasibility",
          "Permitted capacity and DISCOM requirements",
        ],
      },
      {
        title: "Roof feasibility still matters.",
        body:
          "Even if the consumer appears eligible, the project must still be technically practical. Shade, roof access, mounting conditions and inverter placement can affect the final design.",
      },
    ],
    faqs: [
      {
        question: "Is commercial solar eligible for PM Surya Ghar?",
        answer:
          "PM Surya Ghar is primarily for eligible residential consumers. Commercial consumers should review programs applicable to their own connection category.",
      },
      {
        question: "Can tenants apply?",
        answer:
          "Tenant or authorization situations should be checked against current official requirements because document and ownership rules can vary.",
      },
    ],
    links: subsidyLinks,
  },
  {
    slug: "documents",
    title: "Documents for PM Surya Ghar Solar Application",
    metaTitle: "PM Surya Ghar Documents | Solar Subsidy Rajasthan",
    metaDescription:
      "Document checklist guidance for PM Surya Ghar rooftop solar applications in Rajasthan, including electricity bill, identity and bank details caveats.",
    excerpt:
      "A practical document-readiness checklist for eligible residential rooftop solar customers.",
    date: "2026-08-16",
    readTime: "4 min read",
    category: "PM Surya Ghar",
    keywords: ["PM Surya Ghar documents", "solar subsidy documents Rajasthan"],
    sections: [
      {
        title: "Keep documents ready before installation planning.",
        body:
          "Document requirements should be verified on the current official portal, but customers commonly need electricity connection details and identity/bank information for the application workflow.",
        points: [
          "Recent electricity bill",
          "Identity details requested by the portal",
          "Bank details where required",
          "Property or authorization details where applicable",
        ],
      },
      {
        title: "Check names and numbers carefully.",
        body:
          "Small mismatches in consumer details, mobile number, bank information or documents can slow down the application and inspection workflow.",
      },
    ],
    faqs: [
      {
        question: "Are these the final required documents?",
        answer:
          "No. Treat this as preparation guidance and verify the current official portal checklist before submission.",
      },
      {
        question: "Can SunPip help review document readiness?",
        answer:
          "SunPip can guide customers on commonly required information and help coordinate project steps, but official validation is handled through the scheme process.",
      },
    ],
    links: subsidyLinks,
  },
  {
    slug: "application-process",
    title: "PM Surya Ghar Application Process in Rajasthan",
    metaTitle: "PM Surya Ghar Application Process Rajasthan",
    metaDescription:
      "Step-by-step PM Surya Ghar application process guidance for Rajasthan homes, from eligibility and vendor coordination to installation, inspection and subsidy follow-up.",
    excerpt:
      "How to think through the rooftop solar subsidy workflow without assuming approval.",
    date: "2026-08-16",
    readTime: "6 min read",
    category: "PM Surya Ghar",
    keywords: ["PM Surya Ghar application process", "solar subsidy application Rajasthan"],
    sections: [
      {
        title: "A responsible application workflow.",
        body:
          "The sequence should start with eligibility and roof feasibility, then move through application, approved project planning, installation, inspection, net metering steps and subsidy follow-up as applicable.",
        points: [
          "Check eligibility and documents",
          "Review roof feasibility and capacity",
          "Follow current portal process",
          "Install and commission the system",
          "Complete inspection and net metering steps where required",
        ],
      },
      {
        title: "Do not finalize finance on assumptions alone.",
        body:
          "Customers should understand what amount is payable before subsidy release and what depends on government approval timelines.",
      },
    ],
    faqs: [
      {
        question: "How long does approval take?",
        answer:
          "Timelines depend on the official portal, DISCOM process, inspection queue and customer document readiness. SunPip should not promise a fixed approval date.",
      },
      {
        question: "Can installation happen before every step is clear?",
        answer:
          "Customers should understand current scheme and DISCOM requirements before installation so they do not risk missing process conditions.",
      },
    ],
    links: subsidyLinks,
  },
  {
    slug: "net-metering",
    title: "Net Metering for Rooftop Solar in Rajasthan",
    metaTitle: "Net Metering Rajasthan | Rooftop Solar Guide",
    metaDescription:
      "Net metering guidance for rooftop solar in Rajasthan, including application readiness, inspection, meter activation and bill adjustment caveats.",
    excerpt:
      "What rooftop solar customers should understand about net metering before installation.",
    date: "2026-08-16",
    readTime: "5 min read",
    category: "Net Metering",
    keywords: ["net metering Rajasthan", "solar net metering Pali", "solar net metering Sojat"],
    sections: [
      {
        title: "Net metering connects solar generation to billing.",
        body:
          "Net metering records exported solar electricity and adjusts it according to applicable DISCOM rules. Requirements can depend on connection category, sanctioned load and current regulations.",
        points: [
          "Check connection details before system sizing",
          "Prepare documents requested by the DISCOM process",
          "Keep installation and commissioning records",
          "Track meter activation and first bill carefully",
        ],
      },
      {
        title: "Why the solar design must consider net metering.",
        body:
          "Capacity, inverter setup and protection equipment should be planned with grid connection and approval requirements in mind.",
      },
    ],
    faqs: [
      {
        question: "Does every rooftop solar system need net metering?",
        answer:
          "Most grid-connected residential systems require an applicable metering process. Exact requirements depend on connection and current DISCOM rules.",
      },
      {
        question: "Can SunPip help with net metering?",
        answer:
          "SunPip provides net metering guidance and installation coordination, while approvals and meter activation depend on the applicable DISCOM process.",
      },
    ],
    links: rooftopLinks,
  },
];

export const blogArticles: ContentArticle[] = [
  {
    slug: "solar-panel-price-in-rajasthan",
    title: "Solar Panel Price in Rajasthan: What Affects Your Quote?",
    metaTitle: "Solar Panel Price in Rajasthan | Quote Factors",
    metaDescription:
      "Understand what affects rooftop solar price in Rajasthan, including system size, panels, inverter, mounting, protections, subsidy and installation conditions.",
    excerpt:
      "A buyer-friendly guide to comparing solar quotes without relying on unverified price claims.",
    date: "2026-08-16",
    readTime: "6 min read",
    category: "Solar Price",
    keywords: ["solar panel price Rajasthan", "solar system price Pali", "solar quote Sojat"],
    sections: [
      {
        title: "Why two solar prices can differ.",
        body:
          "A rooftop solar quote includes far more than panels. Inverter type, mounting structure, cable route, protections, earthing, monitoring, warranty scope and site complexity can all change the final price.",
        points: [
          "Panel and inverter brand/model",
          "Structure height and roof type",
          "AC/DC protections and earthing",
          "Documentation, commissioning and after-sales scope",
        ],
      },
      {
        title: "How to compare quotes responsibly.",
        body:
          "Ask each installer to list assumptions, inclusions, exclusions, warranty terms and whether subsidy has been treated as verified or only estimated.",
      },
    ],
    faqs: [
      {
        question: "Why does SunPip avoid fixed online solar prices?",
        answer:
          "Fixed prices can mislead customers because final cost depends on verified components, structure, roof conditions, subsidy status and installation scope.",
      },
      {
        question: "What should I send for a better quote?",
        answer:
          "Send a recent bill, roof type, location, photos if available, customer category and whether backup power is required.",
      },
    ],
    links: commonLinks,
  },
  {
    slug: "solar-generation-per-kw-rajasthan",
    title: "Solar Generation per kW in Rajasthan: Planning Expectations",
    metaTitle: "Solar Generation per kW Rajasthan | Planning Guide",
    metaDescription:
      "Learn how rooftop solar generation per kW is estimated in Rajasthan and why shade, tilt, direction, dust, weather and maintenance affect output.",
    excerpt:
      "Use generation estimates carefully before choosing your solar system size.",
    date: "2026-08-16",
    readTime: "5 min read",
    category: "Generation",
    keywords: ["solar generation per kW Rajasthan", "solar generation Pali"],
    sections: [
      {
        title: "Generation is an estimate, not a guarantee.",
        body:
          "SunPip calculators use planning assumptions, but actual generation depends on roof direction, tilt, shade, weather, dust, equipment health and maintenance.",
        points: [
          "Shade can reduce output even when roof area looks sufficient",
          "Dust and cleaning frequency matter in Rajasthan conditions",
          "Panel layout and inverter design affect usable generation",
          "Seasonal generation changes through the year",
        ],
      },
      {
        title: "Use your electricity bill to size the system.",
        body:
          "Generation estimates become useful when compared with your monthly units, daytime consumption and applicable net metering rules.",
      },
    ],
    faqs: [
      {
        question: "Can a calculator guarantee generation?",
        answer:
          "No. Calculators provide planning estimates. Final generation expectations should be reviewed after a site survey and system design.",
      },
      {
        question: "What reduces rooftop solar output?",
        answer:
          "Shade, dust, poor orientation, equipment faults, loose connections, weather and missed maintenance can reduce output.",
      },
    ],
    links: rooftopLinks,
  },
  {
    slug: "roof-area-required-for-solar-panels",
    title: "Roof Area Required for Solar Panels in Homes and Businesses",
    metaTitle: "Roof Area Required for Solar Panels | Rajasthan Guide",
    metaDescription:
      "Estimate roof area needed for 1kW, 2kW, 3kW, 5kW and 10kW rooftop solar and understand how shade, panel wattage and layout affect space.",
    excerpt:
      "How to estimate usable shadow-free roof area before a solar site survey.",
    date: "2026-08-16",
    readTime: "5 min read",
    category: "Roof Area",
    keywords: ["roof area for solar panels", "solar rooftop area calculator"],
    sections: [
      {
        title: "Use usable roof area, not total roof area.",
        body:
          "Water tanks, stair rooms, parapets, shade, access paths and setbacks can reduce the area available for panels. A rough planning estimate is 80 to 100 sq.ft. per kW.",
        points: [
          "1kW: roughly 80 to 100 sq.ft.",
          "3kW: roughly 240 to 300 sq.ft.",
          "5kW: roughly 400 to 500 sq.ft.",
          "10kW: roughly 800 to 1,000 sq.ft.",
        ],
      },
      {
        title: "Why panel wattage changes the layout.",
        body:
          "Higher-wattage panels can reduce panel count, but the final layout still depends on panel dimensions, row spacing, roof shape and maintenance access.",
      },
    ],
    faqs: [
      {
        question: "Can panels cover my entire roof?",
        answer:
          "Usually no. A safe design should leave access for cleaning, maintenance and roof movement while avoiding shaded areas.",
      },
      {
        question: "How can I estimate my roof capacity?",
        answer:
          "Use the rooftop area calculator for a first estimate and confirm with a site survey before final quotation.",
      },
    ],
    links: rooftopLinks,
  },
  {
    slug: "on-grid-vs-hybrid-solar",
    title: "On-Grid vs Hybrid Solar: Which Is Better for Rajasthan Customers?",
    metaTitle: "On-Grid vs Hybrid Solar | Rajasthan Rooftop Guide",
    metaDescription:
      "Compare on-grid and hybrid solar systems for Rajasthan homes and businesses, including backup, battery cost, net metering and installation considerations.",
    excerpt:
      "A clear comparison for customers deciding whether they need battery backup with solar.",
    date: "2026-08-16",
    readTime: "6 min read",
    category: "System Type",
    keywords: ["on-grid vs hybrid solar", "hybrid solar Rajasthan"],
    sections: [
      {
        title: "On-grid solar is mainly for bill reduction.",
        body:
          "A standard on-grid system exports and imports electricity through the grid process. It normally shuts down during grid outages for safety unless separate backup is planned.",
        points: [
          "Usually simpler and lower cost than battery-linked systems",
          "Depends on grid and metering process",
          "Good fit where bill reduction is the primary goal",
        ],
      },
      {
        title: "Hybrid solar adds backup planning.",
        body:
          "Hybrid systems can support selected loads during outages when designed with suitable batteries and backup circuits, but cost and maintenance are different from on-grid solar.",
        points: [
          "Useful where backup is important",
          "Battery capacity must match selected loads",
          "Needs careful safety and wiring design",
        ],
      },
    ],
    faqs: [
      {
        question: "Does on-grid solar work in a power cut?",
        answer:
          "Standard on-grid solar usually shuts down during outages for safety. Backup requires a UPS, battery or hybrid configuration.",
      },
      {
        question: "Should every home choose hybrid solar?",
        answer:
          "Not necessarily. Choose hybrid only if backup needs justify the additional cost, equipment and maintenance.",
      },
    ],
    links: commonLinks,
  },
  {
    slug: "solar-inverter-guide",
    title: "Solar Inverter Guide for Rooftop Solar Buyers",
    metaTitle: "Solar Inverter Guide | On-Grid Hybrid Backup",
    metaDescription:
      "Learn how solar inverter selection affects rooftop solar performance, monitoring, backup options, safety and warranty for homes and businesses.",
    excerpt:
      "What to ask before choosing an inverter for rooftop solar or backup needs.",
    date: "2026-08-16",
    readTime: "5 min read",
    category: "Inverters",
    keywords: ["solar inverter guide", "solar inverter Rajasthan"],
    sections: [
      {
        title: "The inverter is central to system design.",
        body:
          "The inverter converts solar DC power into usable AC power and affects monitoring, grid behavior, backup options and troubleshooting.",
        points: [
          "On-grid inverter for grid-connected bill reduction",
          "Hybrid inverter where battery backup is planned",
          "Monitoring features for performance tracking",
          "Warranty and service availability",
        ],
      },
      {
        title: "Match inverter choice to the use case.",
        body:
          "Do not choose an inverter only by capacity. It should match the solar array, grid requirements, backup needs, safety protections and available service support.",
      },
    ],
    faqs: [
      {
        question: "Is a bigger inverter always better?",
        answer:
          "No. Inverter capacity should match the approved system design, panel array, electrical requirements and expected usage.",
      },
      {
        question: "Can SunPip help with inverter replacement?",
        answer:
          "SunPip provides inverter guidance and related services subject to site details, compatibility and service availability.",
      },
    ],
    links: commonLinks,
  },
  {
    slug: "solar-panel-maintenance-rajasthan",
    title: "Solar Panel Maintenance in Rajasthan: Cleaning and Checks",
    metaTitle: "Solar Panel Maintenance Rajasthan | Cleaning Guide",
    metaDescription:
      "Solar panel maintenance guidance for Rajasthan rooftops, including cleaning, shade checks, inverter monitoring, loose connections and annual service planning.",
    excerpt:
      "A practical maintenance checklist to protect generation and system life.",
    date: "2026-08-16",
    readTime: "5 min read",
    category: "Maintenance",
    keywords: ["solar panel maintenance Rajasthan", "solar cleaning Pali"],
    sections: [
      {
        title: "Dust and access matter in Rajasthan.",
        body:
          "Dust buildup, bird droppings, new shade and loose connections can reduce performance. Maintenance planning should be included from the first installation layout.",
        points: [
          "Keep safe access for cleaning",
          "Monitor inverter alerts and generation trends",
          "Check for new shade from nearby changes",
          "Schedule periodic electrical health checks",
        ],
      },
      {
        title: "Do not ignore small generation drops.",
        body:
          "Unexpected drops can indicate shade, soiling, inverter alerts or electrical faults. Early checks can protect long-term output.",
      },
    ],
    faqs: [
      {
        question: "How often should panels be cleaned?",
        answer:
          "Cleaning frequency depends on local dust, roof access, rain, bird activity and generation trends. The installer should recommend a practical schedule after seeing the site.",
      },
      {
        question: "Can I clean panels myself?",
        answer:
          "Only if it is safe and the correct method is used. Avoid unsafe roof access, harsh chemicals and cleaning during hot panel conditions.",
      },
    ],
    links: commonLinks,
  },
];

export function getSeoLandingPage(slug: string) {
  return seoLandingPages.find((page) => page.slug === slug);
}

export function getSolarSystemPage(slug: string) {
  return solarSystemPages.find((page) => page.slug === slug);
}

export function getLocationPage(slug: string) {
  return locationPages.find((page) => page.slug === slug);
}

export function getPmSuryaGharArticle(slug: string) {
  return pmSuryaGharArticles.find((article) => article.slug === slug);
}

export function getBlogArticle(slug: string) {
  return blogArticles.find((article) => article.slug === slug);
}
