
import ContactClient from '@/components/ContactClient';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata() {
  const t = await getTranslations('meta');

  return {
    title: t('contactMeta.title'),
    description: t('contactMeta.description'),
    keywords: t('contactMeta.keywords'),

    openGraph: {
      title: t('contactMeta.ogTitle'),
      description: t('contactMeta.ogDescription'),
      locale: t('contactMeta.ogLocale'),
      type: t('contactMeta.ogType'),
      url: t('contactMeta.ogUrl'),
      images: [
        {
          url: t('contactMeta.ogImage'),
          width: 1200,
          height: 630,
          alt: t('contactMeta.title')
        }
      ]
    },

    twitter: {
      card: t('contactMeta.twitterCard'),
      title: t('contactMeta.twitterTitle'),
      description: t('contactMeta.twitterDescription'),
      images: [t('contactMeta.twitterImage')]
    },

    alternates: {
      canonical: t('contactMeta.canonical'),
      languages: {
        en: 'https://apartmani-becici.vercel.app/en/contact',
        sr: 'https://apartmani-becici.vercel.app/sr/kontakt'
      }
    }
  };
}

export default function ContactPage() {
 


  return (
  <ContactClient />
  );
}
