
import { useTranslations } from 'next-intl';
import Breadcrumbs from '@/components/Breadcrumbs';
import HeroImage from '@/components/HeroImage';
import ContactForm from '@/components/ContactForm';
import React from 'react';

import { getMetaTranslation } from '/src/lib/getMetaTranslation';

export async function generateMetadata({ params }) {
  const { meta } = await getMetaTranslation(params.locale);
  const contactMeta = meta.contact;

  return {
    title: contactMeta.title,
    description: contactMeta.description,
    keywords: contactMeta.keywords,
    openGraph: {
      title: contactMeta.ogTitle,
      description: contactMeta.ogDescription,
      locale: contactMeta.ogLocale,
      type: contactMeta.ogType,
      url: contactMeta.ogUrl,
      images: [
        {
          url: contactMeta.ogImage,
          width: 1200,
          height: 630,
          alt: contactMeta.title
        }
      ]
    },
    twitter: {
      card: contactMeta.twitterCard,
      title: contactMeta.twitterTitle,
      description: contactMeta.twitterDescription,
      images: [contactMeta.twitterImage]
    },
    alternates: {
      canonical: contactMeta.canonical,
      languages: {
        en: 'https://yourdomain.com/en/contact',
        sr: 'https://yourdomain.com/sr/kontakt'
      }
    }
  };
}


export default function ContactPage() {
  const t = useTranslations('contactPage');

  return (
    <>
      <HeroImage pageKey="contact" />

      <div className="container-fluid contact-form-content py-4">
        <Breadcrumbs />
        <div className="contact-us col-md-9">
          <div className="heading-container">
            <h2 className="contact-us-heading">{t('mainHeading')}</h2>
          </div>

          <div className="contact-form-contact-page">
            <ContactForm />
          </div>

          <div className="google-map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=..."
              width="600"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
