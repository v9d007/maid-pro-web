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

  const title = `Maid Service in ${city.name} | 100% Verified House Maids & Deep Cleaning`;
  const description = `${city.tagline}. Hire police-verified housemaids, cooks, babysitters & patient attendants across ${city.name} with instant replacement and zero advance fee.`;

  return {
    title,
    description,
    keywords: [
      `Maid Service in ${city.name}`,
      `Housemaid ${city.name}`,
      `Cook in ${city.name}`,
      `Deep House Cleaning ${city.name}`,
      `Babysitter ${city.name}`,
      `Elderly Care ${city.name}`,
      `24 Hour Live in Maid ${city.name}`,
      ...city.localities.map((loc) => `Maid in ${loc.name}`),
    ],
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
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
    ],
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
