import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from './routing';
import path from 'path';
import fs from 'fs/promises';

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const basePath = path.join(process.cwd(), 'public', 'locales', locale);

  const filenames = [
    'home.json',
    'apartments-description.json',
    'facilities.json',
    'meta.json'
  ];

  const messages = await Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.join(basePath, filename);
      const fileContents = await fs.readFile(filePath, 'utf8');
      return JSON.parse(fileContents);
    })
  );

  const mergedMessages = messages.reduce((acc, curr) => ({ ...acc, ...curr }), {});

  return {
    locale,
    messages: mergedMessages
  };
});
