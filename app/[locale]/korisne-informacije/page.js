  'use client';
  import Breadcrumbs from '@/components/Breadcrumbs';
 import { useTranslations } from 'next-intl';
 import HeroImage from '@/components/HeroImage';
 export default function UsefulInfoPage() {
   const t = useTranslations('usefulInfo');
 
   const renderContent = (content) => {
     if (Array.isArray(content)) {
       return (
         <ul className="list-disc pl-5 space-y-1">
           {content.map((item, i) => (
             <li key={i}>{item}</li>
           ))}
         </ul>
       );
     }
   
     if (typeof content === 'string') {
       return <p className="mb-2">{content}</p>;
     }
   
     return null;
   };
   
 
   const renderBorders = (borders) => {
     const { intro, ...countryBorders } = borders;
   
     return (
       <div className="borders-wrapper">
         <p>{intro}</p>
         {Object.entries(countryBorders).map(([country, crossings]) => (
           <div key={country} className="country">
             <strong>{country}:</strong> {crossings.join(', ')}
           </div>
         ))}
       </div>
     );
   };
   
 
   return (
     <>
      <HeroImage pageKey="usefulInfo" />
     
  
     <main className=" mx-auto container-fluid py-4 useful-info-wrapper">
       <Breadcrumbs />
       <h2 className="text-3xl font-bold useful-info-heading">{t('heading')}</h2>
 
       {/* Getting There */}
 <section>
   <h4 className="text-2xl font-semibold subheading">{t('gettingThere.sectionHeading')}</h4>
 
   {/* General info kao <p> */}
  
   <p>{t.raw('gettingThere.generalInfo')[0]}</p>
   <p>{t.raw('gettingThere.generalInfo')[1]}</p>
   <p>{t.raw('gettingThere.generalInfo')[2]}</p>
 
   <h3 className="text-xl font-medium mt-4">{t('gettingThere.subheading')}</h3>
   {/* Ovo ide kao <ul> */}
   {renderContent(t.raw('gettingThere.roadConnections'))}
 
   {/* Airplane */}
   <div className="mt-4">
     <h3 className="text-xl font-medium">{t('gettingThere.airplane.label')}</h3>
     {/* Prvi kao paragraf, ostali kao lista */}
     <p>{t.raw('gettingThere.airplane.items')[0]}</p>
     {renderContent(t.raw('gettingThere.airplane.items').slice(1))}
   </div>
 
   {/* Bus */}
   <div className="mt-4">
     <h3 className="text-xl font-medium">{t('gettingThere.bus.label')}</h3>
     <p>{t.raw('gettingThere.bus.items')[0]}</p>
    
   </div>
 
   {/* Railway */}
   <div className="mt-4">
     <h3 className="text-xl font-medium">{t('gettingThere.railway.label')}</h3>
     <p>{t.raw('gettingThere.railway.items')[0]}</p>
    
   </div>
 
   {/* Car */}
   <div className="mt-4">
     <h3 className="text-xl font-medium">{t('gettingThere.car.label')}</h3>
     <p>{t('gettingThere.car.description')}</p>
     {/* Roads kao lista */}
     {renderContent(t.raw('gettingThere.car.roads'))}
     {/* Borders intro kao <p> */}
     <p className="mt-2 d-none">{t('gettingThere.car.borders.intro')}</p>
     {/* Borders ostatak kao lista po zemlji */}
     {renderBorders(t.raw('gettingThere.car.borders'))}
   </div>
 </section>
 
 {/* Public Transportation */}
 <section>
   <h4 className="text-2xl font-semibold subheading mt-4 ">{t('publicTransportation.heading')}</h4>
 
   {/* Local Bus */}
   <div className="">
     <h3 className="text-xl font-medium">{t('publicTransportation.localBus.title')}</h3>
     <p>{t('publicTransportation.localBus.description')}</p>
    
  <h3 className="">{t('publicTransportation.localBus.linesHeading')}</h3>
 
 
     {renderContent(t.raw('publicTransportation.localBus.lines'))}
  <p className="font-semibold mt-2">{t('publicTransportation.localBus.contact')}</p>
 
   </div>
 
   {/* Taxi */}
   <div className="mt-4">
     <h3 className="text-xl font-medium">{t('publicTransportation.localTaxi.title')}</h3>
     <p>{t('publicTransportation.localTaxi.description')}</p>
     {renderContent(t.raw('publicTransportation.localTaxi.companies'))}
   </div>
 </section>
   {/* Tourist Tax */}
   <section>
         <h2 className="text-2xl font-semibold subheading">{t('registrationFee.title')}</h2>
 <p>{t.raw('registrationFee.notes')[0]}</p>
 <p>{t.raw('registrationFee.notes')[1]}</p>
 <p>{t.raw('registrationFee.notes')[2]}</p>
        
         {renderContent(t.raw('registrationFee.exemptions'))}
         <p>{t('registrationFee.proof')}</p>
       </section>
     </main>
     </>
   );
 }
 