import React from 'react';
import CardLarge from '../CardLarge';
import { Icon } from '@iconify/react';

const itemsCertificaciones = [
  {
    name: 'CPTS',
    description: 'HTB Certified Penetration Testing Specialist',
    modulos: '28',
  },
  {
    name: 'CBBH',
    description: 'HTB Certified Bug Bounty Hunter',
    modulos: '20',
  },
  {
    name: 'Otro',
    description: 'Lorem ipsum dolor sit amet',
    modulos: '20',
  },
];

export default function ListCardsCertificaciones() {
  return (
    <div className="grid grid-cols-auto-layout-14 auto-rows-auto grid-flow-dense place-items-center gap-4">
      {itemsCertificaciones.map(({ name, description, modulos }) => (
        <CardLarge
          title={name}
          key={name.toLowerCase().replaceAll(' ', '-')}
        >
          <p className="text-xs mb-3">{description}</p>
          <div className="flex items-center gap-6">
            <div className="flex justify-center items-center gap-2">
              <Icon icon="fluent:layer-20-filled" />
              <p className="text-xs">{modulos} módulos</p>
            </div>
            <div className="flex justify-center items-center gap-2">
              <Icon icon="mingcute:certificate-fill" />
              <p className="text-xs">{modulos} Examen Incluido</p>
            </div>
          </div>
        </CardLarge>
      ))}
    </div>
  );
}
