import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ALL_LOCALITIES, getLocalityBySlug } from "@/data/localitiesData";
import { CITIES_DATA } from "@/data/citiesData";
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

  const isKalyan = data.citySlug === "kalyan-mumbai";

  const keywords = isKalyan
    ? [
        `Maid service in ${data.name}`,
        `Housemaid services in ${data.name}`,
        `Part time maid in ${data.name} Mumbai`,
        `Cook maid service in ${data.name}`,
        `Home cooks in ${data.name} Mumbai`,
        `Veg and non-veg cook for home ${data.name}`,
        `Full time live-in maid ${data.name}`,
        `24 hours maid service ${data.name}`,
        `Aadhaar verified maid near me ${data.name}`,
        `Babysitter and nannies in ${data.name} Mumbai`,
        `Elderly care services ${data.name}`,
        `Japa maid postnatal care ${data.name}`,
        `Deep cleaning services for home ${data.name}`,
        `Maid bureau agencies in ${data.name}`,
        `Hire domestic help via Sulekha ${data.name}`,
        `Bookmybai domestic workers ${data.name}`,
        `Maid in ${data.name} ${data.cityName}`,
      ]
    : [
        `Maid in ${data.name} ${data.cityName}`,
        `House Maid service ${data.name}`,
        `Deep cleaning ${data.name} ${data.cityName}`,
        `Cook in ${data.name}`,
        `Babysitter in ${data.name}`,
        `Maid Pro Solution 4 You ${data.name}`,
      ];

  return {
    title: data.metaTitle,
    description: data.metaDesc,
    keywords,
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

  const parentCity = CITIES_DATA[data.citySlug];

  const graphElements: Record<string, unknown>[] = [
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
  ];

  if (parentCity?.faqs && parentCity.faqs.length > 0) {
    graphElements.push({
      "@type": "FAQPage",
      mainEntity: parentCity.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
  }

  const schemaJson = {
    "@context": "https://schema.org",
    "@graph": graphElements,
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
