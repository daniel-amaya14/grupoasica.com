import React from 'react';
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

export default function ListPartners() {
  return (
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
  );
}
