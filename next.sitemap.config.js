 /** @type {import('next-sitemap').IConfig} */
module.exports = {
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
  transform: async (config, path) => {
    return {
      loc: path, // The url path
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date().toISOString(),
      alternateRefs: config.alternateRefs ?? [],
    }
  },
}
