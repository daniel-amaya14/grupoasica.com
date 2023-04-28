import React from 'react';
import LayoutServicios from '@/layout/LayoutServicios';
import CardSoluciones from '@/components/Cards/CardSoluciones';
import { solucionesCorporacion } from '@/data/listServices';

export default function Corporacion() {
  return (
    <LayoutServicios>
      <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
          <svg
            viewBox="0 0 88 88"
            className="w-full max-w-screen-xl text-indigo-100"
          >
            <circle
              fill="currentColor"
              cx="44"
              cy="44"
              r="15.5"
            />
            <circle
              fillOpacity="0.2"
              fill="currentColor"
              cx="44"
              cy="44"
              r="44"
            />
            <circle
              fillOpacity="0.2"
              fill="currentColor"
              cx="44"
              cy="44"
              r="37.5"
            />
            <circle
              fillOpacity="0.3"
              fill="currentColor"
              cx="44"
              cy="44"
              r="29.5"
            />
            <circle
              fillOpacity="0.3"
              fill="currentColor"
              cx="44"
              cy="44"
              r="22.5"
            />
          </svg>
        </div>
        <div className="relative max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
              Soluciones
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            {/* <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="d9d7687a-355f-4502-8ec4-7945db034688"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle
                      cx="1"
                      cy="1"
                      r=".7"
                    />
                  </pattern>
                </defs>
                <rect
                  fill="url(#d9d7687a-355f-4502-8ec4-7945db034688)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">Soluciones</span>
            </span>{' '} */}
            Corporación
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Nuestras soluciones cubren todas los objetivos tecnológicos que las
            empresas desean lograr.
          </p>
        </div>
        <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-3 content-center">
          {solucionesCorporacion.map(({ title, description, href }) => (
            <CardSoluciones
              key={title}
              title={title}
              description={description}
              href={href}
            />
          ))}
        </div>
      </div>
    </LayoutServicios>
  );
}
