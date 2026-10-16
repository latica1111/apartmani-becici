 'use client';

import React from 'react';

import LanguageSwitcher from '@/components/LanguageSwitcher';
import Logo2  from '@/components/Logo2';
import { Box, Flex, } from '@chakra-ui/react';
const PreHeader = () => {
  const phone1 = '+382 67 748 403';
  const phone2 = '+382 67 556 512';
  const address = 'Ivo Lola Ribara 1, Becici, Budva, Montenegro';
  const googleMapsUrl = 'https://www.google.com/maps?q=Apartmani Becici,+Budva,+Montenegro';

  return (
    <>
   
  <Box as="section" className="preheader-wrapper">
    
      <Flex
        w="full"
        justify="space-between"
        align="center"
     
      >
       <Logo2 />

        {/* Language Switcher */}
        <Box display={{ base: 'flex' }} justify={{ base: 'flex-start', }}>
          <LanguageSwitcher />
        </Box>
      </Flex>

    </Box>

     </>
  );
};

export default PreHeader;
