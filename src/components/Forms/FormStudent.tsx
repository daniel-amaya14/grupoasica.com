import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const initialValues = {
  name: '',
  email: '',
  phone: '',
  university: '',
  message: '',
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[a-zA-ZÀ-ÿ\s]+$/,
      'El nombre solo puede contener letras y espacios'
    )
    .max(40, 'El nombre es demasiado largo')
    .required('El campo es requerido'),

  email: Yup.string()
    .matches(
      /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      'El email no es válido'
    )
    .email('El email no es válido')
    .required('El campo es requerido'),

  phone: Yup.string()
    .matches(
      /^(\+\d{1,3})?\s*\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
      'El número de teléfono no es válido'
    )
    .required('El campo es requerido'),

  university: Yup.string()
    .matches(
      /^[a-zA-ZÀ-ÿ\s]+$/,
      'El nombre solo puede contener letras y espacios'
    )
    .required('El campo es requerido'),

  message: Yup.string().required('El campo es requerido'),
});

export default function FormContacto() {
  return (
    <Formik
      initialValues={initialValues}
      initialErrors={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            alert('Formulario enviado con éxito');
            resetForm();
            console.log(values);
            resolve(true);
          }, 3000);
          clearTimeout(3000);
        });
      }}
    >
      {({ errors, touched, isValid, isSubmitting }) => (
        <Form>
          <div className="grid gap-4">
            <div>
              <label
                htmlFor="name"
                className="sr-only"
              >
                Nombre
              </label>
              <div className="relative">
                <Field
                  type="text"
                  name="name"
                  id="name"
                  className={`py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 ${
                    errors.name && touched.name
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                      : !errors.name && touched.name
                      ? 'border-green-500 focus:border-green-500 focus:ring-green-500'
                      : ''
                  }`}
                  placeholder="Nombre"
                />
                <ErrorMessage
                  name="name"
                  component={() => (
                    <div className="absolute inset-y-0 right-0 flex items-center select-none pr-3">
                      <div className="hs-tooltip inline-block">
                        <button className="hs-tooltip-toggle block text-center pointer-events-none">
                          <svg
                            className="h-5 w-5 text-red-500"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            aria-hidden="true"
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                          </svg>
                        </button>
                        <div
                          className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-3 px-4 bg-white border text-sm text-gray-600 rounded-md shadow-md"
                          role="tooltip"
                        >
                          {errors.name}
                        </div>
                      </div>
                    </div>
                  )}
                />
                {!errors.name && touched.name ? (
                  <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                    <svg
                      className="h-5 w-5 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                    </svg>
                  </div>
                ) : null}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="email"
                  className="sr-only"
                >
                  Correo electrónico
                </label>
                <div className="relative">
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className={`py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 ${
                      errors.email && touched.email
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                        : !errors.email && touched.email
                        ? 'border-green-500 focus:border-green-500 focus:ring-green-500'
                        : ''
                    }`}
                    placeholder=" Correo electrónico"
                  />
                  <ErrorMessage
                    name="email"
                    component={() => (
                      <div className="absolute inset-y-0 right-0 flex items-center select-none pr-3">
                        <div className="hs-tooltip inline-block">
                          <button className="hs-tooltip-toggle block text-center pointer-events-none">
                            <svg
                              className="h-5 w-5 text-red-500"
                              width="16"
                              height="16"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                              aria-hidden="true"
                            >
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                            </svg>
                          </button>
                          <div
                            className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-3 px-4 bg-white border text-sm text-gray-600 rounded-md shadow-md"
                            role="tooltip"
                          >
                            {errors.email}
                          </div>
                        </div>
                      </div>
                    )}
                  />
                  {!errors.email && touched.email ? (
                    <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                      <svg
                        className="h-5 w-5 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                      </svg>
                    </div>
                  ) : null}
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="sr-only"
                >
                  Teléfono
                </label>
                <div className="relative">
                  <Field
                    type="text"
                    name="phone"
                    id="phone"
                    className={`py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 ${
                      errors.phone && touched.phone
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                        : !errors.phone && touched.phone
                        ? 'border-green-500 focus:border-green-500 focus:ring-green-500'
                        : ''
                    }`}
                    placeholder="Teléfono"
                  />
                  <ErrorMessage
                    name="phone"
                    component={() => (
                      <div className="absolute inset-y-0 right-0 flex items-center select-none pr-3">
                        <div className="hs-tooltip inline-block">
                          <button className="hs-tooltip-toggle block text-center pointer-events-none">
                            <svg
                              className="h-5 w-5 text-red-500"
                              width="16"
                              height="16"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                              aria-hidden="true"
                            >
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                            </svg>
                          </button>
                          <div
                            className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-3 px-4 bg-white border text-sm text-gray-600 rounded-md shadow-md"
                            role="tooltip"
                          >
                            {errors.phone}
                          </div>
                        </div>
                      </div>
                    )}
                  />
                  {!errors.phone && touched.phone ? (
                    <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                      <svg
                        className="h-5 w-5 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                      </svg>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="name"
                className="sr-only"
              >
                Universidad
              </label>
              <div className="relative">
                <Field
                  type="text"
                  name="university"
                  id="university"
                  className={`py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 ${
                    errors.university && touched.university
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                      : !errors.university && touched.university
                      ? 'border-green-500 focus:border-green-500 focus:ring-green-500'
                      : ''
                  }`}
                  placeholder="Universidad"
                />
                <ErrorMessage
                  name="university"
                  component={() => (
                    <div className="absolute inset-y-0 right-0 flex items-center select-none pr-3">
                      <div className="hs-tooltip inline-block">
                        <button className="hs-tooltip-toggle block text-center pointer-events-none">
                          <svg
                            className="h-5 w-5 text-red-500"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            aria-hidden="true"
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                          </svg>
                        </button>
                        <div
                          className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-3 px-4 bg-white border text-sm text-gray-600 rounded-md shadow-md"
                          role="tooltip"
                        >
                          {errors.university}
                        </div>
                      </div>
                    </div>
                  )}
                />
                {!errors.university && touched.university ? (
                  <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                    <svg
                      className="h-5 w-5 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                    </svg>
                  </div>
                ) : null}
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="sr-only"
              >
                Mensaje
              </label>
              <div className="relative">
                <Field
                  as="textarea"
                  id="message"
                  name="message"
                  rows={4}
                  className={`py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 ${
                    errors.message && touched.message
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                      : !errors.message && touched.message
                      ? 'border-green-500 focus:border-green-500 focus:ring-green-500'
                      : ''
                  }`}
                  placeholder="Mensaje"
                ></Field>
                <ErrorMessage
                  name="message"
                  component={() => (
                    <div className="absolute top-3 right-0 flex items-center select-none pr-3">
                      <div className="hs-tooltip inline-block ">
                        <button className="hs-tooltip-toggle block text-center pointer-events-none">
                          <svg
                            className="h-5 w-5 text-red-500"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            aria-hidden="true"
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                          </svg>
                        </button>
                        <div
                          className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-3 px-4 bg-white border text-sm text-gray-600 rounded-md shadow-md"
                          role="tooltip"
                        >
                          {errors.message}
                        </div>
                      </div>
                    </div>
                  )}
                />
                {!errors.message && touched.message ? (
                  <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                    <svg
                      className="h-5 w-5 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                    </svg>
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          <div className="mt-4 grid">
            <button
              type="submit"
              className={`inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none active:bg-blue-400 transition py-3 px-4 ${
                isSubmitting || !isValid
                  ? 'cursor-not-allowed !bg-blue-200 hover:!bg-blue-200'
                  : ''
              }`}
              disabled={!isValid}
              title={
                !isValid
                  ? 'Complete el formulario'
                  : isSubmitting
                  ? 'Enviando...'
                  : 'Enviar mensaje'
              }
            >
              Enviar
              {isSubmitting ? (
                <span
                  className="animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-white rounded-full"
                  role="status"
                  aria-label="loading"
                ></span>
              ) : null}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
