 'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function PhotoCarousel({ photos }) {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      loop
      spaceBetween={10}
      slidesPerView={1}
      className="mySwiper"
    >
      {photos.map((photo, index) => (
        <SwiperSlide key={index}>
          <img
            src={photo.photoURL}
            alt={photo.photoAlt}
            className="img-fluid"
           
              style={{
            objectFit: 'cover',
            objectPosition: photo.photoPosition || 'center',
            width: '100%',
            height: '100%'
          }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
