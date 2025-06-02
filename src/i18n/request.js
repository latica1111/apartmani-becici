import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from './routing';



export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  

  const filenames = [
    'home.json',
    'apartments-description.json',
    'facilities.json',
    'meta.json',
    'navigation.json'
  ];

  const messages = await Promise.all(
  filenames.map(async (filename) => {
    const fileModule = await import(`./public/locales/${locale}/${filename}`);
    return fileModule.default;
  })
);

  const mergedMessages = messages.reduce((acc, curr) => ({ ...acc, ...curr }), {});

  return {
    locale,
    messages: mergedMessages
  };
});
