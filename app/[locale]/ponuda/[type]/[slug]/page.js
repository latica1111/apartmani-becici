'use client';
import Breadcrumbs from '@/components/Breadcrumbs';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import apartmentsDataEn from '@/public/locales/en/apartments-description.json';
import apartmentsDataSr from '@/public/locales/sr/apartments-description.json';

import Link from 'next/link';
import {
  iconCheckCircle,
  iconKitchen,
  iconBathroom,
  iconBedroom,
  iconBalcony,
  iconGardenView,
  iconMountainView,
  iconYard,
  iconSeaView,
  iconAirConditioning,
  iconAvailableLanguages,
  iconMediaAndTechnology,
  iconSafety,iconPhoto,
  iconCommonAreas,
  iconTv,
  iconFreeWifi,
  iconFreeParking,
  iconSafe
} from '@/components/Icons';

import Lightbox from 'yet-another-react-lightbox'; // Dodaj ovo
import 'yet-another-react-lightbox/styles.css'; // Dodaj ovo
import ContactForm from '@/components/ContactForm';

export default function ApartmentDetails() {
  const { locale, type, slug } = useParams();
  const tApartments = useTranslations('apartments');
  const tSectionTitles = useTranslations('pageSectionNames');
  const currentLocale = useLocale();
  const t = useTranslations();

  // === Lightbox States ===
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const apartmentsData = currentLocale === 'sr' ? apartmentsDataSr : apartmentsDataEn;
  const apartment = apartmentsData.apartments.find((apt) => apt.pageURL === slug);

  if (!apartment) {
    return <div>{tApartments('apartmentNotFound')}</div>;
  }
  const extraSectionData = {
    parkingFacilities: {
      icon: iconFreeParking,
      label: 'Parking',
      additionalInfo: 'Besplatan privatan parking je moguć na licu mesta (rezervacija je neophodna).'
    },
    internet: {
      icon: iconFreeWifi,
      label: 'Internet',
      additionalInfo: 'Bežični internet dostupan u sobama i dvoristu besplatno.'
    }
  };
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionKey) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
    }));
  };
  
  const renderSection = (sectionKey) => {
    const sectionData = apartment[sectionKey];
    const extraInfo = extraSectionData[sectionKey];
  
    if ((!sectionData || sectionData.length === 0) && !extraInfo) return null;
  
    const isExpanded = expandedSections[sectionKey] || false;
    const visibleItems = isExpanded ? sectionData : sectionData?.slice(0, 3);
  
    return (
      <div className="facility-container" id={`${sectionKey}-wrapper`}>
        <h5 className="d-flex align-items-center facility-main-heading">
          {sectionIcons[sectionKey] && (
            <span className="me-2 icon-wrapper">
              {sectionIcons[sectionKey]({ width: 20, height: 20 })}
            </span>
          )}
          {t(`pageSectionNames.${sectionKey}`)}
        </h5>
  
        {extraInfo && (
          <div className="d-flex align-items-start mb-2 ms-1">
            <span className="me-2 icon-wrapper mt-1">
              {extraInfo.icon({ width: 18, height: 18 })}
            </span>
            <div>
              <strong>{extraInfo.label}</strong>
              <p className="mb-1">{extraInfo.additionalInfo}</p>
            </div>
          </div>
        )}
  
        {visibleItems?.length > 0 && (
          <>
            <ul className="list-unstyled">
              {visibleItems.map((item, index) => (
                <li key={index} className="d-flex align-items-center">
                  <span className="icon-wrapper me-2">
                    {iconCheckCircle({ width: 18, height: 18 })}
                  </span>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </li>
              ))}
            </ul>
            {sectionData.length > 3 && (
              <button
                onClick={() => toggleSection(sectionKey)}
                className="toggle-btn btn btn-link px-0"
              >
                {isExpanded ? t('buttons.viewLess') : t('buttons.viewAll')}
              </button>
            )}
          </>
        )}
      </div>
    );
  };
  
  

  const iconComponents = {
    iconKitchen,
    iconBathroom,
    iconBalcony,iconBedroom,
    iconGardenView,
    iconMountainView,
    iconAirConditioning,
    iconTv,
    iconFreeWifi,
    iconFreeParking,
    iconSafe,
    iconSeaView,
    iconYard,
    iconAvailableLanguages,
    iconMediaAndTechnology,
    iconSafety,iconCommonAreas
  };
  const sectionIcons = {
    kitchen: iconKitchen,
    bathroom: iconBathroom,
    balcony: iconBalcony,
    bedroom:iconBedroom,
    view: iconGardenView, // ili druga ikona ako imaš više opcija za view
    bedroom: iconBedroom, // primer – možeš staviti neku drugu ako imaš bolju
    onDemand: iconSafe,
    mediaAndTechnology: iconMediaAndTechnology,
    commonAreas:iconCommonAreas,
    safetyAndSecurity :iconSafety
    // primer
  };
  

  const renderFacilities = (facilities) => {
    const t = useTranslations();

    return (
      <div className="facilities mb-4">
        <h4 className="d-none">{t('pageSectionNames.amenities')}</h4>
        <ul className="d-flex flex-wrap">
          {facilities.map((facility, index) => {
            const label = t(`facilitiesData.${facility}.label`);
            const iconKey = t(`facilitiesData.${facility}.icon`);
            const IconFunc = iconComponents[iconKey];

            return (
              <li key={index} className="col-auto d-flex align-items-center mb-2 me-2">
                <span className="icon-wrapper me-2">
                  {IconFunc && IconFunc({ width: 18, height: 18 })}
                </span>
                <strong>{label}</strong>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };
// Find similar apartments based on guestsNumber (excluding the current apartment)
const relatedApartments = apartmentsData.apartments.filter(
  (apt) => apt.guestsNumber === apartment.guestsNumber && apt.pageURL !== apartment.pageURL
);
const renderRelatedApartments = () => {
  if (relatedApartments.length === 0) return null; // Ako nema sličnih apartmana, ništa ne prikazuj

  return (
    <div className="related-apartments mb-sm-5" id="relatedRooms">
      <h4>{t('pageSectionNames.relatedRooms')}</h4> {/* Naslov sekcije, preveden */}
      <div className="row align-items-stretch">
        {relatedApartments.map((apt) => (
          <div key={apt.id} className="col-12 col-sm-6 col-md-4 mb-4">
            <div className="card  rounded h-100">
            <div className="img-wrapper ratio ratio-16x9">
              {/* Prva slika iz apartmana */}
              {apt.photos && apt.photos.length > 0 && (
                <img
                  src={apt.photos[0].photoURL}
                  alt={apt.photos[0].photoAlt || apt.name}
                  className="card-img-top"
                  style={{ height: '100%', objectFit: 'cover', cursor: 'pointer', width:"100%" }}
                  onClick={() => {
                    // Redirect to the related apartment page
                    window.location.href = `/${locale}/${locale === 'sr' ? 'ponuda' : 'offer'}/${mapUnitTypeToFolder(apt.type, locale)}/${apt.pageURL}`;
                  }}
                />
               
              )} </div>
              <div className="card-body mt-2">
                <h6 className="card-title fw-bold">{apt.name}</h6>
                <p className="card-text">
                  {apt.apartmentSize} m² • {apt.type.charAt(0).toUpperCase() + apt.type.slice(1)} • {apt.maxGuestsNumber[0]}
                </p>
              
                <Link
                  href={`/${locale}/${locale === 'sr' ? 'ponuda' : 'offer'}/${mapUnitTypeToFolder(apt.type, locale)}/${apt.pageURL}`}
                  className="btn btn-primary view-details"
                >
                    {t('pageSectionNames.viewDetails')}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const [activeSection, setActiveSection] = useState('overview');

 

  // Function to detect scroll position and set active section
  const handleScroll = () => {
    const sections = ['overview', 'description', 'extraBenefits', 'facilities', 'relatedRooms'];
    let currentSection = '';
  
    if (window.scrollY === 0) {
      currentSection = 'overview'; // 👈 Dodato!
    } else {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element && element.getBoundingClientRect().top <= window.innerHeight / 2) {
          currentSection = section;
        }
      });
    }
  
    setActiveSection(currentSection);
  };
  
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setActiveSection('overview');
  }, [slug]);

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

  return (
    <section className="container-fluid mt-lg-5 apartment-details">
      <Breadcrumbs />
{/* Navigation */}
<div className="section-nav mb-lg-4">
        <ul className="nav-list list-unstyled d-flex">
          {['overview', 'description', 'extraBenefits', 'facilities', 'relatedRooms'].map((section) => (
            <li key={section} className={`nav-item col ${activeSection === section ? 'active' : ''}`}>
            <a href={`#${section}`} className="nav-link"  onClick={() => setActiveSection(section)}>{t(`pageSectionNames.${section}`)}</a>

            </li>
          ))}
        </ul>

      </div>

      <h2 className="fw-bold mb-4 apartment-name">{apartment.name}</h2>   
   {/* Gallery Section */}
<div className="photo-gallery mb-4">
  <div className="row g-2">
    {/* Left: Big first image */}
    <div className="col-12 col-sm-6 bigger-img-wrapper">
      <img
        src={apartment.photos[0].photoURL}
        alt={apartment.photos[0].photoAlt || apartment.name}
        className="img-fluid rounded shadow-sm w-100 h-100 object-fit-cover"
        style={{
          cursor: 'pointer',
          objectFit: 'cover',
          transition: 'all 0.3s ease-in-out',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.filter = 'brightness(0.8)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.filter = 'brightness(1)';
        }}
        onClick={() => {
          setCurrentIndex(0);
          setOpen(true);
        }}
      />
    </div>

    {/* Right: 4 smaller images in 2 rows x 2 columns */}
    <div className="d-none d-sm-block col-sm-6">
      <div className="row g-2">
        {apartment.photos.slice(1, 5).map((photo, index) => (
          <div key={index + 1} className="col-6">
            <img
              src={photo.photoURL}
              alt={photo.photoAlt || apartment.name}
              className="img-fluid rounded shadow-sm w-100 h-100 object-fit-cover"
              style={{
                cursor: 'pointer',
                objectFit: 'cover',
                transition: 'all 0.3s ease-in-out',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.filter = 'brightness(0.8)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.filter = 'brightness(1)';
        }}
              onClick={() => {
                setCurrentIndex(index + 1); // offset by 1
                setOpen(true);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* Clickable span with icon and image count */}
  <div className="text-end mt-2 image-count-wrapper">
    <span
      onClick={() => {
        setCurrentIndex(0);
        setOpen(true);
      }}
      style={{ cursor: 'pointer' }}
      className=" d-inline-flex align-items-center gap-1 icon-and-photo-wrapper"
    >
      <span className="icon-wrapper"> {iconPhoto({ width: 18, height: 18 , fill: '#fff'})} </span>
      {apartment.photos.length} {apartment.photos.length === 1 ? 'photo' : 'photos'}
    </span>
  </div>
</div>

{/* Lightbox */}
<Lightbox
  open={open}
  close={() => setOpen(false)}
  slides={apartment.photos.map((photo) => ({
    src: photo.photoURL,
    alt: photo.photoAlt || apartment.name,
  }))}
  index={currentIndex}
  carousel={{ finite: false }}
/>
<div className="row">
<div className ="main-content col-12 col-lg-9">




      {/* Intro Content */}
      <div className="overview mb-4" id="overview">
        <h4 classsName="d-none">{t('pageSectionNames.introContent')}</h4>
        {apartment.introContent.map((content, index) => (
          <p key={index}>{content}</p>
        ))}
      </div>

      {/* Render the facilities section */}
      {renderFacilities(apartment.facilities)}

      {/* Amenities */}
      <div className="description mb-4" id="description">
  <h4>{t('pageSectionNames.description')}</h4>
  <ul>
    {apartment.amenities.map((amenity, index) => {
      const trimmedAmenity = amenity.trim();
      const hasColon = trimmedAmenity.includes(':');
      const hasDash = trimmedAmenity.includes('–');

      if (hasColon) {
        const [title, description] = trimmedAmenity.split(':');
        return (
          <li key={index}>
            <strong>{title.trim()}:</strong>
            {description && <span> {description.trim()}</span>}
          </li>
        );
      }

      if (hasDash) {
        const [title, description] = trimmedAmenity.split('–');
        return (
          <li key={index}>
            <strong>{title.trim()} –</strong>
            {description && <span> {description.trim()}</span>}
          </li>
        );
      }

      return <li key={index}>{trimmedAmenity}</li>;
    })}
  </ul>
</div>


      {/* Extra Benefits */}
      <div className="extra-benefits mb-4" id="extraBenefits">
        <h4>{t('pageSectionNames.extraBenefits')}</h4>
        <ul>
          {apartment.reasonsToChoose.map((benefit, index) => {
            const separatorIndex = benefit.search(/[:–]/);
            if (separatorIndex === -1) return <li key={index}>{benefit}</li>;

            const title = benefit.slice(0, separatorIndex + 1);
            const description = benefit.slice(separatorIndex + 1).trim();

            return (
              <li key={index}>
                <strong>{title}</strong>
                <span> {description}</span>
              </li>
            );
          })}
        </ul>
      </div>
<div className="facilities" id="facilities">
<h4>{t('pageSectionNames.facilities')}</h4>
{renderSection('parkingFacilities')}
{renderSection('internet')}
<div className="other-facilities row row-cols-2 row-cols-md-3" id="other-facilities">
      {/* Render other sections */}
      {renderSection('kitchen')}
      {renderSection('bathroom')}
      {renderSection('bedroom')}
      {renderSection('balcony')}
      {renderSection('view')}

{renderSection('mediaAndTechnology')}
{renderSection('commonAreas')}
{renderSection('safetyAndSecurity')}
{renderSection('onDemand')}
</div>
</div>
{/* Related Apartments Section */}
{renderRelatedApartments()}
</div>
<div className="aside col-12 col-lg-3">
<div className="contact-form ">
  <ContactForm />
  </div>
</div>
</div>

      {/* Meta Data */}
      <meta name="description" content={apartment.metaDescription} />
      <meta name="keywords" content={Array.isArray(apartment.metaKeywords) ? apartment.metaKeywords.join(', ') : ''} />
      <meta name="title" content={apartment.pageTitle} />
    </section>
  );
}
