import createNextIntlPlugin from 'next-intl/plugin';  // Using ES import syntax

// next.config.js
const withNextIntl = createNextIntlPlugin({
  locales: ['en', 'sr'],          // Podržani jezici
  defaultLocale: 'en',            // Podrazumevani jezik
  localePrefix: 'as-needed',      // 'as-needed' = /sr za srpski, / za engleski
  pathnames: {},                  // Možeš definisati rute po jezicima ako želiš
  requestModule: './src/i18n/request.js' // Opcionalno ako koristiš custom request.js
});

// Define your custom nextConfig
const nextConfig = {
  reactStrictMode: false,
  output: 'standalone', // pomaže next-sitemap-u da nađe rute

  experimental: {
    turbo: {
      enabled: true,
    },
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    
    return config;
  },
 
  
   
};

export default withNextIntl(nextConfig);
