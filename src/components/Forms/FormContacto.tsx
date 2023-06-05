import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const initialValues = {
  inputName: '',
  inputEmail: '',
  inputPhone: '',
  inputMessage: '',
};

const validationSchema = Yup.object().shape({
  inputName: Yup.string()
    .matches(
      /^[a-zA-ZÀ-ÿ\s]+$/,
      'El nombre solo puede contener letras y espacios'
    )
    .max(40, 'El nombre es demasiado largo')
    .required('El campo es requerido'),

  inputEmail: Yup.string()
    .matches(
      /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      'El email no es válido'
    )
    .email('El email no es válido')
    .required('El campo es requerido'),

  inputPhone: Yup.string()
    .matches(
      /^(\+\d{1,3})?\s*\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
      'El número de teléfono no es válido'
    )
    .required('El campo es requerido'),

  inputMessage: Yup.string().required('El campo es requerido'),
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
                htmlFor="inputName"
                className="sr-only"
              >
                Nombre
              </label>
              <div className="relative">
                <Field
                  type="text"
                  name="inputName"
                  id="inputName"
                  className={`py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 ${
                    errors.inputName && touched.inputName
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                      : !errors.inputName && touched.inputName
                      ? 'border-green-500 focus:border-green-500 focus:ring-green-500'
                      : ''
                  }`}
                  placeholder="Nombre"
                />
                <ErrorMessage
                  name="inputName"
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
                          {errors.inputName}
                        </div>
                      </div>
                    </div>
                  )}
                />
                {!errors.inputName && touched.inputName ? (
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
                htmlFor="inputEmail"
                className="sr-only"
              >
                Correo electrónico
              </label>
              <div className="relative">
                <Field
                  type="email"
                  name="inputEmail"
                  id="inputEmail"
                  autoComplete="email"
                  className={`py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 ${
                    errors.inputEmail && touched.inputEmail
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                      : !errors.inputEmail && touched.inputEmail
                      ? 'border-green-500 focus:border-green-500 focus:ring-green-500'
                      : ''
                  }`}
                  placeholder=" Correo electrónico"
                />
                <ErrorMessage
                  name="inputEmail"
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
                          {errors.inputEmail}
                        </div>
                      </div>
                    </div>
                  )}
                />
                {!errors.inputEmail && touched.inputEmail ? (
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
                htmlFor="inputPhone"
                className="sr-only"
              >
                Teléfono
              </label>
              <div className="relative">
                <Field
                  type="text"
                  name="inputPhone"
                  id="inputPhone"
                  className={`py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 ${
                    errors.inputPhone && touched.inputPhone
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                      : !errors.inputPhone && touched.inputPhone
                      ? 'border-green-500 focus:border-green-500 focus:ring-green-500'
                      : ''
                  }`}
                  placeholder="Teléfono"
                />
                <ErrorMessage
                  name="inputPhone"
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
                          {errors.inputPhone}
                        </div>
                      </div>
                    </div>
                  )}
                />
                {!errors.inputPhone && touched.inputPhone ? (
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
                htmlFor="inputMessage"
                className="sr-only"
              >
                Mensaje
              </label>
              <div className="relative">
                <Field
                  as="textarea"
                  id="inputMessage"
                  name="inputMessage"
                  rows={4}
                  className={`py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 ${
                    errors.inputMessage && touched.inputMessage
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                      : !errors.inputMessage && touched.inputMessage
                      ? 'border-green-500 focus:border-green-500 focus:ring-green-500'
                      : ''
                  }`}
                  placeholder="Mensaje"
                ></Field>
                <ErrorMessage
                  name="inputMessage"
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
                          {errors.inputMessage}
                        </div>
                      </div>
                    </div>
                  )}
                />
                {!errors.inputMessage && touched.inputMessage ? (
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

          <div className="mt-3 text-center">
            <p className="text-sm text-gray-500">
              Le responderemos en 1-2 días laborables.
            </p>
          </div>
        </Form>
      )}
    </Formik>
  );
}
