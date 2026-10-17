
import NextImage from 'next/image';
import { useTranslations } from 'next-intl';
import { Box, VStack, Text, Heading,   AbsoluteCenter,} from "@chakra-ui/react"
import HeroBtnGroup from './HeroBtnGroup';
import NavigationLayout from './NavigationLayout';
const Hero = () => {
  const t = useTranslations('home.heroSection'); // t() sada čita iz "heroSection" u home.json
 const rawData = t.raw("heroCta");


 
  return (
    <>
   
  <Box  position="relative"  height={{ base:"xl" ,lg:"2xl" }} >
 {/* IMAGE */}
  <NextImage
    src="/images/yard/becici-beach-slide.jpg"
    alt="Beautiful outdoor view"
    fill
    priority
    style={{ objectFit: 'cover' }}
    quality={70}
  />


{/* NAVBAR OVERLAY */}
  <Box
    position="absolute"
    top="0"
    left="0"
    w="100%"
   
    zIndex="3"
    px={{base:"4",md:"8"}}
    py={6} 
  >
    <NavigationLayout />
  </Box>
    {/* Overlay sloj */}
  <Box
    position="absolute"
    inset={0}
  bg= "rgba(0,0,0,0.7)"
    zIndex={1}
  />
         <AbsoluteCenter zIndex={2} color="#fff"   w={{smDown:"full", sm:"75%", lg:"60%"}} >
              <VStack justifyContent="center" alignItems="center" gap="0" py={{base:"0", sm:"12", md:"12", lg:"24"}} pb={{smDown:"0"}} px="4" >
                {t('heroSubtitle') && (
              <Text fontSize={{base:"xs"}} mb="0" textAlign="center" textTransform="uppercase" letterSpacing="0.18em" color="var(--secondary)" fontWeight="400" >{t('heroSubtitle')}</Text>
               )}
              
              <Heading fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }} textAlign="center"   fontWeight="400" lineHeight="shorter" mb="5" mt={{base:"2", sm:"3"}}  fontFamily="var(--font-cormorant)" letterSpacing="0.03em">{t('heroTitle')}</Heading>
              <Text   maxW="500px"  fontSize="lg" opacity=".85"
  mb="5" lineHeight="tall" textAlign="center" fontWeight="300">{t('heroText')}</Text>
          
    <HeroBtnGroup rawData={rawData} />
              </VStack>
          </AbsoluteCenter> 
           
           

 </Box>



    </>
  );
};

export default Hero;
