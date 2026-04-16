'use client';
import PhotoCarousel from '@/components/PhotoCarousel';// koristiš pravi icon
import {Link} from '@/i18n/navigation';
import { IconTotalGuests, IconApartmentSize, IconBeds, IconFreeParkingRectangle, IconBabyCrib,  } from '@/components/Icons';
import { HStack,Badge, Span,Box, Heading, VStack ,Text,Flex} from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import { getFeaturedInfoMap } from '@/lib/GetFeaturedInfoMap';

export default function ApartmentCard ({apt, showDescription}){
const t = useTranslations("apartmentsDescription");

const featuredInfoMap = getFeaturedInfoMap(t);
const typeSlug = t(`dynamicSlugs.type.${apt.type}`);
const formatBed = (bed) => {
  if (typeof bed !== 'string') return '';

  const match = bed.match(/^(\d+)\s*(.*)/);

  if (match) {
    const count = match[1];
    const label = match[2];

    return `${count} ${label.charAt(0).toUpperCase() + label.slice(1)}`;
  }

  return `1 ${bed.charAt(0).toUpperCase() + bed.slice(1)}`;
};
    return(

        <>
         <Box key={apt.id} rounded="sm" overflow="hidden" shadow="md" border="1px solid"
  borderColor="gray.100"
  _hover={{
    transform: "translateY(-4px)",
    shadow: "xl",
    transition: "0.25s ease"
  }}>
<VStack flexBasis="0 0 auto" w="full" alignItems="flex-start">
<Box h="3xs" overflow="hidden" className="item-photos-wrapper"  w="full" bg="bg.subtle">
    <PhotoCarousel photos={apt.photos} />
</Box>
<VStack w="full" justifyContent="flex-start" px={{base:"3",md:"4"}} pt={{base:"2", md:"3"}} pb={{base:"4", md:"6"}} alignItems="flex-start">
  <Heading w="full"  fontSize="xl"
  fontWeight="300"
  lineHeight="1.3"  mb="1" >  {apt.name}</Heading>
{showDescription && apt.introContent && (
  <Text fontSize="sm"  display="-webkit-box"
  overflow="hidden"
  textOverflow="ellipsis"
  WebkitLineClamp={{base:"10",sm:"8", md:"6"}}
  whiteSpace="nowrap"
  lineClamp={{base:"10",sm:"8", md:"6"}}
  WebkitBoxOrient="vertical" mb="2" color="gray.600">
    {apt.shortDescription}
  </Text>
)}

  <HStack flexWrap="wrap" w="full" gapX="3">
    <Badge  className="free-parking "  variant="surface"
  bg="rgba(0, 51, 102, 0.08)"
  color="var(--primary)"
  fontSize="xs"
  px={{base:"2", sm:"3"}}
  py={{base:"1", sm:"2"}}
  rounded="sm">
                       
                    
        <IconFreeParkingRectangle width="12" height="12" fill="var(--primary)" />
                        {t("homepageOffer.parking")}
                      </Badge>

                      {apt.beds.some(b => typeof b === 'object' && b.babyCrib) && (
                        <Badge   variant="surface"
  bg="rgba(0, 51, 102, 0.08)"
  color="var(--primary)"
  fontSize="xs"
 px={{base:"2", sm:"3"}}
  py={{base:"1", sm:"2"}}
  rounded="sm" className="baby-crib " >
                        
                          
                 <IconBabyCrib width="12" height="12" fill="var(--primary)" />          
                        {t("homepageOffer.beds")}
                    
                       </Badge>
                      )} 
 {apt.featured?.map((key) => {
                        const item = featuredInfoMap[key];
                       
                        if (!item) return null;
                         const IconComponent = item.icon;
console.log("KEY:", key);
console.log("ITEM:", featuredInfoMap[key]);

                        return (
                          <Badge   variant="surface"
  bg="rgba(0, 51, 102, 0.08)"
  color="var(--primary)"
  fontSize="xs"
 px={{base:"2", sm:"3"}}
 py={{base:"1", sm:"2"}}
  rounded="sm"  key={key} className="featured-item " >
                          
                          <IconComponent width={12} height={12} fill="var(--primary)" />
                           
                           {item.label}
                          </Badge>
                        );
                      })}
  </HStack>
<VStack  w="full" alignItems="flex-start"
 
  my="3"
  spacing="2"
  fontSize="xs"
  color="gray.600">
 <HStack className="beds" w="full">
                      <Span className="icon-wrapper">
                       
                         <IconBeds width="14" height="14" fill="#52525b" /> 
                      </Span>
                    <Text >{apt.beds
                        .filter(b => typeof b === 'string')
                        .map(formatBed)
                        .join(' + ')}</Text> 
                    </HStack>
   <HStack  className="apartment-size" w="full">
                      <Span className="icon-wrapper">
                      
                        <IconApartmentSize width="14" height="14" fill="#52525b" /> 
                      </Span>
                     <Text >{apt.apartmentSize} m²</Text> 
                    </HStack >

                    <HStack  className="max-capacity" w="full">
                      <Span className="icon-wrapper">
                       
                          <IconTotalGuests width="14" height="14" fill="#52525b" /> 
                      </Span>
                     <Text > {apt.maxGuestsNumber[0]}</Text>
                    </HStack >
</VStack>


<Flex alignItems="center"  fontWeight="600" fontSize="sm" color="var(--primary)"  border="1px solid"  borderColor="var(--primary)"
 height="2.25rem" minWidth="2.25rem" px="2.5rem" rounded="sm" justifyContent="flex-start" transition="all .4 ease"
  _hover={{
    bg: "rgba(var(--primary-rgb), .3)",
   
  }} >
                   <Link
  href={{
    pathname: '/offer/[type]/[slug]',
    params: {
      type: typeSlug,
      slug: apt.pageURL
    }
  }}
>
                      {t("homepageOffer.btnViewMore")}
                    </Link>
</Flex>

</VStack>
</VStack>
            
            </Box>
        
        
        </>
    )
}