'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = useLocale();

  // Mapiranje segmenta za prevod
  const translationMap = {
    sr: {
      ponuda: 'offer',
      sobe: 'rooms',
      studiji: 'studios',
      apartmani: 'apartments',
      'kucni-red':'house-rules',
      'korisne-informacije':'useful-information',
      'kontakt':'contact',
      'trokrevetni-studio-na-prvom-spratu-sa-balkonom':'three-bed-studio-on-first-floor-with-balcony',
    'trokrevetna-soba-sa-sopstvenim-kupatilom-van-sobe':'triple-room-with-private-external-bathroom',
    'trokrevetna-soba-sa-sopstvenim-kupatilom-i-sopstvenom-kuhinjom-van-sobe':'triple-room-with-private-bathroom-and-kitchen-outside-the-room',
    'dvokrevetni-studio':'double-studio',
    'apartman-za-pet-osoba-na-cetvrtom-spratu':'sea-view-apartment-for-five-on-top-floor',
    'apartman-za-3-osobe-na-3-spratu' :'3-person-apartment-on-3rd-floor',
    'apartman-za-4-osobe-na-3-spratu' :'4-person-apartment-on-3rd-floor',
    'apartman-za-3-osobe-sa-dve-terase-na-4-spratu' :'3-person-apartment-with-2-terraces-on-4th-floor',
    'apartman-za-3-osobe-sa-dve-terase-na-3-spratu' :'apartment-for-3-with-two-terraces-on-3rd-floor',
    'apartman-za-4-osobe-na-4-spratu' :'apartment-for-4-with-covered-terrace-on-4th-floor',
    'apartman-za-3-osobe-na-4-spratu' :'apartment-for-3-on-4th-floor',
    'apartman-za-4-osobe-na-3-spratu-sa-otvorenom-terasom' :'apartment-for-4-on-3rd-floor-with-open-terrace',
    'apartman-za-4-osobe-u-prizemlju' :'ground-floor-apartment-for-4-people',
    'apartman-za-5-osoba-u-prizemlju' :'ground-floor-apartment-for-5-people',
    
    
    },
    en: {
      offer: 'ponuda',
      rooms: 'sobe',
      studios: 'studiji',
      apartments: 'apartmani',
'house-rules':'kucni-red',
     'useful-information': 'korisne-informacije',
      'contact':'kontakt',


      'three-bed-studio-on-first-floor-with-balcony':'trokrevetni-studio-na-prvom-spratu-sa-balkonom',
      
      'triple-room-with-private-external-bathroom' : 'trokrevetna-soba-sa-sopstvenim-kupatilom-van-sobe',
      'triple-room-with-private-bathroom-and-kitchen-outside-the-room' : 'trokrevetna-soba-sa-sopstvenim-kupatilom-i-sopstvenom-kuhinjom-van-sobe',
      'double-studio' :'dvokrevetni-studio',
      'sea-view-apartment-for-five-on-top-floor' :'apartman-za-pet-osoba-na-cetvrtom-spratu',
      '3-person-apartment-on-3rd-floor' :'apartman-za-3-osobe-na-3-spratu' ,
      '4-person-apartment-on-3rd-floor' :'apartman-za-4-osobe-na-3-spratu' ,
      '3-person-apartment-with-2-terraces-on-4th-floor':'apartman-za-3-osobe-sa-dve-terase-na-4-spratu' ,
      'apartment-for-3-with-two-terraces-on-3rd-floor' :'apartman-za-3-osobe-sa-dve-terase-na-3-spratu' ,
      'apartment-for-4-with-covered-terrace-on-4th-floor' :'apartman-za-4-osobe-na-4-spratu' ,
      'apartment-for-3-on-4th-floor' :'apartman-za-3-osobe-na-4-spratu',
      'apartment-for-4-on-3rd-floor-with-open-terrace' :'apartman-za-4-osobe-na-3-spratu-sa-otvorenom-terasom' ,
      'ground-floor-apartment-for-4-people' :'apartman-za-4-osobe-u-prizemlju' ,
      'ground-floor-apartment-for-5-people' :'apartman-za-5-osoba-u-prizemlju' ,
    
    }
  };

  const handleSwitch = (newLocale) => {
    const segments = pathname.split('/');

    // Prevodimo svaki segment osim prvog (locale)
    for (let i = 2; i < segments.length; i++) {
      if (translationMap[currentLocale] && translationMap[currentLocale][segments[i]]) {
        segments[i] = translationMap[currentLocale][segments[i]]; // Prevodimo segment
      }
    }

    // Zamenjujemo jezik (prvi segment)
    segments[1] = newLocale;

    router.replace(segments.join('/'));
  };

  const locales = [
    { code: 'en', label: 'EN', icon: '🇬🇧' },
    { code: 'sr', label: 'SR', icon: '🇷🇸' },
  ];
  
  return (
    <div className="d-flex flex-row language-switcher-inner px-md-3">
      {locales.map(({ code, label, icon }) => (
        <button
          key={code}
          onClick={() => handleSwitch(code)}
          disabled={currentLocale === code}
          className="p-1 disabled:opacity-50 language-switcher-btn"
        >
          {label} <span className="d-none">{icon}</span>
        </button>
      ))}
    </div>
  );
}
