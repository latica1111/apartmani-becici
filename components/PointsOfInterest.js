import React from 'react';
import LocationBlock from './LocationBlock';
import { useTranslations } from 'next-intl';

const PointsOfInterest = ({ data }) => {
  const t = useTranslations();
 
  
  

  // Provera da li su podaci za svaki blok prisutni
  const { nearby, restaurantsAndCaffesNearby, attractions,beachesInTheNeighborhood, publicTransit, closestAirports, shopping,nightLife } = data;
  const filterEmptyItems = (items) => items.filter(item => item.name.trim() !== "");
  if (!nearby || !restaurantsAndCaffesNearby || !attractions) {
    console.error("Missing data:", { nearby, restaurantsAndCaffesNearby, attractions });
    return <div>Error: Some data is missing.</div>;
  }
  return (
    
    <div className="location container-fluid ">
   <div className="inner">
    
    <div className="points-of-interest">
      <h4 className="section-name">{data.heading}</h4>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
      {/* Nearby Places */}
      {nearby && nearby.items && nearby.items.length > 0 ? (
        <LocationBlock
          heading={nearby.heading}
          icon={nearby.icon}
          items={filterEmptyItems(nearby.items)}
          collapseElement={nearby.collapseElement}
        />
      ) : (
        <div>{t('data.nearby.noData')}</div>
      )}
   {/* beachesInTheNeighborhood */}
   {beachesInTheNeighborhood && beachesInTheNeighborhood.items && beachesInTheNeighborhood.items.length > 0 ? (
        <LocationBlock
          heading={beachesInTheNeighborhood.heading}
          icon={beachesInTheNeighborhood.icon}
          items={filterEmptyItems(beachesInTheNeighborhood.items)}
          collapseElement={beachesInTheNeighborhood.collapseElement}
        />
      ) : (
        <div>{t('data.beachesInTheNeighborhood.noData')}</div>
      )}
{/* publicTransit */}
{publicTransit && publicTransit.items && publicTransit.items.length > 0 ? (
        <LocationBlock
          heading={publicTransit.heading}
          icon={publicTransit.icon}
          items={filterEmptyItems(publicTransit.items)}
          collapseElement={publicTransit.collapseElement}
        />
      ) : (
        <div>{t('data.publicTransit.noData')}</div>
      )}

      {/* Restaurants and Cafes Nearby */}
      {restaurantsAndCaffesNearby && restaurantsAndCaffesNearby.items && restaurantsAndCaffesNearby.items.length > 0 ? (
        <LocationBlock
          heading={restaurantsAndCaffesNearby.heading}
          icon={restaurantsAndCaffesNearby.icon}
          items={filterEmptyItems(restaurantsAndCaffesNearby.items)}
          collapseElement={restaurantsAndCaffesNearby.collapseElement}
        />
      ) : (
        <div>{t('data.restaurantsAndCaffesNearby.noData')}</div>
      )}
  

      {/* Popular Attractions */}
      {attractions && attractions.items && attractions.items.length > 0 ? (
        <LocationBlock
          heading={attractions.heading}
          icon={attractions.icon}
          items={filterEmptyItems(attractions.items)}
          collapseElement={attractions.collapseElement}
        />
      ) : (
        <div>{t('data.attractions.noData')}</div>
      )}


{/* closestAirports */}
{closestAirports && closestAirports.items && closestAirports.items.length > 0 ? (
        <LocationBlock
          heading={closestAirports.heading}
          icon={closestAirports.icon}
          items={filterEmptyItems(closestAirports.items)}
          collapseElement={closestAirports.collapseElement}
        />
      ) : (
        <div>{t('data.closestAirports.noData')}</div>
      )}
{/* Shopping */}
{shopping && shopping.items && shopping.items.length > 0 ? (
        <LocationBlock
          heading={shopping.heading}
          icon={shopping.icon}
          items={filterEmptyItems(shopping.items)}
          collapseElement={shopping.collapseElement}
        />
      ) : (
        <div>{t('data.shopping.noData')}</div>
      )}
      {/* night life */}
{nightLife && nightLife.items && nightLife.items.length > 0 ? (
        <LocationBlock
          heading={nightLife.heading}
          icon={nightLife.icon}
          items={filterEmptyItems(nightLife.items)}
          collapseElement={nightLife.collapseElement}
        />
      ) : (
        <div>{t('data.nightLife.noData')}</div>
      )}

    </div></div></div></div>
  );
}  

export default PointsOfInterest;
