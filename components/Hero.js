'use client';

import React from 'react';
import { useTranslations } from 'next-intl';


const Hero = () => {
  const t = useTranslations('heroSection'); // t() sada čita iz "heroSection" u home.json

  return (
    <section className="position-relative w-100  hero-image">
      {/* Background Image */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100 bg-cover bg-center z-0 div-with-background"
        style={{
          overflow:'hidden'
        }}
      > 
      <img
        src="/images/yard/outdoors-splendid-view.jpg"
        alt=""
       
        style={{ objectFit: 'cover',
            objectPosition: 'center', }}
        className='img-fluid page-hero-image h-100 w-100'
      />
      </div>

      {/* Overlay */}
      <div className="position-absolute overlay inset-0 bg-black/40 z-10" />

      {/* Centered Content */}
      <div className="position-relative z-30 d-flex flex-column align-items-sm-center justify-content-sm-center text-sm-center h-100 text-white gap-3 text-block ">
     
         
          {t('heroSubtitle') && (
          <h2 className="text-2xl sm:text-3xl fw-semibold hero-subtitle">{t('heroSubtitle')}</h2>
        )}
        <h1 className="text-4xl sm:text-5xl fw-bold hero-title">{t('heroTitle')}</h1>
        {t('heroSubtitle') && (
          <h2 className="text-2xl sm:text-3xl fw-semibold hero-subtitle d-none">{t('heroSubtitle')}</h2>
        )}
        <p className="text-lg sm:text-xl max-w-xl hero-text">{t('heroText')}</p>

        <div className="d-flex flex-column flex-sm-row gap-3 gap-md-3  mt-lg-4 hero-btns-wrapper">
          <a
            href={t('heroCta.btn1.href')}
            className="btn px-sm-4 px-md-5 py-md-3 rounded-pill fw-semibold hover:bg-gray-200 transition send-inquiry"
          >
            {t('heroCta.btn1.label')}
          </a>
          <a
            href={t('heroCta.btn2.href')}
            className="btn px-sm-4 px-md-5 py-md-3  rounded-pill  fw-semibold hover:bg-gray-200 transition view-offer"
          >
            {t('heroCta.btn2.label')}
          </a>
        </div>
      
      </div>
    </section>
  );
};

export default Hero;
