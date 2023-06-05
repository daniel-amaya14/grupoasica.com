import React from 'react';
import Image from 'next/image';
import ImgProductList from '@/public/images/software/freebalance/product-library-freebalance.webp';
import Tab from '@/components/TabFreebalance';
import BannerContacto from '@/components/BannerContacto';

export default function Freebalance() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-100 py-8 px-6 md:py-12 md:px-20">
        <div className="container mx-auto flex flex-col items-center">
          <h1 className="font-bold text-3xl leading-normal md:text-4xl text-center">
            Freebalance
          </h1>
          <p className="text-center mt-3 max-w-2xl">
            FreeBalance Accountability Suite™ es una solución comercial de
            planificación de recursos gubernamentales (GRP) que cubre todo el
            ciclo presupuestario y gestiona todos los sistemas fiscales
            gubernamentales críticos.
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="py-8 px-6 flex flex-col gap-20 md:py-12 md:px-20">
        <section className="flex flex-col gap-4 justify-center items-center md:flex-row">
          <div>
            <h2 className="font-semibold text-2xl leading-normal mb-2 md:mb-4 md:text-3xl">
              Diseñado con el Gobierno. Para el Gobierno.
            </h2>
            <p className="text-justify">
              <strong>FreeBalance Accountability Suite™</strong>, proporciona
              soluciones GRP, es la única solución PFM diseñada exclusivamente
              con el gobierno, para el gobierno. Se trata de un sistema de
              gestión financiera flexible y modular con seis configuraciones
              básicas, que puede ampliarse para satisfacer las necesidades
              cambiantes del programa de reforma de la GFP de un país.
            </p>
            <div className="mt-6">
              <h3 className="font-semibold text-xl leading-normal mb-2 md:mb-4 md:text-2xl">
                Desarrollador bajo los principios:
              </h3>
              <div className="grid justify-center gap-4 sm:grid-cols-3">
                <div className="flex flex-col items-center justify-center p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <p className="my-3 text-base">Rendición de cuentas</p>
                </div>
                <div className="flex flex-col items-center justify-center p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <p className="my-3 text-base">Transparencia</p>
                </div>
                <div className="flex flex-col items-center justify-center p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <p className="my-3 text-base">Buena gobernanza</p>
                </div>
              </div>
            </div>
          </div>

          <Image
            src={ImgProductList}
            alt="Freebalance"
            className="w-full md:w-1/3 h-fit object-cover"
          />
        </section>

        <Tab />

        {/*  */}
        <BannerContacto href="/servicios/formulario" />
      </div>
    </>
  );
}
