import React from 'react';
import Image from 'next/image';
import ImgCursos from '@/public/images/logo-office.png';

export default function Coaching() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section className="">
      {/* titulo */}
      <div className="relative w-full px-6 py-20 xl:px-16 bg-gray-200">
        <Image
          src={ImgCursos}
          fill={true}
          alt="Cursos"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-r from-black/40 to-black/40"></div>
        <div>
          <h1 className="relative text-white mb-4 text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">
            Microsoft Office
          </h1>
          <p className="relative text-white max-w-xl text-justify">
            Aprenderás a crear y editar documentos profesionales en Word, a
            organizar y analizar datos en Excel, a crear presentaciones
            impactantes en PowerPoint y a gestionar eficazmente tu correo
            electrónico en Outlook.
          </p>
        </div>
      </div>
      {/* contenido md:max-w-sm*/}
      <div className="w-full flex flex-col px-6 pt-12 xl:px-16 lg:flex-row lg:justify-between">
        <div className="relative mb-10 flex flex-col gap-16 lg:max-w-3xl lg:pr-10 md:mx-auto max-w-2xl">
          {/* lo que aprenderas */}
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-justify sm:text-3xl sm:leading-none">
              Descripción
            </h2>
            <p className="text-justify">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Blanditiis obcaecati nesciunt, voluptatum cumque ducimus fugit ab
              explicabo dignissimos officiis animi incidunt atque fuga possimus
              asperiores. Mollitia exercitationem dolorem repellendus aliquid.
            </p>
          </div>
          {/* incluye */}
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-justify sm:text-3xl sm:leading-none">
              ¿Qué incluye?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m10 13.6l5.9-5.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7l-6.6 6.6q-.3.3-.7.3t-.7-.3l-2.6-2.6q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l1.9 1.9Z"
                  />
                </svg>
                Lorem, ipsum dolor sit amet consectetur
              </div>
              <div className="flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m10 13.6l5.9-5.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7l-6.6 6.6q-.3.3-.7.3t-.7-.3l-2.6-2.6q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l1.9 1.9Z"
                  />
                </svg>
                Lorem, ipsum dolor sit amet consectetur
              </div>
              <div className="flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m10 13.6l5.9-5.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7l-6.6 6.6q-.3.3-.7.3t-.7-.3l-2.6-2.6q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l1.9 1.9Z"
                  />
                </svg>
                Lorem, ipsum dolor sit amet consectetur
              </div>
              <div className="flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m10 13.6l5.9-5.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7l-6.6 6.6q-.3.3-.7.3t-.7-.3l-2.6-2.6q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l1.9 1.9Z"
                  />
                </svg>
                Lorem, ipsum dolor sit amet consectetur
              </div>
              <div className="flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m10 13.6l5.9-5.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7l-6.6 6.6q-.3.3-.7.3t-.7-.3l-2.6-2.6q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l1.9 1.9Z"
                  />
                </svg>
                Lorem, ipsum dolor sit amet consectetur
              </div>
              <div className="flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m10 13.6l5.9-5.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7l-6.6 6.6q-.3.3-.7.3t-.7-.3l-2.6-2.6q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l1.9 1.9Z"
                  />
                </svg>
                Lorem, ipsum dolor sit amet consectetur
              </div>
            </div>
          </div>
          {/* lo que aprenderas */}
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-justify sm:text-3xl sm:leading-none">
              Lo que aprenderás
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m10 13.6l5.9-5.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7l-6.6 6.6q-.3.3-.7.3t-.7-.3l-2.6-2.6q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l1.9 1.9Z"
                  />
                </svg>
                Lorem, ipsum dolor sit amet consectetur
              </div>
              <div className="flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m10 13.6l5.9-5.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7l-6.6 6.6q-.3.3-.7.3t-.7-.3l-2.6-2.6q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l1.9 1.9Z"
                  />
                </svg>
                Lorem, ipsum dolor sit amet consectetur
              </div>
              <div className="flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m10 13.6l5.9-5.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7l-6.6 6.6q-.3.3-.7.3t-.7-.3l-2.6-2.6q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l1.9 1.9Z"
                  />
                </svg>
                Lorem, ipsum dolor sit amet consectetur
              </div>
              <div className="flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m10 13.6l5.9-5.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7l-6.6 6.6q-.3.3-.7.3t-.7-.3l-2.6-2.6q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l1.9 1.9Z"
                  />
                </svg>
                Lorem, ipsum dolor sit amet consectetur
              </div>
              <div className="flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m10 13.6l5.9-5.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7l-6.6 6.6q-.3.3-.7.3t-.7-.3l-2.6-2.6q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l1.9 1.9Z"
                  />
                </svg>
                Lorem, ipsum dolor sit amet consectetur
              </div>
            </div>
          </div>
          {/* contenido del curso */}
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-justify sm:text-3xl sm:leading-none">
              Contenido del curso
            </h2>
            <div className="space-y-1">
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-4 cursor-pointer rounded bg-indigo-50">
                  <h2 className="font-medium text-gray-900">
                    Lorem ipsum dolor sit amet consectetur adipisicing?
                  </h2>

                  <svg
                    className="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>

                <p className="px-4 mt-4 leading-relaxed text-gray-700">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
                  hic veritatis molestias culpa in, recusandae laboriosam neque
                  aliquid libero nesciunt voluptate dicta quo officiis explicabo
                  consequuntur distinctio corporis earum similique!
                </p>
              </details>

              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-4 cursor-pointer rounded bg-indigo-50">
                  <h2 className="font-medium text-gray-900">
                    Lorem ipsum dolor sit amet consectetur adipisicing?
                  </h2>

                  <svg
                    className="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>

                <p className="px-4 mt-4 leading-relaxed text-gray-700">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
                  hic veritatis molestias culpa in, recusandae laboriosam neque
                  aliquid libero nesciunt voluptate dicta quo officiis explicabo
                  consequuntur distinctio corporis earum similique!
                </p>
              </details>

              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-4 cursor-pointer rounded bg-indigo-50">
                  <h2 className="font-medium text-gray-900">
                    Lorem ipsum dolor sit amet consectetur adipisicing?
                  </h2>

                  <svg
                    className="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>

                <p className="px-4 mt-4 leading-relaxed text-gray-700">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
                  hic veritatis molestias culpa in, recusandae laboriosam neque
                  aliquid libero nesciunt voluptate dicta quo officiis explicabo
                  consequuntur distinctio corporis earum similique!
                </p>
              </details>

              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-4 cursor-pointer rounded bg-indigo-50">
                  <h2 className="font-medium text-gray-900">
                    Lorem ipsum dolor sit amet consectetur adipisicing?
                  </h2>

                  <svg
                    className="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>

                <p className="px-4 mt-4 leading-relaxed text-gray-700">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
                  hic veritatis molestias culpa in, recusandae laboriosam neque
                  aliquid libero nesciunt voluptate dicta quo officiis explicabo
                  consequuntur distinctio corporis earum similique!
                </p>
              </details>
            </div>
          </div>
          {/* requisitos */}
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-justify sm:text-3xl sm:leading-none">
              Requisitos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m10 13.6l5.9-5.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7l-6.6 6.6q-.3.3-.7.3t-.7-.3l-2.6-2.6q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l1.9 1.9Z"
                  />
                </svg>
                Lorem, ipsum dolor sit amet consectetur
              </div>
              <div className="flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m10 13.6l5.9-5.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7l-6.6 6.6q-.3.3-.7.3t-.7-.3l-2.6-2.6q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l1.9 1.9Z"
                  />
                </svg>
                Lorem, ipsum dolor sit amet consectetur
              </div>
              <div className="flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m10 13.6l5.9-5.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7l-6.6 6.6q-.3.3-.7.3t-.7-.3l-2.6-2.6q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l1.9 1.9Z"
                  />
                </svg>
                Lorem, ipsum dolor sit amet consectetur
              </div>
              <div className="flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m10 13.6l5.9-5.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7l-6.6 6.6q-.3.3-.7.3t-.7-.3l-2.6-2.6q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l1.9 1.9Z"
                  />
                </svg>
                Lorem, ipsum dolor sit amet consectetur
              </div>
            </div>
          </div>
        </div>
        {/* formulario md:absolute md:-top-28 md:right-8*/}
        <div className="w-full h-fit sm:mx-auto sm:w-3/4 md:bg-white md:shadow md:p-8 md:rounded-lg lg:relative lg:-top-36 lg:w-2/5 ">
          <h3 className="mb-4 text-xl font-semibold sm:text-2xl sm:leading-none">
            Solicitar Microsoft Office
          </h3>

          <p className="text-gray-600 mt-10 mb-6 lg:mt-0">
            Campos marcados con <span className="text-red-600">*</span> son
            requeridos
          </p>
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
            <div className="col-span-full sm:col-span-5 lg:col-span-full gap-6">
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
            <div className="col-span-full sm:col-span-5 lg:col-span-full gap-6">
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
                required
                className="form-input mt-1 w-full rounded-md border-gray-200 text-sm text-gray-700 shadow-sm bg-gray-100 focus:bg-white"
              />
            </div>

            {/* input - nombre empresa/institución */}
            <div className="col-span-full">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Empresa/Personal
                <span className="text-red-600">*</span>
              </label>

              <select
                id="asunto"
                name="asunto"
                required
                className="form-select mt-1 w-full rounded-md border-gray-200 text-sm text-gray-700 shadow-sm bg-gray-100 focus:bg-white"
              >
                <option hidden>Seleccione...</option>
                <option value="corporación">Personal</option>
                <option value="banca">Empresa</option>
              </select>
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
                <option hidden>Seleccione...</option>
                <option value="banca">Gestión (Diplomado)</option>
                <option value="corporación">Coaching Bienestar</option>
                <option value="estudiante">Microsoft Office</option>
                <option value="gobierno">
                  HTB Certified Bug Bounty Hunter
                </option>
                <option value="pymes">
                  Certified Penetration Testing Specialist
                </option>
                <option value="personalizado">Personalizado</option>
              </select>
            </div>

            {/* input - mensaje */}
            <div className="col-span-10">
              <label
                htmlFor="mensaje"
                className="block text-sm font-medium text-gray-700"
              >
                Mensaje
              </label>

              <textarea
                id="mensaje"
                name="mensaje"
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
      </div>
    </section>
  );
}
