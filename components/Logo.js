'use client';

import {Link} from '@/i18n/navigation';
import { Span, } from '@chakra-ui/react';

export default function Logo({ brandName="Apartmani Becici" }) {
 

  const [firstWord, ...rest] = brandName.split(' ');
  const secondPart = rest.join(' ');

  return (
    <Link
      href={`/`}
     
    >
     
      <Span style={{ lineHeight: 1 }} letterSpacing=".1em"  filter="brightness(2) contrast(.6)" transition="all 0.3s ease"
  _hover={{
  
    filter: "brightness(1.2) contrast(.8)"
  }}>
        <Span style={{ fontWeight: 400, color:"var(--primary)",fontSize:"lg", textTransform:"uppercase" }} >{firstWord} </Span>
        <Span style={{ fontWeight: 300, color:"var(--secondary)",fontSize:"lg", textTransform:"uppercase" }}>{secondPart}</Span>
      </Span>
     
     
    </Link>
  );
}
