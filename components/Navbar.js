'use client';
import { useState, useEffect, useRef } from 'react';
import { useParams, usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Logo from '@/components/Logo';
import { hamburgerMenu as HamburgerIcon, closeIcon as CloseIcon, arrowDown as ArrowDownIcon } from '@/components/Icons';

export default function Navbar() {
  const { locale } = useParams();
  const pathname = usePathname();
  const t = useTranslations('header');
  const brandName = t('brandName');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const dropdownRef = useRef(null);
 const isDynamicOfferPage =
    /^\/(sr|en)\/(offer|ponuda)\/[^/]+\/[^/]+$/.test(pathname);
  let offerItems = [];

  try {
    offerItems = t.raw('offerMenu.items');
  } catch (error) {
    console.error('Translation error for offerMenu.items:', error);
  }

  // Close menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 795.98) {
        setIsMenuOpen(false);
        setIsDropdownOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close dropdown if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);
  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };
// Proveri širinu prozora
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Inicijalna provera
    window.addEventListener('resize', handleResize); // Slušaj promene širine

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <nav className={`navbar navbar-expand-md ${isDynamicOfferPage ? 'navbar-shadow' : ''}`}>
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <Logo brandName={brandName} />

        {/* Toggler ikona */}
        <button
          className="d-md-none bg-transparent border-0"
          type="button"
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          <HamburgerIcon width={24} height={24} />

        </button>

        {/* Collapse meni */}
     <div
      className={`collapse navbar-collapse d-md-flex flex-md-row ${
        isMenuOpen ? 'show' : ''
      } ${isMobile ? 'custom-collapse-menu' : ''}`}
    >
          <ul className="navbar-nav w-100 justify-content-md-end">
{isMobile && isMenuOpen && (
  <button
    className="btn btn-link position-absolute top-0 end-0 m-2 p-2"
    onClick={closeMenu}
    aria-label="Close menu"
  >
    <CloseIcon width={24} height={24} />
  </button>
)}


            <li className="nav-item">
              <Link className="nav-link" href={t('homeLink.href')} onClick={closeMenu}>
                {t('homeLink.label')}
              </Link>
            </li>

            <li className="nav-item dropdown" ref={dropdownRef}>
              <button
                className="nav-link dropdown-toggle bg-transparent border-0"
                type="button"
                onClick={toggleDropdown}
                aria-expanded={isDropdownOpen}
              >
                {t('offerMenu.label')}
                  <ArrowDownIcon width={16} height={16} className="arrow-down-icon ms-1"/>
              </button>
              <ul
                className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}
              >
                {offerItems.map((item) => (
                  <li key={item.key}>
                    <Link
                      className="dropdown-item"
                      href={`/${locale === 'sr' ? 'ponuda' : 'offer'}/${item.href}`}
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href={t('contactLink.href')} onClick={closeMenu}>
                {t('contactLink.label')}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href={t('houseRulesLink.href')} onClick={closeMenu}>
                {t('houseRulesLink.label')}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href={t('usefulInfoLink.href')} onClick={closeMenu}>
                {t('usefulInfoLink.label')}
              </Link>
            </li>
          </ul>
        </div>
      </div>

     
    </nav>
  );
}
