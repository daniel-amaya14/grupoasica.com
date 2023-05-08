import React from 'react';
// import Link from 'next/link';
import Image from 'next/image';
import ImgAprende from '@/public/svg/aprende.svg';

export default function Aprende() {
  return (
    <section className="">
      <div className="flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        {/*  */}
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <Image
            src={ImgAprende}
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>

        {/*  */}
        <div className="flex flex-col justify-center rounded-sm mt-10 lg:mt-0 lg:max-w-md xl:max-w-xl">
          <h2 className="text-4xl font-bold leading-none sm:text-6xl">
            Estudia con {''}
            <span className="text-fontPrimary">nosotros</span>
          </h2>
          <p className="mt-6 text-lg text-justify">
            <span className="block mb-4 font-semibold">
              ¿Estás buscando dar un impulso a tu carrera profesional?
            </span>
            ¡Las capacitaciones y certificaciones son la clave para lograrlo!
            Con nuestro catálogo de programas de formación, podrás adquirir las
            habilidades y conocimientos necesarios para destacarte en tu campo
            laboral y aumentar tus oportunidades de crecimiento y desarrollo.
          </p>
          {/* <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 text-md font-semibold rounded text-white bg-indigo-600 transition hover:bg-indigo-700 focus:outline-none focus:ring"
            >
              Más información
            </Link>
            <Link
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 text-md font-semibold border rounded bg-white border-indigo-600 transition hover:text-indigo-600"
            >
              Solicitar
            </Link>
          </div> */}
        </div>
      </div>
    </section>
  );
}
