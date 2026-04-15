'use client'
import Breadcrumbs from '@/components/Breadcrumbs';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { HStack, Box, Heading, VStack ,Text,Grid,GridItem,} from '@chakra-ui/react';

import {Link} from '@/i18n/navigation';
import {
 
  IconKitchen,
  IconBathroom,
  IconBedroom,
  IconBalcony,
  IconGardenView,
  IconMountainView,
  IconYard,
  IconSeaView,
  IconAirConditioning,
  IconAvailableLanguages,
  IconMediaAndTechnology,
  IconSafety,IconPhoto,
  IconCommonAreas,
  IconTv,
  IconFreeWifi,
  IconFreeParking,IconSunLounger,OnDemandIcon,
  IconSafe
} from '@/components/Icons';



import ApartmentLightbox from '@/components/ApartmentLightbox';
import ApartmentGallery from '@/components/ApartmentGallery';
import ApartmentFacilities from '@/components/ApartmentFacilities';
import ApartmentDescription from '@/components/ApartmentDescription';
import ApartmentExtraBenefits from '@/components/ApartmentExtraBenefits';
import ApartmentFacilitiesCategory from '@/components/ApartmentFacilitiesCategory';
import ApartmentRelated from '@/components/ApartmentRelated';
import ContactRhf from './ContactRhf';
import HeroImage from './HeroImage';

export default   function ApartmentPageClient({layout}) {
  const { locale, type, slug } = useParams();
  console.log('Server params.type:', type);
   console.log('Server locale:', locale);
 
 
  const t = useTranslations('apartmentsDescription');
  const tContact = useTranslations("home.contactSection");
  const apartments = t.raw("apartments");
  // === Lightbox States ===
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

 
  const apartment = apartments.find((apt) => apt.pageURL === slug);

  if (!apartment) {
    return <Text>{t('apartmentNotFound')}</Text>;
  }
  const extraSectionData = {
    parkingFacilities: {
      icon: IconFreeParking,
      label: 'Parking',
      additionalInfo: {en :'Free private parking is possible on site (reservation is needed).',
  sr: 'Besplatan parking u okviru objekta (rezervacija je obavezna).'}
    },
    internet: {
      icon: IconFreeWifi,
      label: 'Internet',
      additionalInfo: {en:'WiFi is available in the rooms and is free of charge.',
        sr:"Bežični internet dostupan u sobama besplatno."


      }
    }
  };
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionKey) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
    }));
  };
  

 const iconComponents = {
  IconKitchen,
  IconBathroom,
  IconBalcony,
  IconBedroom,
  IconGardenView,
  IconMountainView,
  IconAirConditioning,
  IconTv,
  IconFreeWifi,
  IconFreeParking,
  IconSafe,
  IconSeaView,
  IconYard,
  IconAvailableLanguages,
  IconMediaAndTechnology,
  IconSafety,
  IconCommonAreas,
  IconSunLounger,
  OnDemandIcon,
  IconPhoto
};
  const sectionIcons = {
    kitchen: IconKitchen,
    bathroom: IconBathroom,
    balcony: IconBalcony,
    bedroom:IconBedroom,
    view: IconGardenView, // ili druga ikona ako imaš više opcija za view
    bedroom: IconBedroom, // primer – možeš staviti neku drugu ako imaš bolju
    onDemand: OnDemandIcon,
    mediaAndTechnology: IconMediaAndTechnology,
    commonAreas:IconCommonAreas,
    safetyAndSecurity :IconSafety
    // primer
  };
  

 
// Find similar apartments based on guestsNumber (excluding the current apartment)
const relatedApartments = apartments.filter(
  (apt) => apt.guestsNumber === apartment.guestsNumber && apt.pageURL !== apartment.pageURL
);
console.log("CURRENT:", apartment);
console.log("ALL:", apartments);
console.log("RELATED:", relatedApartments);

