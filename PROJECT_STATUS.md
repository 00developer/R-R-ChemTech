# R & R ChemTech — Project Status & Progress Checkpoint
**Last Updated:** October 23, 2026  
**Status:** In Active Development (Phase 2 Completed, Polished & Pushed to GitHub)  
**Workspace:** `d:\Office-work\websites\R&R ChemTech`  
**GitHub Repository:** [https://github.com/00developer/R-R-ChemTech](https://github.com/00developer/R-R-ChemTech)  
**Main Branch:** `main`  

---

## 1. Project Overview & Identity
* **Company Name:** R & R ChemTech Pvt. Ltd.
* **Domain / Industry:** Premium Agro-Commodities Import & Export (Rice, Wheat, Fresh Onion) & Chemical Solutions.
* **Tech Stack:** 
  * **HTML5:** Semantic, clean markup with Schema.org JSON-LD structured data.
  * **CSS3:** Vanilla CSS design system, CSS variables, zero Tailwind bloat, fully responsive across desktop, tablet (900px, 720px), and mobile (560px, 380px).
  * **JavaScript:** Vanilla ES6+ (`js/main.js`) handling mobile drawer navigation, animated metrics counters (`IntersectionObserver`), and interactive RFQ form submission.

---

## 2. Design System & Tokens
* **Color Palette:**
  * Background Dark Emerald: `--color-bg: #022C22;` (with `#011C15` and `#02140F` gradients)
  * Card Surface: `--cg: rgba(2, 44, 34, 0.72);` with subtle backdrop blur and border `rgba(212, 175, 55, 0.22)`
  * Royal Gold Primary: `--color-gold: #D4AF37;` (Gold hover: `#F59E0B`)
  * Emerald Secondary Accent: `#047857` (Hover: `#059669`)
  * Text Colors: Pure White `#FFFFFF` for headings, `--color-text-muted: #A7D3C0` for body copy
* **Typography:**
  * Solid Trade Headings: `'Plus Jakarta Sans', system-ui, sans-serif` (800 ExtraBold, -0.025em letter-spacing)
  * Clean UI / Body: `'Manrope', 'Inter', system-ui, sans-serif` (500 Regular / Medium)
* **Card Sizing Principle:**
  * Strictly compact, well-proportioned dimensions (avoiding oversized/bloated cards).

---

## 3. Brand Assets & Logo Inventory
* **Primary Corporate Logo:**
  * **Header Logo:** `images/logo01.png` (Dimensions: `2168 x 725` px, 3:1 aspect ratio, converted from opaque checkerboard to high-precision transparent PNG with 3D embossed gold "R&R ChemTech" lettering and luxury gold emblem).
  * **Footer Logo:** `images/R&R-ChemTech-Gold-Emblem-final-Logo.png` (Dimensions: `2172 x 724` px, transparent background with "R&R ChemTech Pvt. Ltd.").
* **Favicon:** `images/favicon.svg`
* **Product Imagery:**
  * `images/rice.webp` (Rice product card)
  * `images/wheat.webp` (Wheat product card)
  * `images/onion.webp` (Onion product card)
* **Gallery Imagery (6 AI-generated commercial photos in `images/`):**
  1. `images/gallery-rice.jpg` — Basmati Rice Cultivation (Northern India paddies, morning light)
  2. `images/gallery-wheat.jpg` — Golden Wheat Harvest (Harvest field with tractor)
  4. `images/gallery-warehouse.jpg` — Palletized Warehousing (Stacked export sacks on pallets, forklift)
  5. `images/gallery-port.jpg` — Seaport Container Dispatch (Container vessel & gantry cranes at Mundra/JNPT)
  6. `images/gallery-delivery.jpg` — Delivery & Compliance Sign-off (Client delivery handshake & clipboard)
* **Port & Trade Corridor Imagery (4 AI-generated commercial photos in `images/`):**
  1. `images/port-gcc.jpg` — Jebel Ali Port, Dubai (DP World container terminal at golden sunset with gantry cranes)
  2. `images/port-seasia.jpg` — Port of Singapore (PSA modern container terminal, turquoise sea, mega container vessel)
  3. `images/port-africa.jpg` — Port of Mombasa, East Africa (Deepwater bulk grain terminal with MV Kilindini & grain silos)
  4. `images/port-europe.jpg` — Port of Rotterdam, Netherlands (Maersk European deep-sea container logistics channel)

---

## 4. Completed Page Sections (Sitemap Order)
1. **Header Navigation (`.nav-wrap`):**
   * Logo (`R&R-ChemTech-Gold-Emblem-final-Logo.png`)
   * Menu Links: `Home`, `Products`, `Process`, `Gallery`, `Why Us`, `About`, `Contact`
   * CTA: `Request a Quote` button
   * Mobile Hamburger toggle with smooth backdrop
2. **Hero Section (`.hero`):**
   * High-impact split hero with ambient harbor & agricultural background
   * Headline: *"Premium grains, delivered worldwide."*
   * Interactive live **Export Desk** card (Rice, Wheat, Onion with pulsating green status dots, Port routes)
3. **Key Metrics & Trust Strip (`.trust-bar-sec`):**
   * Floating glassmorphism metrics bar bridging Hero directly to Products
   * Animated Live Counters: `25+ Countries served`, `15+ Years in trade`, `120K+ Tonnes shipped`, `3 Core commodities`
4. **Our Products (`#products`):**
   * 3 Compact cards (`Rice`, `Wheat`, `Onion`) with 190px imagery, specifications, packing sizes, and MOQs
5. **Import & Export Process (`#export`):**
   * Split section header
   * 4-step workflow: `01 Sourcing` -> `02 Quality check` -> `03 Packing` -> `04 Shipping`
6. **Farm to Port Journey Gallery (`#gallery`):**
   * 6 Cinematic cards (Aspect ratio wide, `185px` height, compact ~260px total card height)
   * Gold frosted badges (`Paddy Cultivation`, `Grain Harvest`, `Grading & Sorting`, `Storage & Pallets`, `Ocean Logistics`, `Verified Handover`)
   * Responsive 3-col (desktop) -> 2-col (tablet) -> 1-col (mobile)
7. **Markets We Serve (`#markets`):**
   * Eyebrow: `● Global Export Footprint`
   * Heading: *"Connecting Indian Farmlands to Global Seaports."*
   * 4 Strategic Trade Corridors:
     * `Middle East & GCC`: Jebel Ali, Dammam, Jeddah, Sohar, Hamad, Shuwaikh (4-7 days transit, Halal/SASO compliant)
     * `Southeast Asia`: Port Klang, Penang, Ho Chi Minh, Tanjung Priok, Singapore (8-14 days transit, moisture guard)
     * `Africa & Red Sea`: Mombasa, Dar es Salaam, Djibouti, Cotonou, Lome, Port Sudan (12-18 days transit, SGS/BV inspection)
     * `Europe & Mediterranean`: Rotterdam, Felixstowe, Antwerp, Mersin, Valencia (18-24 days transit, EU MRL compliant)
8. **Why R & R ChemTech (`#why-us`):**
   * **Our 4 Core Commitments:**
     * `01 Quality First` (APEDA, FSSAI, SGS compliant)
     * `02 Trust & Transparency` (Clear CIF/FOB terms under Incoterms 2020)
     * `03 Reliable Supply` (5,000+ MT monthly handling capacity)
     * `04 Growth Through Collaboration` (Long-term business connections)
9. **About R & R ChemTech (`#about`):**
   * Tagline: *"Building Trust Through Quality, Connecting Markets Through Trade."*
   * Corporate lead statement on agro-trade and chemical solutions
   * Dedicated **Our Vision** and **Our Mission** cards
10. **Frequently Asked Questions (`#faq`):**
    * Eyebrow: `● Trade Information & Answers`
    * Heading: *"Frequently Asked Questions."*
    * Interactive single-expand accordion answering 6 vital B2B trade questions:
      * Supported Incoterms 2020 (CIF, FOB, CFR from JNPT/Mundra/Kandla/Chennai)
      * Third-party inspection certificates (SGS, BV, Intertek, APEDA, Phytosanitary)
      * International payment terms (100% L/C at Sight, 30/70 T/T)
      * Minimum Order Quantities (1x20ft FCL / 25 MT for grains, 1x40ft Reefer for onions)
      * Buyer OEM private-label branding & packaging (BOPP, PP, Jute, 5kg to 50kg)
      * Production & vessel dispatch lead times (7 to 14 days)
11. **Get a Quote Section (`#contact`):**
    * Split 2-column layout:
      * Left Column: Response guarantee (24h), quality standards, flexible port deliveries, direct email
      * Right Column: Interactive RFQ form (Name, Company, Email, Commodity, Volume MT, Destination, Submit feedback alert)
12. **Corporate Footer (`.footer`):**
    * **Column 1:** Corporate Logo, Bio, IEC registration and Govt. recognized export status badges
    * **Column 2:** Export Commodities quick links (Basmati 1121, Sella, Wheat, Fresh Onions, FCL Packaging)
    * **Column 3:** Quick navigation (Home, Portfolio, 4-Step Process, Farm to Port, Markets We Serve, Why Us, Vision, FAQ, RFQ)
    * **Column 4:** Trade Desk contact & Loading Seaports (JNPT, Mundra, Kandla, Chennai)
    * **Trust & Accreditation Strip:** APEDA, FSSAI, SGS Inspection, Incoterms 2020 delivery badges
    * **Sub-Footer Bar:** Copyright, Exporting to 25+ Global Ports, Terms of Trade, Privacy Policy, and Compliance links

---

## 5. Architectural Decisions Made with User
1. **Commitments Placement (Option 1):** Moved "Core Commitments" out of the About section into the "Why R & R ChemTech" section to eliminate content duplication and give each section a clear, distinct role.
2. **Gallery Card Height (Option A):** Reduced gallery card image height from `285px` (4:3) to fixed `185px` (cinematic wide ratio), compacting total card height from `~400px` down to `~260px` to ensure both rows display seamlessly without feeling bulky.
3. **Official Corporate Logo:** Standardized on `R&R-ChemTech-Gold-Emblem-final-Logo.png` across Header and Footer with transparent background and proportional scaling.
4. **High-Conversion B2B Export Flow Reordering:** Shifted Key Trust Metrics (`25+ Countries`, `120K+ Tonnes`) directly below Hero as a floating trust bar, followed immediately by Products (`Rice`, `Wheat`, `Onion`), giving overseas buyers immediate access to commodities and credibility. Moved About Us (`Vision & Mission`) after Why Us for a cohesive proof-to-profile narrative.
5. **Modern Global Commodity Trader Typography (Option 1):** Transitioned typography from delicate luxury serif (`Cormorant Garamond`) to solid, authoritative `Plus Jakarta Sans` (800 ExtraBold) for headings and `Manrope`/`Inter` for UI. Ensures high-contrast legibility, eliminates delicate hairlines on dark emerald backgrounds, and projects established multinational trading house authority.
6. **Rich 4-Column Corporate Footer (Compact & Sleek):** Transformed the sparse footer into a comprehensive B2B global trade footer featuring brand overview with IEC badges, specific commodity lists, seaport dispatch hubs (JNPT/Mundra/Kandla/Chennai), APEDA/FSSAI/SGS/Incoterms accreditation strip, and global trade compliance links. Compacted height from ~570px down to a sleek ~350px with tight padding and inline badge styling to maintain perfect visual balance.
7. **Hero Typography & Proportioning Refinement:** Reduced oversized hero headline from 80px / 800 ExtraBold down to a balanced 54px / 700 Bold (`clamp(34px, 4.2vw, 54px)`). Removed forced italic slant on gold highlight text for an authoritative, upright corporate look, and added a clean two-line split ("Premium grains," on line 1, "delivered worldwide." on line 2), allowing the harbor background and live Export Desk to breathe with optimal symmetry.
8. **Unified Professional Typography Scale Implementation:** Standardized entire page hierarchy across all sections to eliminate font size fragmentation and hierarchy bugs:
   * **H2 Section Titles:** Unified to `clamp(28px, 3.4vw, 40px)` at `700 Bold` (removed the `58px` inline override in Process section that violated H1>H2 hierarchy).
   * **Card Titles (H3):** Unified to `20px – 21px` across Process step cards, Gallery cards, Commitment cards, and Vision/Mission cards.
   * **Product Image Titles:** Reduced from `34px` down to `26px` so produce imagery is not obstructed.
   * **Eyebrow Tags:** Refined to `11.5px` with letter-spacing `0.14em` and an executive gold dot indicator (`●`).
   * **Body Copy:** Consolidated into a 3-tier scale (16px intro leads, 14.5px standard descriptions, 13px micro specs and labels).
9. **Import & Export Process Header Alignment:** Replaced the disconnected 2-column split layout (`.sec-header-split`) with a unified left-aligned `.process-header` block (`max-width: 680px`), placing the operational subtitle directly beneath the H2 heading for natural readability and visual symmetry consistent with the Gallery and About sections.
10. **Interactive Export Desk & Fast-Track Quick Quote Modal (Option 2):** Converted the hero Export Desk widget from passive text into interactive B2B trading terminal buttons (`Rice`, `Wheat`, `Onion`). Clicking any commodity triggers a luxury glassmorphism modal with pre-selected commodity pills, high-intent conversion fields (Port, Volume MT, Company, WhatsApp/Email), smooth CSS spring animations, and instant submission feedback.
11. **Markets We Serve Section Addition (`#markets`):** Added a dedicated 4-corridor global export footprint section (Middle East & GCC, Southeast Asia, Africa & Red Sea, Europe & Mediterranean) complete with direct ocean transit times, key destination ports chips, core commodities, and regional compliance standards (Halal, SASO, ESMA, Phytosanitary, EU MRL).
12. **Interactive Trade FAQ Accordion Addition (`#faq`):** Added a single-expand accordion section addressing the top 6 international buyer conversion questions: Incoterms 2020 (CIF/FOB), third-party inspections (SGS/BV), payment terms (L/C at Sight, 30/70 T/T), MOQs (1x20ft FCL / 1x40ft Reefer), buyer private labeling, and vessel lead times.
13. **Executive Split 2-Column FAQ Layout (Option 2):** Redesigned the FAQ section into a Fortune-500 global trade split layout. Solved the desktop right-side empty void and disproportionate vertical height by dividing the section into:
    * **Left Column (38% — ~420px):** Sticky section heading, lead text, and a dedicated **Trade Desk Support Card** ("Have a Specific Cargo or Tender Inquiry?") equipped with instant WhatsApp (`wa.me`) and Email CTAs plus 2-hour response guarantee.
    * **Right Column (62% — ~720px):** 6 compact FAQ accordions (`padding: 14px 20px`, `15px` title font, `13px` rounded borders) spanning the full column width without awkward voids.
    * **Responsive Behavior:** Seamlessly collapses to a clean single-column vertical stack below `960px` with static positioning.
14. **Markets We Serve 4-Column Sleek Corridor Deck (Option 1):** Re-architected the Global Export Footprint section from an oversized, bulky 2x2 grid (where cards were 560px wide and 410px tall) into a streamlined, high-density 4-column single-row deck:
    * **Layout Symmetry:** 4 cards across desktop (`repeat(4, 1fr)` at ~270px width), matching the visual rhythm of the 4-column commitments in "Why Us".
    * **Height Reduction:** Total card height reduced by ~35% (from ~410px to ~270px) via streamlined chip tags, inline transit badges, and clean port labels.
    * **Viewport Fit:** Entire global export footprint fits comfortably into a single laptop screen fold without requiring heavy vertical scrolling.
    * **Responsive Stacking:** Dynamically adapts to 2-column grid (`repeat(2, 1fr)`) on tablets and 1-column on mobile phones.
15. **Fixed Navbar Placement & Single-Row Desktop Layout:** Eliminated the multi-line header bug where navigation links previously wrapped onto a second row over the ship image background. Standardized on `flex-wrap: nowrap;`, tuned navigation links gap to `clamp(10px, 1.2vw, 18px)`, refined font size to `14px`, and set logo height to `64px`. Entire desktop navbar now sits cleanly on a single, prestigious header row with over 200px of breathing room.
16. **FAQ Alignment & Hover-to-Reveal Interaction:** Re-architected the FAQ interaction model and vertical symmetry:
    * **Hover Auto-Expansion:** Moving mouse over any FAQ question automatically expands its answer with smooth CSS `cubic-bezier` transitions, eliminating repetitive clicking and keeping information instantly accessible. Full click/touch support retained for mobile.
    * **Vertical Baseline Alignment:** Balanced right-column accordion spacing (`gap: 11px`, `padding-top: 4px`) so that the open FAQ accordion perfectly aligns with the left Trade Desk Support Card, eliminating awkward bottom voids.
    * **Full Responsiveness Audit:** Thoroughly tested and verified across Desktop (1366px), Tablet Portrait (768px with gold hamburger drawer), and Mobile Phone (390px) with 0 horizontal scroll/overflow.
17. **Markets We Serve Seaport Background Visibility & Card Sizing Refinement:**
    * **Enhanced Photographic Clarity:** Adjusted `.market-bg` and scrim gradients so the 4 seaport images (`port-gcc.jpg`, `port-seasia.jpg`, `port-africa.jpg`, `port-europe.jpg`) are clearly visible at rest (`opacity: 0.50`, `filter: brightness(0.92) contrast(1.08) saturate(1.2)`) and pop dramatically on hover (`opacity: 0.88`, `brightness(1.08) saturate(1.3)`, `scale(1.08)`).
    * **Gradient Scrim Lightening:** Replaced the dense dark green veil with a refined top-to-bottom gradient (`0.22` at top allowing harbor cranes, ships, and sky to shine through brightly; smoothly darkening to `0.88` towards the bottom for crisp text readability).
    * **Backdrop Filters & Text Contrast:** Enhanced corridor badges, transit pills, and seaport chips with frosted glass backdrops (`backdrop-filter: blur(8px)`) and subtle text shadows to ensure 100% legibility over the vivid seaport photos.
    * **Removed Card-Level Buttons:** Completely removed the redundant "Inquire on WhatsApp" buttons from the bottom of all 4 corridor cards, keeping the deck compact, symmetrical, and uncluttered.
18. **Floating WhatsApp Quick-Contact Widget & Phone Number Update (`9065413960`):**
    * **Universal Floating Widget:** Added a fixed bottom-right floating WhatsApp button (`bottom: 28px; right: 28px; z-index: 990`) featuring official brand green gradient (`#25D366`), crisp SVG phone/speech bubble icon, continuous animated radar pulse ring (`fwaPulse`), and a sleek frosted "Chat with Trade Desk" hover tooltip.
    * **Global Contact Number Update:** Updated the official contact number to `9065413960` (`+91 90654 13960`) across the entire website:
      * Floating WhatsApp widget (`https://wa.me/919065413960?text=Hello%20R%26R%20ChemTech,%20I%20have%20an%20export%20enquiry.`)
      * FAQ Trade Desk Support Card (`https://wa.me/919065413960?text=Hello%20R%26R%20ChemTech%20Trade%20Desk,%20I%20have%20an%20export%20enquiry.`)
      * Corporate Footer direct phone and WhatsApp link (`+91 90654 13960`).
    * **Mobile Responsive Behavior:** Stays cleanly positioned (`bottom: 20px; right: 20px`) on small devices without obscuring page content or form submissions.
19. **Our Products Image Hover Zoom Effect Unified:**
    * **Harmonized Micro-Interactions:** Re-architected product card image styling (`.pi::before` pseudo-element with `z-index: -2` and `overflow: hidden`) so hovering over any product card (`Rice`, `Wheat`, `Onion`) activates a smooth `scale(1.08)` zoom with gentle brightness & saturation boost (`filter: brightness(1.06) saturate(1.15)`).
    * **Seamless Visual Consistency:** Matches the exact fluid motion curve (`cubic-bezier(0.16, 1, 0.3, 1)`) and timing used across the Farm-to-Port Journey gallery cards and Global Export Footprint corridor decks.
    * **Text Stability:** Retains static dark emerald scrim gradient (`.pi::after` with `z-index: -1`) and text shadows, ensuring product labels ("Rice", "Wheat", "Onion") stay perfectly crisp without jitter or layout shift during the zoom transition.
20. **Phone Desktop Mode (980px) & Tablet Landscape Parity:**
    * **Lowered Mobile Breakpoint:** Adjusted desktop threshold from `1100px`/`1000px` down to `950px`.
    * **Full Desktop Experience at 980px:** When mobile users toggle "Desktop site" on Chrome (which emulates a standard `980px` viewport), the site now preserves the full laptop experience:
      - Navbar displays all horizontal links and the "Request a Quote" button without triggering the mobile hamburger icon.
      - Hero section retains side-by-side symmetry (left headline/CTA and right interactive Export Desk card).
      - Landscape seaport background image is retained without vertical clipping.
    * **Portrait Mobile Protection:** Standard mobile phones (< 950px) continue to smoothly activate the vertical layout, hamburger drawer, and portrait hero photography.
21. **Phone Desktop Mode 16:9 Hero Height Clamp:**
    * **Issue Addressed:** When phone users switch Chrome to "Desktop site", the physical vertical screen height created an extreme ~2,100px viewport, which forced `background-size: cover` to zoom the 16:9 landscape image 2.5x and crop out the left sunset and right port cranes.
    * **Fix Applied:** In `@media (max-width: 1150px) and (min-width: 951px)` and `@media (orientation: portrait) and (min-width: 951px)`, `.hero` height is clamped to `clamp(540px, 56.25vw, 640px)` (where `56.25vw` is the exact 16:9 mathematical aspect ratio).
    * **Result:** The 16:9 hero background image fits the container with virtually zero crop, displaying the full panorama (sunset, seaport, cargo ship, and produce) alongside side-by-side headline and Export Desk.

---

## 6. Next Steps & Pending Items
When resuming work, here are the ready-to-tackle items:
* [ ] **Official Corporate Address:** Replace placeholder Navi Mumbai address with exact registered office details if needed.
* [ ] **Chemicals Portfolio (Optional):** Clarify whether to add industrial/agro-chemicals sub-page or tab.
* [ ] **Certifications Badges:** Add official accreditation icons (APEDA, FSSAI, ISO, IEC) in the Quality / Why Us section.
* [ ] **Form Submission Backend:** Connect RFQ form to Email service (EmailJS, Formspree, or custom webhook).

