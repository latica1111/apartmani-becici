'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

import apartmentsDataEn from './src/i18n/locales/en/apartments-description.json';
import apartmentsDataSr from './src/i18n/locales/sr/apartments-description.json';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = useLocale();

  const translationMap = {
    sr: {
      ponuda: 'offer',
      sobe: 'rooms',
      studiji: 'studios',
      apartmani: 'apartments',
    },
    en: {
      offer: 'ponuda',
      rooms: 'sobe',
      studios: 'studiji',
      apartments: 'apartmani',
    }
  };

  const handleSwitch = (newLocale) => {
    const segments = pathname.split('/');

    // Prevodimo osnovne delove (npr. ponuda, sobe itd)
    for (let i = 2; i < segments.length - 1; i++) {
      if (translationMap[currentLocale]?.[segments[i]]) {
        segments[i] = translationMap[currentLocale][segments[i]];
      }
    }

    const currentPageURL = segments[segments.length - 1]; // poslednji deo URL-a

    const currentData = currentLocale === 'en' ? apartmentsDataEn.apartments : apartmentsDataSr.apartments;
    const targetData = newLocale === 'en' ? apartmentsDataEn.apartments : apartmentsDataSr.apartments;

    // Nađi apartman koji ima trenutni pageURL
    const foundUnit = currentData.find(unit => unit.pageURL === currentPageURL);

    if (foundUnit) {
      // Pronađi isti apartman po ID-u u novom jeziku
      const translatedUnit = targetData.find(unit => unit.id === foundUnit.id);

      if (translatedUnit) {
        segments[segments.length - 1] = translatedUnit.pageURL; // Promeni URL
      }
    }

    segments[1] = newLocale; // Promeni jezik

    router.replace(segments.join('/'));
  };

  const locales = [
    { code: 'en', label: 'EN', icon: '🇬🇧' },
    { code: 'sr', label: 'SR', icon: '🇷🇸' },
  ];

  return (
    <div className="flex gap-2">
      {locales.map(({ code, label, icon }) => (
        <button
          key={code}
          onClick={() => handleSwitch(code)}
          disabled={currentLocale === code}
          className="p-2 border rounded disabled:opacity-50"
        >
          {label} <span>{icon}</span>
        </button>
      ))}
    </div>
  );
}
