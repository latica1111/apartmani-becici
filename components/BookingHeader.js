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
        <Flex   fontSize="xs" letterSpacing="1.2px" textTransform="uppercase" borderBottom="1px solid" color="var(--primary)" fontWeight="400" ml="auto" textAlign="end"
  position="relative" alignItems={{base:"flex-end",sm:"center"}} justifyContent="center"
  _hover={{
    opacity: .7, borderColor:"rgba(var(--primary-rgb), 0.7)"
  }} transition="all 0.3s ease" >
          <Link
          
            href="https://www.booking.com/hotel/me/apartmani-becici-becici.sr.html?lang=sr&soz=1&lang_changed=1&activeTab=main&chal_t=1774368085587&force_referer=#tab-main"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("linkToAllReviews")}
          </Link>
         
        </Flex>
</HStack>
<Text fontSize="lg" color="gray.700" textAlign="left" me="auto"  maxW="lg" mb={{base:"4",md:"4",lg:"6"}}>  {t('introText')}</Text>



</>


)}