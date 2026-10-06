import { MetadataRoute } from 'next';
import { ALL_CITIES } from '@/data/citiesData';
import { ALL_SERVICE_PAGES } from '@/data/servicePagesData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://maidprosolution4you.in';
  const currentDate = new Date();

  // 1. Homepage
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
      alternates: {
        languages: {
          en: baseUrl,
          hi: baseUrl,
        },
      },
    },
  ];

  // 2. City Landing Pages & Hyper-Local Sub-Localities
  ALL_CITIES.forEach((city) => {
    // City Hub Route
    routes.push({
      url: `${baseUrl}/${city.slug}`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: city.hasGbpVerification ? 0.95 : 0.9,
      alternates: {
        languages: {
          en: `${baseUrl}/${city.slug}`,
          hi: `${baseUrl}/${city.slug}`,
        },
      },
    });

    // Locality Pages under each City
    city.localities.forEach((loc) => {
      routes.push({
        url: `${baseUrl}/${city.slug}/${loc.slug}`,
        lastModified: currentDate,
        changeFrequency: 'daily',
        priority: 0.85,
        alternates: {
          languages: {
            en: `${baseUrl}/${city.slug}/${loc.slug}`,
            hi: `${baseUrl}/${city.slug}/${loc.slug}`,
          },
        },
      });
    });
  });

  // 3. Service Landing Pages
  ALL_SERVICE_PAGES.forEach((srv) => {
    routes.push({
      url: `${baseUrl}/services/${srv.slug}`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
      alternates: {
        languages: {
          en: `${baseUrl}/services/${srv.slug}`,
          hi: `${baseUrl}/services/${srv.slug}`,
        },
      },
    });
  });

  return routes;
}
