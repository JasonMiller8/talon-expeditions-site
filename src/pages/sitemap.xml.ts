import type { APIRoute } from 'astro';
import { groupTravelPages, learnToPages, activePages, culturalPages } from '../data/landing';
import { articles, resourceCategories } from '../data/articles';
import { faqPages } from '../data/faqs';

const fixed = [
  '/', '/about/', '/contact/', '/cultural-cruise-travel/', '/custom-group-trip-planning/', '/experiences/', '/gallery/', '/group-travel/', '/how-it-works/', '/join-a-trip/', '/learn-to-trips/', '/plan-a-trip/', '/private-group-travel/', '/resources/', '/services/', '/support/', '/trekking-active-travel/', '/trip-examples/', '/trip-leaders-partners/', '/where-we-serve/', '/why-talon/', '/faq/', '/privacy/', '/cookies/', '/terms/', '/careers/'
];

export const GET: APIRoute = ({ site }) => {
  const origin = site ?? new URL('https://talonexpeditions.com');
  const paths = [
    ...fixed,
    ...groupTravelPages.map(p=>`/group-travel/${p.slug}/`),
    ...learnToPages.map(p=>`/learn-to-trips/${p.slug}/`),
    ...activePages.map(p=>`/trekking-active-travel/${p.slug}/`),
    ...culturalPages.map(p=>`/cultural-cruise-travel/${p.slug}/`),
    ...resourceCategories.map(p=>`/resources/${p.slug}/`),
    ...articles.map(p=>`/guides/${p.slug}/`),
    ...faqPages.map(p=>`/faq/${p.slug}/`)
  ];
  const urls = [...new Set(paths)].map(path => `<url><loc>${new URL(path, origin).toString()}</loc><changefreq>${path.startsWith('/guides/') ? 'monthly' : 'weekly'}</changefreq><priority>${path === '/' ? '1.0' : path.startsWith('/guides/') ? '0.6' : '0.8'}</priority></url>`).join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;
  return new Response(xml,{headers:{'Content-Type':'application/xml; charset=utf-8'}});
};
