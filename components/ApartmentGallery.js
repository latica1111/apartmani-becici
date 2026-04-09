import { HStack, Image,  Span,Box, Text,Grid,GridItem,} from '@chakra-ui/react';
import {
 IconPhoto,
  
} from '@/components/Icons';



export default function ApartmentGallery ({setCurrentIndex, setOpen, apartment}){

return(
    <>
   <Box className="photo-gallery" position="relative">
    <Grid
  templateColumns={{
    base: "1fr 1fr",   // 2 po redu na mobilnom
    sm: "repeat(3, 1fr)",
    md: "repeat(5, 1fr)", // 4 po redu
  }}
  gap={2}
>
  {apartment.photos.map((photo, index) => (
    <GridItem key={index}>
      <Box
        w="100%"
        aspectRatio={16/9} // 🔥 ključ za ISTU visinu
        cursor="pointer"
        overflow="hidden"
        borderRadius="sm"
        bg="bg.subtle"
        onClick={() => {
          setCurrentIndex(index);
          setOpen(true);
        }}
      >
        <Image
          src={photo.photoURL}
          alt={photo.photoAlt || apartment.name}
          w="100%"
          h="100%"
          objectFit="cover"
          objectPosition={photo.photoPosition || "center"}
          transition="all 0.3s ease-in-out"
          _hover={{ filter: "brightness(0.8)" }}
        />
      </Box>
    </GridItem>
  ))}
</Grid>
   
     {/* Clickable span with Icon and image count */}
     <Box  position="absolute" right="12px" bottom="12px" zIndex="200" p="1" color="#fff" bg="rgba(12,14,28,0.56)" w="auto" display="none">
       <HStack
         onClick={() => {
           setCurrentIndex(0);
           setOpen(true);
         }}
         style={{ cursor: 'pointer' }}
        
       >
         <Span className="icon-wrapper"> <IconPhoto  width="18" height="18" fill= '#fff' /> </Span>
         <Text>{apartment.photos.length} {apartment.photos.length === 1 ? 'photo' : 'photos'}</Text>
       </HStack>
     </Box>
   </Box> 
    
    
    </>
)

}