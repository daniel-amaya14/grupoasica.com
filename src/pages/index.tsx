import React from 'react';
import Header from '@/components/Header';
import ListCards from '@/components/ListCards';

const ItemsSerevicios = [
  { name: 'Gobierno', icon: 'fluent:building-government-24-regular' },
  { name: 'Corporación', icon: 'clarity:building-line' },
  { name: 'PYMES', icon: 'fluent:building-16-regular' },
  { name: 'Banca y Finanzas', icon: 'mingcute:bank-line' },
  { name: 'Salud', icon: 'bi:hospital' },
  { name: 'Estudiante / Pasante', icon: 'ph:student-fill' },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/*  */}
        <section className="mb-24 xl:px-48">
          <h2 className="pb-10 text-center text-4xl font-bold text-[#5D4B9F]">
            ¿Qué soy?
          </h2>
          <ListCards listItems={ItemsSerevicios} />
        </section>
      </main>
    </>
  );
}
