import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import Huntress from '@/public/partners/huntress.svg';
import SAS from '@/public/partners/sas.svg';
import JUMPCLOUD from '@/public/partners/jumpcloud.svg';
import HTB from '@/public/partners/htb.svg';
import GREMLIN from '@/public/partners/gremlin.svg';
import DATADOG from '@/public/partners/datadog.svg';
import CATO from '@/public/partners/cato.svg';

const logos = [
  { src: Huntress, alt: 'logo huntress', href: '/partners' },
  { src: SAS, alt: 'logo sas', href: '/partners' },
  { src: JUMPCLOUD, alt: 'logo jumpcloud', href: '/partners' },
  { src: HTB, alt: 'logo htb', href: '/partners' },
  { src: GREMLIN, alt: 'logo gremlin', href: '/partners' },
  { src: DATADOG, alt: 'logo datadog', href: '/partners' },
  { src: CATO, alt: 'logo cato', href: '/partners' },
];

export default function PartnersList() {
  return (
    <>
      {/* m-auto md:w-11/12 lg:w-8/12 xl:w-7/12 */}
      <div className="m-auto md:w-11/12 lg:w-8/12 xl:w-full">
        <div className="flex flex-wrap justify-center gap-6">
          {logos.map(({ src, alt, href = '#' }) => (
            <Link
              href={href}
              key={alt}
            >
              <CardPartner
                src={src}
                alt={alt}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

interface CardPartnerProps {
  src: StaticImageData;
  alt: string;
}

const CardPartner = ({ src, alt }: CardPartnerProps) => {
  return (
    <div className="group py-2 px-4 rounded-xl border. border-gray-200. bg-white. bg-opacity-5. hover:bg-opacity-10. flex items-center hover:bg-white">
      <Image
        src={src}
        className="contrast-0 transition duration-100 ease-in-out group-hover:contrast-100"
        loading="lazy"
        alt={alt}
        width={120}
        height={100}
      />
    </div>
  );
};
