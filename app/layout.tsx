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
      { url: "/icon", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon", sizes: "180x180", type: "image/png" },
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
      <body className="antialiased min-h-screen flex flex-col bg-[#fffbfa] text-slate-900 dark:bg-[#0b1318] dark:text-slate-100 transition-colors duration-200">
        <Providers>{children}</Providers>

        {/* Google Analytics Tag from Live Site */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-0KSQDBWGNG"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
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
          strategy="afterInteractive"
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

        {/* Local Business JSON-LD Schema for Google Search & Maps Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              "name": "Maid Pro Solution 4 You",
              "description": "Aadhaar & Police-verified housemaids, cooks, babysitters & deep cleaning experts in Agra. 24/7 service with instant free replacement.",
              "image": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&auto=format&fit=crop&q=80",
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
                "ratingValue": "4.9",
                "reviewCount": "128"
              }
            }),
          }}
        />
      </body>
    </html>
  );
}

