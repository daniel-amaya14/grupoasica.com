import React from 'react';
import RootLayout from '@/layout/RootLayout';
import ListCards from '@/components/ListCards';

const ItemsSerevicios = [
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

export default function PageServicios() {
  return (
    <RootLayout>
      <section className="flex flex-col justify-between overflow-hidden pb-10">
        <div className="py-6 px-8 xl:px-40 xl:py-10">
          <h2 className="text-2xl font-bold text-fontPrimary text-justify pb-4 md:text-4xl">
            Nuestros Servicios
          </h2>
          <p className="text-sm pb-6 md:text-base md:pb-10">Ofrecemos...</p>
        </div>
        <ListCards listItems={ItemsSerevicios} />
      </section>
    </RootLayout>
  );
}
