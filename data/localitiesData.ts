import { CITIES_DATA, CityInfo } from "./citiesData";

export interface LocalityInfo {
  slug: string;
  name: string;
  hiName: string;
  citySlug: string;
  cityName: string;
  hiCityName: string;
  state: string;
  pincode: string;
  tagline: string;
  hiTagline: string;
  description: string;
  hiDescription: string;
  landmarks: string[];
  geo: {
    lat: string;
    lng: string;
  };
  verifiedStaffCount: number;
  avgResponseTime: string;
  metaTitle: string;
  metaDesc: string;
}

// Generate rich locality info dynamically with city fallback and custom overrides
function createLocalityInfo(
  citySlug: string,
  slug: string,
  name: string,
  hiName: string,
  pincode: string,
  landmarks: string[],
  geoOffset: { lat: number; lng: number } = { lat: 0, lng: 0 },
  staffCount: number = 15
): LocalityInfo {
  const city = CITIES_DATA[citySlug] || CITIES_DATA["agra"];
  const baseLat = parseFloat(city.geo.lat) + geoOffset.lat;
  const baseLng = parseFloat(city.geo.lng) + geoOffset.lng;

  return {
    slug,
    name,
    hiName,
    citySlug,
    cityName: city.name,
    hiCityName: city.hiName,
    state: city.state,
    pincode,
    tagline: `100% Police-Verified Domestic Maids, Cooks & Deep Cleaning in ${name}, ${city.name}`,
    hiTagline: `${name}, ${city.hiName} में 100% पुलिस-सत्यापित घरेलू मेड, कुक व डीप क्लीनिंग सेवा`,
    description: `Looking for reliable, background-checked domestic help in ${name}, ${city.name}? MaidPro connects families with verified housemaids, experienced home cooks, caring babysitters, and professional deep cleaners across ${landmarks.slice(0, 3).join(", ")} with same-day trial and zero advance booking fee.`,
    hiDescription: `${name}, ${city.hiName} में भरोसेमंद घरेलू सहायक की आवश्यकता है? MaidPro ${landmarks.slice(0, 3).join(", ")} में 100% पुलिस-सत्यापित मेड, रसोइया और डीप क्लीनर्स उपलब्ध कराता है।`,
    landmarks,
    geo: {
      lat: baseLat.toFixed(4),
      lng: baseLng.toFixed(4),
    },
    verifiedStaffCount: staffCount,
    avgResponseTime: city.avgResponseTime,
    metaTitle: `Maid Service in ${name} ${city.name} | Verified Housemaids & Cooks - MaidPro`,
    metaDesc: `Hire 100% police-verified housemaids, cooks, babysitters & deep cleaning in ${name}, ${city.name} (${pincode}). Instant free replacement, zero advance fee & transparent salary slabs.`,
  };
}

// Master Record for all localities across 9 cities
export const ALL_LOCALITIES: LocalityInfo[] = [];

// Populate from CITIES_DATA
Object.values(CITIES_DATA).forEach((city) => {
  city.localities.forEach((loc, idx) => {
    // Generate slight pseudo-geographic offset for Map/Schema
    const latOffset = ((idx % 3) - 1) * 0.015;
    const lngOffset = (((idx + 1) % 3) - 1) * 0.015;
    const staffCount = Math.max(12, Math.floor(city.verifiedStaffCount / city.localities.length) + (idx % 4));

    const locInfo = createLocalityInfo(
      city.slug,
      loc.slug,
      loc.name,
      loc.hiName,
      loc.pincode,
      loc.landmarks || [loc.name, `${loc.name} Main Road`],
      { lat: latOffset, lng: lngOffset },
      staffCount
    );

    ALL_LOCALITIES.push(locInfo);
  });
});

// Map keyed by `citySlug_localitySlug` and also legacy `localitySlug` for backwards compatibility
export const LOCALITIES_MAP: Record<string, LocalityInfo> = {};

ALL_LOCALITIES.forEach((loc) => {
  LOCALITIES_MAP[`${loc.citySlug}_${loc.slug}`] = loc;
  // Also store by slug directly for legacy Agra lookup
  if (!LOCALITIES_MAP[loc.slug]) {
    LOCALITIES_MAP[loc.slug] = loc;
  }
});

// Legacy export for Agra backward compatibility
export const LOCALITIES_DATA: Record<string, LocalityInfo> = LOCALITIES_MAP;

export function getLocalitiesByCity(citySlug: string): LocalityInfo[] {
  return ALL_LOCALITIES.filter((loc) => loc.citySlug === citySlug);
}

export function getLocalityBySlug(citySlug: string, localitySlug: string): LocalityInfo | undefined {
  return LOCALITIES_MAP[`${citySlug}_${localitySlug}`] || LOCALITIES_MAP[localitySlug];
}
