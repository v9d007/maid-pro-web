import { Metadata } from "next";
import { notFound } from "next/navigation";
import { LOCALITIES_DATA, ALL_LOCALITIES } from "@/data/localitiesData";
import { LocalityPageClient } from "./LocalityPageClient";

interface Props {
  params: Promise<{ locality: string }>;
}

export async function generateStaticParams() {
  return ALL_LOCALITIES.map((loc) => ({
    locality: loc.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locality } = await params;
  const data = LOCALITIES_DATA[locality];

  if (!data) {
    return {
      title: "Locality Not Found | Maid Pro Solution 4 You",
    };
  }

  const url = `https://maidprosolution4you.in/agra/${data.slug}`;

  return {
    title: data.metaTitle,
    description: data.metaDesc,
    keywords: [
      `Maid in ${data.name} Agra`,
      `House Maid service ${data.name}`,
      `Deep cleaning ${data.name} Agra`,
      `Cook in ${data.name}`,
      `Babysitter ${data.name}`,
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
  const { locality } = await params;
  const data = LOCALITIES_DATA[locality];

  if (!data) {
    notFound();
  }

  const schemaJson = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HomeAndConstructionBusiness",
        "@id": `https://maidprosolution4you.in/agra/${data.slug}#business`,
        name: `Maid Pro Solution 4 You - ${data.name}`,
        description: data.description,
        telephone: "+919321034262",
        email: "maidprosolution@gmail.com",
        url: `https://maidprosolution4you.in/agra/${data.slug}`,
        priceRange: "₹₹",
        address: {
          "@type": "PostalAddress",
          streetAddress: data.landmarks[0] || data.name,
          addressLocality: "Agra",
          addressRegion: "Uttar Pradesh",
          postalCode: data.pincode,
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: data.geo.lat,
          longitude: data.geo.lng,
        },
        areaServed: [
          { "@type": "AdministrativeArea", name: `${data.name}, Agra` },
          { "@type": "City", name: "Agra" },
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
          ratingValue: "4.6",
          reviewCount: "128",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://maidprosolution4you.in/agra/${data.slug}#breadcrumb`,
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
            name: "Agra Localities",
            item: "https://maidprosolution4you.in/#contact",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: `${data.name}, Agra`,
            item: `https://maidprosolution4you.in/agra/${data.slug}`,
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
