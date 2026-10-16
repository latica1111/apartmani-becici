
import { useTranslations } from 'next-intl';
import {Link} from '@/i18n/navigation';
import { HStack, Span,Box, Heading, VStack ,Text,} from '@chakra-ui/react';


export default function HomepageOfferHeader (){
const t = useTranslations('apartmentsDescription');

    return(
        <>
        <VStack>
        <HStack justifyContent="space-between" w="full" mb={{base:"4"}} >
        <Heading  className="section-name" asChild >
          <Span>{t("homepageOffer.heading")}</Span>
        </Heading>
  <Link asChild  href={`/${t("homepageOffer.headerLinkSlug")}`} >
<Box display="inline-flex"  alignItems="center" gap="1"  fontSize="xs" letterSpacing="1.2px" textTransform="uppercase" borderBottom="1px solid" color="var(--primary)" fontWeight="500" 
 _hover={{
    opacity: .7, borderColor:"rgba(var(--primary-rgb), 0.7)"
  }} transition="all 0.3s ease" >
<Span>{`${t("homepageOffer.headerLinkText")}`}</Span>

  </Box>
    </Link>

</HStack>
        <Text color="gray.700" fontSize="lg"  >
          {t("offerIntroText")}
        </Text>
        </VStack>
        
        
        </>
    )
}