const [activeSection, setActiveSection] = useState('overview');

 

  // Function to detect scroll position and set active section
  const handleScroll = () => {
    const sections = ['overview', 'description', 'extraBenefits', 'facilities', 'relatedRooms'];
    let currentSection = '';
  
    if (window.scrollY === 0) {
      currentSection = 'overview'; // 👈 Dodato!
    } else {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element && element.getBoundingClientRect().top <= window.innerHeight / 2) {
          currentSection = section;
        }
      });
    }
  
    setActiveSection(currentSection);
  };
  
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setActiveSection('overview');
  }, [slug]);

 const dataStyles= {
input:{
bg:"#fff",
boxShadow:"sm",

},
label:{

},
wrapper:{

w:"full",
p:{sm:"4"},
shadow:{sm:"md", md:"none"},
pb:"8"

},
button:{
 h:"11",
 minW:"11" ,
 fontSize:"md" ,
 px:"5",

},
errorText:{
  ps:"0"
}
}

 

  return (
  <>
<HeroImage
  photoURL={apartment.photos[0].photoURL}
  photoPosition={apartment.photos[0].photoPosition}
  label={apartment.name}
/>
<Box px={{base:"6", md:"8", lg:"12"}} py={{base:"12", md:"16", lg:"24"}}>
  <VStack as="section" w="full" alignItems="flex-start" maxW="1200px" mx="auto">
      <Breadcrumbs />
{/* Navigation */}
<Box  position="relative" w="full"  //
  zIndex="1000"
  bg="white"
  boxShadow="sm"
  
  borderColor="gray.100" mb="10">
        <HStack className="nav-list " gap="0" overflowX="auto"
    whiteSpace="nowrap">
          {['overview', 'description', 'extraBenefits', 'facilities', 'relatedRooms'].map((section) => (
            <Box key={section} className={`nav-item ${activeSection === section ? 'active' : ''}`} display="flex" alignItems="center" justifyContent="center" w="full" h={{base:"2.5rem",sm:"3rem"}} flex="1" cursor="pointer"
        borderBottom={activeSection === section ? "2px solid" : "2px solid transparent"}
        borderColor={activeSection === section ? "var(--secondary)" : "transparent"}
        bg={activeSection === section ? "rgba(var(--secondary-rgb),.2)" : "transparent" }
        transition="all 0.2s"
        _hover={{ bg: "rgba(var(--secondary-rgb),.1)" }} textStyle={{base:"xs", md:"sm"}} px={{smDown:"3"}}>
            <Link href={`#${section}`}
            onClick={() => setActiveSection(section)} >{t(`pageSectionNames.${section}`)}</Link>

            </Box>
          ))}
        </HStack>
       {/* left fade */}
  <Box
    position="absolute"
    left="0"
    top="0"
    bottom="0"
    w="20px"
  
    pointerEvents="none"
  />

  {/* right fade */}
  <Box
    position="absolute"
    right="0"
    top="0"
    bottom="0"
    w="20px"
    
    bgGradient="to-l" gradientFrom="white" gradientTo="transparent"
    pointerEvents="none"
  />   

</Box>
 
 {/* Intro Content */}
      <VStack className="overview " id="overview" alignItems="flex-start" mb="10" gap="6">
        <Heading className="section-name">{t('pageSectionNames.introContent')}</Heading>
       <VStack align="flex-start" gap={2}>
    {apartment.introContent.map((content, index) => (
      <Text color="gray.600" key={index}>{content}</Text>
    ))}
  </VStack>
      </VStack>

   {/* Gallery Section */}

<ApartmentGallery apartment={apartment} setOpen={setOpen} setCurrentIndex={setCurrentIndex}  />
{/* Lightbox */}

<ApartmentLightbox open={open} setOpen={setOpen} apartment={apartment} currentIndex={currentIndex} />


<Grid templateColumns={{lg:"9fr 3fr"}} gap={10} my={10}>
<VStack className ="main-content " gap={10} alignItems="flex-start">



      {/* Render the facilities section */}
    <ApartmentFacilities facilities={apartment.facilities} iconComponents={iconComponents} />

      {/* Amenities */}
   <ApartmentDescription amenities={apartment.amenities} />

      {/* Extra Benefits */}
  <ApartmentExtraBenefits apartment={apartment}  />



<ApartmentFacilitiesCategory apartment={apartment} extraSectionData={extraSectionData} expandedSections={expandedSections} toggleSection={toggleSection} sectionIcons={sectionIcons} />
{/* Related Apartments Section */}
<ApartmentRelated relatedApartments={relatedApartments} />

</VStack>
<GridItem className="aside">
<VStack gap="6" alignItems="flex-start" px={{base:"3",sm:"6",md:0}} py={{base:"6",sm:"8"}} bg="rgba(var(--secondary-rgb),.055)" shadow={{md:"xs"}}>
          <Heading className="section-name" ms={{md:"4"}}>{tContact("heading")}</Heading>
          <Text color="gray.600" fontSize="md" px={{md:"4"}} >{tContact("cta")}</Text>
          <Box className="contact-form " w={{base:"full",mdOnly:"75%"}} >
  <ContactRhf layout={layout} dataStyles={dataStyles}/>
  </Box>
</VStack>

</GridItem>
</Grid>

     
    </VStack>
</Box>
    </>
  );
}


