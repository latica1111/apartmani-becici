import { getTranslations } from 'next-intl/server';

import Breadcrumbs from '@/components/Breadcrumbs';


import HeroImage from '@/components/HeroImage';
import { HStack,Stack,Badge, Span,Box, Heading, VStack ,Text,Grid,GridItem,Flex, Icon} from '@chakra-ui/react';
import ApartmentsGrid from '@/components/ApartmentsGrid';


import { routing } from '@/i18n/routing';
import { setRequestLocale } from 'next-intl/server';
import { dynamicSegments } from '@/i18n/dynamicSegments';
export const revalidate = 0; // full static, generiše se jednom u build-u

const getNormalizedType = (localeType, locale) => {
  const typeMap = {
    room: dynamicSegments.type.rooms,
    studio: dynamicSegments.type.studios,
    apartment: dynamicSegments.type.apartments
  };

  // Pronađi koji standardni tip odgovara prosleđenom type-u i locale-u
  const normalized = Object.entries(typeMap).find(([key, val]) => val[locale] === localeType);
  return normalized ? normalized[0] : 'apartment'; // default 'apartment'
};

export async function generateStaticParams() {
  const locales = routing.locales; // ['en', 'sr']
  const types = dynamicSegments.type;

  const params = [];

  for (const locale of locales) {
    for (const typeKey in types) {
      params.push({ locale, type: types[typeKey][locale] });
    }
  }

  return params;
}
 export async function generateMetadata({params}) {
  const {type} = await params;
  const t = await getTranslations(`meta.offerMeta.${type}`);
 
  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),

  
  };
}

export default async function OfferTypePage({ params }) {
  const { locale, type } = params;
  setRequestLocale(locale);
   const t = await getTranslations({
    locale,
    namespace: 'apartmentsDescription'
  });
const allUnits =  t.raw('apartments');
const slugs = t.raw('dynamicSlugs.type');

// normalize type (room/studio/apartment)
  const normalizedType = getNormalizedType(type, locale);

  // map normalized type to JSON key
  const typeToJsonKey = {
    room: 'rooms',
    studio: 'studios',
    apartment: 'apartments'
  };
  const jsonKey = typeToJsonKey[normalizedType] || 'apartments';

  // filter apartments
  const filteredUnits = allUnits.filter(unit => unit.type === normalizedType);
 


  return (
<>

<HeroImage pageKey={jsonKey} />


<VStack px={{base:"6", md:"8", lg:"12"}} py={{base:"12",md:"16",lg:"24"}} shadow="inset" maxW="1200px" mx="auto" alignItems="flex-start">
  <Breadcrumbs />
<Heading>
 {t(`accommodationTypeData.${jsonKey}.heading`)}
</Heading>
<Text color="gray.700">  {t(`accommodationTypeData.${jsonKey}.introText`) || ''}</Text>

<ApartmentsGrid filteredApartments={filteredUnits}  showDescription={true} />

</VStack>



    </>
  );
}
