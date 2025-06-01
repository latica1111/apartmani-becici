'use client';

import React from 'react';
import DatePicker from 'react-datepicker';
import { CalendarDays } from 'lucide-react';
import { useTranslations } from 'next-intl';
import 'react-datepicker/dist/react-datepicker.css';

export default function CalendarPicker({
  arrivalDate,
  setArrivalDate,
  departureDate,
  setDepartureDate,  errors, setErrors
}) {
  const t = useTranslations('contactPage.contactForm');

  return (
    <div className="flex flex-col gap-4">
      {/* Datum dolaska */}
      <div className="flex flex-col gap-1 w-full label-and-btn-wrapper">
        <label className="text-sm font-medium">{t('checkInDate.label')}</label>
        <DatePicker
          selected={arrivalDate ? new Date(arrivalDate) : null}
          onChange={(date) => {
            setArrivalDate(date);
            if (departureDate && date > departureDate) {
              setDepartureDate(null);
            }
// Ako je korisnik izabrao datum i greška postoji — obriši grešku
  if (date && errors?.arrivalDate) {
    setErrors((prev) => ({ ...prev, arrivalDate: '' }));
  }

          }}
          showPopperArrow={false}
          dateFormat="dd/MM/yyyy"
          selectsStart
          startDate={arrivalDate}
          endDate={departureDate}
          minDate={new Date()}
          customInput={
            <button
              type="button"
              className="w-full d-flex align-items-center justify-content-between border border-gray-300 rounded-md px-3 py-2 bg-white text-start focus:outline-none"
            >
              <span>
                {arrivalDate ? new Date(arrivalDate).toLocaleDateString('en-GB') : t('checkInDate.data')}
              </span>
              <CalendarDays size={18} className="text-gray-400 ml-2" />
            </button>
          }
        />
         {errors?.arrivalDate && <div className="invalid-feedback">{errors.arrivalDate}</div>}
      </div>

      {/* Datum odlaska */}
      <div className="flex flex-col gap-1 w-full label-and-btn-wrapper">
        <label className="text-sm font-medium">{t('checkOutDate.label')}</label>
        <DatePicker
          selected={departureDate}
          onChange={(date) => {
  setDepartureDate(date);

  if (date && errors?.departureDate) {
    setErrors((prev) => ({ ...prev, departureDate: '' }));
  }
}}

          showPopperArrow={false}
          dateFormat="dd/MM/yyyy"
          selectsEnd
          startDate={arrivalDate}
          endDate={departureDate}
            highlightDates={[arrivalDate]} 
          minDate={arrivalDate || new Date()}
          customInput={
            <button
              type="button"
              className="w-full d-flex align-items-center justify-content-between border border-gray-300 rounded-md px-3 py-2 bg-white text-start focus:outline-none"
            >
              <span>
                {departureDate ? new Date(departureDate).toLocaleDateString('en-GB') : t('checkOutDate.data')}
              </span>
              <CalendarDays size={18} className="text-gray-400 ml-2" />
            </button>
          }
        />
         {errors?.departureDate && <div className="invalid-feedback">{errors.departureDate}</div>}
      </div>
    </div>
  );
}
