 'use client';

import { useTranslations } from 'next-intl';
import Breadcrumbs from '@/components/Breadcrumbs';
import HeroImage from '@/components/HeroImage';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  const t = useTranslations('contactPage');

  return (
    <>
      <HeroImage pageKey="contact" />
      <div className="container-fluid contact-form-content py-4">
        <Breadcrumbs />
        <div className='contact-us col-md-9'>
          <div className="heading-container">
            <h2 className="contact-us-heading">{t('mainHeading')}</h2>
          </div>
          <div className="contact-form-contact-page"><ContactForm /></div>
          <div className='google-map-wrapper'>
            <iframe
              src="https://www.google.com/maps/embed?pb=..."
              width="600"
              height="450"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
