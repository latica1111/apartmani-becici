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
      height={{ base:"xs",sm:"sm" ,lg:"md" }}
    >
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
        borderRadius="md"
        textAlign="center"
        zIndex="4"
      >
        <Heading
          fontWeight="500"
          fontSize={{ base: "2xl", md: "3xl" }} mb="3"
          letterSpacing="wide"
        >
          {titleData.label}
        </Heading>
        <Text textStyle="xs" letterSpacing="wider"> {titleData.desc}</Text>
      </Box>
    </Box>
</>
  );
}
