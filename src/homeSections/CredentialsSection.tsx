import React from 'react';
import ListOfCredentials from '@/components/Lists/ListOfCredentials';

export default function CredentialsSection() {
  return (
    <section className="py-10 px-8 xl:px-40 xl:py-20">
      <div className="flex flex-col gap-4 mb-6">
        <h2 className="text-2xl font-bold text-fontPrimary text-justify md:text-4xl">
          Nuestras credenciales
        </h2>
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ducimus
          omnis voluptatibus amet placeat, soluta repudiandae mollitia facilis,
          repellat molestiae quisquam ullam? Quo molestias, ducimus soluta
          ratione molestiae aut nobis.
        </p>
      </div>
      <ListOfCredentials />
    </section>
  );
}
