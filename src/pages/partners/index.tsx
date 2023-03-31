import React from 'react';
import RootLayout from '@/layout/RootLayout';
import ListCardsPartners from '@/components/ListCardsPartners';

export default function Partners() {
  return (
    <RootLayout>
      <section className="flex flex-col gap-12 py-6 px-8 xl:px-40 xl:py-10">
        <div className="flex flex-col gap-6">
          <h1 className="text-2xl font-bold text-fontPrimary text-center md:text-4xl">
            ASICA Partners
          </h1>
          <p className="text-center text-sm md:text-base sm:mx-14 md:mx-16 xl:mx-28">
            Contamos con la mejor red de colaboradores. Nuestros partners nos
            ayudan a ofrecer soluciones integrales a nuestros clientes. Si
            quieres ser parte de nuestra red de colaboradores, contáctanos.
          </p>
          <div className="text-center">
            <button className="bg-blue-700 hover:bg-blue-800 text-white py-3 px-4 rounded-md active:ring-4 active:ring-blue-300">
              Quiero ser partner
            </button>
          </div>
        </div>
        <ListCardsPartners />
      </section>
    </RootLayout>
  );
}
