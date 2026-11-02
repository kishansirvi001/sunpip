import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { breadcrumbSchema, faqSchemaForItems, softwareApplicationSchema, webPageSchema } from "@/lib/structuredData";

type CalculatorSupport = {
  path: string;
  title: string;
  description: string;
  intro: string;
  points: readonly string[];
  faqs: readonly { question: string; answer: string }[];
};

const relatedLinks = [
  { label: "Solar savings calculator", href: "/solar-savings-calculator" },
  { label: "Solar system size calculator", href: "/solar-system-size-calculator" },
  { label: "Rooftop area calculator", href: "/rooftop-area-calculator" },
  { label: "PM Surya Ghar guide", href: "/pm-surya-ghar-solar-subsidy" },
  { label: "3kW solar system", href: "/3kw-solar-system" },
  { label: "Request quote", href: "/get-quote" },
];

export function CalculatorSeoSupport({ support }: { support: CalculatorSupport }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema({ name: support.title, description: support.description, path: support.path })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema({ name: support.title, description: support.description, path: support.path })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaForItems(support.faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", path: "/" }, { name: support.title, path: support.path }])) }} />
      <section className="section bg-white dark:bg-slate-950">
        <div className="container grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader eyebrow="How to use this estimate" title={support.title} description={support.intro} />
          <div className="grid gap-3 sm:grid-cols-2">
            {support.points.map((point) => (
              <div key={point} className="rounded-lg border border-slate-200 bg-white p-4 text-sm font-bold text-slate-800 shadow-sm dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-100">
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-slate-50 dark:bg-white/[0.03]">
        <div className="container grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader eyebrow="FAQ" title="Calculator questions." />
          <div className="grid gap-4">
            {support.faqs.map((item) => (
              <article key={item.question} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
                <h2 className="text-lg font-bold text-slate-950 dark:text-white">{item.question}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-white dark:bg-slate-950">
        <div className="container">
          <SectionHeader eyebrow="Related" title="Continue solar planning." />
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {relatedLinks.filter((link) => link.href !== support.path).map((link) => (
              <Link key={link.href} href={link.href} className="rounded-lg border border-slate-200 bg-white p-4 text-sm font-bold text-slate-800 transition hover:border-sun-blue hover:text-sun-blue dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-100">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export const calculatorSeoSupport = {
  savings: {
    path: "/solar-savings-calculator",
    title: "Solar Savings Calculator for Sojat, Pali and Rajasthan",
    description: "Estimate rooftop solar savings and payback from electricity bill, tariff, customer type and system type.",
    intro:
      "Use this calculator to prepare for a solar quote conversation. Final savings depend on your actual tariff, sanctioned load, roof conditions, system design, net metering rules and maintenance.",
    points: [
      "Enter either monthly bill or monthly units",
      "Use your own tariff when available",
      "Treat generation and payback as planning estimates",
      "Validate final capacity with a bill review and site survey",
    ],
    faqs: [
      {
        question: "Can this calculator guarantee savings?",
        answer:
          "No. It provides planning estimates. Final savings depend on tariff, generation, system design, shade, maintenance, approvals and usage pattern.",
      },
      {
        question: "Why does the result show subsidy as verification-based?",
        answer:
          "Subsidy eligibility and amounts depend on current official rules, consumer category, portal requirements and DISCOM process, so they should be verified before quotation.",
      },
    ],
  },
  size: {
    path: "/solar-system-size-calculator",
    title: "Solar System Size Calculator for Rooftop Solar",
    description: "Estimate recommended solar capacity, panel count, generation and roof area for rooftop solar planning.",
    intro:
      "This tool converts your bill or monthly units into an initial system-size estimate. Use it to compare 1kW, 2kW, 3kW, 5kW and 10kW pages before a final site survey.",
    points: [
      "Panel count changes with module wattage",
      "Roof area should be shadow-free and serviceable",
      "Capacity should not exceed practical connection and usage needs",
      "Final design should consider inverter and protection requirements",
    ],
    faqs: [
      {
        question: "Is the recommended capacity final?",
        answer:
          "No. It is a planning estimate that should be confirmed with electricity bills, roof survey, sanctioned load and installation constraints.",
      },
      {
        question: "Can I use this for commercial solar?",
        answer:
          "Yes, but commercial projects should also review daytime load, operating hours, tariff and ROI before finalizing capacity.",
      },
    ],
  },
  roof: {
    path: "/rooftop-area-calculator",
    title: "Rooftop Area Calculator for Solar Panels",
    description: "Estimate usable roof area and maximum solar capacity from roof dimensions and obstruction percentage.",
    intro:
      "This calculator helps separate total roof area from usable solar area. The final usable area should account for shade, access paths, tanks, parapets and equipment placement.",
    points: [
      "Measure usable roof length and width",
      "Subtract obstructions and shaded portions",
      "Leave space for cleaning and maintenance access",
      "Confirm final layout during site survey",
    ],
    faqs: [
      {
        question: "Can every part of my roof be used for solar?",
        answer:
          "Usually not. Obstructions, shade, setbacks, access paths and structural conditions reduce usable panel area.",
      },
      {
        question: "How much area is needed per kW?",
        answer:
          "A rough planning range is 80 to 100 sq.ft. per kW, but actual area depends on panel wattage, layout and roof conditions.",
      },
    ],
  },
  emi: {
    path: "/solar-emi-calculator",
    title: "Solar EMI Calculator for Rooftop Solar",
    description: "Estimate solar loan amount, monthly EMI, interest and repayment for a rooftop solar project.",
    intro:
      "Use this calculator to understand financing scenarios before you finalize a quote. Loan terms, interest rates and subsidy timing should be verified with the finance provider.",
    points: [
      "Enter quote amount and down payment",
      "Use the lender's actual interest rate",
      "Separate subsidy assumptions from loan terms",
      "Confirm repayment schedule before purchase",
    ],
    faqs: [
      {
        question: "Does SunPip provide loan approval?",
        answer:
          "Loan approval depends on the lender and customer eligibility. SunPip can prepare a finance-ready solar quote where required.",
      },
      {
        question: "Should subsidy be treated as down payment?",
        answer:
          "Do not assume subsidy timing without verifying current process and payout conditions. Finance planning should account for upfront customer contribution.",
      },
    ],
  },
  roi: {
    path: "/solar-roi-calculator",
    title: "Solar ROI Calculator for Residential and Commercial Solar",
    description: "Estimate solar net investment, annual net savings, payback period and ROI.",
    intro:
      "ROI depends on project cost, tariff, annual generation, maintenance and whether the customer is residential or commercial. Treat this as an early planning tool.",
    points: [
      "Use real annual savings where available",
      "Include maintenance assumptions",
      "Do not count unverified subsidy as guaranteed",
      "Commercial ROI should use business operating hours and tariff",
    ],
    faqs: [
      {
        question: "What payback period should I expect?",
        answer:
          "Payback depends on system cost, tariff, generation, maintenance and subsidies where applicable. A site-specific proposal is needed for a responsible estimate.",
      },
      {
        question: "Can ROI be different for shops and homes?",
        answer:
          "Yes. Tariff, daytime usage, connection category and subsidy applicability can make residential and commercial ROI very different.",
      },
    ],
  },
} as const;
