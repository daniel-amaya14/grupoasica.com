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
      href: 'banca',
      Icon: (props: IconProps) => <IconBank {...props} />,
    },
    {
      title: 'Salud',
      href: 'salud',
      Icon: (props: IconProps) => <IconHealthLogo {...props} />,
    },
    {
      title: 'Estudiantes',
      href: 'educacion',
      Icon: (props: IconProps) => <IconStudent {...props} />,
    },
  ],
};

export default function ListServices() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-6">
      {heroItems.links.map((link) => (
        <Card
          key={link.href}
          {...link}
        />
      ))}
    </div>
  );
}

interface CardProps {
  title: string;
  href: string;
  Icon: any;
}

const Card = ({ title, href, Icon }: CardProps) => {
  return (
    <Link
      href={`/${href}`}
      scroll={false}
      className="relative flex items-center gap-4 rounded-md bg-white bg-opacity-75 border border-gray-100 px-4 py-8 shadow-sm transition duration-300 transform sm:flex-col sm:items-start sm:py-6 hover:shadow-md hover:-translate-y-2 hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring group"
    >
      <span className="inline-flex">
        <Icon
          className=""
          width={42}
          height={42}
        />
      </span>

      <p className="font-semibold text-primary text-xl sm:text-base">{title}</p>
    </Link>
  );
};
