 /** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://http://localhost:3001/',
  generateRobotsTxt: true,
  alternateRefs: [
    {
      href: 'https://http://localhost:3001//en',
      hreflang: 'en',
    },
    {
      href: 'https://http://localhost:3001//sr',
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
