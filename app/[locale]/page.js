
import FacilityList from '@/components/FacilitiesList';
import { getMetaTranslation } from '/src/lib/getMetaTranslation';
import ApartmentsList from '@/components/ApartmentsList';
import PointsOfInterest from '@/components/PointsOfInterest';
import fs from 'fs';
import path from 'path';
import { useTranslations } from 'next-intl'
import BookingScoreSection from '@/components/BookingScoreSection'
import Hero from '@/components/Hero';
import Gallery from '@/components/Gallery';
// app/[locale]/page.js
export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'sr' }];
}


export async function generateMetadata({ params }) {
  const t = await getMetaTranslation(params.locale);
  const meta = t.meta.home;

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
// Funkcija za učitavanje prevoda
async function loadTranslations(locale) {
  const filePath = path.join(process.cwd(), 'src/i18n', 'locales', locale, 'home.json');
  console.log("Loading translations from:", filePath); // Log koji prikazuje putanju fajla

  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
  
    return JSON.parse(fileContent);
  } catch (error) {
    console.error("Error loading translations:", error); // Log ako dođe do greške
    return null;
  }
}


// You now have access to the current locale
// e.g. /en-US/products -> `lang` is "en-US"
export default async function Page({ params }) {
  const { lang } = await params
  const { locale } = params;

  // Učitavanje prevoda i sadržaja na osnovu locale
  const t = await loadTranslations(locale);
  console.log();
// Provera da li je prevod uspešno učitan
if (!t) {
  return <div>Error loading translations</div>;
}

  return  (
    <div>
       <Hero />
      {/* Tvoj sadržaj stranice */}
     
      
      <ApartmentsList />
      <FacilityList />
      <BookingScoreSection data={t.bookingScore} />
      <Gallery />
      <PointsOfInterest data={t.pointsOfInterest} />
     <div className='container-fluid google-map-wrapper'>
      <h4 className ="section-name"> {locale === 'sr' ? 'Lokacija' : 'Location'}</h4>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2951.803513828584!2d18.864571776105223!3d42.282717471200094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134dd4709fb6168f%3A0xc0187b98b31208e1!2sApartmani%20Becici!5e0!3m2!1sen!2srs!4v1747845419966!5m2!1sen!2srs" width="600" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <div>
    
    </div>
    </div>
  );
}
