'use client'
import {
  Box,
  VStack,HStack,Stat ,
  Text, Avatar,Stack,
  Flex, defineStyle,RatingGroup,
  Button
} from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { IconQuotation, ArrowLeft, ArrowRight} from '@/components/Icons';
import { useTranslations } from 'next-intl';

export default function BookingMobileReviews ({reviews }){
 const t =  useTranslations('home.bookingScore'); 
const ringCss = defineStyle({
  outlineWidth: "2px",
  outlineColor: "var(--secondary)",
  outlineOffset: "2px",
  outlineStyle: "solid",
})

    return(
    <>
      <Box  display={{base:"block", md:"none"}} h="auto" w={{base:"full", sm:"md"}} mt={{base:"6", md:"8", lg:"12"}}>
              <Carousel
               autoHeight
                showArrows
                showStatus={false}
                showThumbs={false}
                renderArrowPrev={(onClickHandler, hasPrev, label) =>
                  hasPrev && (
                    <Button
                      type="button"
                      onClick={onClickHandler}
                      title={label}
                      className="custom-arrow custom-arrow-prev"
                      
                    >
                      <ArrowLeft />
                    </Button>
                  )
                }
                renderArrowNext={(onClickHandler, hasNext, label) =>
                  hasNext && (
                    <Button
                      type="button"
                      onClick={onClickHandler}
                      title={label}
                      className="custom-arrow custom-arrow-next"
                    >
                      <ArrowRight />
                    </Button>
                  )
                }
              >
                {reviews.map((review) => (
                  <Box
                                    key={review.id}
                                  //bg="#F5F1E8"
                                  rounded="sm"
                                  py="5" px="8" border="1px solid"
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
                    
                    
                    
                    
                    
                    
                                      <VStack  position="relative" mt="5" pt="5" borderTop="1px solid rgba(0,0,0,0.06)" alignItems="center" justifyContent="flex-start">
                                          <RatingGroup.Root count={5} defaultValue={5} size="sm" mb="3">
                      <RatingGroup.HiddenInput />
                      <RatingGroup.Control />
                    </RatingGroup.Root>
                                        <Text lineHeight="tall"
                color="gray.600" >{review.text}</Text>
                                         <Flex w="full" justifyContent="flex-end">
                                         
                                        <IconQuotation  width="32" height="32" fill="var(--emphasized-secondary-bg)" />
                                        </Flex>
                                       
                                      </VStack>
                                   
                                  </Box>
                ))}
              </Carousel>
            </Box>
    
    
    
    
    </>)
}