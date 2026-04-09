// app/[locale]/layout.js


import '/app/globals.css';   // Putanja do CSS fajla u public folderu
import { NextIntlClientProvider } from 'next-intl';  // Uvezi provider
import {routing} from '@/i18n/routing';

import { getMessages } from 'next-intl/server';  // Uvezi getMessages funkciju
import { notFound } from 'next/navigation';
import { Providers } from '/app/providers';
import { marcellus, inter  } from '/app/fonts';



import Footer from '@/components/Footer';
import PreHeader from '@/components/PreHeader';
import NavigationLayout from '@/components/NavigationLayout';
import BackToTop from '@/components/BackToTop';





export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}





export default async function LocaleLayout({ children, params }) {
  // Čekamo da se params učita pre nego što pristupimo vrednostima
  const { locale } = await params;
  if (!routing.locales.includes(locale)) 
    {console.log("Skipping non-locale route:", locale);
  return children;}

  // server‑side load all messages in public/locales/[locale]/*
  const messages = await getMessages(locale);
  console.log('Locale u layoutu:', locale);
  // Enable static rendering
  
  //console.log('Messages keys:', Object.keys(messages));
  //console.log('Messages keys:', Object.entries(messages));
  return (
   <>
    <html lang={locale} suppressHydrationWarning>
      <Providers>
         <NextIntlClientProvider locale={locale} messages={messages}>
            <body className={inter.className}>
             <PreHeader />
         {children}
          <Footer locale={locale} />
          <BackToTop />
          </body>
          </NextIntlClientProvider>
       </Providers>   
       </html>
       </>
  );
}
