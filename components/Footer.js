'use client';
import React from 'react';
import { useTranslations } from 'next-intl';
import * as Icons from '@/components/Icons';
import Link from 'next/link';
import { useLocale } from 'next-intl';

const Footer = () => {
  const t = useTranslations('footer');
  const locale = useLocale();
  const addressIcon = Icons[t('contact.adress.icon')];
  console.log(addressIcon);
  const phoneIcon = Icons[t('contact.phones.icon')];
  const emailIcon = Icons[t('contact.email.icon')];

  const fbIcon = Icons[t('footerSocials.fb.iconFb')];
  const instagramIcon = Icons[t('footerSocials.instagram.iconInstagram')];

  return (
    <div className="footer bg-primary pt-3 pt-lg-5 pb-3">
      <div className="inner-wrapper container-fluid">
        <div className="row gy-4">

          {/* Contact Block */}
          <div className="col-12 col-sm-6 col-lg-5">
            <div className="adress-block">
              <div className="heading-wrapper">
                <h6>{t('contact.heading')}</h6>
              </div>
              <div className="adress">
                <span className="icon">
                {addressIcon && React.createElement(addressIcon, { className: 'icon' ,width: 18,height: 18})}
                </span>
                <span className="data">{t('contact.adress.data')}</span>
              </div>
              <div className="phone">
  <span className="icon">
    {phoneIcon && React.createElement(phoneIcon, { className: 'icon', width: 18, height: 18 })}
  </span>
  <ul className='list-unstyled mb-0'>
    <li>
      <a href={`tel:${t('contact.phones.phonesNmbrs.data1')}`} className="footer-link">
        {t('contact.phones.phonesNmbrs.data1')}
      </a>
    </li>
    <li>
      <a href={`tel:${t('contact.phones.phonesNmbrs.data2')}`} className="footer-link">
        {t('contact.phones.phonesNmbrs.data2')}
      </a>
    </li>
  </ul>
</div>

<div className="email">
  <span className="icon">
    {emailIcon && React.createElement(emailIcon, { className: 'icon', width: 18, height: 18 })}
  </span>
  <a href={`mailto:${t('contact.email.data')}`} className="footer-link">
    {t('contact.email.data')}
  </a>
</div>

            </div>
          </div>

          {/* Offer Block */}
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="footer-offer">
              <div className="heading-wrapper">
                <h6>{t('footerOffer.heading')}</h6>
              </div>
              <ul className="list-unstyled mb-0">
  <li><Link className="footer-link" href={`/${locale}${t('footerOffer.item1.href')}`}>
{t('footerOffer.item1.label')}
              </Link></li>
  <li><Link className="footer-link"  href={`/${locale}${t('footerOffer.item2.href')}`}>
{t('footerOffer.item2.label')}
              </Link></li>
  <li><Link className="footer-link" href={`/${locale}${t('footerOffer.item3.href')}`}>
{t('footerOffer.item3.label')}
              </Link></li>
</ul>

            </div>
          </div>

          {/* Socials Block */}
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="footer-socials">
              <div className="heading-wrapper">
                <h6>{t('footerSocials.heading')}</h6>
              </div>
              <div className="description">
                <span>{t('footerSocials.intro')}</span>
              </div>
            <div className="d-flex flex-column gap-3 mt-2 socials">
  <a href="#"  className="text-light icon-wrapper">
  <span className="icon">{fbIcon && React.createElement(fbIcon, { width: 18, height: 18 })} </span>
    <span className="label">{t('footerSocials.fb.fbLabel')}</span>
  </a>
  <a href="#"  className="text-light  icon-wrapper">
  <span className="icon">{instagramIcon && React.createElement(instagramIcon, { width: 18, height: 18 })} </span>
  <span className="label">{t('footerSocials.instagram.instagramLabel')}</span>
  </a>
</div>

            </div>
          </div>

          {/* Copyright */}
          <div className="col-12 copyright-block">
            <div className="text-block text-center mt-4 pt-3 border-top border-secondary">
            <small className="copyright-muted-text">
    {t('footerCopyright.copyrightInfo')} <i className="designer-name">{t('footerCopyright.author')}</i>.
  </small>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
 