import React from 'react';
import BannerInfoServicios from '@/components/BannerInfoServicios';
import Image from 'next/image';
import ImgContacto from '@/public/images/contacto.webp';
import FormContact from '@/components/Forms/FormContact';

export default function Contact() {
  return (
    <section className="bg-white">
      <BannerInfoServicios />

      {/* container */}
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        {/* imagen */}
        <section className="relative flex h-32 items-start bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <Image
            alt=""
            src={ImgContacto}
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />

          {/* title - desktop */}
          <div className="hidden lg:relative lg:block lg:p-12">
            {/* icono */}
            <div className="text-white">
              <svg
                className="h-8 sm:h-12"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M22 5.5H9c-1.1 0-2 .9-2 2v9a2 2 0 0 0 2 2h13c1.11 0 2-.89 2-2v-9a2 2 0 0 0-2-2m0 11H9V9.17l6.5 3.33L22 9.17v7.33m-6.5-5.69L9 7.5h13l-6.5 3.31M5 16.5c0 .17.03.33.05.5H1c-.552 0-1-.45-1-1s.448-1 1-1h4v1.5M3 7h2.05c-.02.17-.05.33-.05.5V9H3c-.55 0-1-.45-1-1s.45-1 1-1m-2 5c0-.55.45-1 1-1h3v2H2c-.55 0-1-.45-1-1Z"
                />
              </svg>
            </div>

            {/* title */}
            <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Comunícate con nosotros 💬
            </h2>

            {/* info */}
            <ul className="flex flex-col gap-3 mt-4 text-white/90 leading-relaxed">
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
          </div>
        </section>

        {/* formulario - title mobile */}
        <section
          aria-label="Main"
          className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
        >
          {/* container */}
          <div className="w-full">
            {/* title mobile */}
            <div className="relative -mt-16 block lg:hidden">
              {/* icono */}
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20">
                <svg
                  className="h-10 sm:h-12"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M22 5.5H9c-1.1 0-2 .9-2 2v9a2 2 0 0 0 2 2h13c1.11 0 2-.89 2-2v-9a2 2 0 0 0-2-2m0 11H9V9.17l6.5 3.33L22 9.17v7.33m-6.5-5.69L9 7.5h13l-6.5 3.31M5 16.5c0 .17.03.33.05.5H1c-.552 0-1-.45-1-1s.448-1 1-1h4v1.5M3 7h2.05c-.02.17-.05.33-.05.5V9H3c-.55 0-1-.45-1-1s.45-1 1-1m-2 5c0-.55.45-1 1-1h3v2H2c-.55 0-1-.45-1-1Z"
                  />
                </svg>
              </div>
              {/* title */}
              <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Comunícate con nosotros 💬
              </h1>

              {/* info */}
              <ul className="flex flex-col gap-3 mt-4 text-gray-500 leading-relaxed">
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
            </div>

            {/* span formulario */}
            <p className="text-gray-600 mt-10 mb-6 text-sm lg:mt-0">
              Campos marcados con <span className="text-red-600">*</span> son
              requeridos
            </p>

            {/* formulario */}
            <FormContact />
          </div>
        </section>
      </div>
    </section>
  );
}
