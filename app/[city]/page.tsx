import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CITIES_DATA, ALL_CITIES, CityInfo } from "@/data/citiesData";
import { CityPageClient } from "./CityPageClient";

interface CityPageProps {
  params: Promise<{
    city: string;
  }>;
}

export async function generateStaticParams() {
  return ALL_CITIES.map((city) => ({
    city: city.slug,
  }));
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = CITIES_DATA[citySlug];

  if (!city) {
    return {
      title: "City Not Found | MaidPro",
    };
  }

  const isKalyan = city.slug === "kalyan-mumbai";

  const title = isKalyan
    ? "Maid Service in Kalyan West & East | 100% Verified Housemaids, Cooks & Babysitter - MaidPro"
    : `Maid Service in ${city.name} | 100% Verified House Maids & Deep Cleaning`;

  const description = isKalyan
    ? "Hire 100% Aadhaar & Police-verified housemaids, cooks (veg/non-veg), babysitters, 24-hr live-in maids & deep cleaning in Kalyan West, Kalyan East & Dombivli. Call/WhatsApp: +91 93210 34262."
    : `${city.tagline}. Hire police-verified housemaids, cooks, babysitters & patient attendants across ${city.name} with instant replacement and zero advance fee.`;

  const kalyanKeywords = [
    "Maid service in Kalyan West",
    "Housemaid services in Kalyan East",
    "Part time maid in Kalyan Mumbai",
    "Full time live-in maid Kalyan",
    "24 hours maid service Kalyan",
    "Aadhaar verified maid near me Kalyan",
    "Cook maid service in Kalyan",
    "Home cooks in Kalyan West Mumbai",
    "Veg and non-veg cook for home Kalyan",
    "Monthly basis cook services Kalyan",
    "Babysitter and nannies in Kalyan Mumbai",
    "Elderly care services Kalyan",
    "Japa maid postnatal care Kalyan",
    "Patient care and nurse at home Kalyan",
    "Deep cleaning services for home Kalyan",
    "Maid bureau agencies in Kalyan",
    "Hire domestic help via Sulekha Kalyan",
    "Bookmybai domestic workers Kalyan",
  ];

  const keywords = isKalyan
    ? [...kalyanKeywords, ...city.localities.map((loc) => `Maid in ${loc.name}`)]
    : [
        `Maid Service in ${city.name}`,
        `Housemaid ${city.name}`,
        `Cook in ${city.name}`,
        `Deep House Cleaning ${city.name}`,
        `Babysitter ${city.name}`,
        `Elderly Care ${city.name}`,
        `24 Hour Live in Maid ${city.name}`,
        ...city.localities.map((loc) => `Maid in ${loc.name}`),
      ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `https://maidprosolution4you.in/${city.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://maidprosolution4you.in/${city.slug}`,
      siteName: "Maid Pro Solution 4 You",
      locale: "en_IN",
      type: "website",
    },
  };
}

export default async function CityPage({ params }: CityPageProps) {
  const { city: citySlug } = await params;
  const city = CITIES_DATA[citySlug];

  if (!city) {
    notFound();
  }

  const graphElements: Record<string, unknown>[] = [
    {
      "@type": "LocalBusiness",
      "@id": `https://maidprosolution4you.in/${city.slug}#localbusiness`,
      name: city.hasGbpVerification && city.gbpName ? city.gbpName : `Maid Pro Solution 4 You - ${city.name}`,
      url: `https://maidprosolution4you.in/${city.slug}`,
      logo: "https://maidprosolution4you.in/images/brand/logo.png",
      image: "https://maidprosolution4you.in/images/services/deep_clean.jpg",
      description: city.description,
      telephone: city.phone,
      priceRange: "₹₹",
      currenciesAccepted: "INR",
      paymentAccepted: "Cash, UPI, Net Banking, Credit Card",
      areaServed: {
        "@type": "City",
        name: city.name,
        containedInPlace: {
          "@type": "State",
          name: city.state,
        },
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: city.address,
        addressLocality: city.name,
        addressRegion: city.state,
        postalCode: city.pincode,
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: city.geo.lat,
        longitude: city.geo.lng,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "07:00",
          closes: "21:00",
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: city.verifiedStaffCount * 3 + 45,
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://maidprosolution4you.in",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: city.name,
          item: `https://maidprosolution4you.in/${city.slug}`,
        },
      ],
    },
  ];

  if (city.faqs && city.faqs.length > 0) {
    graphElements.push({
      "@type": "FAQPage",
      mainEntity: city.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": graphElements,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CityPageClient city={city} />
    </>
  );
}
