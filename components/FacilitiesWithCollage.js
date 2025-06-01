 'use client';
 
 import React from 'react';
 import { useTranslations } from 'next-intl';
 import * as Icons from '@/components/Icons'; // Import icons from your Icons.js
 
 const FacilitiesWithCollage = () => {
   const t = useTranslations();
 
   // Data for facilities with icons (this could be dynamic or static depending on your setup)
   const facilitiesData = [
     { key: 'freeParking', icon: 'iconFreeParking' },
     { key: 'beachNearby', icon: 'iconBeachNearby' },
     { key: 'playground', icon: 'iconNearby' },
     { key: 'familyRooms', icon: 'iconFamilyRooms' },
     { key: 'kitchen', icon: 'iconKitchen'},
      { key: 'airConditioning', icon: 'iconAirConditioning' },
     { key: 'freeWiFi', icon: 'iconFreeWifi' },
    
    { key: 'TV', icon: 'iconTv'},
   ];
 
   return (
     <div className="container-fluid facilities-with-collage " >
        <div className='row'>
        <div className="collage-wrapper col-lg-6 row row-cols-lg-2 g-2">
<div className="col-md-6"><img src='/images/4_person_apartment_3rd_floor/double-bed.jpg' className="img-fluid " /></div>
<div className="col-md-6"><img src='/images/4_person_apartment_3rd_floor/bedroom-tv.jpg' className="img-fluid " /></div>
<div className="col-md-6"><img src='/images/4_person_apartment_3rd_floor/bathroom-elements.jpg' className="img-fluid " /></div>
<div className="col-md-6"><img src='/images/4_person_apartment_3rd_floor/lounge-set.jpg' className="img-fluid" /></div>
        </div>
        <div className='facilities-container col-md-6'>
     <div className="inner-wrapper" >
       <h2 className='section-name text-center fw-bold mb-4'>Facilities</h2>
 <div className="first">
     <div className="row row-cols-md-2  gy-4 gx-3">
       {facilitiesData.map(({ key, icon }) => {
         const label = t(`facilitiesWithIcons.${key}`);  // Access translated label dynamically
         const IconComponent = Icons[icon];  // Get the corresponding icon component
 
         return (
           <div className="col facility-wrapper" key={key}>
             <div className="inner d-flex">
             <div className="icon-wrapper">
               <span className="icon">
                 {IconComponent ? <IconComponent /> : <span>❓</span>}  {/* Render the icon */}
               </span>
             </div>
             <div className="text-wrapper">
               <span className="text">{label}</span>  {/* Render the translated label */}
             </div>
           </div>
           </div>
         );
       })}
     </div>
     
     </div>
 </div>
 </div>
 </div>
 </div>
   );
 };
 
 export default FacilitiesWithCollage;
 