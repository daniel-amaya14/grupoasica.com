import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import HeroImage from '@/public/images/imghero.webp';

export default function Hero() {
  return (
    <div className="relative flex flex-col py-8 lg:pt-0 lg:flex-col lg:pb-0 bg-white">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto mb-10 md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <Image
          className="object-cover w-full h-56 rounded shadow-lg lg:object-left lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src={HeroImage}
          alt=""
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16. lg:my-40 lg:max-w-lg lg:pr-5">
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
            Desde 1994
          </p>
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-wide sm:leading-none text-fontPrimary text-justify">
            Tu socio confiable en soluciones tecnológicas{' '}
            <span className="text-gray-900">
              para un futuro exitoso
              {/* experiencia y excelencia en servicios tecnológicos */}
              {/* Experiencia y excelencia en servicios tecnológicos para impulsar
              tu empresa al siguiente nivel */}
            </span>
            {/* <span className="inline-block text-purple-400">is real</span> */}
          </h2>
          <p className="pr-5 mb-5 text-justify text-base text-gray-700 md:text-lg">
            Confía en Grupo ASICA, con más de 28 años liderando soluciones
            tecnológicas de calidad para impulsar el crecimiento de tu empresa
            con responsabilidad y visión a futuro.
          </p>
          <div className="">
            <Link
              href="/servicios"
              className="inline-flex items-center justify-center h-12 px-4 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-700 hover:bg-blue-800 active:ring-4 active:ring-blue-300 focus:outline-none"
            >
              Conoce nuestros servicios
            </Link>
            {/* <Link
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-purple-700"
            >
              Learn more
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}
