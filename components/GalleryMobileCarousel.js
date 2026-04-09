'use client';

import { Box, } from '@chakra-ui/react';
import NextImage from 'next/image';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
export default function GalleryMobileCarousel ({images, setOpenIndex}){

    return(
        <>
          <Box display={{ base: 'block', md: 'none' }} w="100%" mt={{base:"6", md:"8", lg:"12"}}>
          <Swiper
            modules={[Navigation]}
            navigation
            loop
            spaceBetween={10}
            slidesPerView={1}
            className="mySwiper"
          >
            {images.map((img, index) => (
              <SwiperSlide key={img.photoURL} >
                 <Box
                                     key={img.photoURL}
                                     className="img-zoom-wrapper"
                                     cursor="pointer"
                                     overflow="hidden"
                                     position="relative"
                                    width="100%"
                                     h={{base:"280px", sm:"360px"}}    
                                     onClick={() => setOpenIndex(index)}
                                   >
                                     <NextImage src={img.photoURL} alt={img.photoAlt || ''}
                                     style={{
                               objectFit: img.photoPosition || 'cover',
                               transition: 'transform 0.3s ease',
                             }}
                                     fill      cursor="pointer"  
                                     quality={75}
                                     />
                                   </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
        
        
        </>
    )
}