'use client'
import { useTranslations } from 'next-intl';
import { HStack, Tag , Span, Heading, VStack ,} from '@chakra-ui/react';
export default function ApartmentFacilities ({facilities, iconComponents}){
    const t = useTranslations('apartmentsDescription')
 
   

    return (
      <VStack className="facilities" alignItems="flex-start" gap="6">
        <Heading  className="section-name">{t('pageSectionNames.amenities')}</Heading>
        <HStack gapX="3" flexWrap="wrap" gapY="3">
          {facilities.map((facility, index) => {
            const label = t(`facilitiesData.${facility}.label`);
            const iconKey = t(`facilitiesData.${facility}.icon`);
            const IconFunc = iconComponents[iconKey];

            return (
              <Tag.Root key={index} 
        bg="rgba(0, 51, 102, 0.08)"
  color="var(--primary)"
  fontSize="xs"
 px={{base:"2", sm:"3"}}
 py={{base:"1", sm:"2"}}
  rounded="sm" 
        border="1px solid"
        borderColor="gray.100"
       
        gap={2}
        _hover={{ bg:"rgba(var(--primary-rgb), .1)" }}
        transition="all 0.2s">
                <Tag.StartElement><Span className="icon-wrapper">
                  {IconFunc && IconFunc({ width: 18, height: 18, fill:"var(--primary)" })}
                </Span></Tag.StartElement>
                 <Tag.Label fontSize={{base:"xs", sm:"sm"}} fontWeight="medium">{label}</Tag.Label>
              </Tag.Root>
            );
          })}
        </HStack>
      </VStack>
    );
  };

