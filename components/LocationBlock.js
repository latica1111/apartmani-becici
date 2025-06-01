"use client" ;
import React, { useState } from 'react';
import * as Icons from '@/components/Icons';

const LocationBlock = ({ heading, icon, items, collapseElement }) => {
  const IconComponent = Icons[icon];
  const [expanded, setExpanded] = useState(false);

  const displayedItems = expanded ? items : items.slice(0, 3);

  return (
    <div
  className="point-of-interest-block"
>

      <div className="inner-wrapper">
        <div className="location-block">
          <div className="heading-wrapper d-flex">
            <span className="icon">
              {IconComponent && <IconComponent className="icon" width="20" height="20" />}
            </span>
            <h6 className="section-subheading">{heading}</h6>
          </div>

          <ul className="name-and-distance-block list-unstyled">
            {displayedItems.map((item, index) => (
              <li key={index}>
                <span className="place-name">{item.name}</span>
                <span className="place-distance">{item.distance}</span>
              </li>
            ))}
          </ul>

          {items.length > 3 && (
            <button
              className="toggle-btn btn btn-link p-0"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? collapseElement.seeLess : collapseElement.viewAll}
            </button>
          )}
        </div>
      </div>


      
    </div>
  );
};

export default LocationBlock;
