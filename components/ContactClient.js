'use client';
import { useTranslations } from 'next-intl';

import Breadcrumbs from '@/components/Breadcrumbs';
import HeroImage from '@/components/HeroImage';
import React, { useState } from 'react';
import { Box,  VStack ,} from '@chakra-ui/react';

import HomepagaReservation from '@/components/HomepageReservation';
export default function ContactClient (){
 const t = useTranslations('home.contactPage');
     return (
       <>
        <HeroImage pageKey="contact" />
       
     
       <VStack maxW="1200px" mx="auto" alignItems="flex-start" py={{base:"12",md:"16",lg:"24"}}>
       <Box px={{base:"6", md:"8", lg:"12"}}>
       <Breadcrumbs />
    </Box>
          <VStack alignItems="flex-start" w="full">
            
          
         
           
        
        <HomepagaReservation />
          </VStack>
         </VStack> 
       
          <Box className='google-map-wrapper' w="full"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2951.803513828584!2d18.864571776105223!3d42.282717471200094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134dd4709fb6168f%3A0xc0187b98b31208e1!2sApartmani%20Becici!5e0!3m2!1sen!2srs!4v1747845419966!5m2!1sen!2srs" width="600" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></Box>
         </>
      );
}