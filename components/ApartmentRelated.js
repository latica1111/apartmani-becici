'use client'
import { HStack, Box, Heading, VStack ,Text,Grid,GridItem,} from '@chakra-ui/react';
import { useTranslations} from 'next-intl';
import { useLocale } from 'next-intl';
import {Link} from '@/i18n/navigation';
import PhotoCarousel from './PhotoCarousel';


export default function ApartmentRelated ({relatedApartments}){
 const t = useTranslations ("apartmentsDescription");

 const locale = useLocale();
  if (relatedApartments.length === 0) return null; // Ako nema sličnih apartmana, ništa ne prikazuj

  return (
    <>
    <Box className="related-apartments" id="relatedRooms" w="full">
      <Heading mb="6" className="section-name">{t('pageSectionNames.relatedRooms')}</Heading> {/* Naslov sekcije, preveden */}
      <Grid templateColumns={{sm:"repeat(2,1fr)", md:"repeat(3,1fr)"}} gap="10" w="full">
        {relatedApartments.map((apt) => {
  const typeSlug = t(`dynamicSlugs.type.${apt.type}`);
   return (
          <GridItem key={apt.id}  w="full" overflow="hidden" shadow="none" _hover={{
    transform: "translateY(-4px)",
    shadow: "none",
    transition: "0.25s ease"
  }}>
            <VStack  h="full" w="full" alignItems="flex-start">
           
<Box h="3xs" overflow="hidden" className="item-photos-wrapper"  w="full" bg="bg.subtle">
    {apt.photos && apt.photos.length > 0 && (
    <PhotoCarousel photos={apt.photos} />
    )}
</Box>

              <VStack px="0" pt="3" pb="8" gapY="3" alignItems="flex-start">
                <Heading fontSize="lg" color="var(--primary)" fontWeight="300" letterSpacing="1.1px"  fontFamily="var(--font-cormorant)">{apt.name}</Heading>
                <Text color="gray.600" fontSize="xs">
                  {apt.apartmentSize} m² • {apt.type.charAt(0).toUpperCase() + apt.type.slice(1)} • {apt.maxGuestsNumber[0]}
                </Text>
              <HStack height="1.75rem"
minWidth="2rem"
border="1px solid var(--primary)"
color="var(--primary)"
px=".875rem"
fontSize="2xs"
fontWeight="300" textTransform="uppercase" letterSpacing="1.2px"
rounded="none"
mt="2"
>
               <Link


  href={{
    pathname: '/offer/[type]/[slug]',
    params: {
      type: typeSlug,
      slug: apt.pageURL
    }
  }}
>
                    {t('pageSectionNames.viewDetails')}
                </Link>
</HStack>
              </VStack>
            </VStack>
          </GridItem>
   )
})}
      </Grid>
    </Box>


    </>
  );
};
   