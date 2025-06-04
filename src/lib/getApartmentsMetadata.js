import fs from 'fs';
import path from 'path';
export async function getApartmentsMetadata(locale, slug) {
  const filePath = path.join(process.cwd(), 'src/i18n', 'locales', locale, 'apartments-description.json');
  const fileContent = await fs.promises.readFile(filePath, 'utf-8');
  const allMeta = JSON.parse(fileContent);
  // Pronađi apartman čiji canonical ili ogUrl uključuje slug
  const apartment = allMeta.apartments.find((apt) =>
    apt.canonical?.includes(slug) || apt.pageURL?.includes(slug)
  );

  return apartment || null;
}
