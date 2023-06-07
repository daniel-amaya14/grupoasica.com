import React from 'react';
import Link from 'next/link';
import { SERVICIOS } from '@/data/listServices';

export default function Services() {
  return (
    <section
      className="max-w-7xl px-4 py-10 mx-auto grid gap-8 sm:px-6 md:py-16 lg:px-8 lg:py-[9rem] lg:grid-cols-6 lg:gap-12 scroll-my-12"
      id="servicios"
    >
      <div className="lg:col-span-2">
        <h2 className="text-4xl font-bold leading-tight">¿Quién eres?</h2>
        <p className="text-gray-600 tracking-wide mt-2 md:max-w-xl lg:max-w-2xl">
          Ofrecemos soluciones informáticas y servicios especializados para
          satisfacer las necesidades de nuestros clientes en distintos ámbitos.
        </p>
        <div className="space-x-2">
          <Link
            href="/servicios"
            className="mt-4 inline-block"
          >
            <div className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white text-sm transition-all hover:bg-blue-600 focus:outline-none active:bg-blue-400">
              Más información
            </div>
          </Link>
          <Link
            href="/servicios/formulario"
            className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-blue-500 hover:bg-blue-100 focus:outline-none transition-all text-sm"
          >
            Solicitar servicio
          </Link>
        </div>
      </div>
      <div className="lg:col-span-4">
        <div className="grid items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Object.values(SERVICIOS).map(
            ({ title, description, href, icon, color }) => {
              return (
                <Link
                  href={href}
                  key={title}
                >
                  <div className="w-full h-[8.375rem] bg-white rounded-lg p-4 transition-all duration-300 border-[1px] border-blue-100 border-opacity-0 hover:shadow-lg hover:border-opacity-100 hover:scale-105 active:border-blue-200 lg:h-[9.625rem]">
                    <div className="flex items-center gap-x-2 mb-3">
                      <div
                        className={`inline-flex justify-center items-center w-12 h-12 aspect-square rounded-full border-4 ${color}`}
                      >
                        {React.createElement(icon, {
                          className: 'w-6 h-6',
                        })}
                      </div>
                      <div className="">
                        <h4 className="block text-base font-semibold text-gray-800">
                          {title}
                        </h4>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">{description}</p>
                  </div>
                </Link>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}
