import React from 'react';
import Image from 'next/image';
import ImgContacto from '@/public/images/contacto.jpg';

export default function Contact() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <section className="relative flex flex-wrap lg:h-screen">
        <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
          <Image
            alt="Welcome"
            src={ImgContacto}
            fill={true}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="w-full px-4 py-6 sm:px-6 lg:pt-8 lg:pb-0 lg:w-1/2 lg:px-8 xl:pt-10">
          <div className="mx-auto max-w-md">
            <h1 className="text-xl font-bold text-fontPrimary text-justify sm:text-2xl md:text-3xl">
              Comunícate con nosotros
            </h1>
          </div>

          <form
            action="#"
            className="mx-auto mt-8 max-w-md space-y-4"
            onSubmit={handleSubmit}
          >
            {/* input-select */}
            <div>
              <label
                htmlFor="input-select"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Quien eres
              </label>
              <select
                id="input-select"
                required
                placeholder="Seleccione una opción..."
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 focus:outline-none"
              >
                <option
                  selected
                  disabled
                >
                  Seleccione una opción...
                </option>
                <option value="empresa">Soy Empresa</option>
                <option value="cliente">Soy Cliente</option>
                <option value="estudiante">Soy Estudiante</option>
                <option value="quiero ser cliente">Quiero ser Cliente</option>
                <option value="quiero enviar mi hoja de vida">
                  Quiero enviar mi hoja de vida
                </option>
                <option value="otro">Otro</option>
              </select>
            </div>

            {/* input-name */}
            <div>
              <label
                htmlFor="input-name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Nombre
              </label>
              <input
                type="text"
                id="input-name"
                required
                placeholder="Juan Perez"
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 focus:outline-none"
              />
            </div>

            {/* input-email */}
            <div>
              <label
                htmlFor="input-email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Correo electrónico
              </label>
              <input
                type="email"
                id="input-email"
                placeholder="name@gmail.com"
                required
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 focus:outline-none"
              />
            </div>

            {/* input-mensaje */}
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Mensaje
              </label>
              <textarea
                id="message"
                required
                rows={4}
                className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                placeholder="Deja un comentario..."
              ></textarea>
            </div>

            {/* button  */}
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 active:ring-4 active:ring-blue-300 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
