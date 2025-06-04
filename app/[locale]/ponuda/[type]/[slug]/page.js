import { getApartmentsMetadata } from '/src/lib/getApartmentsMetadata';
import ApartmentClient from '/components/ApartmentDescriptionClient';
import { typeKeyMap } from '/src/lib/typeKeyMap';
export async function generateMetadata({ params }) {
  const { locale, type, slug } = params;
  const meta = await getApartmentsMetadata(locale, slug);
const baseUrl = 'https://yourdomain.com';

  const translatedType = typeKeyMap[locale][type]; // npr. ako je sr + "apartmani" → "apartments"

  const languages = {
    en: `${baseUrl}/en/offer/${locale === 'sr' ? translatedType : type}`,
    sr: `${baseUrl}/sr/ponuda/${locale === 'en' ? typeKeyMap.en[type] : type}`,
  };
  if (!meta) {
    return {
      title: 'Apartmani Becici',
      description: 'No apartment found for the given URL.',
    };
  }
console.log('META:', meta);
console.log('OG IMAGE:', meta.ogImage);
console.log('TWITTER IMAGE:', meta.twitterImage);

  return { 
    metadataBase: new URL(baseUrl),
    title: meta.pageTitle,
    description: meta.metaDescription,
    keywords: meta.metaKeywords,
 openGraph: {
      title: meta.ogTitle,
      description: meta.ogDescription,
      locale: meta.ogLocale,
     type: meta.ogType || 'article',
      url: meta.ogUrl,
      images: [
        {
          url: meta.ogImage,
          width: 1200,
          height: 630,
          alt: meta.title
        }
      ]
    },
    twitter: {
      card: meta.twitterCard,
      title: meta.twitterTitle,
      description: meta.twitterDescription,
      images: [meta.twitterImage]
    },
    alternates: {
      canonical: meta.canonical,
      
      languages: {
        'en': languages.en,
        'sr': languages.sr,
      },
    }

  };
}

export default function Page({ params }) {
  return <ApartmentClient params={params} />;
}
