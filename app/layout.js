 // app/layout.js
// app/layout.js
import './globals.css';   // Putanja do CSS fajla u public folderu
import { NextIntlClientProvider } from 'next-intl';  // Uvezi provider
import { getMessages } from 'next-intl/server';  // Uvezi getMessages funkciju
const locales = ['en', 'sr'];
const defaultLocale = 'en';



export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params;  // Preuzimanje locale iz params
 

  const messages = await getMessages(locale);  // Preuzimanje poruka za odgovarajući jezik

  return (
    <html lang={locale}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
     <NextIntlClientProvider locale={locale} messages={messages}>
        <body>{children}</body>
      </NextIntlClientProvider>
    </html>
  );
}
