'use client'
import { useTranslations } from "next-intl";

import { HStack,  Span, Heading, VStack ,Text,} from '@chakra-ui/react';
export default function ApartmentDescription ({amenities}){
const t = useTranslations("apartmentsDescription");

    return(

        <>
           <VStack className="description" id="description" alignItems="flex-start" justifyContent="flex-start" 
            gap="6" 
           >
          <Heading  className="section-name">{t('pageSectionNames.description')}</Heading>
          <VStack gap="4" alignItems="flex-start" >
            {amenities.map((amenity, index) => {
              const trimmedAmenity = amenity.trim();
              const hasColon = trimmedAmenity.includes(':');
              const hasDash = trimmedAmenity.includes('–');
        
              if (hasColon) {
                const [title, description] = trimmedAmenity.split(':');
                return (
                  <HStack key={index} alignItems="flex-start">
                    
                    <Text>
                    <strong>{title.trim()}:</strong>
                    {description && <Span color="gray.700"> {description.trim()}</Span>}
                  </Text>
                  </HStack>
                );
              }
        
              if (hasDash) {
                const [title, description] = trimmedAmenity.split('–');
                return (
                  <HStack key={index} alignItems="flex-start">
                     
                     <Text>
                    <strong>{title.trim()} –</strong>
                    {description && <Span color="gray.700"> {description.trim()}</Span>}
                  </Text> 
                  </HStack>
                );
              }
        
              return <Text key={index}>{trimmedAmenity}</Text>;
            })}
          </VStack>
        </VStack>
        
        
        
        </>
    )
}