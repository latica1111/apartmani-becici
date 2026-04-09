import {
  Box,
  
  Text,
} from '@chakra-ui/react';
import { getTranslations } from 'next-intl/server';

export default async function Copyright (){
 const t = await getTranslations('home.footer');
return(
    <>
       <Box
              textAlign="center"
              mt={8}
              pt={4}
              borderTop="1px solid"
              borderColor="gray.500"
            >
              <Text fontSize="xs" opacity={0.8}>
                {t('footerCopyright.copyrightInfo')}{' '}
                <Box as="i">{t('footerCopyright.author')}</Box>.
              </Text>
            </Box>
    
    </>
)

}