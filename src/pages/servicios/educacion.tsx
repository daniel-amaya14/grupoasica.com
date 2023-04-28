import React from 'react';
import CardSoluciones from '@/components/Cards/CardSoluciones';
import Image from 'next/image';
import ImgEquipo from '@/public/images/imgequipo.webp';
import { solucionesEducacion } from '@/data/listServices';

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
            <p className="text-white mt-10 mb-6 lg:mt-0">
              Campos marcados con <span className="text-red-600">*</span> son
              requeridos
            </p>
            <form
              action=""
              className="grid grid-cols-10 gap-6"
            >
              {/* input - nombre contacto */}
              <div className="col-span-full">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white"
                >
                  Nombre
                  <span className="text-red-600">*</span>
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="form-input mt-1 w-full rounded-md border-gray-200 text-sm shadow-sm bg-gray-100 focus:bg-white"
                />
              </div>

              {/* input - correo */}
              <div className="col-span-full">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white"
                >
                  Correo Electrónico
                  <span className="text-red-600">*</span>
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="form-input mt-1 w-full rounded-md border-gray-200 text-sm shadow-sm bg-gray-100 focus:bg-white"
                />
              </div>

              {/* input - telefono */}
              <div className="col-span-full">
                <label
                  htmlFor="telefono"
                  className="block text-sm font-medium text-white"
                >
                  Teléfono/Celular
                  <span className="text-red-600">*</span>
                </label>

                <input
                  type="tel"
                  id="telefono"
                  name="last_name"
                  className="form-input mt-1 w-full rounded-md border-gray-200 text-sm shadow-sm bg-gray-100 focus:bg-white"
                />
              </div>

              {/* input - nombre contacto */}
              <div className="col-span-full">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white"
                >
                  Universidad / Colegio
                  <span className="text-red-600">*</span>
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="form-input mt-1 w-full rounded-md border-gray-200 text-sm shadow-sm bg-gray-100 focus:bg-white"
                />
              </div>

              {/* input - mensaje */}
              <div className="col-span-10">
                <label
                  htmlFor="mensaje"
                  className="block text-sm font-medium text-white"
                >
                  Mensaje
                </label>

                <textarea
                  id="mensaje"
                  name="mensaje"
                  required
                  cols={30}
                  rows={10}
                  className="form-textarea mt-1 w-full rounded-md border-gray-200 text-sm shadow-sm bg-gray-100 focus:bg-white"
                ></textarea>
              </div>

              {/* button */}
              <div className="col-span-full sm:flex sm:items-center sm:gap-4">
                <button className="inline-flex justify-center items-center gap-1 shrink-0 rounded-md border border-blue-600 bg-blue-600 px-9 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                  Enviar
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="currentColor"
                      d="M27.71 4.29a1 1 0 0 0-1.05-.23l-22 8a1 1 0 0 0 0 1.87l9.6 3.84l3.84 9.6a1 1 0 0 0 .9.63a1 1 0 0 0 .92-.66l8-22a1 1 0 0 0-.21-1.05ZM19 24.2l-2.79-7L21 12.41L19.59 11l-4.83 4.83L7.8 13l17.53-6.33Z"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
