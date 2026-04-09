
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
<Box display="inline-flex"  alignItems="center" gap="1"  fontSize="sm" color="var(--primary)" fontWeight="500"  _hover={{
    opacity: .7
  }} transition="all 0.3s ease" >
<Span>{`${t("homepageOffer.headerLinkText")}`}</Span>
<Span>
  <svg  fill="var(--primary)" width="18px" height="18px" viewBox="0 0 24 24"><path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"></path></svg>
  
  </Span>
  </Box>
    </Link>

</HStack>
        <Text color="gray.700"  >
          {t("offerIntroText")}
        </Text>
        </VStack>
        
        
        </>
    )
}