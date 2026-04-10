'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  {
    label: 'About',
    dropdown: [
      { label: 'Our Story', href: '/about' },
      { label: 'Doctors & Staff', href: '/about/doctors-staff' },
    ],
  },
  {
    label: 'Vision Care',
    dropdown: [
      { label: 'Eye Exams', href: '/vision-care/eye-exams' },
      { label: 'Lenses & Frames', href: '/vision-care/lenses-frames' },
      { label: 'Contacts', href: '/vision-care/contacts' },
      { label: 'Dry Eye', href: '/vision-care/dry-eye' },
      { label: 'Myopia Control', href: '/vision-care/myopia-control' },
      { label: 'Neurolens', href: '/vision-care/neurolens' },
      { label: 'Pediatric', href: '/vision-care/pediatric' },
      { label: 'Emergency Exams', href: '/vision-care/emergency-exams' },
      { label: 'Eye Disease', href: '/vision-care/eye-disease' },
    ],
  },
  {
    label: 'Eyewear',
    href: '/vision-care/lenses-frames',
  },
  {
    label: 'Patients',
    dropdown: [
      { label: 'Overview', href: '/patients' },
      { label: 'Insurance', href: '/patients/insurance' },
      { label: 'Forms', href: '/patients/forms' },
      { label: 'Financing', href: '/patients/financing' },
    ],
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

function GlassesIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="12" cy="10" r="9" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="36" cy="10" r="9" stroke="currentColor" strokeWidth="2.5" />
      <path
        d="M21 10c1.5-3 4.5-3 6 0"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M3 10C1.5 8 0.5 6 0 5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M45 10c1.5-2 2.5-4 3-5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChevronDownIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function PhoneIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function HamburgerIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleMouseEnter = (label) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const toggleMobileDropdown = (label) => {
    setMobileOpenDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <GlassesIcon className="h-6 w-auto text-[#1B4DC0]" />
            <span className="text-lg font-bold tracking-tight text-[#0D2B6E]">
              Eyes on Central
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(link.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    type="button"
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-[#0D2B6E] rounded-lg hover:bg-gray-50 transition-colors"
                    aria-expanded={openDropdown === link.label}
                    aria-haspopup="true"
                  >
                    {link.label}
                    <ChevronDownIcon
                      className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                        openDropdown === link.label ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Dropdown */}
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-200 ${
                      openDropdown === link.label
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 -translate-y-1 pointer-events-none'
                    }`}
                  >
                    <div
                      className={`bg-white rounded-xl shadow-lg ring-1 ring-black/5 overflow-hidden ${
                        link.label === 'Vision Care'
                          ? 'w-[480px] p-4'
                          : 'w-56 py-2'
                      }`}
                    >
                      {link.label === 'Vision Care' ? (
                        <div className="grid grid-cols-2 gap-1">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="flex items-center gap-2 px-3 py-2.5 text-sm text-[#0D2B6E] rounded-lg hover:bg-[#1B4DC0]/5 transition-colors"
                              onClick={() => setOpenDropdown(null)}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      ) : (
                        link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block px-4 py-2.5 text-sm text-[#0D2B6E] hover:bg-[#1B4DC0]/5 transition-colors"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {item.label}
                          </Link>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-[#0D2B6E] rounded-lg hover:bg-gray-50 transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Right Side: Phone Button + Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+17278002020"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-[#1B4DC0] text-white text-sm font-semibold rounded-lg hover:bg-[#1640A0] transition-colors"
            >
              <PhoneIcon className="w-4 h-4" />
              (727) 800-2020
            </a>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-[#0D2B6E] hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <CloseIcon className="w-6 h-6" />
              ) : (
                <HamburgerIcon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-[calc(100vh-72px)] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="border-t border-gray-100 bg-white px-4 sm:px-6 pb-6 pt-2">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.label}>
                <button
                  type="button"
                  className="flex items-center justify-between w-full py-3 text-base font-medium text-[#0D2B6E]"
                  onClick={() => toggleMobileDropdown(link.label)}
                  aria-expanded={mobileOpenDropdown === link.label}
                >
                  {link.label}
                  <ChevronDownIcon
                    className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                      mobileOpenDropdown === link.label ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    mobileOpenDropdown === link.label
                      ? 'max-h-96 opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pl-4 pb-2 space-y-1">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block py-2 text-sm text-gray-600 hover:text-[#1B4DC0] transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="block py-3 text-base font-medium text-[#0D2B6E] hover:text-[#1B4DC0] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}

          {/* Mobile Phone Button */}
          <div className="mt-4 pt-4 border-t border-gray-100">
            <a
              href="tel:+17278002020"
              className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-[#1B4DC0] text-white text-sm font-semibold rounded-lg hover:bg-[#1640A0] transition-colors"
            >
              <PhoneIcon className="w-4 h-4" />
              (727) 800-2020
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
