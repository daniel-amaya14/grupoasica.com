import React from 'react';
import RootLayout from '@/layout/RootLayout';
import CardPartner from '@/components/CardPartner';

import IconCATO from '@/public/svg/cato-networks.svg';
import IconDATADOG from '@/public/svg/datadog.svg';
import IconHTB from '@/public/svg/htb.svg';
import IconHuntress from '@/public/svg/huntress.svg';
import IconJumpcloud from '@/public/svg/jumpcloud.svg';
import IconSAS from '@/public/svg/sas.svg';
import IconGremlin from '@/public/svg/gremlin.svg';

const ItemsPartnersPrincipales = [
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
    <RootLayout>
      <section className="flex flex-col justify-between overflow-hidden">
        <div className="py-6 px-8 xl:px-40 xl:py-10">
          <h2 className="text-2xl font-bold text-[#5D4B9F] pb-4 md:text-4xl">
            Contamos con la mejor red de colaboradores
          </h2>
          <p className="text-sm pb-6 md:text-base md:pb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            excepturi perspiciatis ab! Obcaecati impedit natus dolorem, a
            laboriosam voluptatibus debitis ipsam porro, placeat culpa expedita
            eum, autem facilis saepe delectus.
          </p>
          <div className="grid grid-cols-auto-layout-partners md:grid-cols-auto-layout-partners-md xl:grid-cols-auto-layout-partners-xl auto-rows-fr gap-4 mb-10">
            {ItemsPartnersPrincipales.map(({ name, src, url, alt }) => (
              <CardPartner
                key={name.toLowerCase().replaceAll(' ', '-')}
                name={name}
                src={src}
                url={url}
                alt={alt}
              />
            ))}
          </div>
          <div className="text-center">
            <button className="bg-indigo-400 hover:bg-indigo-600 text-white py-3 px-4 rounded-md">
              Convertirse en Partner
            </button>
          </div>
        </div>
      </section>
    </RootLayout>
  );
}
