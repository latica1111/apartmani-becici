import {
  Box,
  Grid,VStack,HStack,
  Text, Avatar,Stack,
  Flex, defineStyle,RatingGroup,
 
} from '@chakra-ui/react';
import { IconQuotation, } from '@/components/Icons';
import { getTranslations } from 'next-intl/server';

const ringCss = defineStyle({
  outlineWidth: "2px",
  outlineColor: "var(--secondary)",
  outlineOffset: "2px",
  outlineStyle: "solid",
})


export default async function BookingDesktopReviews ({reviews }){
  const t =  await getTranslations({ namespace: 'home.bookingScore' });
    return(
    <>
     <Box  display={{base:"none", md:"block"}}>
              <Grid
                templateColumns={{
                  base: '1fr',
                  md: 'repeat(2, 1fr)',
                  lg: 'repeat(3, 1fr)',
                }}
                 gap={{base:"6",md:"8",lg:"12"}}  py={{base:"6",md:"8",lg:"12"}} 
              
              >
                {reviews.map((review) => (
                  <Box
                    key={review.id}
                  //bg="#F5F1E8"
                  rounded="sm"
                  py="5" px="8" shadow="md"border="1px solid"
borderColor="rgba(0,0,0,0.05)"
transition="all 0.2s ease"
_hover={{
  transform: "translateY(-4px)",
  shadow: "lg"
}}
                  >
                    
                     
     <HStack  gap="4">
              <Avatar.Root bg="var(--primary)" color="#fff" css={ringCss}>
                <Avatar.Fallback name={review.name.charAt(0).toUpperCase()}/>
                <Avatar.Image  />
              </Avatar.Root>
              <Stack gap="0">
                <Text fontWeight="medium" mb="0" color="var(--primary)" letterSpacing="wide"> {review.name}</Text>
                <Text color="fg.muted" textStyle="sm">
                 {review.country}
                </Text>
              </Stack>
            </HStack>
    
    
    
    
    
    
                      <VStack  position="relative" mt="5" pt="5" borderTop="1px solid rgba(0,0,0,0.06)" alignItems="flex-start">
                          <RatingGroup.Root count={5} defaultValue={5} size="sm" mb="3">
      <RatingGroup.HiddenInput />
      <RatingGroup.Control />
    </RatingGroup.Root>
                        <Text lineHeight="tall"
color="gray.600" >{review.text}</Text>
                         <Flex w="full" justifyContent="flex-end">
                     
                       <IconQuotation  width="32" height="32" fill="var(--emphasized-secondary-bg)"/>
                       </Flex>
                       
                      </VStack>
                   
                  </Box>
                ))}
              </Grid>
            </Box>
    
    
    
    
    </>)
}