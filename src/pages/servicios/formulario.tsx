import React from 'react';

export default function FormularioServicios() {
  return (
    <section className="max-w-2xl m-auto">
      <h1>Formulario de servicios</h1>
      <form
        action="#"
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
            Telefono
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
    </section>
  );
}
