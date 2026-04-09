import Lightbox from 'yet-another-react-lightbox'; // Dodaj ovo
import 'yet-another-react-lightbox/styles.css'; // Dodaj ovo
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/plugins/counter.css";
import { Box, } from '@chakra-ui/react';
export default function ApartmentLightbox ({open, setOpen,apartment,currentIndex}){
    return(

        <>
        <Box>
        <Lightbox
  open={open}
  close={() => setOpen(false)}
  slides={apartment.photos.map((photo) => ({
    src: photo.photoURL,
    alt: photo.photoAlt || apartment.name,
  }))}
  transition="zoom"   
  index={currentIndex}
  plugins={[Counter]}
  counter={{ container: { style: { top: 0, left: 0 } } }}
/>
  </Box>      
        
        </>
    )
}