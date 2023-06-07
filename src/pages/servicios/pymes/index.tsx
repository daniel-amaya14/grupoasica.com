import React from 'react';

import CardSoluciones from '@/components/Cards/CardSoluciones';
import { solucionesPymes } from '@/data/listServices';

export default function Pymes() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute -top-96 left-1/2 flex -translate-x-1/2 transform"
      >
        <div className="h-[44rem] w-[25rem] -translate-x-[10rem] rotate-[-60deg] transform bg-gradient-to-r from-violet-300/50 to-purple-100 blur-3xl"></div>
        <div className="rounded-fulls h-[60rem] w-[90rem] origin-top-left -translate-x-[15rem] -rotate-12 bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-primary/80">
              Soluciones
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            PYMES
          </h2>
          <p className="text-gray-600 font-medium tracking-wide md:text-lg">
            ¿Quieres aumentar tus ventas? ¿Deseas llevar control de tu
            inventario? ¿Quieres protegerte de virus? Ven, mira lo que tenemos
            para las PYMES.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 content-center">
          {solucionesPymes.map(({ title, description, href, icon }) => (
            <CardSoluciones
              key={title}
              title={title}
              description={description}
              href={href}
              icon={icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
