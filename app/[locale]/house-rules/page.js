 
 import HeroImage from '@/components/HeroImage';
 import Breadcrumbs from '@/components/Breadcrumbs';

import { getTranslations } from 'next-intl/server';
import {IconCheckin, IconCheckout, IconCancellation, IconInfo, IconChildrenAndBeds,IconAdditionalHouseRules,IconCashOnly, IconPetsAllowed, IconEvents, IconQuietHours } from '@/components/Icons';
import { setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { HStack, Tag ,Stack,Image, List ,ListItem, Span,Box, Heading, VStack ,Text,Grid,GridItem,Flex, Icon} from '@chakra-ui/react';
export const revalidate = 0; // full static, generiše se jednom u build-u
export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}


export async function generateMetadata() {
  const t = await getTranslations('meta');

  return {
    title: t('houseRulesMeta.title'),
    description: t('houseRulesMeta.description'),
    keywords: t('houseRulesMeta.keywords'),

    openGraph: {
      title: t('houseRulesMeta.ogTitle'),
      description: t('houseRulesMeta.ogDescription'),
      locale: t('houseRulesMeta.ogLocale'),
      type: t('houseRulesMeta.ogType'),
      url: t('houseRulesMeta.ogUrl'),
      images: [
        {
          url: t('houseRulesMeta.ogImage'),
          width: 1200,
          height: 630,
          alt: t('houseRulesMeta.title')
        }
      ]
    },

    twitter: {
      card: t('houseRulesMeta.twitterCard'),
      title: t('houseRulesMeta.twitterTitle'),
      description: t('houseRulesMeta.twitterDescription'),
      images: [t('houseRulesMeta.twitterImage')]
    },

    alternates: {
      canonical: t('houseRulesMeta.canonical'),
      languages: {
        en: 'https://apartmani-becici.vercel.app/en/offer',
        sr: 'https://apartmani-becici.vercel.app/sr/ponuda'
      }
    }
  };
}

export default async function HouseRulesPage({params}) {
   const { locale } = await params;
   setRequestLocale(locale);
  const t = await getTranslations("home");

  // Ključevi koje želiš da prikažeš redom
  const rulesKeys = [
    'houseRules.checkIn',
    'houseRules.checkOut',
    'houseRules.cancellation',
    'houseRules.prepayment',
    'houseRules.childrenAndBeds',
    'houseRules.cashOnly',
    'houseRules.parties',
    'houseRules.quietHours',
    'houseRules.pets',
    'additionalRules'
  ];
 const iconMap = {
  'houseRules.checkIn': IconCheckin,
  'houseRules.checkOut': IconCheckout,
  'houseRules.cancellation': IconCancellation,
  'houseRules.prepayment': IconInfo,
  'houseRules.childrenAndBeds': IconChildrenAndBeds,
  'houseRules.cashOnly': IconCashOnly,
  'houseRules.parties': IconEvents,
  'houseRules.quietHours': IconQuietHours,
  'houseRules.pets': IconPetsAllowed,
  'additionalRules': IconAdditionalHouseRules
};

  
  return (
    <>
      <HeroImage pageKey="houseRules" />
     
      
    <Box className="house-rules-wrapper" px={{base:"6", md:"8", lg:"12"}} py={{base:"12",md:"16",lg:"24"}}  maxW="1200px" mx="auto">
    <Breadcrumbs />
<Box className='heading-container'><Heading className="section-name">{t('houseRules.mainHeading')}</Heading></Box>
      
      
      <VStack mt={{base:"6", md:"8", lg:"12"}} >
        {rulesKeys.map((key) => {
          const heading = t(`${key}.heading`);
          const textBlock = t.raw(`${key}.textBlock`);
          const IconComponent = iconMap[key];
          return (
<Box
  w="full"
  py={{sm:"5"}} pb={{smDown:"8"}} borderBottom={{smDown:"1px solid"}} borderBottomColor="gray.200 !important"
 
  transition="all 0.2s" mb={{base:"8",sm:"5"}}
>
            <Grid key={key}  templateColumns={{md:"1fr 2fr"}} w={{sm:"",md:"full"}} gap={{base:"6", md:"8", lg:"12"}}>
              <Heading gap="2" display="flex"  alignItems="center"><Span className="icon-wrapper" display="inline-flex" alignItems="center" justifyContent="center" 

 minW={{base:"36px", sm:"48px", lg:"56px"}} minH={{base:"36px", sm:"48px", lg:'56px'}}> {IconComponent && 
 <Span boxSize={{ base: "20px", md: "48px", lg:"56px" }}>
      <IconComponent width="100%" height="100%" fill="var(--secondary)" />
    </Span>}</Span><Span fontSize="md" textTransform="uppercase" fontWeight="400" letterSpacing="0.3px">{heading}</Span></Heading>
              <VStack alignItems="flex-start" justifyContent="center">
                {Array.isArray(textBlock)
                  ? textBlock.map((text, index) => <Text key={index}  color="gray.500" maxW="600px">{text}</Text>)
                  : <Text>{textBlock}</Text>}
              </VStack>
            </Grid>
</Box>
          );
        })}
      </VStack>
    </Box>
    </>
  );
 
}
