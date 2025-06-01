 'use client';

import { useTranslations } from 'next-intl';

export default function HeroImage({ pageKey }) {
  const t = useTranslations();
  const titleData = t.raw(`pageTitles.${pageKey}`);

  return (
    <div className="hero-section-page position-relative text-white d-flex align-items-center justify-content-center" style={{   }}>
      <img
        src={titleData.photoURL}
        alt={titleData.label}
       
        style={{ objectFit: 'cover',
            objectPosition: titleData.photoPosition || 'center', }}
        className='img-fluid page-hero-image'
      />
      <div className="position-absolute px-4 py-2 rounded text-center">
        <h1 className="fw-bold hero-heading">{titleData.label}</h1>
      </div>
    </div>
  );
}
