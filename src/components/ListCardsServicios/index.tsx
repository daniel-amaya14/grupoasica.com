import React from 'react';
import CardServicios from '@/components/CardServicios';

const itemsSerevicios = [
  {
    name: 'Gobierno',
    href: 'gobierno',
    icon: 'fluent:building-government-24-regular',
  },
  { name: 'Corporación', href: 'corporacion', icon: 'clarity:building-line' },
  { name: 'PYMES', href: 'pymes', icon: 'fluent:building-16-regular' },
  {
    name: 'Banca y Finanzas',
    href: 'banca-finanzas',
    icon: 'mingcute:bank-line',
  },
  { name: 'Salud', href: 'salud', icon: 'bi:hospital' },
  { name: `Estudiante`, href: `estudiante`, icon: 'ph:student-fill' },
];

export default function ListCardsServicios() {
  return (
    <div className="flex justify-center gap-4 flex-wrap md:gap-6">
      {itemsSerevicios.map(({ name, href, icon }) => (
        <CardServicios
          key={name.toLowerCase().replaceAll(' ', '-')}
          title={name}
          icon={icon}
          href={href}
        />
      ))}
    </div>
  );
}
