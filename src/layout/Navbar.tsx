import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LogoAsica from '@/public/images/logo-asica.png';

const navLinks = [
  { name: 'Inicio', href: '/' },
  { name: 'Sobre nosotros', href: '/about' },
  { name: 'Servicios', href: '/servicios' },
  { name: 'Partners', href: '/partners' },
  { name: 'Soporte', href: 'https://grupoasica.freshdesk.com/support/login' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleMobileMenuToggle = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <nav className="bg-white w-full border-b border-gray-200">
      {/* container */}
      <div className="flex flex-wrap items-center justify-between  mx-auto sm:px-2">
        {/* Logo */}
        <div className="flex items-center md:flex-1">
          <Link href="/">
            <Image
              src={LogoAsica}
              width={140}
              height={140}
              alt="Grupo ASICA Logo"
            />
            <span className="sr-only self-center text-xl font-semibold whitespace-nowrap">
              Grupo ASICA
            </span>
          </Link>
        </div>

        {/* Boton contacto y menu mobil */}
        <div className="flex md:justify-end md:flex-1 md:order-2 mr-1 sm:mr-0">
          <Link
            href="/contacto"
            className="text-white bg-blue-700 hover:bg-blue-800 active:ring-4 active:ring-blue-300 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 md:mr-0"
          >
            Contacto
          </Link>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded="false"
            onClick={handleMobileMenuToggle}
          >
            <span className="sr-only">Abrir menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="enevenodd"
              ></path>
            </svg>
          </button>
        </div>

        {/* navLinks */}
        <div
          className={` ${
            !mobileMenuOpen ? 'hidden' : 'block'
          } items-center justify-between w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 mb-2.5 md:mb-0 md:flex-row md:space-x-8 md:mt-0 md:text-base md:font-medium md:border-0 md:bg-transparent">
            {navLinks.map(({ name, href }) => (
              <li key={name}>
                <Link
                  href={href}
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:text-blue-700 hover:bg-gray-100 md:hover:bg-transparent md:p-0 hover:underline"
                  onClick={handleMobileMenuToggle}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
