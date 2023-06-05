import React from 'react';
import Image from 'next/image';
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
    title: 'SAS',
    img: IconSAS,
    href: 'https://www.sas.com/es_mx/home.html',
    alt: 'Logo SAS',
  },
  {
    title: 'Hack The Box',
    img: IconHTB,
    href: 'https://www.hackthebox.com/',
    alt: 'Logo Hack The Box',
  },
  {
    title: 'CATO Networks',
    img: IconCATO,
    href: 'https://www.catonetworks.com/',
    alt: 'Logo CATO Networks',
  },
  {
    title: 'JumpCloud',
    img: IconJumpcloud,
    href: 'https://jumpcloud.com/',
    alt: 'Logo JumpCloud',
  },
  {
    title: 'Huntress',
    img: IconHuntress,
    href: 'https://www.huntress.com/',
    alt: 'Logo Huntress',
  },
  {
    title: 'DATADOG',
    img: IconDATADOG,
    href: 'https://www.datadoghq.com/',
    alt: 'Logo DATADOG',
  },
  {
    title: 'Gremlin',
    img: IconGremlin,
    href: 'https://www.gremlin.com/',
    alt: 'Logo Gremlin',
  },
];

export default function Partners() {
  return (
    <>
      <div className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute -top-96 left-1/2 flex -translate-x-1/2 transform"
        >
          <div className="h-[44rem] w-[25rem] -translate-x-[10rem] rotate-[-60deg] transform bg-gradient-to-r from-violet-300/50 to-purple-100 blur-3xl"></div>
          <div className="rounded-fulls h-[50rem] w-[90rem] origin-top-left -translate-x-[15rem] -rotate-12 bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl"></div>
        </div>

        <div className="relative z-10">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-28 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mt-5 max-w-2xl">
                <h1 className="block text-4xl font-semibold text-gray-800 md:text-5xl lg:text-6xl">
                  Conoce a nuestros partners
                </h1>
              </div>
              <div className="mt-5 max-w-3xl">
                <p className="text-lg text-gray-600">
                  Contamos con la mejor red de colaboradores. Nuestros partners
                  nos ayudan a ofrecer soluciones integrales a nuestros
                  clientes. Si quieres ser parte de nuestra red de
                  colaboradores, contáctanos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="max-w-7xl px-4 py-10 mx-auto sm:px-6 lg:px-8 lg:py-14">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 lg:gap-6">
          {partners.map(({ title, img, href, alt }) => {
            return (
              <Link
                key={title}
                href={href}
              >
                <div className="rounded-lg bg-gray-100 p-4 md:p-7 border shadow-sm transition-all hover:shadow-lg hover:border-blue-300">
                  <Image
                    src={img}
                    alt={alt}
                    width={100}
                    height={100}
                    className="mx-auto h-12 w-16 text-gray-800 md:w-20 lg:w-24 "
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
