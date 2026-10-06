import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ALL_LOCALITIES, getLocalityBySlug } from "@/data/localitiesData";
import { LocalityPageClient } from "./LocalityPageClient";

interface Props {
  params: Promise<{
    city: string;
    locality: string;
  }>;
}

export async function generateStaticParams() {
  return ALL_LOCALITIES.map((loc) => ({
    city: loc.citySlug,
    locality: loc.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city, locality } = await params;
  const data = getLocalityBySlug(city, locality);

  if (!data) {
    return {
      title: "Locality Not Found | Maid Pro Solution 4 You",
    };
  }

  const url = `https://maidprosolution4you.in/${data.citySlug}/${data.slug}`;

  return {
    title: data.metaTitle,
    description: data.metaDesc,
    keywords: [
      `Maid in ${data.name} ${data.cityName}`,
      `House Maid service ${data.name}`,
      `Deep cleaning ${data.name} ${data.cityName}`,
      `Cook in ${data.name}`,
      `Babysitter in ${data.name}`,
      `Maid Pro Solution 4 You ${data.name}`,
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDesc,
      url: url,
      siteName: "Maid Pro Solution 4 You",
      locale: "en_IN",
      type: "website",
    },
  };
}

export default async function LocalityPage({ params }: Props) {
  const { city, locality } = await params;
  const data = getLocalityBySlug(city, locality);

  if (!data) {
    notFound();
  }

  const schemaJson = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HomeAndConstructionBusiness",
        "@id": `https://maidprosolution4you.in/${data.citySlug}/${data.slug}#business`,
        name: `Maid Pro Solution 4 You - ${data.name}, ${data.cityName}`,
        description: data.description,
        telephone: "+919321034262",
        email: "maidprosolution@gmail.com",
        url: `https://maidprosolution4you.in/${data.citySlug}/${data.slug}`,
        priceRange: "₹₹",
        address: {
          "@type": "PostalAddress",
          streetAddress: data.landmarks[0] || `${data.name}, ${data.cityName}`,
          addressLocality: data.cityName,
          addressRegion: data.state,
          postalCode: data.pincode,
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: data.geo.lat,
          longitude: data.geo.lng,
        },
        areaServed: [
          { "@type": "AdministrativeArea", name: `${data.name}, ${data.cityName}` },
          { "@type": "City", name: data.cityName },
        ],
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
          reviewCount: data.verifiedStaffCount * 2 + 30,
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
            name: data.cityName,
            item: `https://maidprosolution4you.in/${data.citySlug}`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: data.name,
            item: `https://maidprosolution4you.in/${data.citySlug}/${data.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />
      <LocalityPageClient locality={data} />
    </>
  );
}
