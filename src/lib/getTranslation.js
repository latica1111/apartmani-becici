/// src/lib/getTranslation.js
import { createTranslator } from 'next-intl';

import { getMessages } from 'next-intl/server';

export default async function getTranslation(locale) {
  const messages = await getMessages(locale);
  return createTranslator({ locale, messages });
}
