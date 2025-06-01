'use client';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';

export default function Gallery() {
  const t = useTranslations();
  const [images, setImages] = useState([]);
  const [openIndex, setOpenIndex] = useState(-1); // za kontrolu lightboxa

  useEffect(() => {
    const rawGallery = t.raw('galleryImages.items');
    const sorted = [...rawGallery].sort((a, b) => a.order - b.order);
    setImages(sorted);
  }, [t]);

  return (
    <section className="gallery-section py-lg-5 photo-gallery-homepage">
      <div className="gallery-container">
        <h2 className=" text-center">{t('galleryImages.galleryTitle')}</h2>

        {/* Lightbox */}
        <Lightbox
          open={openIndex >= 0}
          close={() => setOpenIndex(-1)}
          slides={images.map((img) => ({
            src: img.photoURL,
            alt: img.photoAlt || '',
          }))}
          index={openIndex}
        />

        {/* Desktop grid */}
        <div className="d-none d-md-flex row row-cols-md-5 row-cols-lg-5 flex-wrap g-2">
          {images.map((img, index) => (
            <div key={img.photoURL} className="col img-zoom-wrapper" onClick={() => setOpenIndex(index)} style={{ cursor: 'pointer' }}>
              <img
                src={img.photoURL}
                alt={img.photoAlt || ''}
                className="img-fluid rounded shadow-sm"
                style={{
                  objectFit: img.photoPosition || 'cover',
                  width: '100%',
                  height: '100%',
                }}
              />
            </div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="d-md-none">
          <Swiper
            modules={[Navigation]}
            navigation
            loop
            spaceBetween={10}
            slidesPerView={1}
            className="mySwiper"
          >
            {images.map((img, index) => (
              <SwiperSlide key={img.photoURL}>
                <img
                  src={img.photoURL}
                  alt={img.photoAlt || ''}
                  className="img-fluid rounded shadow-sm"
                  style={{ width: '100%', height: '100%', cursor: 'pointer' }}
                  onClick={() => setOpenIndex(index)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
