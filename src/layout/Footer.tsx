import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LogoASICA from '@/public/images/logo-asica.png';
import {
  IconYoutube,
  IconInstagram,
  IconLinkedin,
  IconFacebook,
  IconWhatsapp,
} from '@/components/Icons';

const listaServicios = [
  { name: 'Gobierno', href: '/gobierno' },
  { name: 'Coporación', href: '/corporacion' },
  { name: 'PYMES', href: '/pymes' },
  { name: 'Banca y Finanzas', href: '/banca' },
  { name: 'Salud', href: '/salud' },
  { name: 'Estudiante', href: '/educacion' },
];

const listaProductos = [
  { name: 'Analítica Avanzada', href: '/sas' },
  { name: 'Ciberseguridad', href: '/seguridad' },
  { name: 'Identidad Digital', href: '/soluciones/identidad-digital' },
  { name: 'Entrenamiento', href: '/soluciones/entrenamiento' },
  {
    name: 'Inteligencia Artificial',
    href: '/soluciones/sas',
  },
  {
    name: 'Ver más',
    href: '/servicios',
  },
];

const listaAyuda = [
  { name: 'Contacto', href: '/contacto' },
  {
    name: 'Abrir ticket de soporte técnico',
    href: 'https://grupoasica.freshdesk.com/support/login',
  },
  { name: 'Legal', href: '/legal' },
];

interface ListarItemsProps {
  listaItems: { name: string; href: string }[];
  title: string;
}

const ListarItems = ({ listaItems, title }: ListarItemsProps) => {
  return (
    <div className="max-w-[20rem]">
      <h4 className="font-bold mb-6 text-[#404143] text-lg">{title}</h4>
      <ul className="flex flex-col gap-3 text-sm">
        {listaItems.map(({ name, href = '' }) => (
          <Link
            href={href}
            key={name}
            className="hover:text-primary"
          >
            {name}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="bg-[#f4f3ff] px-6 pt-16 pb-10 xl:px-20 xl:pt-16">
      <section>
        <div className="flex flex-col gap-10 mb-10 md:flex-row justify-between xl:gap-20">
          {/* lista información */}
          <div className="max-w-[20rem] -mt-4">
            <Image
              src={LogoASICA}
              alt="Logo ASICA"
              width={160}
              className="-ml-4"
            />
            <ul className="flex flex-col gap-3 mb-4 text-sm leading-relaxed">
              {/* email */}
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
                  />
                </svg>
                ventas@grupoasica.com
              </li>
              {/* phone */}
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
                  />
                </svg>
                PBX : (+504) 2203-6275
              </li>
              {/* location */}
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
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="-mt-[2px]">
                  Colonia Payaquí, casa N°1650, Tegucigalpa M.D.C. Honduras,
                  C.A.
                </span>
              </li>
            </ul>

            <div className="flex flex-wrap items-center gap-3 md:gap-4">
              <Link
                href="https://www.linkedin.com/company/grupoasicahn/"
                className="text-gray-500"
              >
                <IconWhatsapp className="h-6 w-6 hover:text-[#25D366]" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/grupoasicahn/"
                target="_blank"
                className="text-gray-500"
              >
                <IconLinkedin className="h-6 w-6 hover:text-[#0A66C2]" />
              </Link>
              <Link
                href="https://www.youtube.com/channel/UCOSYcdIKeAiX1wB09Jj6DyA"
                target="_blank"
                className="text-gray-500"
              >
                <IconYoutube className="h-6 w-6 hover:text-[#FF0000]" />
              </Link>
              <Link
                href="https://www.facebook.com/Grupo.ASICA1"
                target="_blank"
                className="text-gray-500"
              >
                <IconFacebook className="h-6 w-6 hover:text-[#1877F2]" />
              </Link>
              <Link
                href="https://www.instagram.com/grupo.asica1/"
                target="_blank"
                className="text-gray-500"
              >
                <IconInstagram className="h-6 w-6 hover:text-[#E4405F]" />
              </Link>
            </div>
          </div>

          {/* lista-servicios */}
          <ListarItems
            listaItems={listaServicios}
            title="Servicios"
          />

          {/* lista-productos */}
          <ListarItems
            listaItems={listaProductos}
            title="Productos"
          />

          {/* lista-ayuda */}
          <ListarItems
            listaItems={listaAyuda}
            title="Ayuda"
          />
        </div>
        <div className="border-t border-gray-100 pt-6">
          <div className="sm:flex sm:justify-between">
            <p className="text-sm text-gray-500">
              <span className="block sm:inline">All rights reserved.</span>

              <Link
                className="inline-block text-teal-600 underline transition hover:text-teal-600/75"
                href="/"
              >
                Terms & Conditions
              </Link>

              <span>&middot;</span>

              <Link
                className="inline-block text-teal-600 underline transition hover:text-teal-600/75"
                href="#"
              >
                Privacy Policy
              </Link>
            </p>

            <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
              &copy; {year} Grupo ASICA
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
}
