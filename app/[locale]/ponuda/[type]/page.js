
import PhotoCarousel from '@/components/PhotoCarousel';
import Breadcrumbs from '@/components/Breadcrumbs';
import HeroImage from '@/components/HeroImage';
import apartmentsDataEn from '@/src/i18n/locales/en/apartments-description.json';
import apartmentsDataSr from '@/src/i18n/locales/sr/apartments-description.json';
import Link from 'next/link';
import { iconTotalGuests, iconApartmentSize, iconBeds, iconFreeParkingRectangle, iconBabyCrib, iconFamilyRooms, iconSeaView, iconKitchen,iconBathroom,iconMountainView ,iconBudgetFriendly} from '@/components/Icons';
import { getMetaTranslation } from '/src/lib/getMetaTranslation';

export async function generateMetadata({ params }) {
  const { locale, type } = params;

  const { meta } = await getMetaTranslation(locale);

  // Mapiranje tipa na odgovarajući ključ u `meta`
  const typeKeyMap = {
    sr: {
      apartmani: 'apartments',
      studiji: 'studios',
      sobe: 'rooms'
    },
    en: {
      apartments: 'apartments',
      studios: 'studios',
      rooms: 'rooms'
    }
  };

  const typeKey = typeKeyMap[locale]?.[type];

  if (!typeKey || !meta[typeKey]) {
    return {
      title: 'Page Not Found',
      description: 'This page does not exist.',
    };
  }

  const pageMeta = meta[typeKey];

  return {
    title: pageMeta.title,
    description: pageMeta.description,
    keywords: pageMeta.keywords,
    openGraph: {
      title: pageMeta.ogTitle,
      description: pageMeta.ogDescription,
      locale: pageMeta.ogLocale,
      type: pageMeta.ogType,
      url: pageMeta.ogUrl,
      images: [
        {
          url: pageMeta.ogImage,
          width: 1200,
          height: 630,
          alt: pageMeta.title
        }
      ]
    },
    twitter: {
      card: pageMeta.twitterCard,
      title: pageMeta.twitterTitle,
      description: pageMeta.twitterDescription,
      images: [pageMeta.twitterImage]
    },
    alternates: {
      canonical: pageMeta.canonical,
      languages: {
        en: `https://yourdomain.com/en/offer/${typeKey}`,
        sr: `https://yourdomain.com/sr/ponuda/${typeKeyMap.en[typeKey]}`
      }
    }
  };
}




