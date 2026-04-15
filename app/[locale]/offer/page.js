
import HeroImage from '@/components/HeroImage';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Badge, HStack,Stack, Span,Box, Heading, VStack ,Text,Grid,GridItem,Flex, Icon} from '@chakra-ui/react';
import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import ApartmentsGrid from '@/components/ApartmentsGrid';
import { routing } from '@/i18n/routing';
export const revalidate = 0; // full static, generiše se jednom u build-u
export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
export async function generateMetadata() {
  const t = await getTranslations('meta.offerMeta.all');

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),

    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      locale: t('ogLocale'),
      type: t('ogType'),
      url: t('ogUrl'),
      images: [
        {
          url: t('ogImage'),
          width: 1200,
          height: 630,
          alt: t('title')
        }
      ]
    },

    twitter: {
      card: t('twitterCard'),
      title: t('twitterTitle'),
      description: t('twitterDescription'),
      images: [t('twitterImage')]
    },

    alternates: {
      canonical: t('canonical'),
      languages: {
        en: 'https://apartmani-becici.vercel.app/en/offer',
        sr: 'https://apartmani-becici.vercel.app/sr/ponuda'
      }
    }
  };
}
export default async function OfferPage({ params }) {
  const { locale } = await params;
   setRequestLocale(locale);
   const t = await getTranslations({
    locale,
    namespace: 'apartmentsDescription'
  });


 
  const allUnits =  t.raw('apartments');


 
  return (
    <>
      <HeroImage pageKey="offer" />
<Box shadow="inset" px={{base:"6", md:"8", lg:"12"}} py={{base:"12",md:"16",lg:"24"}}  >
<VStack maxW="1200px" mx="auto" alignItems="flex-start" w="full">
<Breadcrumbs />
<Heading className="section-name" mb={{base:"3",md:"4",lg:"6"}}>{t("accommodationTypeData.all.heading") || ''}</Heading>
<Text color="gray.700">  {t("accommodationTypeData.all.introText") || ''}</Text>
<ApartmentsGrid filteredApartments={allUnits}  showDescription={true}/>
 
</VStack>
</Box>



    </>
  );
}
