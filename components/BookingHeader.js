import Link from "next/link"
import { getTranslations } from 'next-intl/server';
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import {
  Box,
 Text,
  Heading,HStack,
  Span, 
  Flex, 
} from '@chakra-ui/react';
export default async function BookingHeader(){
const t =  await getTranslations({ namespace: 'home.bookingScore' });

return(
<>
<HStack w="full" justifyContent="space-between" mb={{base:"4",md:"4",lg:"6"}} alignItems="center" >
        {/* HEADING */}
        <Box className="heading-wrapper">
          <Heading className="section-name" >
            {t('sectionHeading')}
          </Heading>
        </Box>
    {/* ALL REVIEWS LINK */}
        <Flex  fontSize="sm" color="var(--primary)" fontWeight="500" ml="auto" textAlign="end"
  position="relative" alignItems={{base:"flex-end",sm:"center"}} justifyContent="center"
  _hover={{
    opacity: .7
  }} transition="all 0.3s ease" >
          <Link
          
            href="https://www.booking.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("linkToAllReviews")}
          </Link>
          <Span>
  <svg  fill="var(--primary)" width="18px" height="18px" viewBox="0 0 24 24"><path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"></path></svg>
  
  </Span>
        </Flex>
</HStack>
<Text color="gray.700" textAlign="left" me="auto"  maxW="lg" mb={{base:"4",md:"4",lg:"6"}}>  {t('introText')}</Text>



</>


)}