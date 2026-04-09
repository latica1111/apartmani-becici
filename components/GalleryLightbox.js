'use client';

import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
export default function GalleryLightbox ({ images, openIndex, setOpenIndex }){
    return(
<>
 {/* LIGHTBOX */}
        <Lightbox
          open={openIndex >= 0}
          close={() => setOpenIndex(-1)}
          slides={images.map((img) => ({
            src: img.photoURL,
            alt: img.photoAlt || '',
          }))}
          index={openIndex}
        />



</>


    )
}