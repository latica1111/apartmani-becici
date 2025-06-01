'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import CalendarPicker from '@/components/CalendarPicker';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { format } from 'date-fns';

export default function ContactForm() {
  const t = useTranslations('contactPage.contactForm');
const formRef = useRef(null);

  const [arrivalDate, setArrivalDate] = useState('');
  const [departureDate, setDepartureDate] = useState('');
const [adultsNmbr, setAdultsNmbr] = useState(1);
const [childrenNmbr, setChildrenNmbr] = useState(0);

  const [childrenAge, setChildrenAge] = useState('');
  const [additionalRequest, setAdditionalRequest] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

const [errors, setErrors] = useState({});
const validateForm = () => {
  const newErrors = {};

  if (!name.trim()) newErrors.name = t('name.error');
  if (!email.trim()) {
  newErrors.email = t('email.error');
} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
  newErrors.email = t('email.invalid');
}

  if (!arrivalDate) newErrors.arrivalDate = t('checkInDate.error');
  if (!departureDate) newErrors.departureDate = t('checkOutDate.error');
if (childrenNmbr > 0 && !childrenAge.trim()) {
  newErrors.childrenAge = t('childrenAge.error');
}



  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
};




  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
 // Formatiraj datume u string format koji EmailJS može da prepozna

    emailjs
      .sendForm(
        'service_g6zqn2j',      // tvoj Service ID
        'template_mztprth',     // tvoj Template ID
        formRef.current,              // FORMU šaljemo direktno!
        'qx7TnetzZqgOKsNwq'      // tvoj Public Key
      )
     .then((response) => {
  console.log('Email successfully sent', response);
  alert(`Email successfully sent! You'll soon get the response!`);

  // Resetuj formu
  setArrivalDate('');
  setDepartureDate('');
  setAdultsNmbr(1);
  setChildrenNmbr(0);
  setChildrenAge('');
  setAdditionalRequest('');
  setName('');
  setPhone('');
  setEmail('');
})

      .catch((error) => {
        console.error('Email send failed', error);
        alert('Došlo je do greške pri slanju.');
      });
  };
  console.log({arrivalDate});
  return (
    <form onSubmit={handleSubmit} ref={formRef}>
      <div className="row">
      <CalendarPicker
        arrivalDate={arrivalDate}
        setArrivalDate={setArrivalDate}
        departureDate={departureDate}
        setDepartureDate={setDepartureDate}
        errors={errors}
         setErrors={setErrors}
      />
        {/* SKRIVENI INPUTI za datum */}
        {/* Hidden inputi za slanje datuma */}
      <input
        type="hidden"
        name="arrivalDate"
        value={arrivalDate ? format(new Date(arrivalDate), 'dd/MM/yyyy') : ''}
      />
      <input
        type="hidden"
        name="departureDate"
        value={departureDate ? format(new Date(departureDate), 'dd/MM/yyyy') : ''}
      />


      </div>
  

      <div className="row">
     <div className="col-4 col-sm-4 adults-number">
  <label htmlFor="adultsNmbr">{t('adultsNmbr.label')} *</label>
  <div className="input-group d-flex">
    <button
      type="button"
      className="btn "
      onClick={() => setAdultsNmbr(prev => Math.max(1, Number(prev) - 1))}
    >
      -
    </button>
    <input
      type="number"
      id="adultsNmbr"
      name="adultsNmbr"
      className={`form-control text-center ${errors.adultsNmbr ? 'is-invalid' : ''}`}
      value={adultsNmbr}
      onChange={e => setAdultsNmbr(e.target.value)}
      min="1"
      max="8"
      
    />
    <button
      type="button"
      className="btn "
      onClick={() => setAdultsNmbr(prev => Math.min(8, Number(prev) + 1))}
    >
      +
    </button>
  </div>
   {errors.adultsNmbr && <div className="invalid-feedback">{errors.adultsNmbr}</div>}
</div>

<div className="col-4 col-sm-4 children-number">
  <label htmlFor="childrenNmbr">{t('childrenNmbr.label')} *</label>
  <div className="input-group d-flex">
    <button
      type="button"
      className="btn btn-outline-secondary"
      onClick={() => setChildrenNmbr(prev => Math.max(0, Number(prev) - 1))}
    >
      -
    </button>
    <input
      type="number"
      id="childrenNmbr"
      name="childrenNmbr"
      className={`form-control text-center ${errors.childrenNmbr ? 'is-invalid' : ''}`}
      value={childrenNmbr}
      onChange={e => setChildrenNmbr(e.target.value)}
      min="0"
      max="8"
     
    />
    <button
      type="button"
      className="btn btn-outline-secondary"
      onClick={() => setChildrenNmbr(prev => Math.min(8, Number(prev) + 1))}
    >
      +
    </button>
  </div>
   {errors.childrenNmbr && <div className="invalid-feedback">{errors.childrenNmbr}</div>}
</div>

        <div className="col-12 col-sm-4 children-age">
          <label htmlFor="childrenAge">{t('childrenAge.label')} *</label>
          <input
            type="text"
            id="childrenAge"
            name="childrenAge"
            className={`form-control ${errors.childrenAge ? 'is-invalid' : ''}`}
            value={childrenAge}
        onChange={(e) => {
  setChildrenAge(e.target.value);

  if (errors.childrenAge && e.target.value.trim()) {
    setErrors((prevErrors) => {
      const { childrenAge, ...rest } = prevErrors;
      return rest;
    });
  }
}}

            placeholder={t('childrenAge.label')}
          
          />
           {errors.childrenAge && <div className="invalid-feedback">{errors.childrenAge}</div>}
        </div>
      </div>

      <div className="col-12 additional-request">
        <label htmlFor="additionalRequest">{t('additionalRequest.label')}</label>
        <textarea
          id="additionalRequest"
          name="additionalRequest"
          className="form-control"
          rows="3"
          value={additionalRequest}
          onChange={e => setAdditionalRequest(e.target.value)}
          placeholder={t('additionalRequest.label')}
        />
      </div>
<div className="row">
      <div className="col-6 col-sm-4 name">
        <label htmlFor="name">{t('name.label')} *</label>
        <input
          type="text"
          id="name"
          name="name"
          className={`form-control ${errors.name ? 'is-invalid' : ''}`}
          value={name}
        onChange={(e) => {
  setName(e.target.value);

  if (errors.name && e.target.value.trim()) {
    setErrors((prevErrors) => {
      const { name, ...rest } = prevErrors;
      return rest;
    });
  }
}}

          placeholder={t('name.label')}
         
        />
         {errors.name && <div className="invalid-feedback">{errors.name}</div>}
      </div>

      <div className="col-6 col-sm-4 phone">
        <label htmlFor="phone">{t('phone.label')}</label>
        <input
          type="text"
          id="phone"
          name="phone"
          className="form-control"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          placeholder={t('phone.label')}
        />
      </div>

      <div className="col-6 col-sm-4 email">
        <label htmlFor="email">{t('email.label')} *</label>
        <input
          type="email"
          id="email"
          name="email"
          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          value={email}
         onChange={(e) => {
  setEmail(e.target.value);

  if (errors.email && e.target.value.trim()) {
    setErrors((prevErrors) => {
      const { email, ...rest } = prevErrors;
      return rest;
    });
  }
}}

          placeholder={t('email.label')}
        
        />
         {errors.email && <div className="invalid-feedback">{errors.email}</div>}
      </div>
</div>
      <div className="col-12 submit-wrapper">
        <button type="submit" className="btn btn-primary mb-3">
          {t('btn.label')}
        </button>
      </div>
    </form>
  );
}
