import React from 'react';
import Link from 'next/link';

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

interface InfoServicesProps {
  title?: string;
  showBtn?: boolean;
}

export default function InfoServices({ title, showBtn }: InfoServicesProps) {
  return (
    <div className="max-w-screen-xl">
      <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg lg:gap-x-6">
        <div className=" max-w-lg lg:mx-0">
          <h1 className="text-3xl font-bold xl:text-4xl">
            {title ? title : 'Nuestros Servicios'}
          </h1>

          <p className="mt-4 text-gray-600 text-justify">
            Ofrecemos soluciones informáticas y servicios especializados para
            satisfacer las necesidades de nuestros clientes en distintos
            ámbitos.
          </p>

          {!showBtn ? (
            <>
              <Link
                href="/servicios"
                className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring "
              >
                Más información
              </Link>
            </>
          ) : null}
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {heroItems.links.map((link) => (
            <LinkCard
              key={link.href}
              {...link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

interface LinkCardProps {
  title: string;
  href: string;
  Icon: any;
}

const LinkCard = ({ title, href, Icon }: LinkCardProps) => {
  return (
    <Link
      href={`/${href}`}
      scroll={false}
      className="relative block rounded-xl bg-white bg-opacity-75 border border-gray-100 p-4 shadow-sm transition duration-300 transform hover:-translate-y-2 hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring group"
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
