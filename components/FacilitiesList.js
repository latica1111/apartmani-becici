'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import * as Icons from '@/components/Icons'; // Import icons from your Icons.js
import {
  Box,
  Grid,
  Heading,
  Text,VStack,HStack
} from '@chakra-ui/react';
const FacilityList = () => {
  const t = useTranslations("home");

  // Data for facilities with icons (this could be dynamic or static depending on your setup)
  const facilitiesData = [
    { key: 'freeParking', icon: 'iconFreeParking' },
    { key: 'beachNearby', icon: 'iconBeachNearby' },
    { key: 'playground', icon: 'playgroundIcon' },
    { key: 'familyRooms', icon: 'iconFamilyRooms' },
    { key: 'kitchen', icon: 'iconKitchen'},
     { key: 'airConditioning', icon: 'iconAirConditioning' },
    { key: 'freeWiFi', icon: 'iconFreeWifi' },
   
   { key: 'TV', icon: 'iconTv'},
  ];

  return (
    <>
   
  <Box
      as="section"
    bgImage="url(/images/yard/facilities-background.jpg)" position="relative" bgSize="cover" bgPosition="center"
    >
      <Box className="overlay" position="absolute" w="full" h="full" top="0" left="0"   bg="linear-gradient(180deg, rgba(0,0,0,0.5), rgba(0,0,0,0.7))"/>

      <Box position="relative" zIndex="15"  px={{base:"6", md:"8", lg:"12"}} py={{base:"12",md:"16",lg:"24"}}  maxW="1200px" mx="auto" >
        <VStack alignItems="flex-start">

          <Heading
        
            className="section-name"
            color="#fff"
          >
            {t('facilitiesWithIcons.generalHeading')}
          </Heading>
<Text color="rgba(255,255,255,0.7)" maxW="600px">
  {t('facilitiesWithIcons.subtitle')}
</Text>
      
            {/* ✅ Chakra Grid umesto Bootstrap row-cols */}
            <Grid
              templateColumns={{
                base: 'repeat(2, 1fr)',
                sm: 'repeat(3, 1fr)',
                md: 'repeat(4, 1fr)',
              }}
                gap={{base:"6",md:"8",lg:"12"}}  mt={{base:"6",md:"8",lg:"12"}}  w="full"
            >
              {facilitiesData.map(({ key, icon }) => {
                const label = t(`facilitiesWithIcons.${key}`);
                const IconComponent = Icons[icon];

                return (
               
                    <VStack alignItems="center" justifyContent="flex-start" key={key} 
                   color="#fff"
                    rounded="sm" px="2" py="4"
                      bg="rgba(255,255,255,0.06)"
  border="1px solid rgba(255,255,255,0.1)"
  backdropFilter="blur(6px)"
 
  transition="all 0.25s ease"
  _hover={{
    transform: "translateY(-4px)",
    bg: "rgba(255,255,255,0.12)",
    borderColor: "rgba(255,255,255,0.25)"
  }} 
                      >

                      <Box className="icon-wrapper"  p="3"  rounded="full"  bg="rgba(201,161,74,0.25)"
border="1px solid rgba(201,161,74,0.4)">
                        <span className="icon" color="#fff">
                          {IconComponent ? <IconComponent fill="#fff"/> : <span>x</span>}
                        </span>
                      </Box>
                     <Text mb="0" textStyles="sm" fontWeight="500"  letterSpacing="0.2px">
                          {label}
                        </Text>
                     

                    </VStack>
                
                );
              })}
            </Grid>
         

        </VStack>
      </Box>
    </Box>

</>
  );
};

export default FacilityList;
