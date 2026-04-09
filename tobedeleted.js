import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';
import {routing} from './i18n/routing';
export default async function middleware(request) {
  // Step 1: Preuzmi locale iz zahtjeva (ako nije definisan, koristi default 'en')
  const url = request.nextUrl.clone();  // Dobijamo URL iz dolaznog zahtjeva
  const defaultLocale =  request.cookies.get('locale') || 'en';
 

  // Step 1: Ako je korisnik došao na početnu stranicu (/), preusmeravamo ga na jezički prefiks
  if (url.pathname === '/') {
    url.pathname = `/${defaultLocale}`;  // Preusmeravamo korisnika na /en ili drugi jezik
    return NextResponse.redirect(url);
  }


  // Step 3: Kreiraj i pozovi next-intl middleware za i18n routing
  const handleI18nRouting = createMiddleware(routing);

  const response = handleI18nRouting(request);
 
  // Step 3: Alter the response (example)
  response.headers.set('x-your-custom-locale', defaultLocale);
 
  return response;
}

export const config = {
  // Matchaj samo međunarodne URL-ove, ali izbegavaj slike u /images
  matcher: ['/((?!api|_next/static|_next/image|images|.*\\..*).*)']
};




const config = defineConfig({
  theme: {
    breakpoints:{  

    },
    keyframes :{

    },
    tokens: {
      colors: {
     primary:{
     50:{ value : "#E5F2FF"},
     100 :{ value : "#CCE5FF"},
     200:{ value:"#B3D9FF"},
     300:{ value:"#99CCFF"},
     400:{ value:"#73ACE6"},
    500:{ value:"#528FCC"},
 600:{ value:"#3674B3"},
 700:{ value:"#003366"},
      800:{value :"#082A4D"},
      900: { value :"#0A1F33"}
     }
     
      },
    },
    semanticTokens: {
   colors: {
     
     
      },

    },
    textStyles :{

    },
    layerStyles:{

    },
    animationStyles:{


    },
    conditions :{

    }
  },
});
 