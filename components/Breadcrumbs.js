'use client';

import {Link} from '@/i18n/navigation';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Breadcrumb } from '@chakra-ui/react';
import { MdOutlineHome } from "react-icons/md";
//radi fallback label ako nema prevoda
function formatSegment(segment) {
  // Zameni "-" sa razmakom i kapitalizuj prvo slovo
  const formatted = segment.replace(/-/g, ' ');
  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
}
//povezuje URL segment sa translation key
const breadcrumbKeyMap = {
  'contact': 'contact',
  'kontakt': 'contact',
  'house-rules': 'houseRules',
  'kucni-red': 'houseRules'
};

export default function Breadcrumbs() {
  const t = useTranslations('navigation');
  const pathname = usePathname(); // e.g. /en/offer/apartments
  const segments = pathname.split('/').filter(Boolean); // ["en", "offer", "apartments"]

  const locale = segments[0]; // en or sr
  const pathParts = segments.slice(1); // remove locale

  const breadcrumbs = pathParts.map((segment, i) => {
     const key = breadcrumbKeyMap[segment];
    let breadcrumbData;
    try {
       breadcrumbData = key ? t.raw(key) : null; // pokuša da dohvati objekt sa {label, href}
    } catch {
      breadcrumbData = null; // ako ne postoji, koristi fallback
    }

     const href = breadcrumbData?.href ||   '/' + pathParts.slice(0, i + 1).join('/');
  const label = breadcrumbData?.label || formatSegment(segment);

    return {
      label,
      href: breadcrumbData?.href || href
    };
  });

  return (
    <Breadcrumb.Root mb={{ base: 3, lg: 4 }}>
      <Breadcrumb.List gap={1} flexWrap="wrap">
        {/* HOME */}
        <Breadcrumb.Item>
          <Breadcrumb.Link as={Link} href="/">
            {/* tvoje SVG home ikonice */}
           <MdOutlineHome />
          </Breadcrumb.Link>
        </Breadcrumb.Item>

        {breadcrumbs.map((crumb, index) => (
          <Breadcrumb.Item key={crumb.href}>
            <Breadcrumb.Separator />
            

            {index === breadcrumbs.length - 1 ? (
              <Breadcrumb.CurrentLink>
                {crumb.label}
              </Breadcrumb.CurrentLink>
            ) : (
              <Breadcrumb.Link as={Link} href={crumb.href}>
                {crumb.label}
              </Breadcrumb.Link>
            )}
          </Breadcrumb.Item>
        ))}
      </Breadcrumb.List>
    </Breadcrumb.Root>
  );
}
