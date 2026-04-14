'use client'

import { useTranslations} from 'next-intl';
import { useLocale } from 'next-intl';
import { HStack, Button,  Span,Box, Heading, VStack ,Text,Grid,} from '@chakra-ui/react';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

import { FaRegCheckCircle } from "react-icons/fa";

export default function ApartmentFacilitiesCategory ({apartment, extraSectionData,expandedSections, sectionIcons, toggleSection }){
 const t = useTranslations ("apartmentsDescription");
 const locale = useLocale();
    const renderSection = (sectionKey) => {
    const sectionData = apartment[sectionKey];
    const extraInfo = extraSectionData[sectionKey];
  
    if ((!sectionData || sectionData.length === 0) && !extraInfo) return null;
  
    const isExpanded = expandedSections[sectionKey] || false;
    const visibleItems = isExpanded ? sectionData : sectionData?.slice(0, 3);
  
    return (
     
  <Box className="facility-container" id={`${sectionKey}-wrapper`} p={5} 
      borderRadius="sm"
      bg="white"
      boxShadow="md"
      _hover={{ boxShadow: "lg" }}
      transition="0.2s">
     {/* HEADER */}
      <HStack mb={3} align="center" >
        {sectionIcons[sectionKey] && (
          <Box color="var(--secondary)">
            {sectionIcons[sectionKey]({ width: 20, height: 20 })}
          </Box>
        )}

        <Heading fontWeight="bold" fontSize="md">
          {t(`pageSectionNames.${sectionKey}`)}
        </Heading>
      </HStack>
        {extraInfo && (
          <HStack mb={3} gap={3}>
            <Span className="icon-wrapper">
              {extraInfo.icon({ width: 18, height: 18 })}
            </Span>
            <Box>
               <Text fontWeight="semibold">{extraInfo.label}</Text>
            <Text fontSize="sm" color="gray.600">
              {extraInfo.additionalInfo?.[locale]}
            </Text>
            </Box>
          </HStack>
        )}
  {/* LIST */}
      <VStack align="flex-start" gap={2}>
        {visibleItems?.map((item, index) => (
          <HStack key={index} spacing={2}>
            <Box >
           
              <FaRegCheckCircle width="16" height="16" fill="var(--primary)" />
            </Box>

            <Text fontSize="sm" color="gray.700">
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Text>
          </HStack>
        ))}
      </VStack>
 {/* TOGGLE */}
      {sectionData?.length > 3 && (
        <HStack as={Button}
          variant="ghost"
          size="sm"
          mt={3}
          color="var(--primary)"
          bg="transparent"
          transition="all .4s easy"
          _hover ={{ bg:"transparent", opacity:".7"}}
          onClick={() => toggleSection(sectionKey)}
        >
          <Span>{isExpanded ? t('buttons.viewLess') : t('buttons.viewAll')}</Span>
          <Span>{isExpanded? <MdOutlineKeyboardArrowUp />:<MdOutlineKeyboardArrowDown /> } </Span>
        </HStack>
      )}

  </Box>
       
    );
  };
    return(
        <>
        
        <VStack className="facilities" id="facilities" alignItems="flex-start" gap="4">
        <Heading  className="section-name" mb="6">{t('pageSectionNames.facilities')}</Heading>
        <Grid  templateColumns={{sm:"repeat(2,1fr)", md:"repeat(2,1fr)"}} gap="4">
        {renderSection('parkingFacilities')}
        {renderSection('internet')}
</Grid>
        <Grid className="other-facilities " templateColumns={{sm:"repeat(2,1fr)", md:"repeat(3,1fr)"}} gap="4" id="other-facilities" w="full">
              {/* Render other sections */}
              {renderSection('kitchen')}
              {renderSection('bathroom')}
              {renderSection('bedroom')}
              {renderSection('balcony')}
              {renderSection('view')}
        
        {renderSection('mediaAndTechnology')}
        {renderSection('commonAreas')}
        {renderSection('safetyAndSecurity')}
        {renderSection('onDemand')}
        </Grid>
        </VStack>
        
        
        </>
    )
}