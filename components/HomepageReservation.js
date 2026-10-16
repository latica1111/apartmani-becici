'use client'
import ContactRhf from "./ContactRhf"
import {
  Box,
  Grid,
  Heading,
  Text,VStack,HStack, Span, Stack
} from '@chakra-ui/react';
import { useTranslations } from "next-intl";

import { MdOutlinePhone } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
import {Link} from '@/i18n/navigation';
export default function HomepagaReservation (){
const dataStyles= {
input:{
bg:"transparent",


},
label:{

},
wrapper:{

w:"full",
mx:"auto"
},
button:{
borderRadius:"0"

},

}
const t = useTranslations("home.contactSection");

    return(
        <>
       <Box bg="gray.100" px={{base:"6",md:"8",lg:"12"}} py={{base:"12", md:"16", lg:"16"}} w="full" mx="auto" >
       <Grid maxW="1200px" mx="auto" w="full"
                    templateColumns={{
                      md: 'repeat(2, 1fr)', }}
                      gap={{base:"6",md:"8",lg:"20"}} justifyContent={{smOnly:"center"}} >

<VStack gap="6" alignItems="flex-start"   justifyContent="flex-start" maxW={{smOnly:"lg"}} mx="auto" w={{base:"full",sm:"75%", md:"full"}}>
          <Heading className="section-name" >{t("heading")}</Heading>
          <Text color="gray.600" fontSize="xl" >{t("cta")}</Text>
          <Box w="full"><ContactRhf layout="horizontal" dataStyles={dataStyles}/></Box> 
</VStack>


<VStack w="full" alignItems="flex-start" py={{md:"8"}} color="gray.700" fontSize="md" pt={{mdDown:"10"}} borderBlockStart="1px solid" borderColor="gray.200">
{t.raw("description").map((text, i) => (
  <Text key={i} >{text}</Text>
))}
  <VStack mt="8" mb="4"  py="6" alignItems="flex-start" borderTop="1px solid" borderBottom="1px solid" borderColor="gray.200">
  <Text display="none">{t("directContact")}</Text>
    <Heading textTransform="uppercase" fontWeight="400" fontSize="md" letterSpacing="0.02em">{t("contactUs")}</Heading>
   <HStack gap={3} as={Link} href="tel:+38267748403" >
     <Box   transition="all 0.4s ease"
    
    ><MdOutlinePhone size="24px" color="var(--secondary)" /></Box> 
    <Text  fontWeight="400"  color="var(--primary)" _hover={{ opacity:"0.7"}} transition="all .4s ease">+382 67 748 403</Text>
</HStack>
<HStack gap={3} as={Link} href="tel:+38267556512">
  <Box transition="all 0.4s ease"
  
    ><MdOutlinePhone  size="24px" color="var(--secondary)"  /></Box>
  <Text  fontWeight="400"  color="var(--primary)" _hover={{ opacity:"0.7"}} transition="all .4s ease">+382 67 556 512</Text>
</HStack>
<HStack gap={3}as={Link} href="mailto:apartmanibecici99@gmail.com">
  <Box  transition="all 0.4s ease"
 
    ><MdOutlineMail  size="24px" color="var(--secondary)" /></Box>
  <Text  fontWeight="400" color="var(--primary)" _hover={{ opacity:"0.7"}} transition="all .4s ease">apartmanibecici99@gmail.com</Text>
</HStack>

</VStack>

<VStack alignItems="flex-start" mb="4"  pb="6" borderBottom="1px solid" borderColor="gray.200">
    <Heading textTransform="uppercase" fontWeight="400" fontSize="md" letterSpacing="0.02em">{t("addressSection.heading")}</Heading>
    <HStack align="flex-start" gap={3}>
  <Box
  transition="all 0.4s ease"
  
  ><MdOutlineLocationOn size="24px" color="var(--secondary)" /></Box>
  <VStack align="flex-start" gap={0}  _hover={{ opacity:"0.7"}} transition="all .4s ease">
    <Link href="https://www.google.com/maps/place/Apartmani+Becici/@42.2827175,18.8671467,17z/data=!3m1!4b1!4m6!3m5!1s0x134dd4709fb6168f:0xc0187b98b31208e1!8m2!3d42.2827175!4d18.8671467!16s%2Fg%2F11c6w0dz07?hl=en&entry=ttu&g_ep=EgoyMDI2MDQwNS4wIKXMDSoASAFQAw%3D%3D" fontSize="sm"  target="_blank" rel="noopener noreferrer" display="flex" flexDirection="column">
    <Span display="block" color="var(--primary)" >{t("addressSection.street")}</Span>
    <Span display="block"color="var(--primary)">{t("addressSection.city")}</Span>
    </Link>
   
  </VStack>
</HStack>
</VStack>
<VStack alignItems="flex-start" mb="4"  pb="6" borderBottom="1px solid" borderColor="gray.200">
 <Heading textTransform="uppercase" fontWeight="400" fontSize="md" letterSpacing="0.02em">{t("workingHours.heading")}</Heading>
 <Stack flexDirection="row"><AiOutlineClockCircle size="24px" color="var(--secondary)" />
<Text>{t("workingHours.value")}</Text>
</Stack>
</VStack>


<VStack alignItems="flex-start"  mb="4">
    <Heading textTransform="uppercase" fontWeight="400" fontSize="md" letterSpacing="0.02em">{t("socialSection.heading")}</Heading>
    
  <VStack gap={3}>
                <HStack   as={Link}
                 href="https://facebook.com/"
target="_blank"
                  display="flex"
                  alignItems="center"
                  gap={3}
                  className="icon-wrapper"
                >
              <Box
   transition="all 0.4s ease"
   
    
  >  <AiOutlineFacebook size="24px" fill="var(--secondary)"/> </Box>
                  <Text fontSize="md" color="var(--primary)" _hover={{ opacity:"0.7"}} transition="all .4s ease">{t("socialSection.facebook")}</Text>
                </HStack>

                <HStack as={Link} href="https://instagram.com/"
target="_blank"
               
                  display="flex"
                  alignItems="center"
                  gap={3}
                  className="icon-wrapper"
                >
                <Box
   transition="all 0.4s ease"
 
  > <AiOutlineInstagram size="24px" fill="var(--secondary) !important" /></Box>
                  <Text fontSize="md" color="var(--primary)"  _hover={{ opacity:"0.7"}} transition="all .4s ease">
                    {t("socialSection.instagram")}
                  </Text>
                </HStack>
              </VStack>


</VStack>
  </VStack>

        </Grid>
        </Box>
        </>
    )
}