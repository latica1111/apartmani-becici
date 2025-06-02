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

  const basePath = path.join(process.cwd(), 'src/i18n', 'locales', locale);

  const filenames = [
    'home.json',
    'apartments-description.json',
    'meta.json',
    'facilities.json',
    'navigation.json'
  ];

  const messages = {};

  for (const filename of filenames) {
    const filePath = path.join(basePath, filename);
    try {
      const fileContents = await fs.readFile(filePath, 'utf8');
      const parsed = JSON.parse(fileContents);
      Object.assign(messages, parsed); // merge into messages
      console.log(` Loaded: ${filePath}`);
    } catch (err) {
      console.warn(` Could not load: ${filePath}`);
      console.warn(`   Reason: ${err.message}`);
    }
  }

  return {
    locale,
    messages
  };
});
