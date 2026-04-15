import {setRequestLocale} from 'next-intl/server';
import {routing} from '@/i18n/routing';
import FacilityList from '@/components/FacilitiesList';

import ApartmentsList from '@/components/ApartmentsList';
import PointsOfInterest from '@/components/PointsOfInterest';

import { getTranslations } from 'next-intl/server';
import BookingScoreSection from '@/components/BookingScoreSection'
import Hero from '@/components/Hero';
import Gallery from '@/components/Gallery';
import { HStack,Badge, Span,Box, Heading, VStack ,Text,Grid,GridItem,Flex, Icon} from '@chakra-ui/react';
import Facil  from '@/components/Facil';
import ContactRhf from '@/components/ContactRhf';
import HomepagaReservation from '@/components/HomepageReservation';
export const revalidate = 3000; // full static, generiše se jednom u build-u
// app/[locale]/page.js
export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}


export async function generateMetadata({ params }) {
  const locale = await params.locale;
  const t = await getTranslations({locale, namespace:'meta.home'});
 
 
  return {
    title: t('title'),
    description:  t('description'),
    keywords:  t('keywords'),
    openGraph: {
      title:  t('title'),
      description:  t('description'),
      locale: locale,
      type: 'website',
      images:[  {
    url: '/yard/outdoors-view.jpg',
    width: 1200,
    height: 630,
    alt: 'Apartmani Bečići'
  }],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description:t('description'),
    },
    metadataBase:new URL('https://apartmani-becici.vercel.app/'), //https://apartmani-becici.vercel.app
    alternates: {
   canonical: locale === 'sr'
  ? 'https://apartmani-becici.vercel.app/sr'
  : 'https://apartmani-becici.vercel.app/en',
    languages: {
      en: '/',
      sr: '/sr',
    },
  },
 robots: {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
  },
},
  verification:{},
  };
}



// You now have access to the current locale
// e.g. /en-US/products -> `lang` is "en-US"
export default async function Page({ params }) {
 
  const  locale  = await params.locale;
// Enable static rendering
  setRequestLocale(locale);
  // Učitavanje prevoda i sadržaja na osnovu locale
  


  return  (
   <>
<Box>

       <Hero />
      {/* Tvoj sadržaj stranice */}
     
      <Facil />
      <ApartmentsList params={params} />
     {/*  <FacilityList/> */}
    
      <BookingScoreSection />
      <Gallery />
      <PointsOfInterest  />
      <HomepagaReservation />
     <Box className='google-map-wrapper'>
    
      <Heading className ="section-name" display="none"> {locale === 'sr' ? 'Lokacija' : 'Location'}</Heading>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2951.803513828584!2d18.864571776105223!3d42.282717471200094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134dd4709fb6168f%3A0xc0187b98b31208e1!2sApartmani%20Becici!5e0!3m2!1sen!2srs!4v1747845419966!5m2!1sen!2srs" width="600" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
       </Box>

    </Box>
   
   </>
  );
}
