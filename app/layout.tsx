import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { Providers } from "@/components/Providers";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#005c55",
};

export const metadata: Metadata = {
  title: "Maid Pro Solution 4 You | 100% Verified Maids & Deep Cleaning in Agra",
  description:
    "Agra's trusted domestic help & cleaning agency. 100% Police-verified housemaids, cooks, babysitters, elderly caregivers & deep cleaning experts. Transparent monthly salary slabs & instant free replacement across Khandari, Dayalbagh, Kamla Nagar, Sanjay Place & Bodla.",
  keywords: [
    "Maid Service in Agra",
    "House Cleaning Agra",
    "Deep House Cleaning Khandari",
    "Housemaid in Dayalbagh Agra",
    "Cook in Kamla Nagar",
    "Babysitter in Agra",
    "Elderly Care Agra",
    "24 Hour Live in Maid Agra",
    "Japa Maid Agra",
    "Maid Pro Solution 4 You",
  ],
  authors: [{ name: "Maid Pro Solution 4 You" }],
  metadataBase: new URL("https://maidprosolution4you.in"),
  alternates: {
    canonical: "https://maidprosolution4you.in",
  },
  openGraph: {
    title: "Maid Pro Solution 4 You | Verified Domestic Staff & Cleaning in Agra",
    description:
      "100% Police-verified housemaids, cooks, babysitters & deep cleaning in Agra. Instant free replacement & transparent pricing.",
    url: "https://maidprosolution4you.in",
    siteName: "Maid Pro Solution 4 You",
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="antialiased min-h-screen flex flex-col bg-white text-slate-900 dark:bg-[#0b1318] dark:text-slate-100 transition-colors duration-200">
        <Providers>{children}</Providers>

        {/* Google Analytics Tag from Live Site */}
        <Script
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=G-0KSQDBWGNG"
        />
        <Script
          id="google-analytics"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-0KSQDBWGNG');
            `,
          }}
        />

        {/* Microsoft Clarity Tracking from Live Site */}
        <Script
          id="microsoft-clarity"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              (function (c, l, a, r, i, t, y) {
                c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
                t = l.createElement(r);
                t.async = 1;
                t.src = 'https://www.clarity.ms/tag/' + i;
                y = l.getElementsByTagName(r)[0];
                y.parentNode.insertBefore(t, y);
              })(window, document, 'clarity', 'script', 'y5epus4jod');
            `,
          }}
        />

        {/* Local Business & Service JSON-LD Schema for Google Search, Maps & AI Crawlers */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "HomeAndConstructionBusiness",
                  "@id": "https://maidprosolution4you.in/#business",
                  "name": "Maid Pro Solution 4 You",
                  "description": "Aadhaar & Police-verified housemaids, cooks, babysitters & deep cleaning experts in Agra. 24/7 service with instant free replacement and transparent rates.",
                  "image": "https://maidprosolution4you.in/images/services/all_in_one.jpg",
                  "telephone": "+919321034262",
                  "email": "maidprosolution@gmail.com",
                  "url": "https://maidprosolution4you.in",
                  "priceRange": "₹₹",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Khandari Crossing / Sanjay Place",
                    "addressLocality": "Agra",
                    "addressRegion": "Uttar Pradesh",
                    "postalCode": "282002",
                    "addressCountry": "IN"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "27.1767",
                    "longitude": "78.0081"
                  },
                  "areaServed": [
                    { "@type": "City", "name": "Agra" },
                    { "@type": "AdministrativeArea", "name": "Khandari, Agra" },
                    { "@type": "AdministrativeArea", "name": "Dayalbagh, Agra" },
                    { "@type": "AdministrativeArea", "name": "Kamla Nagar, Agra" },
                    { "@type": "AdministrativeArea", "name": "Sanjay Place, Agra" },
                    { "@type": "AdministrativeArea", "name": "Sikandra, Agra" },
                    { "@type": "AdministrativeArea", "name": "Fatehabad Road, Agra" }
                  ],
                  "openingHoursSpecification": [
                    {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                      "opens": "07:00",
                      "closes": "21:00"
                    }
                  ],
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.6",
                    "reviewCount": "128"
                  },
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Agra Domestic Services & Deep Cleaning",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Deep House Cleaning in Agra",
                          "description": "Complete sanitization and intensive cleaning for apartments and independent villas in Agra."
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Verified House Maid & Daily Housekeeping",
                          "description": "100% Police & Aadhaar verified daily domestic maids with transparent hourly and monthly salary slabs."
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Cook & Kitchen Sanitization",
                          "description": "Hygienic vegetarian and custom home cooks in Agra."
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Babysitter & Elderly Caregiver",
                          "description": "Trained and caring babysitters and senior care attendants for Agra families."
                        }
                      }
                    ]
                  }
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://maidprosolution4you.in/#faqs",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "Are your housemaids and cleaning staff background-verified?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, 100%. Every helper, maid, cook, and cleaner undergoes mandatory government ID (Aadhaar Card) verification, address verification, and police background checks before being assigned to any home in Agra."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What happens if I am not satisfied with the maid or cleaner?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We offer a 100% Free Replacement Guarantee. If you ever feel the helper's work, punctuality, or attitude doesn't match your expectations, we will provide a qualified replacement immediately at zero additional replacement fee."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Do you offer both one-time cleaning and monthly maid subscriptions?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes! You can book on-demand one-time services (like Deep Cleaning or Move-in Cleaning) for a few hours, or hire monthly housemaids, daily cooks, full-day babysitters, and senior caregivers with flexible shifts."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How quickly can a maid or cleaning team reach my home in Agra?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "For on-demand Deep Cleaning, we can often dispatch our team within 2 to 4 hours (same-day booking). For monthly housemaids, cooks, or nannies, we arrange a personal interview/trial session within 24 to 48 hours in your locality."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How does the payment work? Are there hidden charges?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We maintain 100% transparent pricing. You only pay the agreed fixed quote or monthly fee. You can pay conveniently via UPI, Google Pay, PhonePe, Net Banking, or Cash after your service is completed satisfactorily."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Which areas in Agra do you currently serve?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We cover all major localities across Agra including Khandari, Bodla, Dayalbagh, Kamla Nagar, Sanjay Place, Shahganj, Civil Lines, Fatehabad Road, Sikandra, Tajganj, and Awas Vikas Colony."
                      }
                    }
                  ]
                }
              ]
            }),
          }}
        />
      </body>
    </html>
  );
}

