'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

function formatSegment(segment) {
  // Zameni "-" sa razmakom i kapitalizuj prvo slovo
  const formatted = segment.replace(/-/g, ' ');
  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
}
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

     const href = breadcrumbData?.href || '/' + [locale, ...pathParts.slice(0, i + 1)].join('/');
  const label = breadcrumbData?.label || formatSegment(segment);

    return {
      label,
      href: breadcrumbData?.href || href
    };
  });

  return (
    <nav className="breadcrumbs mb-3 mb-lg-4 text-sm text-gray-600">
      <ul className="flex flex-wrap gap-1 ">
        <li>
          <Link href={`/${locale}`} className="hover:underline">
            <svg width="18px" height="18px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"  fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g fill="none" fillRule="evenodd" id="页面-1" stroke="none" strokeWidth="1"> <g id="导航图标" transform="translate(-26.000000, -15.000000)"> <g id="编组" transform="translate(26.000000, 15.000000)"> <rect fill="#FFFFFF" fillOpacity="0.01" fillRule="nonzero" height="24" id="矩形" width="24" x="0" y="0"></rect> <polygon id="路径" points="4.5 9 4.5 21 19.5 21 19.5 9 12 3"></polygon> <polygon id="路径" points="4.5 21 4.5 9 2 11 12 3 22 11 19.5 9 19.5 21" stroke="#212121" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></polygon> <polygon id="路径" points="9.5 14.5 9.5 21 14.5 21 14.5 14.5" stroke="#212121" strokeLinejoin="round" strokeWidth="1.5"></polygon> <line id="路径" stroke="#212121" strokeLinecap="round" strokeWidth="1.5" x1="4.5" x2="19.5" y1="21" y2="21"></line> </g> </g> </g> </g></svg>
          </Link>
        </li>
        {breadcrumbs.map((crumb, index) => (
          <li key={crumb.href} className="">
            <span className="mx-sm-1">
              <svg className="text-primary" width="18px" height="18px" viewBox="0 0 24 24" fill="var(--primary)">
                <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"></path>
              </svg>
            </span>
            {index === breadcrumbs.length - 1 ? (
              <span>{crumb.label}</span>
            ) : (
              <Link href={crumb.href} className="hover:underline">
                {crumb.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
