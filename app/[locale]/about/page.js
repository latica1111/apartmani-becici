import  getTranslation  from '#/lib/getTranslation';

export async function generateMetadata({ params }) {
  const t = await getTranslation(params.locale);
  const meta = t.about;

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    openGraph: {
      title: meta.title,
      description: meta.description,
      locale: params.locale,
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description
    }
  };
}
