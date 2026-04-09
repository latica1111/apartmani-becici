'use client'
import ContactRhf from "./ContactRhf"
import {
  Box,
  Grid,
  Heading,
  Text,VStack,HStack, Span
} from '@chakra-ui/react';
import { useTranslations } from "next-intl";

import { MdOutlinePhone } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";
import {Link} from '@/i18n/navigation';
export default function HomepagaReservation (){
const dataStyles= {
input:{
bg:"#fff",
boxShadow:"sm",

},
label:{
color:"gray.700",
fontWeight:"500"
},
wrapper:{

w:"full",
mx:"auto"
},
button:{
 h:"11",
 minW:"11" ,
 fontSize:"md" ,
 px:"5",
 gap:"2"

},

}
const t = useTranslations("home.contactSection");

    return(
        <>
       <Box bg="rgba(var(--primary-rgb),.05)" px={{base:"6",md:"8",lg:"12"}} py={{base:"12", md:"16", lg:"24"}} w="full" mx="auto" >
       <Grid maxW="1200px" mx="auto" w="full"
                    templateColumns={{
                      md: 'repeat(2, 1fr)', }}
                      gap={{base:"6",md:"8",lg:"8"}} justifyContent={{smOnly:"center"}} >

<VStack gap="6" alignItems="flex-start" bg={{sm:"#fff"}} shadow={{md:"lg"}} px={{sm:"6",lg:"12"}} py={{base:"6",sm:"8",lg:"10"}}  rounded="xl"   justifyContent="flex-start" maxW={{smOnly:"lg"}} mx="auto" w={{base:"full",sm:"75%", md:"full"}}>
          <Heading className="section-name" >{t("heading")}</Heading>
          <Text color="gray.600" fontSize="md" >{t("cta")}</Text>
          <Box w="full"><ContactRhf layout="horizontal" dataStyles={dataStyles}/></Box> 
</VStack>


<VStack w="full" alignItems="flex-start" py={{md:"8"}} color="gray.700" fontSize="sm" pt={{mdDown:"10"}} borderBlockStart="1px solid" borderColor="gray.200">
{t.raw("description").map((text, i) => (
  <Text key={i} >{text}</Text>
))}
  <VStack mt="5" mb="8" borderBottom="3px solid" borderColor="rgba(var(--primary-rgb),.2)" pb="8" alignItems="flex-start">
  <Text display="none">{t("directContact")}</Text>
    <Heading>{t("contactUs")}</Heading>
   <HStack gap={3} as={Link} href="tel:+38267748403" >
     <Box bg="rgba(var(--primary-rgb),0.1)"  transition="all 0.4s ease"
      _hover={{bg: "rgba(var(--primary-rgb),0.2)",}} p="2" border="1px solid" borderColor="rgba(var(--primary-rgb),0.22)"
    borderRadius="sm"><MdOutlinePhone width={18} height={18} /></Box> 
    <Text  fontWeight="500">+382 67 748 403</Text>
</HStack>
<HStack gap={3} as={Link} href="tel:+38267556512">
  <Box p="2" transition="all 0.4s ease"
    bg="rgba(var(--primary-rgb),0.1)" _hover={{
    bg: "rgba(var(--primary-rgb),0.2)",
   
  }} border="1px solid" borderColor="rgba(var(--primary-rgb),0.22)"
    borderRadius="sm" ><MdOutlinePhone width={18} height={18} /></Box>
  <Text  fontWeight="500">+382 67 556 512</Text>
</HStack>
<HStack gap={3}as={Link} href="mailto:apartmanibecici99@gmail.com">
  <Box p="2" transition="all 0.4s ease"
    bg="rgba(var(--primary-rgb),0.1)" _hover={{
    bg: "rgba(var(--primary-rgb),0.2)",
   
  }} border="1px solid" borderColor="rgba(var(--primary-rgb),0.22)"
    borderRadius="sm" ><MdOutlineMail width={18} height={18} /></Box>
  <Text  fontWeight="500">apartmanibecici99@gmail.com</Text>
</HStack>

</VStack>

<VStack alignItems="flex-start" mb="8" borderBottom="3px solid" borderColor="rgba(var(--primary-rgb),.2)" pb="8">
    <Heading>{t("addressSection.heading")}</Heading>
    <HStack align="flex-start" gap={3}>
  <Box
    p="2" transition="all 0.4s ease"
    bg="rgba(var(--primary-rgb),0.1)" _hover={{
    bg: "rgba(var(--primary-rgb),0.2)",
   
  }}
    borderRadius="sm" border="1px solid" borderColor="rgba(var(--primary-rgb),0.22)"
  ><MdOutlineLocationOn width={18} height={18} /></Box>
  <VStack align="flex-start" gap={0}>
    <Link href="https://www.google.com/maps/place/Apartmani+Becici/@42.2827175,18.8671467,17z/data=!3m1!4b1!4m6!3m5!1s0x134dd4709fb6168f:0xc0187b98b31208e1!8m2!3d42.2827175!4d18.8671467!16s%2Fg%2F11c6w0dz07?hl=en&entry=ttu&g_ep=EgoyMDI2MDQwNS4wIKXMDSoASAFQAw%3D%3D" fontSize="sm"  className="footer-link" target="_blank" rel="noopener noreferrer" display="flex" flexDirection="column">
    <Span display="block">{t("addressSection.street")}</Span>
    <Span display="block">{t("addressSection.city")}</Span>
    </Link>
   
  </VStack>
</HStack>
</VStack>
<VStack alignItems="flex-start" mb="8" borderBottom="3px solid" borderColor="rgba(var(--primary-rgb),.2)" pb="8">
 <Heading>{t("workingHours.heading")}</Heading>
<Text>{t("workingHours.value")}</Text>
</VStack>


<VStack alignItems="flex-start"  mb="6">
    <Heading>{t("socialSection.heading")}</Heading>
    
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
    p="2" transition="all 0.4s ease"
    bg="rgba(var(--primary-rgb),0.1)" _hover={{
    bg: "rgba(var(--primary-rgb),0.2)",
   
  }} border="1px solid" borderColor="rgba(var(--primary-rgb),0.22)"
    borderRadius="sm" 
  >  <AiOutlineFacebook width={18} height={18} fill="var(--primary)"/> </Box>
                  <Text fontSize="sm">{t("socialSection.facebook")}</Text>
                </HStack>

                <HStack as={Link} href="https://instagram.com/"
target="_blank"
               
                  display="flex"
                  alignItems="center"
                  gap={3}
                  className="icon-wrapper"
                >
                <Box
    p="2" transition="all 0.4s ease"
    bg="rgba(var(--primary-rgb),0.1)" _hover={{
    bg: "rgba(var(--primary-rgb),0.2)",
   
  }}
    borderRadius="sm" border="1px solid" borderColor="rgba(var(--primary-rgb),0.22)"
  > <AiOutlineInstagram width={18} height={18} fill="var(--primary) !important" /></Box>
                  <Text fontSize="sm">
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