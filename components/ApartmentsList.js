'use client';

import { useTranslations, useLocale } from 'next-intl';
import { iconTotalGuests, iconApartmentSize, iconBeds, iconFreeParkingRectangle, iconBabyCrib, iconFamilyRooms, iconSeaView, iconKitchen,iconBathroom,iconMountainView, iconBudgetFriendly } from '@/components/Icons';
import PhotoCarousel from '@/components/PhotoCarousel';// koristiš pravi icon
import Link from 'next/link';
import apartmentsDataEn from '#/i18n/locales/en/apartments-description.json';
import apartmentsDataSr from '#/i18n/locales/sr/apartments-description.json';

export default function ApartmentsList() {
  const t = useTranslations('apartments'); // ako koristiš prevode
  const locale = useLocale();
  const apartmentsData = locale === 'sr' ? apartmentsDataSr : apartmentsDataEn;
  const targetIDs = [1, 4, 6, 7, 8, 10];

  const filteredApartments = apartmentsData.apartments.filter(apartment =>
    targetIDs.includes(apartment.id)
  );

  function mapUnitTypeToFolder(type, locale) {
    if (locale === 'sr') {
      if (type === 'studio') return 'studiji';
      if (type === 'apartman' || type === 'apartment') return 'apartmani';
      if (type === 'soba' || type === 'room') return 'sobe';
    } else {
      // en
      if (type === 'studio') return 'studios';
      if (type === 'apartman' || type === 'apartment') return 'apartments';
      if (type === 'soba' || type === 'room') return 'rooms';
    }
    return type; // fallback ako nešto fali
  }

 // Funkcija za prilagodbu putanje
// Funkcija za prilagodbu putanje
const getImagePath = (photoURL) => {
  // Provjeri ako putanja počinje s '/en/' ili '/sr/'
  const localePrefix = `/${locale}/`; // Dinamički koristi trenutni jezik

  // Ako putanja počinje sa '/en/' ili '/sr/', ukloni taj prefiks
  if (photoURL.startsWith(localePrefix)) {
    return photoURL.replace(localePrefix, '/'); // Zameni sa korenom
  }

  return photoURL; // Ako nije prefiks, vrati originalnu putanju
};

// Dodaj ovu mapu pre return izraza
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
    <section className="container-fluid our-offer ">
      <div className="inner-container">
      <h2 className=" section-name">
        <span>{locale === 'sr' ? 'Ponuda' : 'Our Offer'}</span>
        <Link
                      className="apartment-list-sm-btn"
                      href={`/${locale === 'sr' ? 'ponuda' : 'offer'}`} // Generišemo URL sa odgovarajućim prefiksom i tipom
                    >
                      <span>{`${locale === 'sr' ? 'Vidi sve' : 'View all'}`}</span><span><svg className="" fill="var(--primary)" width="18px" height="18px" viewBox="0 0 24 24"><path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"></path></svg></span>
                    </Link></h2>
      <p className="intro-text ">
  {apartmentsData.offerIntroText[0]}
</p>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
        {filteredApartments.map((apt) => (
          <div key={apt.id} className="col apartment-preview">
            <div className="card h-100 border-0 rounded-4 overflow-hidden">
              <div className="item-photos-wrapper">
              <PhotoCarousel photos={apt.photos} />

              </div>
              <div className="card-body d-flex flex-column justify-content-between">
                <h6 className="apartment-name fw-bold">{apt.name}</h6>
              
                <div className="apartment-basic-info" style={{ fontSize: '.9rem' }}>
                  <div className="wrapper d-flex flex-wrap row-cols-auto">
                  
                {/* Free Parking */}
               <p className="free-parking  d-flex align-items-center ">
  <span className="icon-wrapper ">
    {iconFreeParkingRectangle({ width: 12, height: 12, fill: 'var(--secondary)' })}
  </span>
  {locale === 'sr' ? 'Besplatan parking' : 'Free parking'}
</p>

{/* Baby Crib - prikaz samo ako postoji */}
{apt.beds.some((bed) => typeof bed === 'object' && bed.babyCrib === true) && (
  <p className="baby-crib  d-flex align-items-center ">
    <span className="icon-wrapper ">
      {iconBabyCrib({ width: 12, height: 12, fill: 'var(--secondary)' })}
    </span>
    {locale === 'sr' ? 'Dječiji krevetac dostupan' : 'Baby crib available'}
  </p>
)}

{/* Featured options */}
{apt.featured && apt.featured.length > 0 &&
  apt.featured.map((key) => {
    const item = featuredInfoMap[key];
    if (!item) return null;
    return (
      <p key={key} className="featured-item d-flex align-items-center">
        <span className="icon-wrapper">
          {item.icon({ width: 14, height: 14, fill: 'var(--secondary)' })}
        </span>
        {item.label[locale]}
      </p>
    );
  })
}


</div>

 <p className="beds">
  <span className="icon-wrapper"> {iconBeds({ width: 14, height: 14 })} </span>
  <span className="text-wrapper">{apt.beds
    .filter((bed) => typeof bed === 'string')
    .map((bed) => {
      const capitalized = bed.charAt(0).toUpperCase() + bed.slice(1);
      return `1 ${capitalized}`;
    })
    .join(' + ')}</span>
</p>

                 
                  <p className="apartment-size">
                  <span className="icon-wrapper"> {iconApartmentSize({ width: 14, height: 14 })} </span>
                    {apt.apartmentSize} m²</p>
               
                <p className="max-capacity">
                  <span className="icon-wrapper">{iconTotalGuests({ width: 14, height: 14 })}</span>
                  <span className="text-wrapper">{apt.maxGuestsNumber[0]}</span>
                </p>
                 </div>
                <div className="link-wrapper  d-flex align-items-center">
                  <Link className="btn btn-primary" href={`/${locale}/${locale === 'sr' ? 'ponuda' : 'offer'}/${mapUnitTypeToFolder(apt.type, locale)}/${apt.pageURL}`}>
                    <span className="text me-2 ">
                      {locale === 'sr' ? 'Pogledaj više' : 'More details'}
                    </span>
                    <svg className="more-details-icon" fill="#fff" width="18px" height="18px" viewBox="0 0 24 24" >
                      <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="link-wrapper text-center d-none">
      <Link
                      className="btn apartment-list-btn mt-4 mt-lg-5 d-none d-sm-inline-block"
                      href={`/${locale === 'sr' ? 'ponuda' : 'offer'}`} // Generišemo URL sa odgovarajućim prefiksom i tipom
                    >
                     {`${locale === 'sr' ? 'Vidi sve' : 'View all'}`}
                    </Link>

      </div>
      </div>
    </section>
  );
}
