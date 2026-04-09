'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import * as Icons from '@/components/Icons'; // Import icons from your Icons.js
import {
  Box,
  Grid,
  Heading,
  Text,VStack,Flex,

} from '@chakra-ui/react';
const Facil= () => {
  const t = useTranslations("home");

  // Data for facilities with icons (this could be dynamic or static depending on your setup)
  const facilitiesData = [
    { key: 'freeParking', icon: 'IconFreeParking' },
    { key: 'beachNearby', icon: 'IconBeachNearby' },
    { key: 'playground', icon: 'PlaygroundIcon' },
    { key: 'familyRooms', icon: 'IconFamilyRooms' },
    { key: 'kitchen', icon: 'IconKitchen'},
     { key: 'airConditioning', icon: 'IconAirConditioning' },
    { key: 'freeWiFi', icon: 'IconFreeWifi' },
   
   { key: 'TV', icon: 'IconTv'},
  ];

  return (
    <>
   
  <Box
      as="section"
  id="facil"
  bg="gray.100" px={{base:"6",}} py={{base:"6",sm:"12"}} 
    >
  

      <Box position="relative" zIndex="15"  maxW="1200px" mx="auto" >
        <VStack alignItems="flex-start" justifyContent="flex-start">

            <VStack
                gap={{base:"6",md:"8",lg:"12"}} w="full"
            >

 <Heading
        
            className="section-name"
           display="none"
          >
            {t('facilitiesWithIcons.generalHeading')}
          </Heading>
 <Grid
              templateColumns={{
                base:'repeat(2, 1fr)',
                sm: 'repeat(4, 1fr)',
                lg: 'repeat(8, 1fr)',
              
              }}
                gap={{base:"3"}}   w="full"
            >
              {facilitiesData.map(({ key, icon }) => {
                const label = t(`facilitiesWithIcons.${key}.label`);
                const IconComponent = Icons[icon];
                const desc = t(`facilitiesWithIcons.${key}.desc`);
                return (
               
                    <VStack alignItems="center" justifyContent="flex-start" key={key}  rounded="sm" transition="all .4s ease"
                    px="2" py="4" _hover={{  transform:" translateY(-4px)",
    shadow:" 0 6px 16px rgba(0, 0, 0, 0.12)"}}  >

                      <Flex className="icon-wrapper" w={{base:"48px",sm:"64px"}} h={{base:"48px",sm:"64px"}} border="1px solid" borderColor="gray.300" alignItems="center" justifyContent="center" rounded="sm">
                        <span className="icon" >
                          {IconComponent ? <IconComponent fill="var(--secondary)"  /> : <span>x</span>}
                        </span>
                      </Flex>

                    
                        <Text mb="0" fontSize="xs" fontWeight="500" textAlign="center">
                          {label}
                        </Text>
                      <Text mb="0" fontSize="2xs" color="gray.600" textAlign="center">
                         {desc} 
                        </Text>

                    </VStack>
                
                );
              })}
</Grid>

            </VStack>
         

        </VStack>
      </Box>
    </Box>

</>
  );
};

export default Facil;
