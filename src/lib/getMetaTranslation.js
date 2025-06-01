import fs from 'fs';
import path from 'path';

export async function getMetaTranslation(locale) {
  const filePath = path.join(process.cwd(), 'data', 'locales', locale, 'meta.json');
  const fileContent = await fs.promises.readFile(filePath, 'utf-8');
  return JSON.parse(fileContent);
}
