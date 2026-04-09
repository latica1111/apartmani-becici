 'use client';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Image,Box, } from '@chakra-ui/react';
import NextImage from 'next/image';
export default function PhotoCarousel({ photos }) {
    const [openIndex, setOpenIndex] = useState(-1); // za kontrolu lightboxa
    console.log(photos);
  return (

<Box w="full" h="full">
    <Swiper
      modules={[Navigation]}
      navigation
      loop
      spaceBetween={10}
      slidesPerView={1}
      className="mySwiper"
      style={{height: "14rem"}}
    >
      {photos.map((photo, index) => (
        <SwiperSlide key={index}>
          <Box w="full" h="full" position="relative">
          <NextImage
            src={photo.photoURL}
            alt={photo.photoAlt}
          
           
              style={{
            objectFit: 'cover',
            objectPosition: photo.photoPosition || 'center',
          
          }} fill quality={75}
          /></Box>
        </SwiperSlide>
      ))}
    </Swiper>
</Box>

  );
}
