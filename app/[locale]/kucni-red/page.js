 
 import HeroImage from '@/components/HeroImage';
 import Breadcrumbs from '@/components/Breadcrumbs';
import { useTranslations } from 'next-intl';
import {iconCheckin, iconCheckout, iconCancellation, iconInfo, iconChildrenAndBeds,iconAdditionalHouseRules,iconCashOnly, iconPetsAllowed, iconEvents, iconQuietHours } from '@/components/Icons';
import { getMetaTranslation } from '/src/lib/getMetaTranslation';

export async function generateMetadata({ params }) {
  const { meta } = await getMetaTranslation(params.locale);
  const offerMeta = meta.houseRulesMeta;

  return {
    title: offerMeta.title,
    description: offerMeta.description,
    keywords: offerMeta.keywords,
    openGraph: {
      title: offerMeta.ogTitle,
      description: offerMeta.ogDescription,
      locale: offerMeta.ogLocale,
       type: offerMeta.ogType,
      url: offerMeta.ogUrl,
      images: [
        {
          url: offerMeta.ogImage,
          width: 1200,
          height: 630,
          alt: offerMeta.title
        }
      ]
    },
    twitter: {
      card: offerMeta.twitterCard,
      title: offerMeta.twitterTitle,
      description: offerMeta.twitterDescription,
      images: [offerMeta.twitterImage]
    },
    alternates: {
      canonical: offerMeta.canonical,
      languages: {
        en: 'https://yourdomain.com/en/offer',
        sr: 'https://yourdomain.com/sr/ponuda'
      }
    }
  };
}


export default function HouseRulesPage() {
  const t = useTranslations();

  // Ključevi koje želiš da prikažeš redom
  const rulesKeys = [
    'houseRules.checkIn',
    'houseRules.checkOut',
    'houseRules.cancellation',
    'houseRules.prepayment',
    'houseRules.childrenAndBeds',
    'houseRules.cashOnly',
    'houseRules.parties',
    'houseRules.quietHours',
    'houseRules.pets',
    'additionalRules'
  ];
  const iconMap = {
    'houseRules.checkIn': iconCheckin,
    'houseRules.checkOut': iconCheckout,
    'houseRules.cancellation': iconCancellation,
    'houseRules.prepayment': iconInfo,
    'houseRules.childrenAndBeds': iconChildrenAndBeds,
    'houseRules.cashOnly': iconCashOnly,
    'houseRules.parties': iconEvents,
    'houseRules.quietHours': iconQuietHours,
    'houseRules.pets': iconPetsAllowed,
    'additionalRules': iconAdditionalHouseRules
  };

  
  return (
    <>
      <HeroImage pageKey="houseRules" />
     
      
    <div className="container-fluid py-4 house-rules-wrapper">
    <Breadcrumbs />
<div className='heading-container'><h2 className='house-rules-heading'>{t('houseRules.mainHeading')}</h2></div>
      <div className="grid gap-8  ">
        {rulesKeys.map((key) => {
          const heading = t(`${key}.heading`);
          const textBlock = t.raw(`${key}.textBlock`);
          const IconComponent = iconMap[key];
          return (
            <div key={key} className="row row-cols-1 row-cols-md-2 border-b pb-6 house-rule-row">
              <h6 className="font-semibold text-lg text-gray-800 house-rule-heading"><span className="icon-wrapper"> {IconComponent && <IconComponent width={32} height={32} />}</span><span>{heading}</span></h6>
              <div className="text-gray-700 space-y-2 house-rule-content">
                {Array.isArray(textBlock)
                  ? textBlock.map((text, index) => <p key={index}>{text}</p>)
                  : <p>{textBlock}</p>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
    
    </>
  );
 
}
