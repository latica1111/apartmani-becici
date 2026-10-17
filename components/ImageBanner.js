import {

  Box,
  Flex,
 
  Button,
  Stack,Text,Group,Collapsible,
  Icon, InputGroup,Center,Heading,
  AbsoluteCenter,
  Image,Badge,
  VStack,
} from "@chakra-ui/react";
import { IoMdArrowForward } from "react-icons/io";
import NextImage from 'next/image';
export default function ImageBanner (){

    return(
        <>
       <Box maxW={{base:"7xl"}} py={{base:"16", lg:"24"}} w="full" px={{base:"4", lg:"6"}} position="relative" minH={{base:"lg"}} shadow="xs" h={{base:"auto", sm:"auto"}} mx="auto" display="flex" justifyContent="center">
       {/* IMAGE */}
  <NextImage
    src="/images/yard/outdoors-view.jpg"
    alt="Beautiful outdoor view"
    fill
    priority
      style={{ objectFit: "cover", zIndex: 0 }}
    quality={75}
  />
       
       
        <VStack gap={{base:"12"}} textAlign="center" position="relative" my="auto"
    zIndex={1} display="none">
<VStack gap={{base:"6"}}>
<Flex gap={{base:"2"}} fontSize="sm" fontWeight="medium" lineHeight="1.25rem" alignItems="center" justifyContent="center">
 We just released Chakra v4.0-rc <IoMdArrowForward  />
</Flex>
<VStack gap={{base:"4"}}>
 <Heading fontWeight="semibold" fontSize={{base:"4xl", lg:"6xl"}} lineHeight={{base:"2.75rem", lg:"4.5rem"}} letterSpacing="-0.025em" maxW="3xl">Launch and Deploy your AI app in minutes</Heading>   
 <Text fontSize="xl" color="fg.muted">Deploy your AI app — in seconds, not days.</Text>
</VStack>
</VStack>
<Stack direction={{base:"column", sm:"row"}} gap={{base:"3"}} w={{base:"full"}} justifyContent="center">
<Button variant="solid" px={{base:"6"}} type="button" fontWeight="medium" transitionDuration="moderate" colorPalette="teal" color="#fff" fontSize="md" gap={{base:"3"}}>Get started <IoMdArrowForward  /></Button>
<Button variant="solid"  px={{base:"6"}} type="button" fontWeight="medium" transitionDuration="moderate" color="#fff" fontSize="md"  gap={{base:"3"}}>Get started <IoMdArrowForward  /></Button>
</Stack>
        </VStack>

        </Box> 


        </>
    )
}