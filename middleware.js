import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';
export default async function middleware(request) {
  // Step 1: Preuzmi locale iz zahteva (ako nije definisan, koristi default 'en')
  const url = request.nextUrl.clone();  // Dobijamo URL iz dolaznog zahteva
  const defaultLocale = request.headers.get('x-your-custom-locale') || 'en';
  const locales = ['en', 'sr']; // Lista podržanih jezika

  // Step 1: Ako je korisnik došao na početnu stranicu (/), preusmeravamo ga na jezički prefiks
  if (url.pathname === '/') {
    url.pathname = `/${defaultLocale}`;  // Preusmeravamo korisnika na /en ili drugi jezik
    return NextResponse.redirect(url);
  }


  // Step 3: Kreiraj i pozovi next-intl middleware za i18n routing
  const handleI18nRouting = createMiddleware({
    locales,
    defaultLocale
  });

  const response = handleI18nRouting(request);
 
  // Step 3: Alter the response (example)
  response.headers.set('x-your-custom-locale', defaultLocale);
 
  return response;
}

export const config = {
  // Matchaj samo međunarodne URL-ove, ali izbegavaj slike u /images
  matcher: ['/((?!_next/|static/|favicon.ico|robots.txt|sitemap.xml|images/).*)'],
};

