'use client';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import {
  Box,
  VStack,
  Heading,
 
} from '@chakra-ui/react';
import GalleryDesktopGrid from './GalleryDesktopGrid';
import GalleryLightbox from './GalleryLightbox';
import GalleryMobileCarousel from './GalleryMobileCarousel';
export default function Gallery() {
  const t = useTranslations("home");
  const [images, setImages] = useState([]);
  const [openIndex, setOpenIndex] = useState(-1); // za kontrolu lightboxa

  useEffect(() => {
    const rawGallery = t.raw('galleryImages.items');
    const sorted = [...rawGallery].sort((a, b) => a.order - b.order);
    setImages(sorted);
  }, [t]);

  return (
    <>
   
 <Box
      as="section"
      borderTop="1px solid"
       borderBottom="1px solid"
       borderColor="gray.200"
      bg="gray.100" px={{base:"6", md:"8", lg:"12"}} py={{base:"12",md:"16",lg:"24"}} 
    >
      <VStack  maxW="1200px" mx="auto">

        <Heading className="section-name" textAlign="center" >
          {t('galleryImages.galleryTitle')}
        </Heading>

        <GalleryLightbox
          images={images}
          openIndex={openIndex}
          setOpenIndex={setOpenIndex}
        />

        {/* DESKTOP GRID */}
         <GalleryDesktopGrid images={images} setOpenIndex={setOpenIndex} />

        {/* MOBILE CAROUSEL */}
       <GalleryMobileCarousel images={images} setOpenIndex={setOpenIndex} />

      </VStack>
    </Box>

    </>
  );
}
