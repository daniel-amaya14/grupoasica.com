import React from 'react';
import CardSoluciones from '@/components/Cards/CardSoluciones';
import Image from 'next/image';
import ImgEquipo from '@/public/images/imgequipo.webp';
import { solucionesEducacion } from '@/data/listServices';
import FormStudent from '@/components/Forms/FormStudent';

export default function Estudiante() {
  return (
    <div className="">
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
            Estudiante
          </h2>
          <p className="text-base text-center text-gray-700 md:text-lg">
            El mundo de TI es basto, Grupo ASICA es la empresa que te guiará
            eficientemente por el mundo de la tecnología.
          </p>
        </div>
        <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-3 content-center">
          {solucionesEducacion.map(({ title, description }) => (
            <CardSoluciones
              key={title}
              title={title}
              description={description}
            />
          ))}
        </div>
      </div>

      <div className="px-6 py-6 bg-gray-800 md:py-12 md:px-12 lg:py-16 lg:px-16 lg:flex lg:items-start">
        <div className="xl:w-0 xl:flex-1 text-justify">
          <h2 className="text-2xl font-extrabold leading-8 tracking-tight text-white sm:text-3xl sm:leading-9">
            Únete a nuestro equipo
          </h2>
          <p className="max-w-2xl mt-3 text-lg leading-6 text-indigo-200 mb-6">
            Trabaja en proyectos desafiantes mientras aprendes de expertos en la
            industria y comienza a impulsar tu carrera hoy mismo.
          </p>
          <Image
            src={ImgEquipo}
            className="w-full h-72 sm:h-96 xl:h-[32rem] object-cover object-center rounded-sm"
            alt=""
          />
        </div>

        <div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
          <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
            <p className="text-white mt-10 mb-6 text-sm lg:mt-0">
              Campos marcados con <span className="text-red-600">*</span> son
              requeridos
            </p>
            <FormStudent />
          </div>
        </div>
      </div>
    </div>
  );
}
