'use client';
import { useState } from 'react';
import ApartmentCard from "./ApartmentCard"
import { Box, Grid, Button, Span} from '@chakra-ui/react';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { useLocale } from 'next-intl';

export default function ApartmentsGrid({filteredApartments, showDescription}){
const ITEMS_PER_PAGE = 6;

const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
const visibleApartments = filteredApartments.slice(0, visibleCount);
const labelsLoadMore = {
  en: {
    loadMore: "Load more",
    seeLess: "See less"
  },
  sr: {
    loadMore: "Prikaži više",
    seeLess: "Prikaži manje"
  }
};

const locale = useLocale();

return(

    <>
       <Grid
          templateColumns={{
            base: '1fr',
            sm: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
          }}
          gap={{base:"6", md:"8",lg:"12"}} gapY={{base:"10",md:"12"}} mt={{base:"6",md:"8",lg:"12"}} 
        >
          {visibleApartments.map((apt) => (
             <ApartmentCard key={apt.id} apt={apt}  showDescription={showDescription}/>
          ))}
        </Grid>
    {visibleCount < filteredApartments.length && (
  <Box textAlign="center" mt="6">
    <Button variant="ghost" color="var(--primary)" fontWeight="500"  transition="all .3 ease" _hover={{bg:"transparent", opacity:".7",}}
      onClick={() => setVisibleCount((prev) => prev + ITEMS_PER_PAGE)}
    >
    <Span>{locale === 'sr' ? 'Prikaži više' : 'Load more'}</Span> <MdOutlineKeyboardArrowDown />
    </Button>
  </Box>
)}
    
    </>
)

}