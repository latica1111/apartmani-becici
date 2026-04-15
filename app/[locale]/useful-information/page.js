 
 import Breadcrumbs from '@/components/Breadcrumbs';
import { setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';
import HeroImage from '@/components/HeroImage';
import { Box, Heading,VStack,Text, List, Grid ,Span} from '@chakra-ui/react';

export const revalidate = 0; // full static, generiše se jednom u build-u
export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
export async function generateMetadata() {
  const t = await getTranslations('meta');

  return {
    title: t('usefulInformationMeta.title'),
    description: t('usefulInformationMeta.description'),
    keywords: t('usefulInformationMeta.keywords'),

    openGraph: {
      title: t('usefulInformationMeta.ogTitle'),
      description: t('usefulInformationMeta.ogDescription'),
      locale: t('usefulInformationMeta.ogLocale'),
      type: t('usefulInformationMeta.ogType'),
      url: t('usefulInformationMeta.ogUrl'),
      images: [
        {
          url: t('usefulInformationMeta.ogImage'),
          width: 1200,
          height: 630,
          alt: t('usefulInformationMeta.title')
        }
      ]
    },

    twitter: {
      card: t('usefulInformationMeta.twitterCard'),
      title: t('usefulInformationMeta.twitterTitle'),
      description: t('usefulInformationMeta.twitterDescription'),
      images: [t('usefulInformationMeta.twitterImage')]
    },

    alternates: {
      canonical: t('usefulInformationMeta.canonical'),
      languages: {
        en: 'https://apartmani-becici.vercel.app/en/offer',
        sr: 'https://apartmani-becici.vercel.app/sr/ponuda'
      }
    }
  };
}
export default async function UsefulInfoPage({params}) {
const { locale } = await params;
   setRequestLocale(locale);

  const t = await getTranslations('home.usefulInfo');

  const renderContent = (content) => {
    if (Array.isArray(content)) {
      return (
       <List.Root gap={2} pl={3}>
          {content.map((item, i) => (
            <List.Item key={i} _marker={{ color: "var(--primary)" }} fontSize="sm" color="gray.800">{item}</List.Item>
          ))}
        </List.Root>
      );
    }
  
    if (typeof content === 'string') {
      return <Text lineHeight="tall" color="gray.600">{content}</Text>;
    }
  
    return null;
  };
  

  const renderBorders = (borders) => {
    const { intro, ...countryBorders } = borders;
 
    return (
      <VStack alignItems="flex-start" mt="6">
        <Heading fontSize="sm">{intro}</Heading>
        {Object.entries(countryBorders).map(([country, crossings]) => (
          <Text key={country} className="country">
            <strong>{country}:</strong> <Span fontSize="sm" color="gray.600">{crossings.join(', ')}</Span>
          </Text>
        ))}
      </VStack>
    );
  };
   const renderCompanies = (path) => {
  const companies = t.raw(path);

  if (!companies || !Array.isArray(companies)) return null;

  return (
    <VStack alignItems="flex-start" mt="4" px="4" py="7" bg="gray.200" rounded="sm" shadow="md">
      <Heading fontSize="sm" color="gray.500">
        {t('companiesLabel')}
      </Heading>
      {renderContent(companies)}
    </VStack>
  );
};

  return (
    <>
     <HeroImage pageKey="usefulInfo" />
    
 <Box px={{ base: 6, md: 8, lg: 12 }}
  py={{ base: 12, md: 16, lg: 24}} bg="gray.50">
    <VStack className="useful-info-wrapper" alignItems="flex-start"  maxW="1200px"
  mx="auto"
 gap="10">
      <Breadcrumbs />
    

      {/* Getting There */}
<VStack alignItems="flex-start" gap="8">
  <Heading textStyle="3xl">{t('gettingThere.sectionHeading')}</Heading>

  {/* General info kao <Text> */}
 <VStack alignItems="flex-start" lineHeight="tall" color="gray.700">
  <Text>{t.raw('gettingThere.generalInfo')[0]}</Text>
  <Text>{t.raw('gettingThere.generalInfo')[1]}</Text>
  <Text>{t.raw('gettingThere.generalInfo')[2]}</Text>
</VStack>
<Grid templateColumns={{
            base: '1fr',
            sm: 'repeat(2, 1fr)',
           
          }}
          gap={{base:"6", md:"8",lg:"12"}} >
 {/* Car */}          
<VStack alignItems="flex-start" w="full"
  bg="gray.100"
  p={{ base: 5, md: 6 }}
  rounded="xl"
  shadow="sm"
  border="1px solid"
  borderColor="gray.100">
  <Heading  fontSize="xl"
  textTransform="uppercase"
  letterSpacing="wide"
  color="gray.500">{t('gettingThere.car.label')}</Heading>
  <Heading fontSize="sm">{t('gettingThere.subheading')}</Heading>
  {/* Ovo ide kao <ul> */}
  {renderContent(t.raw('gettingThere.roadConnections'))}
   {/* Borders ostatak kao lista po zemlji */}
    {renderBorders(t.raw('gettingThere.car.borders'))}
   {renderCompanies('gettingThere.car.companies')} 
</VStack>
  {/* Airplane */}
  <VStack alignItems="flex-start" w="full"
  bg="gray.100"
  p={{ base: 5, md: 6 }}
  rounded="xl"
  shadow="sm"
  border="1px solid"
  borderColor="gray.100">
    <Heading  fontSize="xl"
  textTransform="uppercase"
  letterSpacing="wide"
  color="gray.500">{t('gettingThere.airplane.label')}</Heading>
    {/* Prvi kao paragraf, ostali kao lista */}
    <Text fontSize="sm" fontWeight="600">{t.raw('gettingThere.airplane.items')[0]}</Text>
    {renderContent(t.raw('gettingThere.airplane.items').slice(1))}
  {renderCompanies('gettingThere.airplane.companies')}
  </VStack>

  {/* Bus */}
  <VStack alignItems="flex-start" w="full"
  bg="gray.100"
  p={{ base: 5, md: 6 }}
  rounded="xl"
  shadow="sm"
  border="1px solid"
  borderColor="gray.100">
    <Heading  fontSize="xl"
  textTransform="uppercase"
  letterSpacing="wide"
  color="gray.500">{t('gettingThere.bus.label')}</Heading>
    <Text>{t.raw('gettingThere.bus.items')[0]}</Text>
   {renderCompanies('gettingThere.bus.companies')}
  </VStack>

  {/* Railway */}
  <VStack alignItems="flex-start" w="full"
  bg="gray.100"
  p={{ base: 5, md: 6 }}
  rounded="xl"
  shadow="sm"
  border="1px solid"
  borderColor="gray.100">
    <Heading  fontSize="xl"
  textTransform="uppercase"
  letterSpacing="wide"
  color="gray.500">{t('gettingThere.railway.label')}</Heading>
    <Text>{t.raw('gettingThere.railway.items')[0]}</Text>
   {renderCompanies('gettingThere.railway.companies')}
  </VStack>
 </Grid>
  
 
 
</VStack>

{/* Public Transportation */}
<VStack alignItems="flex-start" gap="8">
  <Heading  textStyle="3xl">{t('publicTransportation.heading')}</Heading>

  {/* Local Bus */}
  <VStack alignItems="flex-start" gap="8">
    <VStack alignItems="flex-start">
    <Heading  fontSize="xl"
  textTransform="uppercase"
  letterSpacing="wide"
  color="gray.500">{t('publicTransportation.localBus.title')}</Heading>
    <Text>{t('publicTransportation.localBus.description')}</Text>
   
   </VStack>
    <VStack alignItems="flex-start">
 <Heading  fontSize="xl"
  textTransform="uppercase"
  letterSpacing="wide"
  color="gray.500">{t('publicTransportation.localBus.linesHeading')}</Heading>


    {renderContent(t.raw('publicTransportation.localBus.lines'))}
  {renderCompanies('publicTransportation.localBus.companies')}

</VStack>
  </VStack>

  {/* Taxi */}
  <VStack alignItems="flex-start">
    <Heading  fontSize="xl"
  textTransform="uppercase"
  letterSpacing="wide"
  color="gray.500">{t('publicTransportation.localTaxi.title')}</Heading>
    <Text>{t('publicTransportation.localTaxi.description')}</Text>
    {renderCompanies('publicTransportation.localTaxi.companies')}
  </VStack>

</VStack>
  {/* Tourist Tax */}
  <VStack alignItems="flex-start" gap="8">
        <Heading  textStyle="3xl">{t('registrationFee.title')}</Heading>
        <VStack alignItems="flex-start">
<Text>{t.raw('registrationFee.notes')[0]}</Text>
<Text>{t.raw('registrationFee.notes')[1]}</Text>
<Text>{t.raw('registrationFee.notes')[2]}</Text>
     
        {renderContent(t.raw('registrationFee.exemptions'))}
        
        <Text>{t('registrationFee.proof')}</Text>
          </VStack>
      </VStack>
    </VStack>
  </Box>  
    </>
  );
}
