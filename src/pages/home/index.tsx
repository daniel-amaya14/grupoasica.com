import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ImageHome from '@/public/images/imghero.webp';

import {
  IconGovernment,
  IconCorporation,
  IconPymes,
  IconBank,
  IconHealthLogo,
  IconStudent,
  IconProps,
} from '@/components/Icons';

const heroItems = {
  links: [
    {
      title: 'Gobierno',
      href: 'gobierno',
      Icon: (props: IconProps) => <IconGovernment {...props} />,
    },
    {
      title: 'Corporación',
      href: 'corporacion',
      Icon: (props: IconProps) => <IconCorporation {...props} />,
    },
    {
      title: 'PYMES',
      href: 'pymes',
      Icon: (props: IconProps) => <IconPymes {...props} />,
    },
    {
      title: 'Banca y Finanzas',
      href: 'banca-finanzas',
      Icon: (props: IconProps) => <IconBank {...props} />,
    },
    {
      title: 'Salud',
      href: 'salud',
      Icon: (props: IconProps) => <IconHealthLogo {...props} />,
    },
    {
      title: 'Estudiantes',
      href: 'estudiantes',
      Icon: (props: IconProps) => <IconStudent {...props} />,
    },
  ],
};

export default function Home() {
  return (
    <>
      <div className="relative h-full flex justify-center items-center md:h-[100vh]">
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
              Tu socio confiable en soluciones tecnológicas para un futuro
              exitoso
              <br className="hidden md:block" />
              {/* <span className="relative inline-block px-2">
              <span className="relative text-teal-900 z-10">lazy dog</span>
              <div className="absolute inset-0 -skew-x-12 transform bg-teal-400" />
            </span> */}
            </h1>
            <p className="mb-6 text-base text-white md:text-lg">
              Confía en Grupo ASICA, con más de 28 años liderando soluciones
              tecnológicas de calidad para impulsar el crecimiento de tu empresa
              con responsabilidad y visión a futuro.
            </p>

            {/* <p className="mb-10 max-w-md text-xs tracking-wide text-indigo-100 sm:mx-auto sm:text-sm md:mb-16">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque.
          </p> */}
            <Link
              href="#"
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
      </div>

      <section className="px-6 py-20 xl:px-16">
        {/*  */}
        <div className="max-w-screen-xl">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg lg:gap-x-6">
            <div className=" max-w-lg lg:mx-0">
              <h1 className="text-3xl font-bold xl:text-4xl">¿Quién eres?</h1>

              <p className="mt-4 text-gray-600 text-justify">
                Ofrecemos soluciones informáticas y servicios especializados
                para satisfacer las necesidades de nuestros clientes en
                distintos ámbitos.
              </p>

              <Link
                href="/servicios"
                className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring "
              >
                Más información
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {heroItems.links.map((link) => (
                <LinkHero
                  key={link.href}
                  {...link}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

interface LinkHeroProps {
  title: string;
  href: string;
  Icon: any;
}

const LinkHero = ({ title, href, Icon }: LinkHeroProps) => {
  return (
    <Link
      href={`/${href}`}
      scroll={false}
      className="relative block rounded-lg bg-white bg-opacity-75 border border-gray-100 p-4 shadow-sm transition duration-300 transform hover:-translate-y-2 hover:border-gray-200 hover:shadow-lg hover:shadow-sky-400/30 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring focus:ring-gray-200"
    >
      <span className="inline-block rounded-lg py-3">
        <Icon
          className="text-fontPrimary"
          width={42}
          height={42}
        />
      </span>

      <h2 className="mt-2 font-semibold">{title}</h2>
    </Link>
  );
};
