
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
   
  <Box shadow="lg"  position="relative" h="xl" >
 {/* IMAGE */}
  <NextImage
    src="/images/yard/outdoors-view.jpg"
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
    px={4}
    py={3}  backdropFilter="blur(2px)"
  bg="rgba(0,0,0,0.2)"
  >
    <NavigationLayout />
  </Box>
    {/* Overlay sloj */}
  <Box
    position="absolute"
    inset={0}
  bg= "rgba(0,0,0,0.8)"
    zIndex={1}
  />
         <AbsoluteCenter zIndex={2} color="#fff" borderRadius="md"  w={{smDown:"full", sm:"75%", lg:"50%"}} >
              <VStack justifyContent="center" alignItems="center" gap="0" py={{base:"0", sm:"12", md:"12", lg:"24"}} pb={{smDown:"0"}} px="4" >
                {t('heroSubtitle') && (
              <Text fontSize={{base:"xs"}} mb="0"  textTransform="uppercase" letterSpacing="wide" color="var(--secondary)" >{t('heroSubtitle')}</Text>
               )}
              
              <Heading fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }} textAlign="center"   fontWeight="600" lineHeight="shorter" mb="5" >{t('heroTitle')}</Heading>
              <Text   maxW="600px"  fontSize="md" color="rgba(255,255,255,0.85)"
  opacity="0.85" mb="5" lineHeight="tall" textAlign="center" >{t('heroText')}</Text>
          
    <HeroBtnGroup rawData={rawData} />
              </VStack>
          </AbsoluteCenter> 
           
           

 </Box>



    </>
  );
};

export default Hero;
