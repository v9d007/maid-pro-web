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
  title: "Maid Pro Solution 4 You - House Cleaning Service in Khandari, Agra",
  description:
    "The aim of 'Maid Pro Solution for You' is to offer housemaids work opportunities and organize this industry with trust and security in Agra. Committed to providing verified housemaids, babysitters, cooks, and deep cleaning.",
  keywords: [
    "Maid Service Agra",
    "House Cleaning Khandari",
    "Deep Cleaning Agra",
    "Housemaid in Bodla Agra",
    "Cook in Dayalbagh",
    "Babysitter Agra",
    "Elderly Care Agra",
    "Maid Pro Solution 4 You",
  ],
  authors: [{ name: "Maid Pro Solution 4 You" }],
  metadataBase: new URL("https://maid-pro-solution4-you.grexa.site"),
  alternates: {
    canonical: "https://maid-pro-solution4-you.grexa.site",
  },
  openGraph: {
    title: "Maid pro solution4 you - House Cleaning Service in Khandari, Agra",
    description:
      "Aadhaar & Police-verified housemaids, cooks, babysitters & deep cleaning experts in Agra. 24/7 service with instant free replacement.",
    url: "https://maid-pro-solution4-you.grexa.site",
    siteName: "Maid Pro Solution 4 You",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
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
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-[#fffbfa] text-slate-900 dark:bg-[#0b1318] dark:text-slate-100 transition-colors duration-200">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

