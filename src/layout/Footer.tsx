import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LogoAsica from '@/public/images/logo-asica.png';
import {
  IconLinkedin,
  IconFacebook,
  IconInstagram,
  IconWhatsapp,
  IconYoutube,
} from '@/components/Icons';

const itemsServices = [
  { title: 'Gibierno', href: '/servicios/gobierno' },
  { title: 'Corporación', href: '/servicios/corporacion' },
  { title: 'Pymes', href: '/servicios/pymes' },
  { title: 'Banca y Finanzas', href: '/servicios/banca' },
  { title: 'Salud', href: '/servicios/salud' },
  { title: 'Educación', href: '/servicios/educacion' },
  { title: 'Entrenamiento', href: '/servicios/entrenamiento' },
];

const itemsCompany = [
  { title: 'Sobre nosotros', href: '/about' },
  { title: 'Partners', href: '/partners' },
  { title: 'Legal', href: '/Legal' },
  {
    title: 'Sistema de tickets',
    href: 'https://grupoasica.freshdesk.com/support/login',
    target: '_blank',
  },
];

const itemsRedes = [
  { title: 'Whatsapp', icon: IconWhatsapp, href: '' },
  { title: 'Linkedin', icon: IconLinkedin, href: '' },
  { title: 'YouTube', icon: IconYoutube, href: '' },
  { title: 'Facebook', icon: IconFacebook, href: '' },
  { title: 'Instagram', icon: IconInstagram, href: '' },
];

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="bg-[#f4f3ff]">
      <div className="max-w-7xl px-4 py-10 mx-auto sm:px-6 lg:px-8 lg:py-14">
        <div className="flex flex-col gap-14 md:flex-row">
          {/* logo, contacto, copy */}
          <div className="md:max-w-xs lg:max-w-md">
            <Image
              src={LogoAsica}
              alt="Logo grupo asica"
              className="w-48 -ml-6"
            />
            <ul className="flex flex-col gap-3 mb-4 -mt-2 text-sm leading-relaxed text-gray-500">
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                ventas@grupoasica.com
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                PBX : (+504) 2203-6275
              </li>
              <li className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                <span className="-mt-[2px]">
                  Colonia Payaquí, casa N°1650, Tegucigalpa M.D.C. Honduras,
                  C.A.
                </span>
              </li>
            </ul>
          </div>

          <div className="flex-1 grid grid-cols-2 gap-6 md:grid-cols-3">
            {/* servicios */}
            <div className="">
              <h4 className="text-xs font-semibold uppercase text-gray-900">
                Servicios
              </h4>

              <ul className="mt-3 grid space-y-3 text-sm">
                {itemsServices.map(({ title, href }) => {
                  return (
                    <li key={title}>
                      <Link
                        className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800"
                        href={href}
                      >
                        {title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* company */}
            <div className="">
              <h4 className="text-xs font-semibold uppercase text-gray-900 ">
                Empresa
              </h4>

              <ul className="mt-3 grid space-y-3 text-sm">
                {itemsCompany.map(
                  ({
                    title,
                    href,
                    target = '_self',
                  }: {
                    title: string;
                    href: string;
                    target?: string;
                  }) => {
                    return (
                      <li key={title}>
                        <Link
                          className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 "
                          href={href}
                          target={target}
                        >
                          {title}
                        </Link>
                      </li>
                    );
                  }
                )}
              </ul>
            </div>

            {/* redes */}
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-xs font-semibold uppercase text-gray-900 ">
                Redes
              </h4>

              <ul className="mt-3 space-x-4 text-sm">
                {itemsRedes.map(({ title, icon, href }) => {
                  return (
                    <Link
                      key={title}
                      href={href}
                      className="inline-block text-gray-500 hover:text-gray-800"
                    >
                      {React.createElement(icon, { className: 'h-6 w-6' })}
                    </Link>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-5 border-t border-gray-200 pt-5">
          <div className="flex flex-wrap gap-y-4 items-center justify-between">
            {/*  */}
            <div className="">
              <div className="space-x-4 text-sm">
                <Link
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 "
                  href="#"
                >
                  Terminos
                </Link>
                <Link
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 "
                  href="#"
                >
                  Privacidad
                </Link>
              </div>
            </div>
            {/*  */}
            <div>
              <span className="inline-block text-xs text-gray-600 text-center sm:text-sm">
                © {year} Grupo ASICA
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
