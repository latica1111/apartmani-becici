'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import * as Icons from '@/components/Icons'; // Import icons from your Icons.js

const FacilityList = () => {
  const t = useTranslations();

  // Data for facilities with icons (this could be dynamic or static depending on your setup)
  const facilitiesData = [
    { key: 'freeParking', icon: 'iconFreeParking' },
    { key: 'beachNearby', icon: 'iconBeachNearby' },
    { key: 'playground', icon: 'playgroundIcon' },
    { key: 'familyRooms', icon: 'iconFamilyRooms' },
    { key: 'kitchen', icon: 'iconKitchen'},
     { key: 'airConditioning', icon: 'iconAirConditioning' },
    { key: 'freeWiFi', icon: 'iconFreeWifi' },
   
   { key: 'TV', icon: 'iconTv'},
  ];

  return (
    <div className="container-fluid facilities-with-icons my-lg-5" >
       <div className="overlay"></div>
       <div className='facilities-container'>
    <div className="inner-wrapper" >
    <h2 className="section-name text-center">{t('facilitiesWithIcons.generalHeading')}</h2>

<div className="first">
    <div className="row row-cols-2 row-cols-sm-2 row-cols-md-4  g-2 g-sm-4">
      {facilitiesData.map(({ key, icon }) => {
        const label = t(`facilitiesWithIcons.${key}`);  // Access translated label dynamically
        const IconComponent = Icons[icon];  // Get the corresponding icon component

        return (
          <div className="col facility-wrapper" key={key}>
            <div className="inner">
            <div className="icon-wrapper">
              <span className="icon">
                {IconComponent ? <IconComponent /> : <span> x </span>}  {/* Render the icon */}
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
  );
};

export default FacilityList;
