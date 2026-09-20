# Site-wide One Kreative correction
- [x] Apply “Fun first. Growth follows.” across the homepage and every public page
- [x] Align shared navigation, footer, page shells, and reusable program CTAs
- [x] Preserve verified registration links, analytics, UTM attribution, pricing, and business details
- [x] Remove the prohibited legacy positioning from all website copy and complete responsive QA

# Phase 1 rebuild

- [x] Centralize iClassPro and contact links
- [x] Create typed program and event data
- [x] Rebuild desktop mega-menu and mobile action dock
- [x] Rebuild complete homepage sections and class finder
- [x] Replace internal trial form with iClassPro handoff
- [x] Update shared footer and booking CTAs
- [x] Verify desktop and mobile experiences

# Privacy-conscious analytics

- [x] Add typed, DNT-aware telemetry dispatcher
- [x] Instrument class finder and homepage conversion actions
- [x] Instrument shared navigation, footer, and iClassPro handoffs
- [x] Verify event payloads and navigation behavior

# UTM attribution

- [x] Capture sanitized campaign parameters for the session
- [x] Enrich analytics events without cookies or PII
- [x] Forward active campaign values into every iClassPro handoff
- [x] Verify telemetry and outbound URLs with and without Do Not Track

# Phase 1 corrections

- [x] Correct finder recommendations and unsupported fallbacks
- [x] Clarify iClassPro trial-link configuration
- [x] Replace unverified testimonials and event timing
- [x] Update verified hours and pricing language
- [x] Verify responsive homepage, analytics, and UTM handoffs

## Verified iClassPro wiring (done)
- [x] Centralized booking/classes/portal/login/boys-gymnastics URLs in src/data/config.ts
- [x] Program-to-URL resolver (programUrlOverrides/resolveProgramUrl)
- [x] Trial CTAs -> /booking with "Request a Trial" microcopy
- [x] Birthday + Bump City links -> bump-city.com
- [x] UTM appending preserves existing query params

## Google reviews showcase

- [x] Replace the homepage placeholder with curated authentic Google reviews
- [x] Add direct Google Maps review access and outbound CTA tracking
- [x] Verify desktop and mobile presentation

# Phase 2 — Recreational Gymnastics page

- [x] Build reusable program-page sections
- [x] Create immersive recreational gymnastics page
- [x] Wire verified girls and boys class handoffs
- [x] Reuse authentic Google reviews and add FAQs
- [x] Verify desktop, mobile, analytics, and UTM behavior

## Dragon Ninja program page
- [x] Rebuilt /dragon-ninja on shared ProgramPage architecture (hero, benefits, obstacle experience, Standard/Daytime class options with verified Ninja filtered links, Ninja Google review, FAQ, final CTA)
- [x] ProgramHero subheadline prop added; Recreational Gymnastics page unchanged; typecheck clean; desktop + mobile verified, no overflow

## Preschool Gymnastics page rebuild (program-page architecture)
- [x] Hero: "Little movers. Big smiles." / "Big movement for little humans." with details line + CTA scroll to #choose-program
- [x] Four benefits (motor milestones, social skills, bravery/confidence, active habits)
- [x] "What little ones experience" equipment grid (foam pits, toddler bars, low beams, trampolines, wedges, circuits)
- [x] #choose-program: Parent & Tot / Little Dragons / Preschool Prep cards, both price points, links to siteConfig.external.classes with tracking + UTM handoff
- [x] Google Reviews showcase (Parent + Tot review) + 4 FAQs (participation, attire, trial, length)
- [x] Final CTA "Their first favorite class." / "Try a preschool class free"
- [x] Verified: tsgo clean, route 200, desktop/mobile layout, tracking intact

## Tumbling & Trampoline page
- [x] Built /tumbling on shared ProgramPage architecture (hero "Build the skills. Land the moment.", four benefits, equipment grid, Level 1–3 pathway cards, Google review, 4 FAQs, final CTA "Ready to flip?")
- [x] All three level cards link to siteConfig.external.classes with trackCta + forwardIclassProHandoff + UTM
- [x] Navigation: header Classes dropdown "Tumbling" → /tumbling; footer "Tumbling & Trampoline" link; homepage Tumbling card → /tumbling
- [x] Alias redirect /tumbling-and-trampoline → /tumbling (307)
- [x] Verified: tsgo clean, route 200, desktop + mobile no overflow, no prohibited terms

## Birthday Parties & Bump City page
- [x] Build /birthday-parties with hero, parent benefits, three-step flow, party options, review, FAQs, and final booking CTA
- [x] Preserve Bump City booking, click tracking, campaign attribution, and phone actions
- [x] Route birthday discovery links in the header, footer, and homepage to the internal page
- [x] Verify type safety, live routes, booking destinations, and desktop/mobile presentation

## Camps & Events page
- [x] Build the full Camps & Events experience with hero, four event categories, parent expectations, review, FAQs, and final CTA
- [x] Preserve verified portal and Bump City destinations with tracking and campaign attribution
- [x] Verify type safety, live route, interactive actions, and desktop/mobile presentation

## Global Class Finder & Schedule Hub
- [x] Add category and age filtering with beginner-friendly program cards and dual actions
- [x] Add six verified live-schedule shortcuts and a three-step enrollment guide
- [x] Preserve iClassPro tracking, campaign attribution, and verified destinations
- [ ] Verify type safety, filters, links, and desktop/mobile presentation
