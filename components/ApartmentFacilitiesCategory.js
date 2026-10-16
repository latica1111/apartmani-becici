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
    
      bg="white"
     
      _hover={{ boxShadow: "lg" }}
      transition="0.2s">
     {/* HEADER */}
      <HStack mb={4} align="center" >
        {sectionIcons[sectionKey] && (
          <Box color="var(--secondary)" fill="var(--secondary)">
            {sectionIcons[sectionKey]({ width: 32, height: 32 })}
          </Box>
        )}

        <Heading fontWeight="300" fontSize="md" textTransform="uppercase" letterSpacing="0.3px" color="var(--secondary)">
          {t(`pageSectionNames.${sectionKey}`)}
        </Heading>
      </HStack>
        {extraInfo && (
          <HStack mb={3} gap={3}>
            <Span className="icon-wrapper" color="var(--secondary)" fill="var(--secondary)">
              {extraInfo.icon({ width: 32, height: 32 })}
            </Span>
            <Box>
               <Text fontWeight="300" textTransform="uppercase" letterSpacing="0.3px" fontSize="md" color="var(--secondary)">{extraInfo.label}</Text>
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
          size="xs" textTransform="uppercase" letterSpacing="1.2px" fontWeight="400"
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