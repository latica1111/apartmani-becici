
'use client';

import { Box, Grid } from '@chakra-ui/react';
import NextImage from 'next/image';
export default function GalleryDesktopGrid ({images,setOpenIndex }){

    return(
        <>
         <Grid
          templateColumns={{ md: 'repeat(5, 1fr)' }}
          gap="2"  mt={{md:"8",lg:"12"}} 
          display={{ base: 'none', md: 'grid' }}
          w="100%"
                >
                  {images.map((img, index) => (
                    <Box
                      key={img.photoURL}
                      className="img-zoom-wrapper"
                      cursor="pointer"
                      overflow="hidden"
                      position="relative"
                     width="100%"
                      h="200px"    
                      onClick={() => setOpenIndex(index)}
                    >
                      <NextImage src={img.photoURL} alt={img.photoAlt || ''}
                      style={{
                objectFit: img.photoPosition || 'cover',
                transition: 'transform 0.3s ease',
              }}
                      fill      cursor="pointer"  
                      quality={75}
                      />
                    </Box>
                  ))}
                </Grid>
        
        
        </>
    )
}