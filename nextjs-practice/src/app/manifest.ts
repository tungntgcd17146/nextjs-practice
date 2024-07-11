import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Products App',
    short_name: 'Products App',
    description: 'The product shop provides technology products',
    start_url: '/',
    display: 'standalone',
    background_color: '#F4F4F4',
    theme_color: '#535360',
  };
}
