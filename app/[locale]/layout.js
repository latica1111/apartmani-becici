// app/[locale]/layout.js


import { NextIntlClientProvider } from 'next-intl'; // Importuj NextIntlClientProvider
import { getMessages } from 'next-intl/server';
import Navbar from '@/components/Navbar';
import { notFound } from 'next/navigation';
import Footer from '@/components/Footer';
import PreHeader from '@/components/PreHeader';

const locales = ['en', 'sr'];


// Dodavanje fontova putem Google Fonts


export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }) {
  // Čekamo da se params učita pre nego što pristupimo vrednostima
  const { locale } = await params;
  if (!locales.includes(locale)) notFound();

  // server‑side load all messages in public/locales/[locale]/*
  const messages = await getMessages(locale);
  console.log('Locale u layoutu:', locale);
  //console.log('Messages keys:', Object.keys(messages));
  //console.log('Messages keys:', Object.entries(messages));
  return (
   <>
         <NextIntlClientProvider locale={locale} messages={messages}>
          <header>
         
            <PreHeader />
            <Navbar locale={locale} />
           
          </header>
         
          {children}
          <Footer />
          </NextIntlClientProvider>
       </>
  );
}
