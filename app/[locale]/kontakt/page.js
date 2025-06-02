'use client';
import { useTranslations } from 'next-intl';

import Breadcrumbs from '@/components/Breadcrumbs';
import HeroImage from '@/components/HeroImage';
import React, { useState } from 'react';

import ContactForm from '@/components/ContactForm';
/* import getTranslation  from '@/lib/getTranslation';
export async function generateMetadata({ params }) {
  const t = await getTranslation(params.locale);
  const meta = t.contact;

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    openGraph: {
      title: meta.title,
      description: meta.description,
      locale: params.locale,
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description
    }
  };
}
*/

export default function ContactPage() {
  const t = useTranslations('contactPage');

  return (
   <>
    <HeroImage pageKey="contact" />
   
   <div className="container-fluid contact-form-content py-4">
   <Breadcrumbs />
      <div className='contact-us col-md-9'>
        <div className="heading-container"><h2 className="contact-us-heading">{t('mainHeading')}</h2></div>
     
       
      <div className="contact-form-contact-page"><ContactForm /></div>
        <div className='google-map-wrapper'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2951.803513828584!2d18.864571776105223!3d42.282717471200094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134dd4709fb6168f%3A0xc0187b98b31208e1!2sApartmani%20Becici!5e0!3m2!1sen!2srs!4v1747845419966!5m2!1sen!2srs" width="600" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div>
      </div>
      </div>
     </>
  );
}
