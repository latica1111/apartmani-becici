import apartmentsEn from './data/locales/en/apartments-description.json' assert { type: 'json' };
import apartmentsSr from './data/locales/sr/apartments-description.json' assert { type: 'json' };
export default {
  siteUrl: 'https://apartmani-becici.vercel.app',
  generateRobotsTxt: true,
  alternateRefs: [
    {
      href: 'https://apartmani-becici.vercel.app/en',
      hreflang: 'en',
    },
    {
      href: 'https://apartmani-becici.vercel.app/sr',
      hreflang: 'sr',
    },
  ],
  additionalPaths: async (config) => {
    const staticPaths = [
      '/',
      '/en',
      '/sr',
      '/contact',
    ].map((path) => ({
      loc: path,
      changefreq: 'monthly',
      priority: path === '/' ? 1.0 : 0.8,
      lastmod: new Date().toISOString(),
      alternateRefs: config.alternateRefs,
    }));
 const apartmentsArrayEn = apartmentsEn.apartments;
const apartmentsArraySr = apartmentsSr.apartments;
    const apartmentPaths = apartmentsArrayEn.flatMap((apt, index) => [
      {
        loc: `/en/offer/apartments/${apt.pageURL}`,
        changefreq: 'monthly',
        priority: 0.7,
        lastmod: new Date().toISOString(),
        alternateRefs: config.alternateRefs,
      },
      {
        loc: `/sr/apartmani/${apartmentsArraySr[index].pageURL}`,
        changefreq: 'monthly',
        priority: 0.7,
        lastmod: new Date().toISOString(),
        alternateRefs: config.alternateRefs,
      },
    ]);

    return [...staticPaths, ...apartmentPaths];
  },
};
