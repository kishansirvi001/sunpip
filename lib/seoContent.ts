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
  faqs: SeoFaq[];
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
    href: "/services/government-subsidy-assistance",
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
    href: "/residential-solar",
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
    href: "/services/government-subsidy-assistance",
  },
  {
    label: "Residential solar",
    href: "/residential-solar",
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

export function getSeoLandingPage(slug: string) {
  return seoLandingPages.find((page) => page.slug === slug);
}

export function getSolarSystemPage(slug: string) {
  return solarSystemPages.find((page) => page.slug === slug);
}