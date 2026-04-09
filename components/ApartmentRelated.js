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
      <Grid templateColumns={{sm:"repeat(2,1fr)", md:"repeat(3,1fr)"}} gap="6" w="full">
        {relatedApartments.map((apt) => {
  const typeSlug = t(`dynamicSlugs.type.${apt.type}`);
   return (
          <GridItem key={apt.id}  w="full"  rounded="sm" overflow="hidden" shadow="md" border="1px solid" borderColor="gray.100" _hover={{
    transform: "translateY(-4px)",
    shadow: "xl",
    transition: "0.25s ease"
  }}>
            <VStack  h="full" w="full" alignItems="flex-start">
           
<Box h="3xs" overflow="hidden" className="item-photos-wrapper"  w="full" bg="bg.subtle">
    {apt.photos && apt.photos.length > 0 && (
    <PhotoCarousel photos={apt.photos} />
    )}
</Box>

              <VStack px="4" pt="3" pb="6" gapY="3" alignItems="flex-start">
                <Heading fontSize="lg" color="var(--primary)" fontWeight="600">{apt.name}</Heading>
                <Text color="gray.600" fontSize="xs">
                  {apt.apartmentSize} m² • {apt.type.charAt(0).toUpperCase() + apt.type.slice(1)} • {apt.maxGuestsNumber[0]}
                </Text>
              <HStack height="2.25rem"
minWidth="2.25rem"
border="1px solid var(--primary)"
color="var(--primary)"
px=".875rem"
fontSize="sm"
fontWeight="600"
rounded="sm"
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
   