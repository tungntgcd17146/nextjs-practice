import { BASE_REDIRECT_URL, BASE_SIGNUP_URL } from '@/src/constants/common';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_URL}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_URL}${BASE_SIGNUP_URL}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${process.env.NEXT_PUBLIC_URL}${BASE_REDIRECT_URL}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
}
