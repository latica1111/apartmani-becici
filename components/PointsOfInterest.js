import { getTranslations } from 'next-intl/server';
import LocationBlock from './LocationBlock';

import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react';
const PointsOfInterest = async ({params}) => {
  
  const t =  await getTranslations({ namespace: "home.pointsOfInterest" });
console.log(params);
  return (
    <>
   

 <Box as="section" className="location" shadow="inset"  px={{base:"6", md:"8", lg:"12"}} py={{base:"12",md:"16",lg:"24"}} >
     
        <Box className="inner" maxW="1200px" mx="auto">
          <Box className="points-of-interest">
            <Heading
             mb={{base:"4"}} 
              className="section-name"
            >
              {t("heading")}
            </Heading>
<Text maxW="xl" color="gray.700">  {t("introText")}</Text>
            <SimpleGrid
              columns={{ base: 1, sm: 2, lg: 3 }}
               gap={{base:"6",md:"8",lg:"12"}}  mt={{base:"6",md:"8",lg:"12"}}  alignItems="flex-start"  
            >
            
         <LocationBlock sectionKey="nearby" />
        <LocationBlock sectionKey="beachesInTheNeighborhood" />
        <LocationBlock sectionKey="publicTransit" />
        <LocationBlock sectionKey="restaurantsAndCaffesNearby" />
        <LocationBlock sectionKey="attractions" />
        <LocationBlock sectionKey="closestAirports" />
        <LocationBlock sectionKey="shopping" />
        <LocationBlock sectionKey="nightLife" />
        <LocationBlock sectionKey="health" />
            </SimpleGrid>
          </Box>
        </Box>
    
    </Box>

     </>
  );
} 

export default PointsOfInterest;
