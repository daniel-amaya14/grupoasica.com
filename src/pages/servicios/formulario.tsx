import React from 'react';
import Image from 'next/image';
import ImgServicios from '@/public/images/servicios.webp';

export default function FormularioServicios() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <section className="bg-white">
        {/* container */}
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          {/* imagen */}
          <section className="relative flex h-32 items-start bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
            <Image
              alt=""
              src={ImgServicios}
              className="absolute inset-0 h-full w-full object-cover opacity-80"
            />

            {/* title - desktop */}
            <div className="hidden lg:relative lg:block lg:p-12">
              {/* icono */}
              <div className="text-white">
                <svg
                  className="h-8 sm:h-12"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M22 5.5H9c-1.1 0-2 .9-2 2v9a2 2 0 0 0 2 2h13c1.11 0 2-.89 2-2v-9a2 2 0 0 0-2-2m0 11H9V9.17l6.5 3.33L22 9.17v7.33m-6.5-5.69L9 7.5h13l-6.5 3.31M5 16.5c0 .17.03.33.05.5H1c-.552 0-1-.45-1-1s.448-1 1-1h4v1.5M3 7h2.05c-.02.17-.05.33-.05.5V9H3c-.55 0-1-.45-1-1s.45-1 1-1m-2 5c0-.55.45-1 1-1h3v2H2c-.55 0-1-.45-1-1Z"
                  />
                </svg>
              </div>

              {/* title */}
              <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                Solicitar nuestros servicios 💬
              </h2>

              {/* info */}
              <ul className="flex flex-col gap-3 mt-4 text-white/90 leading-relaxed">
                {/* email */}
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 shrink-0 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  ventas@grupoasica.com
                </li>
                {/* phone */}
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  PBX : (+504) 2203-6275
                </li>
                {/* location */}
                <li className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="-mt-[2px]">
                    Colonia Payaquí, casa N°1650, Tegucigalpa M.D.C. Honduras,
                    C.A.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* formulario - title mobile */}
          <section
            aria-label="Main"
            className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
          >
            {/* container */}
            <div className="w-full">
              {/* title mobile */}
              <div className="relative -mt-16 block lg:hidden">
                {/* icono */}
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20">
                  <svg
                    className="h-10 sm:h-12"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="currentColor"
                      d="M22 5.5H9c-1.1 0-2 .9-2 2v9a2 2 0 0 0 2 2h13c1.11 0 2-.89 2-2v-9a2 2 0 0 0-2-2m0 11H9V9.17l6.5 3.33L22 9.17v7.33m-6.5-5.69L9 7.5h13l-6.5 3.31M5 16.5c0 .17.03.33.05.5H1c-.552 0-1-.45-1-1s.448-1 1-1h4v1.5M3 7h2.05c-.02.17-.05.33-.05.5V9H3c-.55 0-1-.45-1-1s.45-1 1-1m-2 5c0-.55.45-1 1-1h3v2H2c-.55 0-1-.45-1-1Z"
                    />
                  </svg>
                </div>
                {/* title */}
                <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                  Solicitar nuestros servicios 💬
                </h1>

                {/* info */}
                <ul className="flex flex-col gap-3 mt-4 text-gray-500 leading-relaxed">
                  {/* email */}
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 shrink-0 "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    ventas@grupoasica.com
                  </li>
                  {/* phone */}
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    PBX : (+504) 2203-6275
                  </li>
                  {/* location */}
                  <li className="flex gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="-mt-[2px]">
                      Colonia Payaquí, casa N°1650, Tegucigalpa M.D.C. Honduras,
                      C.A.
                    </span>
                  </li>
                </ul>
              </div>

              {/* span formulario */}
              <p className="text-gray-600 mt-10 mb-6 lg:mt-0">
                Campos marcados con <span className="text-red-600">*</span> son
                requeridos
              </p>

              {/* formulario */}
              <form
                action="#"
                onSubmit={handleSubmit}
                className="grid grid-cols-10 gap-6"
              >
                {/* input - nombre contacto */}
                <div className="col-span-full">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Nombre de contacto
                    <span className="text-red-600">*</span>
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="form-input mt-1 w-full rounded-md border-gray-200 text-sm text-gray-700 shadow-sm bg-gray-100 focus:bg-white"
                  />
                </div>

                {/* input - correo */}
                <div className="col-span-full  sm:col-span-5">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Correo Electrónico
                    <span className="text-red-600">*</span>
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="form-input mt-1 w-full rounded-md border-gray-200 text-sm text-gray-700 shadow-sm bg-gray-100 focus:bg-white"
                  />
                </div>

                {/* input - telefono */}
                <div className="col-span-full sm:col-span-5">
                  <label
                    htmlFor="telefono"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Teléfono/Celular
                    <span className="text-red-600">*</span>
                  </label>

                  <input
                    type="tel"
                    id="telefono"
                    name="last_name"
                    className="form-input mt-1 w-full rounded-md border-gray-200 text-sm text-gray-700 shadow-sm bg-gray-100 focus:bg-white"
                  />
                </div>

                {/* input - nombre empresa/institución */}
                <div className="col-span-full">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Empresa/ Institución/ Universidad
                    <span className="text-red-600">*</span>
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="form-input mt-1 w-full rounded-md border-gray-200 text-sm text-gray-700 shadow-sm bg-gray-100 focus:bg-white"
                  />
                </div>

                {/* input - servicio */}
                <div className="col-span-full">
                  <label
                    htmlFor="asunto"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Tipo de servicio
                    <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="asunto"
                    name="asunto"
                    required
                    className="form-select mt-1 w-full rounded-md border-gray-200 text-sm text-gray-700 shadow-sm bg-gray-100 focus:bg-white"
                  >
                    <option
                      selected
                      disabled
                    >
                      Seleccione...
                    </option>
                    <option value="banca">Banca y Finanzas</option>
                    <option value="corporación">Empresa/Corporación </option>
                    <option value="estudiante">Estudiante/Pasante</option>
                    <option value="gobierno">Gobierno</option>
                    <option value="pymes">Pymes</option>
                    <option value="salud">Salud</option>
                    <option value="personalizado">Personalizado</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                {/* input - mensaje */}
                <div className="col-span-10">
                  <label
                    htmlFor="mensaje"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Mensaje
                    <span className="text-red-600">*</span>
                  </label>

                  <textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    cols={30}
                    rows={10}
                    className="form-textarea mt-1 w-full rounded-md border-gray-200 text-sm text-gray-700 shadow-sm bg-gray-100 focus:bg-white"
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
          </section>
        </div>
      </section>
    </>
  );
}
