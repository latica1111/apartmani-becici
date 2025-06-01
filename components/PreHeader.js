 'use client';

import React from 'react';
import { iconPhone, iconExactLocation } from '@/components/Icons';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const PreHeader = () => {
  const phone1 = '+382 67 748 403';
  const phone2 = '+382 67 556 512';
  const address = 'Ivo Lola Ribara 1, Becici, Budva, Montenegro';
  const googleMapsUrl = 'https://www.google.com/maps?q=Apartmani Becici,+Budva,+Montenegro';

  return (
    <div className="container-fluid  py-md-2 d-flex flex-wrap justify-content-between align-items-center text-sm preheader-wrapper">
      <div className="d-none d-md-flex flex-wrap align-items-center links-wrapper">
        {/* Phone 1 */}
        <a href={`tel:${phone1.replace(/\s+/g, '')}`} className="d-flex align-items-center gap-1 hover:text-blue-600 transition-colors">
        <span className="icon-wrapper">{iconPhone({ width: 14, height: 14 })}</span>
          <span className="text-block">{phone1}</span>
        </a>

        {/* Phone 2 */}
        <a href={`tel:${phone2.replace(/\s+/g, '')}`} className="d-flex align-items-center gap-1 hover:text-blue-600 transition-colors">
        <span className="icon-wrapper">{iconPhone({ width: 14, height: 14 })}</span>
        <span className="text-block">{phone2}</span>
        </a>

        {/* Address */}
        <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="d-flex align-items-center gap-1 hover:text-blue-600 transition-colors">
        <span className="icon-wrapper">{iconExactLocation({ width: 14, height: 14 })}</span>
        <span className="text-block">{address}</span>
        </a>
      </div>
 {/* Language Switcher */}
      <div className="d-none d-md-flex language-switcher-wrapper">
        <LanguageSwitcher />
      </div>
      {/* Language Switcher */}
      <div className="language-switcher-wrapper d-md-none ">
        <LanguageSwitcher />
      </div>
    </div>
  );
};

export default PreHeader;
