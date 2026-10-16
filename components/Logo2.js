
import NextImage from 'next/image';
import { useTranslations } from 'next-intl';
import { Box, VStack, Text, Heading,   AbsoluteCenter,} from "@chakra-ui/react"


export default function Logo2 (){


    return(
 <Box  position="relative" h={{base:"3rem",md:"5rem"}} w="auto" aspectRatio="3/2">
 {/* IMAGE */}
  <NextImage
    src="/images/yard/logoelegant.png"
    alt="Beautiful outdoor view"
    fill
    priority
    style={{ objectFit: 'cover' }}
    quality={70}
  />
  </Box>



    )
}