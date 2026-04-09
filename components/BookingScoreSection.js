import { getTranslations } from 'next-intl/server';
import {
  Box,
  VStack,
} from '@chakra-ui/react';
import BookingHeader from './BookingHeader'
import BookingGeneralScore from './BookingGeneralScore'
import BookingCategoryScores  from './BookingCategoryScores'
import BookingReviews from './BookingReviews';

export default async function BookingScoreSection() {
  

const t =  await getTranslations({ namespace: 'home.bookingScore' });
const categories = t.raw('categories') || {};

  return (
    <>
   
 <Box as="section" shadow="inset" px={{base:"6", md:"8", lg:"12"}} py={{base:"12",md:"16",lg:"24"}} >
 <VStack  maxW="1200px" mx="auto" gap="3"> 
 <BookingHeader  />
{/* GENERAL SCORE */}
 <BookingGeneralScore />
{/* CATEGORY SCORES */}
<BookingCategoryScores categories={categories}/>
 <BookingReviews categories={categories} />
</VStack>
</Box>
    </>
  )
}
