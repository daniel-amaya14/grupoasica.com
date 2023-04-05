import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

// import IconCATO from '@/public/partners/cato-networks.svg';
import IconCATO from '@/public/partners/cato.svg';
import IconDATADOG from '@/public/partners/datadog.svg';
import IconHTB from '@/public/partners/htb.svg';
import IconHuntress from '@/public/partners/huntress.svg';
import IconJumpcloud from '@/public/partners/jumpcloud.svg';
import IconSAS from '@/public/partners/sas.svg';
import IconGremlin from '@/public/partners/gremlin.svg';

const partners = [
  {
    name: 'SAS',
    src: IconSAS,
    url: 'https://www.sas.com/es_mx/home.html',
    alt: 'Logo SAS',
  },
  {
    name: 'Hack The Box',
    src: IconHTB,
    url: 'https://www.hackthebox.com/',
    alt: 'Logo Hack The Box',
  },
  {
    name: 'CATO Networks',
    src: IconCATO,
    url: 'https://www.catonetworks.com/',
    alt: 'Logo CATO Networks',
  },
  {
    name: 'JumpCloud',
    src: IconJumpcloud,
    url: 'https://jumpcloud.com/',
    alt: 'Logo JumpCloud',
  },
  {
    name: 'Huntress',
    src: IconHuntress,
    url: 'https://www.huntress.com/',
    alt: 'Logo Huntress',
  },
  {
    name: 'DATADOG',
    src: IconDATADOG,
    url: 'https://www.datadoghq.com/',
    alt: 'Logo DATADOG',
  },
  {
    name: 'Gremlin',
    src: IconGremlin,
    url: 'https://www.gremlin.com/',
    alt: 'Logo Gremlin',
  },
];

export default function Partners() {
  return (
    <>
      <section className="flex flex-col gap-12 py-6 px-8 xl:px-40 xl:py-10">
        <div className="flex flex-col gap-6">
          <h1 className="text-2xl font-bold text-fontPrimary text-center md:text-4xl">
            ASICA Partners
          </h1>
          <p className="text-center text-sm md:text-base sm:mx-14 md:mx-16 xl:mx-28">
            Contamos con la mejor red de colaboradores. Nuestros partners nos
            ayudan a ofrecer soluciones integrales a nuestros clientes. Si
            quieres ser parte de nuestra red de colaboradores, contáctanos.
          </p>
        </div>
      </section>
      <section>
        <div className="relative w-full mx-auto md:px-12 lg:px-16 max-w-7xl pb-14">
          <div className="grid grid-cols-2 gap-0.5 md:grid-cols-3 overflow-hidden rounded-md">
            {partners.map(({ src, alt }) => (
              <Card
                key={alt}
                src={src}
                alt={alt}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

interface CardProps {
  src: StaticImageData;
  alt: string;
}

const Card = ({ src, alt }: CardProps) => {
  return (
    <Link
      href="#"
      className="group flex justify-center col-span-1 p-8 bg-gray-100 transition-all duration-200 ease-in-out hover:bg-white hover:shadow-sm"
    >
      <Image
        className="max-h-12 aspect-square contrast-0 group-hover:contrast-100"
        src={src}
        alt={alt}
        width={120}
        height={110}
      />
    </Link>
  );
};
