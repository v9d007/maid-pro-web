# MaidPro Web Application

A modern, high-performance web platform for home cleaning and domestic help services. Built with **Next.js 15, React 19, TypeScript, and Tailwind CSS**.

---

## ✨ Features

- **Responsive Design**: Fully responsive layout optimized for mobile, tablet, and desktop screens.
- **Bilingual Support**: Instant toggle between English and Hindi.
- **Theme Modes**: Seamless Dark and Light theme switching.
- **Service Catalog**: Categorized services with transparent pricing slabs and feature lists.
- **Interactive Enquiry**: Real-time validated callback enquiry modal.
- **Infinite Testimonials Marquee**: Smooth, auto-scrolling customer review marquee.
- **FAQ Accordion**: Categorized frequently asked questions.

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or 20+
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/<your-repo-name>.git
   cd <your-repo-name>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to view the application.

---

## 🏗️ Project Structure

```
├── app/
│   ├── layout.tsx              # Root layout & SEO metadata
│   ├── page.tsx                # Home page layout
│   └── globals.css             # Global styles and Tailwind directives
├── components/
│   ├── Navbar.tsx              # Navigation bar with language & theme controls
│   ├── Hero.tsx                # Hero banner & key value propositions
│   ├── ServicesGrid.tsx        # Service catalog cards & category filters
│   ├── BookingModal.tsx        # Enquiry & callback request modal
│   ├── Testimonials.tsx        # Infinite auto-scrolling reviews
│   ├── FAQSection.tsx          # FAQ accordion
│   └── Footer.tsx              # Footer navigation and links
├── context/
│   ├── LanguageContext.tsx     # Internationalization state (EN / HI)
│   └── ThemeContext.tsx        # Theme state (Light / Dark)
├── data/
│   ├── services.ts             # Service catalog definitions
│   ├── testimonials.ts         # Testimonials dataset
│   └── faqs.ts                 # FAQs dataset
└── utils/
    └── whatsapp.ts             # Communication helper utilities
```

---

## 📦 Build & Deployment

### Production Build

```bash
npm run build
npm run start
```

### Deploy to Vercel

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new).

1. Push code to your Git repository.
2. Import the project into Vercel.
3. Deploy with zero configuration.

---

## 📄 License

This project is licensed under the MIT License.
