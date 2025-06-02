 'use client'
import React, { useState } from 'react'

import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { iconQuotation, arrowLeft, arrowRight} from '@/components/Icons';
import { useTranslations } from 'next-intl';
export default function BookingScoreSection({ data }) {
  const { sectionHeading, generalNote, categories,linkToAllReviews } = data
const [showAllCategories, setShowAllCategories] = useState(false)


const t = useTranslations('bookingScore');
  return (
    <section className="mx-auto reviews-and-ratings container-fluid ">
      <div className="inner-wrapper">
<div className="heading-wrapper ">
      <h2 className=" text-center">{sectionHeading}</h2>
     
      </div>
      <p className="text-lg mb-lg-5 general-score-wrapper">
      <span className="general-score">{generalNote.note}</span> <span className="font-semibold general-score-label">{generalNote.label}</span>
      </p>

      {/* CATEGORY SCORES */}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 mb-10 categories-row">
        {categories.items.map((item, index) => {
          const percentage = parseFloat(item.note) * 10
  // Na mobilnim uređajima sakrij sve osim prvih 3 ako je showAllCategories === false
    const shouldHideOnMobile = !showAllCategories && index >= 3;

          return (
           <div
        key={index}
        className={`category-wrapper col ${
          shouldHideOnMobile ? 'd-block d-sm-block d-md-block d-lg-block d-xl-block d-none d-md-block' : ''
        }`}
      >
              <div className="d-flex justify-content-between text-sm font-medium mb-1">
                <span className="category-label">{item.label}</span>
                <span className="category-note">{item.note}</span>
              </div>
              <div className="bg-gray-200 colored-bar-wrapper">
                <div
                  className="bg-green-500  colored-bar"
                  style={{ width: `${percentage}%` }}
                />
              </div>






            </div>



          )
        })}
      </div>
<div className="more-ratings-wrapper  d-sm-none">
  <button className="btn btn-link p-0 text-primary" onClick={() => setShowAllCategories(!showAllCategories)}>
   {showAllCategories ? t('viewLess') : t('viewMore')}
  </button>
</div>

      {/* REVIEWS */}
      <div className="d-block d-sm-none">
        {/* MOBILE - CAROUSEL */}
      <Carousel
  showArrows={true}
  showStatus={false}
  showThumbs={false}
  renderArrowPrev={(onClickHandler, hasPrev, label) =>
    hasPrev && (
      <button
        type="button"
        onClick={onClickHandler}
        title={label}
        className="custom-arrow custom-arrow-prev"
      >
        {arrowLeft()}
      </button>
    )
  }
  renderArrowNext={(onClickHandler, hasNext, label) =>
    hasNext && (
      <button
        type="button"
        onClick={onClickHandler}
        title={label}
        className="custom-arrow custom-arrow-next"
      >
        {arrowRight()}
      </button>
    )
  }
>
  {categories.reviews.map((review) => (
    <div key={review.id} className="bg-gray-100 px-3 rounded review-wrapper">
     

 <div className="inner">
      <div className="d-flex text-xs text-gray-600 review-data mb-2">
        
    
        <div className="avatar-wrapper">
          <span className="avatar">
            <span className="avatar-initial">
              {review.name.charAt(0).toUpperCase()}
            </span>
          </span>
        </div>
        <div className="review-name-and-country d-flex flex-column ms-2">
          <span className="review-name">{review.name}</span>
          <span className="review-country">{review.country}</span>
        </div>
  <div className="mb-4 text-primary icon-quotation-wrapper col-auto">
    {iconQuotation()}

  </div>

      </div>
      <div className="italic text-sm review-text d-flex position-relative">
    
        
       <div className="quote-text">{review.text}</div>
       </div>
 

    </div>
<div className=" text-primary icon-quotation-wrapper-left col-auto">
    {iconQuotation()}

  </div>


    </div>
  ))}
</Carousel>

      </div>

      <div className="d-none d-sm-flex row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-4 gy-sm-0 gy-md-4 reviews-container">
  {/* DESKTOP - GRID */}
  {categories.reviews.map((review) => (
    <div key={review.id} className="bg-gray-100 p-4 p-sm-3 p-md-4 rounded review-wrapper">
        {/* Ikona navodnika na početku sekcije */}
        <div className="inner">
      <div className="d-flex text-xs text-gray-600 review-data mb-2">
        
    
        <div className="avatar-wrapper">
          <span className="avatar">
            <span className="avatar-initial">
              {review.name.charAt(0).toUpperCase()}
            </span>
          </span>
        </div>
        <div className="review-name-and-country d-flex flex-column ms-2">
          <span className="review-name">{review.name}</span>
          <span className="review-country">{review.country}</span>
        </div>
      </div>
      <div className="italic text-sm review-text d-flex position-relative">
      <div className="mb-4 text-primary icon-quotation-wrapper col-auto">
    {iconQuotation()}

  </div>
        
       <div className="quote-text">{review.text}</div></div>
    </div>

    
    </div>
  ))}

<div className="text-center all-reviews-wrapper mt-4 mt-lg-5 d-none d-md-block"><a className="text-primary all-reviews" href="https://www.booking.com/hotel/me/apartmani-becici-becici.en-gb.html?label=gen173bo-1DCAsojwFCF2FwYXJ0bWFuaS1iZWNpY2ktYmVjaWNpSCRYA2iPAYgBAZgBJLgBGMgBD9gBA-gBAfgBA4gCAZgCAqgCBLgCycmEwAbAAgHSAiQzNTc1MDJmZS1iMTJlLTQ3ZjgtYTViNC0zMjVhYzViOWM2MmPYAgTgAgE&sid=f6205c66af4a43002da9039f142a219b&aid=304142&ucfs=1&arphpl=1&lang=en-gb&soz=1&lang_changed=1#tab-main"><span className="me-2">{linkToAllReviews}</span><span><svg className="more-details-icon"  width="18px" height="18px" viewBox="0 0 24 24"><path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"></path></svg></span></a></div>

  
</div>

<div className="text-center all-reviews-wrapper mt-4 mt-lg-5 d-md-none"><a className="text-primary all-reviews" href="https://www.booking.com/hotel/me/apartmani-becici-becici.en-gb.html?label=gen173bo-1DCAsojwFCF2FwYXJ0bWFuaS1iZWNpY2ktYmVjaWNpSCRYA2iPAYgBAZgBJLgBGMgBD9gBA-gBAfgBA4gCAZgCAqgCBLgCycmEwAbAAgHSAiQzNTc1MDJmZS1iMTJlLTQ3ZjgtYTViNC0zMjVhYzViOWM2MmPYAgTgAgE&sid=f6205c66af4a43002da9039f142a219b&aid=304142&ucfs=1&arphpl=1&lang=en-gb&soz=1&lang_changed=1#tab-main"><span className="me-2">{linkToAllReviews}</span><span><svg className="more-details-icon"  width="18px" height="18px" viewBox="0 0 24 24"><path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"></path></svg></span></a></div>
</div>
    </section>
  )
}
