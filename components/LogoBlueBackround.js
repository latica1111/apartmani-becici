
import NextImage from 'next/image';
import { useTranslations } from 'next-intl';
import { Box, VStack, Text, Heading,   AbsoluteCenter,} from "@chakra-ui/react"


export default function LogoBlueBackground (){


    return(
 <Box  position="relative" h="5rem" w="auto" aspectRatio="3/2">
 {/* IMAGE */}
  <NextImage
    src="/images/yard/logoplavapozadina.png"
    alt="Beautiful outdoor view"
    fill
    priority
    style={{ objectFit: 'cover' }}
    quality={70}
  />
  </Box>



    )
}