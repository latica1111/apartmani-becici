import ApartmentPageClient from "@/components/ApartmentPageClient";




import { routing } from '@/i18n/routing';
import { setRequestLocale } from 'next-intl/server';
export const revalidate = 0; // full static, generiše se jednom u build-u
export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
export async function generateMetadata({ params }) {
  const { slug, locale, type } = await params;
 

  // ovdje možeš dohvatiti podatke (ili iz JSON-a)
   const data = await import(`@/data/locales/${locale}/apartments-description.json`);

  const apartments = data.default.apartments;

  const apartment = apartments.find(a => a.pageURL === slug);

  return {
    title: apartment?.name,
    description: apartment?.metaDescription,
    keywords: apartment?.metaKeywords?.join(', '),

twitter: {
  card: 'summary_large_image',
  title: apartment?.name,
  description: apartment?.metaDescription,
  images: [apartment?.images]
},
alternates: {
  canonical: `https://yourdomain.com/offer/${apartment?.slug}`
},
robots: {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true
  }
},
other: {
  'application/ld+json': JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    name: apartment?.name,
    description: apartment?.metaDescription,
    image: apartment?.image
  })
}

  };
}



export default async  function ApartmentDetails({params}) {
 const { locale, type} = await params;
  
 setRequestLocale(locale);


   return <ApartmentPageClient layout="vertical"/>;
}
