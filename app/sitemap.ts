import { MetadataRoute } from 'next';
import { getAllRoutes } from '@/data/routes';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://sinergiaplus1.ru';

  const staticPages = [
    '',
    '/services',
    '/routes',
    '/about',
    '/contacts',
  ].map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: p === '' ? 1 : 0.8,
  }));

  // Приоритезируем топ-направления (более высокий priority)
  const topRouteSlugs = [
    'samara-moscow',
    'moscow-samara',
    'samara-sankt-peterburg',
    'sankt-peterburg-samara',
    'samara-kazan',
    'kazan-samara',
  ];

  const routePages = getAllRoutes().map((r) => ({
    url: `${base}/routes/${r.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: topRouteSlugs.includes(r.slug) ? 0.95 : 0.9,
  }));

  return [...staticPages, ...routePages];
}

