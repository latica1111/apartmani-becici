 'use client';
import { Box,  Heading, Text } from "@chakra-ui/react";
import NextImage from 'next/image';
import { useTranslations } from 'next-intl';
import NavigationLayout from "./NavigationLayout";
export default function HeroImage({ pageKey, photoURL, photoPosition, label, }) {
  const t = useTranslations("home");
 const titleData = photoURL && label
    ? { photoURL, photoPosition, label }
    : t?.raw(`pageTitles.${pageKey}`) || {};

  if (!titleData.photoURL) return null; // fallback ako nema ništa

  return (
   <>
   
   <Box
      position="relative"
      display="flex"
      alignItems="center"
      justifyContent="center"
      color="white"
      overflow="hidden"
      height={{ base:"xs",sm:"sm" ,lg:"2xl" }}
    >
{/* NAVBAR OVERLAY */}
  <Box
    position="absolute"
    top="0"
    left="0"
    w="100%"
    zIndex="3"
    px={4}
    py={3} 
  >
    <NavigationLayout />
  </Box>
   {/* Overlay sloj */}
  <Box
    position="absolute"
    inset={0}
  bg= "rgba(0,0,0,0.6)"
    zIndex={1}
    w="full"
    h="full"
  />
      <NextImage
        src={titleData.photoURL}
        alt={titleData.label}
        objectFit="cover"
        objectPosition={titleData.photoPosition || "center"}
      fill
        zIndex="2"
      />

     

      <Box
        position="relative"
        px={4}
        py={2}
      
        textAlign="center"
        zIndex="4"
      >
         <Text textStyle="2xs" letterSpacing="0.18em" color="var(--secondary)" textTransform="uppercase"> {titleData.desc}</Text>
        <Heading
          fontWeight="400"
          fontSize={{ base: "2xl", md: "3xl", lg:"5xl" }} my="3"
          letterSpacing="0.08em"
           fontFamily="var(--font-cormorant)"
        >
          {titleData.label}
        </Heading>
       
      </Box>
    </Box>
</>
  );
}
