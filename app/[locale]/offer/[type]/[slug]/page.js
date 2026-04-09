import ApartmentPageClient from "@/components/ApartmentPageClient";




import { routing } from '@/i18n/routing';
import { setRequestLocale } from 'next-intl/server';
export const revalidate = 0; // full static, generiše se jednom u build-u
export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
export async function generateMetadata({ params }) {
  const { slug, locale, type } = await params;
 

  // ovdje možeš dohvatiti podatke (ili iz JSON-a)
   const data = await import(`@/data/locales/${locale}/apartments-description.json`);

  const apartments = data.default.apartments;

  const apartment = apartments.find(a => a.pageURL === slug);

  return {
    title: apartment?.pageTitle,
    description: apartment?.metaDescription,
    keywords: apartment?.metaKeywords?.join(', ')
  };
}



export default async  function ApartmentDetails({params}) {
 const { locale, type} = await params;
  
 setRequestLocale(locale);


   return <ApartmentPageClient layout="vertical"/>;
}
