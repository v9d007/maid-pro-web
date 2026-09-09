# Maid Pro Solution 4 You — Official Web Portal

> Modern, high-performance web platform for **Maid Pro Solution 4 You** (House Cleaning & Domestic Help in Agra, Uttar Pradesh). Built with **Next.js 15, React 19, TypeScript, and Tailwind CSS** following the **Pure Nordic Minimalist** design system.

---

## 🚀 Quick Start

### 1. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Build for Production
```bash
npm run build
npm run start
```

---

## 📁 Project Architecture

```
/Users/vinod/Documents/Maids Pro
├── app/
│   ├── layout.tsx              # Root HTML, SEO Metadata, OpenGraph & Viewport
│   ├── page.tsx                # Main Landing Page & State Controller
│   └── globals.css             # Nordic Minimalist CSS & Tailwind utilities
├── components/
│   ├── Navbar.tsx              # 24/7 Status Header, Contact CTA & Mobile Menu
│   ├── Hero.tsx                # Hero Banner with Instant Cost Estimator
│   ├── TrustBadges.tsx         # 4 Safety & Guarantee Pillars
│   ├── ServicesGrid.tsx        # Transparent Pricing Cards for all 7 Services
│   ├── BookingModal.tsx        # Multi-Step Interactive Estimator & WhatsApp Checkout
│   ├── WhyChooseUs.tsx         # Comparison: Maid Pro vs Unverified Maids
│   ├── HowItWorks.tsx          # 3-Step Simple Process
│   ├── Testimonials.tsx        # Agra Customer Reviews (Khandari, Bodla, Dayalbagh)
│   ├── FAQSection.tsx          # Interactive Category-Filtered Accordion
│   ├── MobileStickyBar.tsx     # Mobile Bottom Action Bar (Call, Quote, WhatsApp)
│   └── Footer.tsx              # Business Address, Hours, Localities & Map Link
├── data/
│   ├── services.ts             # Service Catalog, Pricing, and Localities
│   ├── testimonials.ts         # Customer Testimonials Dataset
│   └── faqs.ts                 # FAQs Dataset
└── utils/
    └── whatsapp.ts             # WhatsApp Pre-filled Payload Generator
```

---

## 🛠️ How to Customize

### Updating Pricing or Services
Edit [`data/services.ts`](file:///Users/vinod/Documents/Maids%20Pro/data/services.ts) to update service names, descriptions, or hourly/monthly rates.

### Updating Phone / WhatsApp Number
Edit [`utils/whatsapp.ts`](file:///Users/vinod/Documents/Maids%20Pro/utils/whatsapp.ts):
```ts
export const PHONE_NUMBER = "919321034262";
export const FORMATTED_PHONE = "+91 9321034262";
```

### Deploying to Vercel / Cloudflare
1. Push this folder to your GitHub Organization (e.g. `github.com/YourOrg/maidpro-web`).
2. Connect your repository on [Vercel](https://vercel.com) — zero configuration required!
