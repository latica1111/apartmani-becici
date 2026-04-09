import { getTranslations } from 'next-intl/server';
import PhotoCarousel from '@/components/PhotoCarousel';
import Breadcrumbs from '@/components/Breadcrumbs';
import apartmentsDataEn from '@/data/locales/en/apartments-description.json';
import apartmentsDataSr from '@/data/locales/sr/apartments-description.json';

import HeroImage from '@/components/HeroImage';
import { HStack,Stack,Badge, Span,Box, Heading, VStack ,Text,Grid,GridItem,Flex, Icon} from '@chakra-ui/react';
import ApartmentsGrid from '@/components/ApartmentsGrid';
import { IconTotalGuests, IconApartmentSize, IconBeds, IconFreeParkingRectangle, IconBabyCrib, IconFamilyRooms, IconSeaView, IconKitchen,IconBathroom,IconMountainView ,IconBudgetFriendly} from '@/components/Icons';

import { routing } from '@/i18n/routing';
import { setRequestLocale } from 'next-intl/server';
export const revalidate = 0; // full static, generiše se jednom u build-u
export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
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



  let filteredUnits = [];

  if (type === 'studios' || type === 'studiji') {
    filteredUnits = allUnits.filter(unit => unit.type === 'studio');
  } else if (type === 'apartments' || type === 'apartmani') {
    filteredUnits = allUnits.filter(
      unit => unit.type === 'apartment' || unit.type === 'apartman'
    );
  } else if (type === 'rooms' || type === 'sobe') {
    filteredUnits = allUnits.filter(
      unit => unit.type === 'room' || unit.type === 'soba'
    );
  } else {
    filteredUnits = allUnits.apartments;
  }

 
const featuredInfoMap = {
  privateBathroom: {
    icon: (props) => iconBathroom(props),
    label: {
      sr: 'Sopstveno kupatilo',
      en: 'Private bathroom'
    }
  },
  privateKitchen: {
    icon: (props) => iconKitchen(props),
    label: {
      sr: 'Sopstvena kuhinja',
      en: 'Private kitchen'
    }
  },
  partialSeaView: {
    icon: (props) => iconSeaView(props),
    label: {
      sr: 'Bočni pogled na more',
      en: 'Partial sea view'
    }
  },
  familyFriendly: {
    icon: (props) => iconFamilyRooms(props),
    label: {
      sr: 'Porodične sobe',
      en: 'Family friendly room'
    }
  },
  budgetFriendly: {
    icon: (props) => iconBudgetFriendly(props),
    label: {
      sr: 'Povoljna cijena',
      en: 'Budget-friendly room'
    }
  },

  mountainView :{
    icon: (props) => iconMountainView(props),
    label: {
      sr: 'Pogled na planinu',
      en: 'Mountain view'
    }
  }
};


  return (
<>

<HeroImage pageKey={type} />


<VStack px={{base:"6", md:"8", lg:"12"}} py={{base:"12",md:"16",lg:"24"}} shadow="inset" maxW="1200px" mx="auto" alignItems="flex-start">
  <Breadcrumbs />
<Heading>
  {type.replace('-', ' ').charAt(0).toUpperCase() + type.replace('-', ' ').slice(1)}
</Heading>
<Text color="gray.700">   {t(`accommodationTypeData.${type}.introText`) || ''}</Text>

<ApartmentsGrid filteredApartments={filteredUnits}  showDescription={true} />

</VStack>



    </>
  );
}
