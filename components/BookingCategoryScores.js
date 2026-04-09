'use client';
import  { useState } from 'react'
import {
  Box,
  Grid, Progress,
 Span, 
  Button
} from '@chakra-ui/react';
import { useTranslations } from 'next-intl';

export default function BookingCategoryScores({ categories}) {
const [showAllCategories, setShowAllCategories] = useState(false)
const t =  useTranslations('home.bookingScore');

  const items = categories.items || [];

return(
    <>
     <Grid
              templateColumns={{
                base: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
              }}
              gap={{base:"6",md:"8",lg:"12"}} 
             w="full"  mt={{base:"6", md:"8", lg:"12"}}
            >
              {items.map((item, index) => {
                const percentage = parseFloat(item.note) * 10;
                const shouldHideOnMobile = !showAllCategories && index >= 3;
    
                return (
                  <Box
                    key={index}
 p="4"
  rounded="lg"
  bg="#ffffff"
  border="1px solid rgba(0,0,0,0.05)"
  transition="all 0.2s"
  _hover={{
    transform: "translateY(-3px)",
    shadow: "sm"
  }}

                   display={
      shouldHideOnMobile
        ? { base: 'none', md: 'block' }
        : 'block'
    }
    
                  >
                   
    
                    <Progress.Root w="full">
          <Progress.Label mb="2" justifyContent="space-between" w="full" color="var(--on-subtle-primary-bg)">
            {item.label}
            <Span opacity=".6" fontWeight="700">{item.note}</Span>
          </Progress.Label>
          <Progress.Track rounded="full" className="subtle-primary-bg">
            <Progress.Range   style={{ width: `${percentage}%` }} bg="rgba(0, 51, 102, 0.8)" rounded="md"/>
          </Progress.Track>
        </Progress.Root>
                  </Box>
                );
              })}
            </Grid>
       <Box className="more-ratings-wrapper" display={{md:"none"}} w="full">
              <Button
               variant="ghost"
 
  color="var(--primary)" 
 
             
                onClick={() => setShowAllCategories(!showAllCategories)}
              >
                {showAllCategories ? t('viewLess') : t('viewMore')}
              </Button>
            </Box>
    
    
    </>
)



}
