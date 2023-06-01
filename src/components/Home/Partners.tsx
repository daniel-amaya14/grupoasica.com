import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import IconCATO from '@/public/partners/cato.svg';
import IconDATADOG from '@/public/partners/datadog.svg';
import IconHTB from '@/public/partners/htb.svg';
import IconHuntress from '@/public/partners/huntress.svg';
import IconJumpcloud from '@/public/partners/jumpcloud.svg';
import IconSAS from '@/public/partners/sas.svg';
import IconGremlin from '@/public/partners/gremlin.svg';

const partners = [
  [
    {
      title: 'SAS',
      partnerImg: IconSAS,
      href: 'https://www.sas.com/es_mx/home.html',
      alt: 'Logo SAS',
    },
    {
      title: 'Hack The Box',
      partnerImg: IconHTB,
      href: 'https://www.hackthebox.com/',
      alt: 'Logo Hack The Box',
    },
    {
      title: 'CATO Networks',
      partnerImg: IconCATO,
      href: 'https://www.catonetworks.com/',
      alt: 'Logo CATO Networks',
    },
    {
      title: 'JumpCloud',
      partnerImg: IconJumpcloud,
      href: 'https://jumpcloud.com/',
      alt: 'Logo JumpCloud',
    },
  ],
  [
    {
      title: 'Huntress',
      partnerImg: IconHuntress,
      href: 'https://www.huntress.com/',
      alt: 'Logo Huntress',
    },
    {
      title: 'DATADOG',
      partnerImg: IconDATADOG,
      href: 'https://www.datadoghq.com/',
      alt: 'Logo DATADOG',
    },
    {
      title: 'Gremlin',
      partnerImg: IconGremlin,
      href: 'https://www.gremlin.com/',
      alt: 'Logo Gremlin',
    },
  ],
];

export default function Partners() {
  return (
    <section className="max-w-7xl px-4 py-10 mx-auto sm:px-6 lg:px-8 lg:py-14">
      <div className="w-full sm:w-1/2 lg:w-1/3 mx-auto text-center mb-6 ">
        <h2 className="text-2xl font-bold leading-tight text-gray-600">
          Nuestros partners
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6">
        {partners[0].map(({ alt, partnerImg }) => {
          return (
            <Image
              src={partnerImg}
              alt={alt}
              key={alt}
              className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto text-gray-500"
            />
          );
        })}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 sm:gap-x-6">
        {partners[1].map(({ alt, partnerImg }) => {
          return (
            <Image
              src={partnerImg}
              alt={alt}
              key={alt}
              className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto text-gray-500"
            />
          );
        })}
      </div>

      <div className="mt-8 text-center">
        <Link
          className="group py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle transition-all text-sm hover:bg-blue-600 hover:text-white hover:border-blue-600"
          href="/partners"
        >
          Ver más
          <svg
            className="w-3 h-3 transition-transform duration-500 ease-in-out group-hover:translate-x-1"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
            ></path>
          </svg>
        </Link>
      </div>
    </section>
  );
}
