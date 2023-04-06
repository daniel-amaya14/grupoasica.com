import React from 'react';
import ListsOfServices from '@/components/Lists/ListsOfServices';

export default function ServiciosSection() {
  return (
    <section className="pb-10 xl:px-48 mt-40">
      <h2 className="text-3xl font-bold text-fontPrimary text-center mb-8 md:text-4xl">
        ¿Quién eres?
        <br />
      </h2>
      <ListsOfServices />
    </section>
  );
}
