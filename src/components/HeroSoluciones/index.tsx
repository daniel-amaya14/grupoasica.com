import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

export interface HeroSolucionesProps {
  bannerTitlte: string;
  imageUrl: StaticImageData;
}

export default function HeroSoluciones({
  bannerTitlte,
  imageUrl,
}: HeroSolucionesProps) {
  return (
    <section className="relative">
      <Image
        src={imageUrl}
        alt="Picture of the author"
        fill={true}
        className="object-cover object-no-repeat"
      />

      <div className="absolute inset-0 bg-black/40 sm:bg-transparent sm:bg-gradient-to-r sm:from-black/50 sm:to-black/25"></div>

      <div className="relative mx-auto w-full max-w-screen-xll px-4 py-20 sm:px-6 lg:py-28 lg:flex lg:h-full lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl text-white font-extrabold sm:text-5xl sm:leading-tight">
            {bannerTitlte}
            {/* <strong className="block font-extrabold text-rose-700">
              Forever Home.
            </strong> */}
          </h1>

          <p className="text-white text-justify mt-4 max-w-md sm:text-xl sm:leading-relaxed lg:max-w-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <Link
              href="/servicios/formulario"
              className="block w-full rounded px-12 py-3 text-sm font-medium shadow focus:ring text-white bg-blue-700 hover:bg-blue-800 active:ring-4 active:ring-blue-300 focus:outline-none sm:w-auto"
            >
              Solicitar sevicio
            </Link>

            <Link
              href="/contacto"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-blue-800 shadow hover:text-blue-600 transition duration-300 focus:outline-none active:ring-4 active:ring-blue-300  sm:w-auto"
            >
              Quiero más información
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
