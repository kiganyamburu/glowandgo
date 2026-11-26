# ✨ Glow & Go Studio — Lash & Wax Boutique

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Proprietary-gold?style=for-the-badge)](#)
[![Status](https://img.shields.io/badge/Status-Production_Ready-brightgreen?style=for-the-badge)](#)

> **A high-converting, luxury web application built for Glow & Go Studio** — Ruaka's premier beauty studio specializing in precision lash artistry, Russian volume fan blooming, knotless cluster sets, and painless intimate & facial waxing.

Located at **Ruaka Commercial Center, Ruaka, Kenya** • Direct WhatsApp: **[+254 748 897 019](https://wa.me/254748897019)** • Instagram: **[@glowandgo_lashwaxspa](https://instagram.com/glowandgo_lashwaxspa)**

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Design & Aesthetics](#-design--aesthetics)
- [Pages & Architecture](#-pages--architecture)
- [Tech Stack](#-tech-stack)
- [Directory Structure](#-directory-structure)
- [Getting Started](#-getting-started)
- [Configuration & Data Management](#-configuration--data-management)
- [WhatsApp Booking Engine](#-whatsapp-booking-engine)
- [Production Deployment](#-production-deployment)
- [Studio Information](#-studio-information)

---

## 🌟 Overview

**Glow & Go Studio** is engineered with **Next.js 14 App Router** to deliver an ultra-fast, visually captivating boutique booking experience. The application bridges digital exploration with seamless studio operations by transforming complex beauty service menus into intuitive visual cards, interactive eye-mapping spectrums, before/after lookbooks, and instant WhatsApp booking flows.

Every component is crafted around client trust, transparency, and high conversion — featuring verified pricing from the studio's official price guide, live instant estimates, autoclave hygiene disclosures, and printable reservation slips.

---

## 💎 Key Features

### 📅 4-Step Interactive Booking Engine (`/book`)
- **Step 1 — Service Selection:** Tabbed categories (Cluster Lashes, Individual Lashes, Refills, Add-ons, Waxing) with live selection badges and radio-card highlights.
- **Step 2 — Stylist & Slot Scheduling:** Choose between lead specialists (e.g. Rachel M. - Master Lash Artist, Rachel M. - Volume Specialist) or the earliest available slot with date and time pickers.
- **Step 3 — Client Personalization:** Welcome consultation toggles for first-time guests versus returning clients, plus special notes input.
- **Step 4 — Live Summary & Confirmation:** Real-time price calculation, dynamic WhatsApp reservation generation, and a printable modal **Reservation Slip** with celebratory confetti.

### 👁️ The Style Spectrum (Eye Mapping Guide)
- Visual eye-mapping breakdown of popular styling techniques:
  - **Doll Eye:** Open-eye accentuation with maximum center length (11–13mm).
  - **Cat Eye:** Elongated sultry flare focusing density at the outer corners.
  - **Squirrel / Kim K:** Fluffy, textured spikes mimicking natural brow-arch contours.
  - **Natural Sweep:** Seamless everyday enhancement tailored to natural lash lines.
- Complete specifications detailing curl options (**C, D, L, M**) and ultra-light filament diameters (**0.05mm – 0.15mm**).

### 📋 Dual Menu Views: Modern Cards vs. Official Flyer
- **Interactive Card View:** Filterable, categorized cards with durations, badges (Bestseller, Trending, Studio Signature), descriptions, and instant booking buttons.
- **Official Flyer View:** An authentic, faithfully reproduced digital view of the studio's in-salon price sheet with categorized tables, add-on badges, and instant booking triggers.

### 🪞 Before & After Lookbook (`/gallery`)
- Interactive **drag-to-reveal Before/After Image Slider** for realistic visual proof.
- 12 comprehensive lookbook transformations with curl maps, lengths, retention spans, and client notes.
- Maintenance countdown card reinforcing the 2–3 week refill protocol.
- Instagram social community wall showcasing verified client sets.

### 🧮 Instant Price Estimator
- Quick calculator widget embedded on the homepage allowing clients to pick their base set, stack add-ons (spikes, ombré color accents, lash bath, decals), and generate an instant itemized WhatsApp quote in one click.

### 🌿 Head-to-Toe Waxing Menu (`/waxing`)
- Comprehensive epilation services divided into **Facial Epilation**, **Intimate Epilation (Bikini & Brazilian)**, **Body & Limbs**, and **Head-to-Toe Combo Packages**.
- Features the **Glow & Go Promise** (no double-dipping, medical-grade strip & hard wax, soothing post-wax tea tree oil infusion) and full pre/post waxing care instructions.

### 🛡️ Sanctuary & Hygiene Standards (`/about`)
- Dedicated transparency section highlighting the studio's medical-grade autoclave sterilization, disposable spoolies, formaldehyde-free adhesives, and mandatory patch testing protocols.

### ❓ Searchable FAQ Knowledge Base (`/faq`)
- Instant search filter and categorized accordions addressing preparation, retention, the 48-hour moisture rule, aftercare, and contraindications.

### 💬 Bulletproof WhatsApp Automation
- Centralized URL encoding ensures that all generated booking payloads with ampersands, punctuation, and multi-line summaries transmit without truncation or broken queries.

---

## 🎨 Design & Aesthetics

The UI follows an editorial, soft-luxe beauty aesthetic inspired by high-end boutique salons:

| Token | Hex Code | Purpose |
| :--- | :--- | :--- |
| **Brand Primary (Warm Rose)** | `#b76e79` | Primary buttons, active tabs, accent borders, highlights |
| **Brand Secondary (Soft Blush)** | `#d8a48f` | Badges, subtle gradients, secondary accents |
| **Brand Truffle (Deep Charcoal)** | `#2c2225` | High-contrast luxury headings and typography |
| **Brand Plum (Muted Mauve)** | `#6e5a60` | Body copy, subtitles, secondary metadata |
| **Brand Gold (Warm Champagne)** | `#c59b27` | Premium badges, star ratings, luxury highlights |
| **Brand Card Bg** | `#fffbf9` | Warm cream background for elevated contrast |
| **Brand Border** | `#ecd8d0` | Soft blush divider borders and card framing |

- **Typography:** Classic serif display headings (`Playfair Display` / font-serif) paired with clean, accessible sans-serif interface typography (`Inter` / font-sans).
- **Responsive Layout:** 100% mobile-first design with smooth collapsible drawer navigation and a sticky mobile action bar.

---

## 📂 Pages & Architecture

All pages utilize Next.js App Router for optimal SEO, fast Time to First Byte (TTFB), and static pre-rendering:

| Route | File Path | Description |
| :--- | :--- | :--- |
| `/` | `src/app/page.tsx` | Hero, Style Spectrum, Curated Treatments, Estimator, 48h Protocol, CTA |
| `/book` | `src/app/book/page.tsx` | 4-step interactive booking flow, stylist selector, date/time, slip modal |
| `/gallery` | `src/app/gallery/page.tsx` | Lookbook with Before/After comparison slider, 12 transformations, specs |
| `/waxing` | `src/app/waxing/page.tsx` | Waxing treatments menu, packages, prep guide, post-wax protocols |
| `/about` | `src/app/about/page.tsx` | Ruaka sanctuary story, autoclave hygiene standards, stylist bios |
| `/reviews` | `src/app/reviews/page.tsx` | Verified client testimonials, 5-star ratings, community wall |
| `/faq` | `src/app/faq/page.tsx` | Searchable accordion FAQs with category filtering |
| `/_not-found` | `src/app/not-found.tsx` | Custom branded 404 recovery page with quick navigation links |

### Clean URL Rewrites
For convenience, `next.config.mjs` maps common vanity links:
- `/services`, `/menu`, `/lash-menu`, `/pricing` ➔ `/`
- `/booking` ➔ `/book`
- `/lookbook` ➔ `/gallery`
- `/contact` ➔ `/about`

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router, Server & Client Components)
- **Language:** [TypeScript 5](https://www.typescriptlang.org/) (Strict mode enabled)
- **Styling:** [Tailwind CSS 3](https://tailwindcss.com/) with `@tailwindcss/forms`
- **Icons:** [Lucide React](https://lucide.dev/)
- **Utility Libraries:** `clsx`, `tailwind-merge`
- **Animations & Effects:** [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)
- **Linter:** ESLint 8 with `eslint-config-next`

---

## 📁 Directory Structure

```
glowandgo/
├── .eslintrc.json           # ESLint configuration tailored for Next.js 14
├── .gitignore               # Git ignore rules (.next, node_modules, .env.local)
├── next.config.mjs          # Next.js configuration with remote image patterns & rewrites
├── package.json             # Scripts, dependencies, and metadata
├── postcss.config.mjs       # PostCSS configuration for Tailwind CSS
├── tailwind.config.ts       # Custom luxury color palette & theme extensions
├── tsconfig.json            # Strict TypeScript configuration
└── src/
    ├── app/                 # Next.js App Router routes
    │   ├── about/page.tsx   # Studio story, autoclave standards & team
    │   ├── book/page.tsx    # 4-step interactive reservation system
    │   ├── faq/page.tsx     # Searchable accordion FAQ
    │   ├── gallery/page.tsx # Before/After lookbook slider & sets
    │   ├── reviews/page.tsx # Client reviews & Instagram feed
    │   ├── waxing/page.tsx  # Facial, body & intimate waxing menu
    │   ├── globals.css      # Tailwind directives & luxury utility styles
    │   ├── layout.tsx       # Root layout with TopBar, Navbar, Footer, WhatsApp
    │   ├── not-found.tsx    # Branded 404 recovery page
    │   └── page.tsx         # Homepage with hero, styles, treatments & estimator
    ├── components/          # Reusable UI components
    │   ├── BeforeAfterSlider.tsx     # Interactive drag-to-compare slider
    │   ├── FloatingWhatsApp.tsx      # Persistent quick-access WhatsApp button
    │   ├── Footer.tsx                # Studio hours, map links & social links
    │   ├── InstantEstimator.tsx      # Dynamic price calculation widget
    │   ├── Navbar.tsx                # Main responsive navigation header
    │   ├── OfficialFlyerView.tsx     # Authentic digital flyer view
    │   ├── ReservationSlipModal.tsx  # Printable booking confirmation slip
    │   ├── ServiceCard.tsx           # Individual service presentation card
    │   └── TopBar.tsx                # Announcement header with location & phone
    ├── data/                # Structured datasets
    │   ├── faqs.ts          # FAQ items categorized by topic
    │   ├── lookbook.ts      # Lookbook transformations and technical specs
    │   ├── reviews.ts       # Verified reviews and ratings
    │   └── services.ts      # Lash & waxing menus, pricing, and formatters
    └── lib/                 # Core utilities
        ├── utils.ts         # Class merging and formatting helpers
        └── whatsapp.ts      # Safe URI-encoded WhatsApp link generators
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js:** v18.18.0 or v20+ (Node v20 LTS recommended)
- **Package Manager:** `npm` (v9+) or `pnpm` / `yarn`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/kiganyamburu/glowandgo.git
   cd glowandgo
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables (Optional):**
   Copy the example environment file:
   ```bash
   cp .env.example .env.local
   ```
   *By default, the application runs with pre-configured studio defaults.*

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Run the production build & test:**
   ```bash
   npm run build
   npm run start
   ```

6. **Check code quality:**
   ```bash
   npm run lint
   npx tsc --noEmit
   ```

---

## ⚙️ Configuration & Data Management

All studio data is cleanly centralized in `src/data/` for straightforward editing without modifying UI logic:

### 1. Updating Services & Pricing
Edit [`src/data/services.ts`](file:///c:/Users/User/Desktop/Projects/glowandgo/src/data/services.ts):
- `CLUSTER_LASHES`: Natural, Volume, Mega, Hybrid, Wet Look, Anime, Wispy, Bottom.
- `INDIVIDUAL_LASHES`: Classic, Hybrid, Volume 3D-6D, Mega Volume 10D+, Wet/Wispy.
- `LASH_REFILLS`: 1-2 week touch-ups, 2-3 week maintenance.
- `LASH_ADDONS`: Spikes, Decals, Ombré colors, Lash bath, Removals.
- `WAXING_FACIAL`, `WAXING_INTIMATE`, `WAXING_BODY`, `WAXING_COMBOS`: Epilation services.

### 2. Updating Contact & WhatsApp Details
Edit [`src/lib/whatsapp.ts`](file:///c:/Users/User/Desktop/Projects/glowandgo/src/lib/whatsapp.ts):
```typescript
export const STUDIO_PHONE = "254748897019"; // Format: Country code + Number without '+'
```

### 3. Studio Hours & Location
Edit [`src/components/Footer.tsx`](file:///c:/Users/User/Desktop/Projects/glowandgo/src/components/Footer.tsx) and [`src/components/TopBar.tsx`](file:///c:/Users/User/Desktop/Projects/glowandgo/src/components/TopBar.tsx):
- **Address:** Ruaka Commercial Center, Ruaka, Kenya
- **Hours:** Monday – Saturday: 9:00 AM – 7:30 PM | Sunday: By Appointment

---

## 💬 WhatsApp Booking Engine

The website uses a dedicated WhatsApp integration utility in [`src/lib/whatsapp.ts`](file:///c:/Users/User/Desktop/Projects/glowandgo/src/lib/whatsapp.ts):

```typescript
export function getWhatsAppLink(message: string, phone: string = "254748897019"): string {
  const cleanPhone = phone.replace(/[^0-9]/g, "");
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}
```

### Why this matters:
- **No Truncated Messages:** Traditional links with unencoded `&` characters cause WhatsApp to drop all content after the ampersand (e.g. `"Hello Glow & Go"` getting cut off at `"Hello Glow"`). Full `encodeURIComponent` prevents this.
- **Pre-formatted Client Reservations:** The booking system automatically generates structured WhatsApp booking messages containing service name, price, specialist name, date, time slot, and client notes.

---

## 🚢 Production Deployment

### Deploy to Vercel (Recommended)
1. Push your repository to GitHub.
2. Import the project into [Vercel](https://vercel.com/).
3. Framework Preset: **Next.js**.
4. Root Directory: `./`.
5. Click **Deploy**. Vercel will automatically build and distribute the site to global edge nodes.

### Deploy with Docker / Node VPS
```bash
# Build the optimized standalone production bundle
npm run build

# Start the Node.js production server
npm run start -p 3000
```

---

## 📍 Studio Information

- **Studio Name:** Glow & Go Studio
- **Location:** Ruaka Commercial Center, Ruaka, Kiambu / Nairobi, Kenya
- **Telephone / WhatsApp:** [+254 748 897 019](https://wa.me/254748897019)
- **Instagram:** [@glowandgo_lashwaxspa](https://instagram.com/glowandgo_lashwaxspa)
- **Operating Hours:**
  - **Monday – Saturday:** 9:00 AM – 7:30 PM
  - **Sunday & Public Holidays:** By Appointment

---

*Designed & developed with ❤️ for Glow & Go Studio.*
