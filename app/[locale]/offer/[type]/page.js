import { getTranslations } from 'next-intl/server';

import Breadcrumbs from '@/components/Breadcrumbs';


import HeroImage from '@/components/HeroImage';
import { Heading, VStack ,Text,} from '@chakra-ui/react';
import ApartmentsGrid from '@/components/ApartmentsGrid';


import { routing } from '@/i18n/routing';
import { setRequestLocale } from 'next-intl/server';
import { dynamicSegments } from '@/i18n/dynamicSegments';
export const revalidate = 0; // full static, generiše se jednom u build-u

const urlToTypeMap = {
  rooms: 'room',
  sobe: 'room',
  studios: 'studio',
  studiji: 'studio',
  apartments: 'apartment',
  apartmani: 'apartment'
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
  openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      type: t('ogType'),
      url: t('ogUrl'),
      images: [
        {
          url: t('ogImage'),
        },
      ],
    },

    twitter: {
      card: t('twitterCard'),
      title:  t('twitterTitle'),
      description:  t('twitterDescription'),
      images: t('twitterImage'),
    },

    alternates: {
      canonical:  t('canonical'),
    },
  
  };
}

export default async function OfferTypePage({ params }) {
  const { locale, type } = await params;
   console.log('Server params.type:', params?.type);
  console.log('Server locale:', params?.locale);
  setRequestLocale(locale);
   const t = await getTranslations({
    locale,
    namespace: 'apartmentsDescription'
  });
const allUnits =  t.raw('apartments');
const slugs = t.raw('dynamicSlugs.type');

const normalizedType = urlToTypeMap[type] || 'apartment';
const filteredUnits = allUnits.filter(unit => unit.type === normalizedType);
const typeToJsonKey = {
  room: 'rooms',
  studio: 'studios',
  apartment: 'apartments'
};

const jsonKey = typeToJsonKey[normalizedType];
console.log('params.type:', type);
console.log('locale:', locale);
console.log('normalizedType:', normalizedType);
console.log('normalizedType:', normalizedType);
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
