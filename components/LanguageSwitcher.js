'use client';
import { dynamicSegments } from '@/i18n/dynamicSegments';
import { staticSegments } from '@/i18n/staticSegments';
import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import { useRouter } from '@/i18n/navigation';
import { HStack, Button, Text } from '@chakra-ui/react';
import ReactCountryFlag from "react-country-flag";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();

 



  const switchLocale = (newLocale) => {
 const segments = pathname.split('/').filter(Boolean); // ["en", "offer", "rooms", "slug"]
    const currentLocale = segments[0]; // prvi segment je trenutni locale
     // ukloni trenutni locale iz patha pravimo neutralan path bez locale-a.
  const pathWithoutLocale = '/' + segments.slice(1).join('/');
  // prevedi segmente Prvo proveravamo da li je segment statički, tip, ili slug i prevodimo u newLocale.
  const translatedSegments = segments.slice(1).map(seg => {
    const staticEntry = Object.values(staticSegments).find(s => s[currentLocale] === seg);
    const typeEntry = Object.values(dynamicSegments.type).find(s => s[currentLocale] === seg);
    const slugEntry = Object.values(dynamicSegments.slug).find(s => s[currentLocale] === seg);

    if (staticEntry) return staticEntry[newLocale];
    if (typeEntry) return typeEntry[newLocale];
    if (slugEntry) return slugEntry[newLocale];
    return seg; // fallback
  });

  // zameni path sa prevedenim segmentima i target locale
  router.replace('/' + translatedSegments.join('/'), { locale: newLocale });
  };

  const languages = [
    { code: 'en', label: 'EN', flag: 'GB' },
    { code: 'sr', label: 'SR', flag: 'RS' },
  ];

  return (
    <HStack spacing={2}>
      {languages.map((lang, index) => (
        <HStack key={lang.code} spacing={2}>
          <Button
            onClick={() => switchLocale(lang.code)}
            variant="ghost"
            size="sm"
            px={{base:"2"}} 
           
            _hover={{ transform: "scale(1.01)", bg: "transparent" }}
          >
            <HStack gap="2">
              <Text fontSize="xs" fontWeight="medium" style={{ color: "white" }} >
                {lang.label}
              </Text>
              <ReactCountryFlag
                countryCode={lang.flag}
                svg
                style={{ width: "18px", height: "18px" }}
              />
            </HStack>
          </Button>

          {/* Separator */}
          {index === 0 && (
            <Text color={locale === lang.code? "gray.500":""} fontSize="sm">
              |
            </Text>
          )}
        </HStack>
      ))}
    </HStack>

  );
}