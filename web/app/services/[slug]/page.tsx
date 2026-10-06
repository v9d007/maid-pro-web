import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICE_PAGES_DATA, ALL_SERVICE_PAGES } from "@/data/servicePagesData";
import { SERVICES } from "@/data/services";
import { ServicePageClient } from "./ServicePageClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ALL_SERVICE_PAGES.map((srv) => ({
    slug: srv.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pageInfo = SERVICE_PAGES_DATA[slug];

  if (!pageInfo) {
    return {
      title: "Service Not Found | Maid Pro Solution 4 You",
    };
  }

  const url = `https://maidprosolution4you.in/services/${pageInfo.slug}`;

  return {
    title: pageInfo.metaTitle,
    description: pageInfo.metaDesc,
    keywords: [
      pageInfo.title,
      `${pageInfo.title} Agra`,
      `Verified ${pageInfo.title}`,
      `Best ${pageInfo.title} in Agra`,
      "Maid Pro Solution 4 You",
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: pageInfo.metaTitle,
      description: pageInfo.metaDesc,
      url: url,
      siteName: "Maid Pro Solution 4 You",
      locale: "en_IN",
      type: "website",
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const pageInfo = SERVICE_PAGES_DATA[slug];

  if (!pageInfo) {
    notFound();
  }

  const service = SERVICES.find((s) => s.id === pageInfo.serviceId) || SERVICES[0];

  const schemaJson = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `https://maidprosolution4you.in/services/${pageInfo.slug}#service`,
        name: pageInfo.title,
        description: pageInfo.metaDesc,
        provider: {
          "@type": "HomeAndConstructionBusiness",
          name: "Maid Pro Solution 4 You",
          telephone: "+919321034262",
          url: "https://maidprosolution4you.in",
        },
        areaServed: {
          "@type": "City",
          name: "Agra",
        },
        offers: {
          "@type": "Offer",
          priceCurrency: "INR",
          price: "3000",
          availability: "https://schema.org/InStock",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://maidprosolution4you.in/services/${pageInfo.slug}#breadcrumb`,
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
            name: "Services",
            item: "https://maidprosolution4you.in/#services",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: pageInfo.title,
            item: `https://maidprosolution4you.in/services/${pageInfo.slug}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `https://maidprosolution4you.in/services/${pageInfo.slug}#faqs`,
        mainEntity: pageInfo.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />
      <ServicePageClient pageInfo={pageInfo} service={service} />
    </>
  );
}
