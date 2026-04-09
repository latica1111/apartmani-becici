import { getTranslations } from 'next-intl/server';



import HomepageOfferHeader from './HomepageOfferHeader';
import {Box,  VStack ,} from '@chakra-ui/react';
import ApartmentsGrid from './ApartmentsGrid';


export default async function ApartmentsList({params}) {
 const locale= params.locale;
  const t = await getTranslations({namespace: 'apartmentsDescription'});
   const apartmentsData = t.raw("apartments"); 
  const targetIDs = [5, 4, 6, 7, 8, 10];

  const filteredApartments = apartmentsData.filter(apartment =>
    targetIDs.includes(apartment.id)
  );
console.log(filteredApartments);
 
 




  return (
    <>
   

<Box as="section" shadow="inset" px={{base:"6", md:"8", lg:"12"}} py={{base:"12",md:"16",lg:"24"}}>
      <VStack   maxW="1200px" mx="auto">
<HomepageOfferHeader />

        {/* ✅ CHAKRA GRID umesto row-cols */}
       <ApartmentsGrid filteredApartments={filteredApartments}  showDescription={false} />
      </VStack>
    </Box>



    </>
  );
}
