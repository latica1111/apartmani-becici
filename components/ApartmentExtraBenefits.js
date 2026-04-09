'use client'
import { HStack, Box, Heading, VStack ,Text,} from '@chakra-ui/react';
import { useTranslations } from 'next-intl';

import { FaRegCheckCircle } from "react-icons/fa";
import { TbPointFilled } from "react-icons/tb";
export default function ApartmentExtraBenefits ({apartment}){
const t = useTranslations("apartmentsDescription");

    return(


        <>
          <Box className="extra-benefits" id="extraBenefits" >
                <Heading className="section-name" mb="6">{t('pageSectionNames.extraBenefits')}</Heading>
                <VStack alignItems="flex-start" gap="4"  >
                  {apartment.reasonsToChoose.map((benefit, index) => {
                    const separatorIndex = benefit.search(/[:–]/);
                    if (separatorIndex === -1) return <Text key={index}>{benefit}</Text>;
        
                    const title = benefit.slice(0, separatorIndex + 1);
                    const description = benefit.slice(separatorIndex + 1).trim();
        
                    return (
                      <HStack key={index} alignItems={{base:"flex-start", sm:"center"}}  >
                       <Box> <FaRegCheckCircle color="var(--primary)"/></Box>
                        <Text wordBreak="break-word"><strong>{title}</strong>
                        <span> {description}</span></Text>
                      </HStack>
                    );
                  })}
                </VStack>
              </Box>
        
        
        
        </>
    )
}