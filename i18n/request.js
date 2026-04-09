import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from './routing';


export default getRequestConfig(async ({ requestLocale }) => {  //requestLocale dolazi iz [locale] segmenta URL-a.
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

 

 
  return {
    locale,
      messages: { 
        home: (await import(`../data/locales/${locale}/home.json`)).default,
     apartmentsDescription: (await import(`../data/locales/${locale}/apartments-description.json`)).default,
     meta:(await import(`../data/locales/${locale}/meta.json`)).default,
     navigation:(await import(`../data/locales/${locale}/navigation.json`)).default,
     facilities: (await import(`../data/locales/${locale}/facilities.json`)).default, //putanja ./data/locales/... je RELATIVNA na fajl request.js, a ne na root projekta.
  }}
});
