# Calculator audit

## Findings before the update

- Generation was centralized as 4.2 kWh/kW/day, but location and season did not affect it. Monthly generation used 30 days while annual generation used 365 days, so the numbers did not reconcile.
- Sizing used `monthlyUnits / 125` in two formulas. Roof capacity separately used a flat 90 sq ft/kW, with no relationship to module wattage or spacing.
- Price bands and subsidy amounts were embedded in `lib/constants.ts`; savings used another direct subsidy formula. The subsidy cap and eligibility were not represented as a versioned rule set.
- Savings assumed up to 90% bill reduction and did not model self-consumption, export credits, fixed/minimum charges, fuel surcharge, electricity duty, load, or roof limits.
- ROI reported one simple year-one return and payback. Degradation, tariff escalation, O&M growth, discounted payback, IRR, and inverter replacement were absent.
- EMI did not expose the amortization schedule or compare EMI with solar savings. Roof estimates did not account for roof type or layout.
- Results showed sample/example figures when required inputs were blank. Calculator leads did not include structured inputs, outputs, or UTM data; WhatsApp shared results without inputs.

## Current implementation notes

Planning assumptions and calculation functions now live in `lib/solar-config.ts` and `utils/solarCalculators.ts`. Subsidy slabs, effective date and official source URL live in `lib/subsidy-rules.json`. Values are explicitly marked for verification. Formula coverage is in `utils/solarCalculators.test.ts`.

Some requested business features still require follow-up before launch: Hindi translations for all five calculators, charted savings scenarios, commercial GST/depreciation toggles, a polished multi-page branded PDF, durable database/Google Sheets lead storage and email notification. The existing lead endpoint sends its notification through the configured Telegram integration; it is not a durable lead database. The Vitest dependency could not be fetched in this restricted environment, so test execution and a matching lockfile update remain outstanding.
