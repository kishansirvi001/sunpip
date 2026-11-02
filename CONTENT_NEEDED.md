# Content needed before launch

Please supply or confirm the items below. Bracketed values and the local image slot are placeholders; do not publish them as verified claims.

## Company and compliance

- [ ] Registered office address in the exact format to publish.
- [ ] LLPIN and GSTIN, and permission to display them publicly.
- [ ] Confirmed founding date/year and a short approved company story.
- [ ] Founder and team names, roles, short bios and approved headshots.
- [ ] Confirm if SUNPIP is currently a PM Surya Ghar registered vendor and provide the public listing proof/link.
- [ ] Confirm applicable DISCOM empanelment and provide evidence.
- [ ] Confirm domain email mailbox works at `info@sunpipsolutions.com`.
- [ ] Confirm call and WhatsApp numbers and who monitors them.

## Images and project evidence

- [ ] Approved local team and founder photos.
- [ ] Real installation photographs with customer permission and captions.
- [ ] For each project: location, customer category, commissioned capacity (kW), system type, panel and inverter make/model, installation date, before/after monthly bill evidence, and customer approval to publish.
- [ ] Project detail notes, commissioning proof, generation/savings source and any warranty/AMC actually provided.
- [ ] Brand logos and written permission to use them.

Put approved optimized WebP/AVIF assets in `public/images/` and update the labelled slots in `lib/visuals.ts`. Keep original attribution/permissions with the asset.

## Prices, subsidies and service terms

- [ ] Approved installed price assumptions by system size and system type, including what equipment and taxes are included.
- [ ] Reconfirm residential PM Surya Ghar subsidy amounts and process before launch; calculator currently uses the supplied ₹30,000/kW for first 2 kW and ₹18,000 for the third kW, capped at ₹78,000, as an editable estimate.
- [ ] Confirm current eligibility, commissioning/inspection steps, bank transfer process and official portal wording.
- [ ] Local DISCOM/net-metering application requirements and any typical timeline evidence (never promise a fixed duration).
- [ ] Panel/inverter product warranties and workmanship warranty in writing, including exclusions.
- [ ] Actual cleaning/maintenance and AMC scope and prices.
- [ ] Confirm whether free surveys apply to all service areas and customer types.

## Local search pages and analytics

- [ ] Unique local tariff/DISCOM notes, verified local project references and area-specific FAQs for each town page before removing its `noindex`.
- [ ] GA4 measurement ID and consent/privacy text approved for the intended regions.
- [ ] Production lead delivery configuration and owner for quote follow-up. The existing quote endpoint requires Telegram credentials; provide secrets through deployment environment variables, not this repository.

## Before/after checklist

### Implemented in this pass

- [x] Homepage has bilingual headline, free-quote and WhatsApp CTAs, local trust strip and no fake counters.
- [x] Four featured service cards plus expandable services; 5-step process and plain-language EPC explanation.
- [x] Mobile call/WhatsApp bar, desktop WhatsApp contact and footer contact/company placeholders.
- [x] Local image slots replace remote stock images; Open Graph asset is a 1200×630 PNG.
- [x] Calculator uses one editable assumption source for cost bands, generation, tariffs and subsidy; pricing table shares those assumptions.
- [x] Sample bill is no longer prefilled; calculator labels blank results as an example and shows no figures until input validation passes.
- [x] Consolidated legacy routes redirect, project page stays noindex until real projects exist, and local pages stay noindex until unique content is supplied.
- [x] Added Hindi home page and reviewable English/Hindi JSON strings.
- [x] Quote endpoint includes honeypot handling and an in-process rate limit.

### Still requires real content or deployment checks

- [ ] Fill every company/project/warranty/credential item above; verify subsidy policy and pricing.
- [ ] Complete Hindi translations for all routes and calculator/FAQ flows; current `/hi` page is an initial homepage, not full locale coverage.
- [ ] Configure and validate production lead delivery; in-process rate limits do not coordinate across multiple server instances.
- [ ] Configure GA4 and call/WhatsApp/quote/calculator/PDF events with an approved consent approach.
- [ ] Review canonical host redirect with DNS/CDN/hosting configuration.
- [ ] Measure Lighthouse mobile scores (targets: Performance 90+, Accessibility 95+, SEO 100) and LCP on production-like 4G; scores were not measured in this code pass.
- [ ] Visually review at 360px, 768px and 1280px in browser after the build.
- [ ] Confirm image processing, font subsetting and production image delivery after approved photos/fonts are supplied.