export default function OfferTypePage({ params }) {
  const { locale, type } = params;
  const apartmentsData = locale === 'en' ? apartmentsDataEn : apartmentsDataSr;

  let filteredUnits = [];

  if (type === 'studios' || type === 'studiji') {
    filteredUnits = apartmentsData.apartments.filter(unit => unit.type === 'studio');
  } else if (type === 'apartments' || type === 'apartmani') {
    filteredUnits = apartmentsData.apartments.filter(
      unit => unit.type === 'apartment' || unit.type === 'apartman'
    );
  } else if (type === 'rooms' || type === 'sobe') {
    filteredUnits = apartmentsData.apartments.filter(
      unit => unit.type === 'room' || unit.type === 'soba'
    );
  } else {
    filteredUnits = apartmentsData.apartments;
  }

  function mapUnitTypeToFolder(type, locale) {
    if (locale === 'sr') {
      if (type === 'studio') return 'studiji';
      if (type === 'apartman' || type === 'apartment') return 'apartmani';
      if (type === 'soba' || type === 'room') return 'sobe';
    } else {
      if (type === 'studio') return 'studios';
      if (type === 'apartman' || type === 'apartment') return 'apartments';
      if (type === 'soba' || type === 'room') return 'rooms';
    }
    return type;
  }
const featuredInfoMap = {
  privateBathroom: {
    icon: (props) => iconBathroom(props),
    label: {
      sr: 'Sopstveno kupatilo',
      en: 'Private bathroom'
    }
  },
  privateKitchen: {
    icon: (props) => iconKitchen(props),
    label: {
      sr: 'Sopstvena kuhinja',
      en: 'Private kitchen'
    }
  },
  partialSeaView: {
    icon: (props) => iconSeaView(props),
    label: {
      sr: 'Bočni pogled na more',
      en: 'Partial sea view'
    }
  },
  familyFriendly: {
    icon: (props) => iconFamilyRooms(props),
    label: {
      sr: 'Porodične sobe',
      en: 'Family friendly room'
    }
  },
  budgetFriendly: {
    icon: (props) => iconBudgetFriendly(props),
    label: {
      sr: 'Povoljna cijena',
      en: 'Budget-friendly room'
    }
  },

  mountainView :{
    icon: (props) => iconMountainView(props),
    label: {
      sr: 'Pogled na planinu',
      en: 'Mountain view'
    }
  }
};


  return (
    <>
    
    <HeroImage pageKey={type} />
    <div className="container-fluid py-4 accomodation-type">
       <Breadcrumbs />
      <h1 className="accomodation-type-heading capitalize mb-6">{type.replace('-', ' ')}</h1>
      <p className="intro-text ">
  {apartmentsData.accommodationTypeData[type]?.introText || ''}
</p>

      <div className="row g-4 g-sm-5">
        {filteredUnits.map(unit => (
          <div key={unit.id} className="col-12 col-sm-6 col-lg-12">
            <div className="row flex-column flex-lg-row gx-3 card-wrapper rounded px-3">
              {/* Gallery Block */}
              <div className="col-lg-6 ">
  <div className="gallery-block">
    <PhotoCarousel photos={unit.photos} />
  </div>
</div>


              {/* Info Block */}
              <div className="col-lg-6 info-block">
                <h3 className=" fw-semibold unit-name">{unit.name}</h3>
                <p className="text-muted  unit-description">{unit.shortDescription}</p>

                <div className="apartment-basic-info" style={{ fontSize: '.9rem' }}>
                  <div className="wrapper d-flex flex-wrap row-cols-auto">
                  <p className="type-of-accomodation d-none">{unit.type}</p>
                {/* Free Parking */}
               <p className="free-parking  d-flex align-items-center ">
  <span className="icon-wrapper ">
    {iconFreeParkingRectangle({ width: 18, height: 18 })}
  </span>
  {locale === 'sr' ? 'Besplatan parking' : 'Free parking'}
</p>

{/* Baby Crib - prikaz samo ako postoji */}
{unit.beds.some((bed) => typeof bed === 'object' && bed.babyCrib === true) && (
  <p className="baby-crib  d-flex align-items-center ">
    <span className="icon-wrapper ">
      {iconBabyCrib({ width: 18, height: 18 })}
    </span>
    {locale === 'sr' ? 'Dječiji krevetac dostupan' : 'Baby crib available'}
  </p>
)}

{/* Featured options */}
{unit.featured && unit.featured.length > 0 &&
  unit.featured.map((key) => {
    const item = featuredInfoMap[key];
    if (!item) return null;
    return (
      <p key={key} className="featured-item  d-flex align-items-center">
        <span className="icon-wrapper">
          {item.icon({ width: 18, height: 18})}
        </span>
        {item.label[locale]}
      </p>
    );
  })
}


</div>

 <p className="beds">
  <span className="icon-wrapper"> {iconBeds({ width: 18, height: 18 })} </span>
  <span className="text-wrapper">{unit.beds
    .filter((bed) => typeof bed === 'string')
    .map((bed) => {
      const capitalized = bed.charAt(0).toUpperCase() + bed.slice(1);
      return `1 ${capitalized}`;
    })
    .join(' + ')}</span>
</p>

                 
                  <p className="apartment-size">
                  <span className="icon-wrapper"> {iconApartmentSize({ width: 18, height: 18 })} </span>
                    {unit.apartmentSize} m²</p>
               



                
                 <p className="max-capacity d-flex align-items-center">
                  <span className="icon-wrapper">{iconTotalGuests({ width: 18, height: 18 })}</span>
                  <span className="text-wrapper ">{unit.maxGuestsNumber[0]}</span>
                </p>

 </div>
<div className="link-wrapper">
                <Link
                  href={`/${locale}/${locale === 'sr' ? 'ponuda' : 'offer'}/${mapUnitTypeToFolder(unit.type, locale)}/${unit.pageURL}`}
                  className="btn btn-outline-primary view-details"
                >
                  {locale === 'en' ? 'View details' : 'Pogledaj detalje'}
                </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
