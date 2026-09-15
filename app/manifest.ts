import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Maid Pro Solution 4 You',
    short_name: 'MaidPro',
    description: 'Verified domestic housemaids, cooks, babysitters & deep cleaning in Agra.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fffbfa',
    theme_color: '#005c55',
    icons: [
      {
        src: '/icon',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-icon',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };
}
