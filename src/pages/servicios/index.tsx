import React from 'react';
import {
  SOLUCIONES,
  solucionesBanca,
  solucionesCorporacion,
  solucionesGobierno,
  solucionesPymes,
  solucionesSalud,
} from '@/data/listServices';
import Link from 'next/link';

const Card = ({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) => {
  return (
    <div>
      <Link
        className="group flex w-full h-full flex-col bg-white border shadow-sm rounded-xl transition hover:shadow-md hover:border-primary/30"
        href={href}
      >
        <div className="p-4 md:p-5">
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mt-1 shrink-0 w-5 h-5 text-gray-800"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="m6 14l7-12v8h5l-7 12v-8H6Z"
              />
            </svg>

            <div className="grow ml-5">
              <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                {title}
              </h3>
              <p className="text-sm text-gray-500">{description}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default function Hola() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gray-100 py-8 px-6 md:py-12 md:px-20">
        <div className="container mx-auto flex flex-col items-center">
          <h1 className="font-bold text-3xl leading-normal md:text-4xl text-center">
            Descrubra soluciones de Grupo ASICA y sus socios
          </h1>
          <p className="text-center tracking-wide mt-3 max-w-2xl">
            Ofrecemos una amplia gama de servicios para satisfacer tus
            necesidades tecnológicas, desde el soporte y mantenimiento de
            sistemas hasta la implementación de soluciones de seguridad y
            software personalizado.
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="relative max-w-7xl px-4 py-10 mx-auto sm:px-6 lg:px-8 lg:py-14">
        <div className="flex flex-col md:flex-row">
          <div className="border-b border-gray-200 md:border-0 md:border-r">
            <ul
              className="flex space-x-2 md:flex-col md:space-x-0 md:space-y-2"
              aria-label="Tabs"
              role="tablist"
              data-hs-tabs-vertical="true"
            >
              <button
                type="button"
                className="hs-tab-active:border-blue-500 hs-tab-active:text-blue-600 py-1 pr-4 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 active md:border-0 md:border-r-[3px]"
                id="vertical-tab-with-border-item-all"
                data-hs-tab="#vertical-tab-all"
                aria-controls="vertical-tab-all"
                role="tab"
              >
                Todas
              </button>
              <button
                type="button"
                className="hs-tab-active:border-blue-500 hs-tab-active:text-blue-600 py-1 pr-4 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 md:border-0 md:border-r-[3px]"
                id="vertical-tab-with-border-item-gobierno"
                data-hs-tab="#vertical-tab-gobierno"
                aria-controls="vertical-tab-gobierno"
                role="tab"
              >
                Gobierno
              </button>
              <button
                type="button"
                className="hs-tab-active:border-blue-500 hs-tab-active:text-blue-600 py-1 pr-4 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 md:border-0 md:border-r-[3px]"
                id="vertical-tab-with-border-item-corpo"
                data-hs-tab="#vertical-tab-corporacion"
                aria-controls="vertical-tab-corporacion"
                role="tab"
              >
                Corporación
              </button>
              <button
                type="button"
                className="hs-tab-active:border-blue-500 hs-tab-active:text-blue-600 py-1 pr-4 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 md:border-0 md:border-r-[3px]"
                id="vertical-tab-with-border-item-pymes"
                data-hs-tab="#vertical-tab-pymes"
                aria-controls="vertical-tab-pymes"
                role="tab"
              >
                Pymes
              </button>
              <button
                type="button"
                className="hs-tab-active:border-blue-500 hs-tab-active:text-blue-600 py-1 pr-4 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 md:border-0 md:border-r-[3px]"
                id="vertical-tab-with-border-item-banca"
                data-hs-tab="#vertical-tab-banca"
                aria-controls="vertical-tab-banca"
                role="tab"
              >
                Banca y Finanzas
              </button>
              <button
                type="button"
                className="hs-tab-active:border-blue-500 hs-tab-active:text-blue-600 py-1 pr-4 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 md:border-0 md:border-r-[3px]"
                id="vertical-tab-with-border-item-salud"
                data-hs-tab="#vertical-tab-salud"
                aria-controls="vertical-tab-salud"
                role="tab"
              >
                Salud
              </button>
            </ul>
          </div>

          <div className="mt-3 md:m-0 md:ml-3">
            {/*  */}
            <div
              id="vertical-tab-all"
              role="tabpanel"
              aria-labelledby="vertical-tab-with-border-item-all"
            >
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
                {Object.values(SOLUCIONES)
                  .sort((a, b) => (a.title > b.title ? 1 : -1))
                  .map(({ title, description, href }) => {
                    return (
                      <Card
                        key={title}
                        title={title}
                        description={description}
                        href={href}
                      />
                    );
                  })}
              </div>
            </div>

            {/*  */}
            <div
              id="vertical-tab-gobierno"
              className="hidden"
              role="tabpanel"
              aria-labelledby="vertical-tab-with-border-item-gobierno"
            >
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
                {Object.values(solucionesGobierno)
                  .sort((a, b) => (a.title > b.title ? 1 : -1))
                  .map(({ title, description, href }) => {
                    return (
                      <Card
                        key={title}
                        title={title}
                        description={description}
                        href={href}
                      />
                    );
                  })}
              </div>
            </div>

            {/*  */}
            <div
              id="vertical-tab-corporacion"
              className="hidden"
              role="tabpanel"
              aria-labelledby="vertical-tab-with-border-item-corporacion"
            >
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
                {Object.values(solucionesCorporacion)
                  .sort((a, b) => (a.title > b.title ? 1 : -1))
                  .map(({ title, description, href }) => {
                    return (
                      <Card
                        key={title}
                        title={title}
                        description={description}
                        href={href}
                      />
                    );
                  })}
              </div>
            </div>

            {/*  */}
            <div
              id="vertical-tab-pymes"
              className="hidden"
              role="tabpanel"
              aria-labelledby="vertical-tab-with-border-item-pymes"
            >
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
                {Object.values(solucionesPymes)
                  .sort((a, b) => (a.title > b.title ? 1 : -1))
                  .map(({ title, description, href }) => {
                    return (
                      <Card
                        key={title}
                        title={title}
                        description={description}
                        href={href}
                      />
                    );
                  })}
              </div>
            </div>

            {/*  */}
            <div
              id="vertical-tab-banca"
              className="hidden"
              role="tabpanel"
              aria-labelledby="vertical-tab-with-border-item-banca"
            >
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
                {Object.values(solucionesBanca)
                  .sort((a, b) => (a.title > b.title ? 1 : -1))
                  .map(({ title, description, href }) => {
                    return (
                      <Card
                        key={title}
                        title={title}
                        description={description}
                        href={href}
                      />
                    );
                  })}
              </div>
            </div>

            {/*  */}
            <div
              id="vertical-tab-salud"
              className="hidden"
              role="tabpanel"
              aria-labelledby="vertical-tab-with-border-item-salud"
            >
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
                {Object.values(solucionesSalud)
                  .sort((a, b) => (a.title > b.title ? 1 : -1))
                  .map(({ title, description, href }) => {
                    return (
                      <Card
                        key={title}
                        title={title}
                        description={description}
                        href={href}
                      />
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
