'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Logo({ brandName }) {
  const pathname = usePathname();
  const locale = pathname.split('/').filter(Boolean)[0] || 'en'; // fallback na 'en' ako ne postoji

  const [firstWord, ...rest] = brandName.split(' ');
  const secondPart = rest.join(' ');

  return (
    <Link
      href={`/${locale}`}
      className="navbar-brand d-inline-flex flex-column align-items-center text-decoration-none"
    >
      <span style={{ lineHeight: 1 }}>
        <span style={{ fontWeight: 300 }} className="first-word">{firstWord} </span>
        <span style={{ fontWeight: 300 }} className="second-word">{secondPart}</span>
      </span>
      <span style={{ fontSize: '.75rem' }} className="d-none">
        rooms • studios • apartments
      </span>
    </Link>
  );
}
