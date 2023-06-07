import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import ImageHome from '@/public/images/imghero.webp';

export default function Hero() {
  return (
    <section className="relative h-full flex justify-center items-center md:h-[100vh] overflow-hidden">
      <Image
        src={ImageHome}
        alt="Picture of the author"
        fill={true}
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/40 bg-gradient-to-r from-black/40 to-black/40"></div>

      <div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
        <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl sm:text-center md:max-w-2xl">
          <h1 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
            Tu socio confiable en soluciones tecnológicas para un futuro exitoso
            <br className="hidden md:block" />
          </h1>
          <p className="mb-10 max-w-md text-xs text-center tracking-wide text-gray-200 sm:mx-auto sm:text-sm md:mb-16">
            Confía en Grupo ASICA, con más de 28 años liderando soluciones
            tecnológicas de calidad para impulsar el crecimiento de tu empresa
            con responsabilidad y visión a futuro.
          </p>
          <Link
            href="#servicios"
            scroll={false}
            aria-label="Scroll down"
            className="mx-auto flex h-10 w-10 transform items-center justify-center rounded-full border border-gray-400 text-white duration-300 hover:scale-110 hover:border-teal-400 hover:text-teal-400 hover:shadow motion-safe:animate-bounce-slow"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="currentColor"
            >
              <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
            </svg>
          </Link>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0">
        <svg
          viewBox="0 0 224 12"
          fill="currentColor"
          className="-mb-1 w-full text-white"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
        </svg>
      </div>
    </section>
  );
}
