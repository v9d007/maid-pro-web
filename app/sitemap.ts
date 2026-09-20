import { MetadataRoute } from 'next';
import { ALL_LOCALITIES } from '@/data/localitiesData';
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

  // 2. Agra Localities Pages
  ALL_LOCALITIES.forEach((loc) => {
    routes.push({
      url: `${baseUrl}/agra/${loc.slug}`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
      alternates: {
        languages: {
          en: `${baseUrl}/agra/${loc.slug}`,
          hi: `${baseUrl}/agra/${loc.slug}`,
        },
      },
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
