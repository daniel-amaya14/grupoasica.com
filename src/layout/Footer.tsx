import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LogoAsica from '@/public/images/logo-asica.png';
import { SERVICIOS } from '@/data/listServices';
import {
  IconLinkedin,
  IconFacebook,
  IconInstagram,
  IconWhatsapp,
  IconYoutube,
} from '@/components/Icons';

const listServices = [
  ...Object.values(SERVICIOS),
  { title: 'Entrenamiento', href: '/servicios/entrenamientos' },
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
  { title: 'Whatsapp', icon: IconWhatsapp, href: 'https://wa.me/+50432806272' },
  {
    title: 'Linkedin',
    icon: IconLinkedin,
    href: 'https://www.linkedin.com/company/grupoasicahn/',
  },
  {
    title: 'YouTube',
    icon: IconYoutube,
    href: 'https://www.youtube.com/channel/UCOSYcdIKeAiX1wB09Jj6DyA',
  },
  {
    title: 'Facebook',
    icon: IconFacebook,
    href: 'https://www.facebook.com/Grupo.ASICA1',
  },
  {
    title: 'Instagram',
    icon: IconInstagram,
    href: 'https://www.instagram.com/grupo.asica1/',
  },
];

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer
      className="bg-[#f4f3ff]"
      id="footer"
    >
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
              <li className="inline-flex">
                <Link
                  href="mailto:ventas@grupoasica.com"
                  className="inline-flex items-center gap-2"
                >
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
                </Link>
              </li>
              <li className="inline-flex">
                <Link
                  href="https://wa.me/+50432806272"
                  className="inline-flex items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    strokeWidth={2}
                    className="h-5 w-5 shrink-0"
                  >
                    <path
                      strokeWidth={2}
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263"
                    ></path>
                  </svg>
                  +504 3280-6272
                </Link>
              </li>
              <li className="inline-flex">
                <Link
                  href="tel:+50422036275"
                  className="inline-flex items-center gap-2"
                >
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
                  +504 2203-6275
                </Link>
              </li>
              <li className="inline-flex">
                <Link
                  href="https://goo.gl/maps/dXTNPsimcYRwZekK7"
                  target="_blank"
                  className="inline-flex gap-2"
                >
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
                </Link>
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
                {listServices.map(({ title, href }) => {
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
                      target="_blank"
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
              <Link
                href="#"
                className="inline-block text-xs text-gray-600 text-center sm:text-sm"
              >
                © {year} Grupo ASICA
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
