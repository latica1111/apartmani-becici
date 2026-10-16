
import React from 'react';
import { getTranslations } from 'next-intl/server';

import {Link} from '@/i18n/navigation';
import Copyright from './Copyright';
import {
  Box,
  Grid,
  GridItem,
  Flex,
  Heading,
  Text,VStack,
 Span,
 
} from '@chakra-ui/react';
import { MdOutlinePhone } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";
import LogoBlueBackground from './LogoBlueBackround';
export default async function Footer({ locale }){
  const t = await getTranslations('home.footer');
  
 

  return (
    <>
   
 <Box as="footer" className="footer primary-bg">
      <Box   px={{base:"6", md:"8", lg:"12"}} py={{base:"6",md:"8",lg:"12"}}  maxW="1200px" mx="auto">
        <Grid
          templateColumns={{
            base: '1fr',
            sm: 'repeat(2, 1fr)',
            lg: '5fr 3fr 4fr',
          }}
          gap={6}
        >
          {/* CONTACT */}
          <GridItem>
            <Box className="adress-block" >
              <Heading as="h6"  mb="5" fontSize="sm"
  textTransform="uppercase"
  letterSpacing="0.15em"
  color="rgba(255,255,255,0.9)" >
                {t('contact.heading')}
              </Heading>

              <Flex align="start" gap={2} mb={3}>
                  <Span className="icon" 
>
              
                <MdOutlineLocationOn  size="24px" fill="var(--secondary)" />
                </Span>
                <Box maxW={{md:"280px"}}><Link href="https://www.google.com/maps/place/Apartmani+Becici/@42.2827175,18.8671467,17z/data=!3m1!4b1!4m6!3m5!1s0x134dd4709fb6168f:0xc0187b98b31208e1!8m2!3d42.2827175!4d18.8671467!16s%2Fg%2F11c6w0dz07?hl=en&entry=ttu&g_ep=EgoyMDI2MDQwNS4wIKXMDSoASAFQAw%3D%3D" fontSize="xs"  className="footer-link" target="_blank" rel="noopener noreferrer">{t('contact.adress.data')}</Link></Box>
              </Flex>

              <Flex align="flex-start" gap={2} mb={3}>
               <Span className="icon"
>
    <MdOutlinePhone  size="24px" fill="var(--secondary)" />
  </Span>
                <VStack>
                
                    <Link
                      href={`tel:${t('contact.phones.phonesNmbrs.data1')}`}
                      className="footer-link"
                    >
                      {t('contact.phones.phonesNmbrs.data1')}
                    </Link>
                 
               
                    <Link
                      href={`tel:${t('contact.phones.phonesNmbrs.data2')}`}
                      className="footer-link"
                    >
                      {t('contact.phones.phonesNmbrs.data2')}
                    </Link>
                
                </VStack>
              </Flex>

              <Flex align="center" gap={2}>
            <Span className="icon" 
>
   <MdOutlineMail  size="24px" fill="var(--secondary)" />
  </Span>
                <Link
                  href={`mailto:${t('contact.email.data')}`}
                  className="footer-link"
                >
                  {t('contact.email.data')}
                </Link>
              </Flex>
            </Box>
          </GridItem>

          {/* OFFER */}
          <GridItem>
            <Box className="footer-offer">
              <Heading as="h6"  fontSize="sm"  mb="5"
  textTransform="uppercase"
  letterSpacing="0.15em"
  color="rgba(255,255,255,0.9)">
                {t('footerOffer.heading')}
              </Heading>

              <VStack alignItems="flex-start">
                {[1, 2, 3, 4].map((item) => (
              
                    <Link key={item}
                      href={t(`footerOffer.item${item}.href`)}    position="relative"
      display="inline-flex"
      w="fit-content"
                      className="footer-link"  transition="color 0.3s ease"
        _after={{
          content: '""',
          position: "absolute",
          bottom: "0",
          left: "0",
          right: "0",
          height: "1px",
          bg: "var(--secondary)",
          transform:"scaleX(0)",
          transformOrigin: "left",
          transition: "transform 0.3s ease",
        }}
        _hover={{
          color: "var(--primary)",
          _after: {
            transform: "scaleX(1)",
          },
        }}
                    >
                      {t(`footerOffer.item${item}.label`)}
                    </Link>
                  
                ))}
              </VStack>
            </Box>
          </GridItem>

          {/* SOCIALS */}
          <GridItem>
            <Box className="footer-socials">
              <Heading as="h6"    mb="5" fontSize="sm"
  textTransform="uppercase"
  letterSpacing="0.15em"
  color="rgba(255,255,255,0.9)">
                {t('footerSocials.heading')}
              </Heading>

              <Text mb={3} fontSize="0.9rem">{t('footerSocials.intro')}</Text>

              <Flex direction="column" gap={3}>
                <Link
                  href="https://facebook.com/"
                  display="flex"
                  alignItems="center"
                  gap={3}
                  className="icon-wrapper"
             target="_blank" rel="noopener noreferrer">
              <Span className="icon"> <AiOutlineFacebook   size="24px" /> </Span>
                  <Text fontSize="0.9rem" className="footer-link">{t('footerSocials.fb.fbLabel')}</Text>
                </Link>

                <Link
                  href="https://instagram.com/"
                  display="flex"
                  alignItems="center"
                  gap={3}
                  className="icon-wrapper"
            target="_blank" rel="noopener noreferrer">
                <Span className="icon"><AiOutlineInstagram size="24px" /> </Span>
                  <Text fontSize="0.9rem" className="footer-link">
                    {t('footerSocials.instagram.instagramLabel')}
                  </Text>
                </Link>
              </Flex>
            </Box>
          </GridItem>
        </Grid>

        {/* COPYRIGHT */}
       <Copyright />
      </Box>
    </Box>

    </>
  );
}


 