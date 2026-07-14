import { MetadataRoute } from 'next';
import { BUSINESS_NAME, ABBREVIATION_NAME } from '@/constants';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: BUSINESS_NAME,
    short_name: ABBREVIATION_NAME,
    description: 'Soluciones metalmecánicas de alta precisión para la fabricación, recuperación y mantenimiento de componentes industriales.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/logo/logo-square.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/logo/logo-square.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
