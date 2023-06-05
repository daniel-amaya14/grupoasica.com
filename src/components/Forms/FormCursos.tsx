import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const initialValues = {
  userName: '',
  userEmail: '',
  userPhone: '',
  userCourse: '',
  userMessage: '',
};

const validationSchema = Yup.object().shape({
  userName: Yup.string()
    .matches(
      /^[a-zA-ZÀ-ÿ\s]+$/,
      'El nombre solo puede contener letras y espacios'
    )
    .max(40, 'El nombre es demasiado largo')
    .required('El campo es requerido'),

  userEmail: Yup.string()
    .matches(
      /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      'El email no es válido'
    )
    .email('El email no es válido')
    .required('El campo es requerido'),

  userPhone: Yup.string()
    .matches(
      /^(\+\d{1,3})?\s*\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
      'El número de teléfono no es válido'
    )
    .required('El campo es requerido'),

  userCourse: Yup.string().required('El campo es requerido'),

  userMessage: Yup.string().required('El campo es requerido'),
});

export default function FormCursos() {
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
                htmlFor="userName"
                className="sr-only"
              >
                Nombre
              </label>
              <div className="relative">
                <Field
                  type="text"
                  name="userName"
                  id="userName"
                  className={`py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 ${
                    errors.userName && touched.userName
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                      : !errors.userName && touched.userName
                      ? 'border-green-500 focus:border-green-500 focus:ring-green-500'
                      : ''
                  }`}
                  placeholder="Nombre"
                />
                <ErrorMessage
                  name="userName"
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
                          {errors.userName}
                        </div>
                      </div>
                    </div>
                  )}
                />
                {!errors.userName && touched.userName ? (
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
                  htmlFor="userEmail"
                  className="sr-only"
                >
                  Correo electrónico
                </label>
                <div className="relative">
                  <Field
                    type="email"
                    name="userEmail"
                    id="userEmail"
                    autoComplete="email"
                    className={`py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 ${
                      errors.userEmail && touched.userEmail
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                        : !errors.userEmail && touched.userEmail
                        ? 'border-green-500 focus:border-green-500 focus:ring-green-500'
                        : ''
                    }`}
                    placeholder=" Correo electrónico"
                  />
                  <ErrorMessage
                    name="userEmail"
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
                            {errors.userEmail}
                          </div>
                        </div>
                      </div>
                    )}
                  />
                  {!errors.userEmail && touched.userEmail ? (
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
                  htmlFor="userPhone"
                  className="sr-only"
                >
                  Teléfono
                </label>
                <div className="relative">
                  <Field
                    type="text"
                    name="userPhone"
                    id="userPhone"
                    className={`py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 ${
                      errors.userPhone && touched.userPhone
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                        : !errors.userPhone && touched.userPhone
                        ? 'border-green-500 focus:border-green-500 focus:ring-green-500'
                        : ''
                    }`}
                    placeholder="Teléfono"
                  />
                  <ErrorMessage
                    name="userPhone"
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
                            {errors.userPhone}
                          </div>
                        </div>
                      </div>
                    )}
                  />
                  {!errors.userPhone && touched.userPhone ? (
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
                htmlFor="userCourse"
                className="sr-only"
              >
                Empresa/Institución
              </label>
              <div className="relative">
                <Field
                  as="select"
                  name="userCourse"
                  id="userCourse"
                  className={`py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 ${
                    errors.userCourse && touched.userCourse
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                      : !errors.userCourse && touched.userCourse
                      ? 'border-green-500 focus:border-green-500 focus:ring-green-500'
                      : ''
                  }`}
                  placeholder="Empresa/Institución"
                >
                  <option
                    hidden
                    label="Seleccione el tipo de servicio que desea..."
                  ></option>
                  <option value="Diplomado en Gestión">
                    Diplomado en Gestión
                  </option>
                  <option value="Certificado de Microsoft Office">
                    Certificado de Microsoft Office
                  </option>
                  <option value="Certificado de Bug Bounty Hunting">
                    Certificado de Bug Bounty Hunting
                  </option>
                  <option value="Certificado de Penetration Testing Specialist">
                    Certificado de Penetration Testing Specialist
                  </option>
                </Field>
                <ErrorMessage
                  name="userCourse"
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
                          {errors.userCourse}
                        </div>
                      </div>
                    </div>
                  )}
                />
                {!errors.userCourse && touched.userCourse ? (
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
                htmlFor="userMessage"
                className="sr-only"
              >
                Mensaje
              </label>
              <div className="relative">
                <Field
                  as="textarea"
                  id="userMessage"
                  name="userMessage"
                  rows={4}
                  className={`py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 ${
                    errors.userMessage && touched.userMessage
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                      : !errors.userMessage && touched.userMessage
                      ? 'border-green-500 focus:border-green-500 focus:ring-green-500'
                      : ''
                  }`}
                  placeholder="Mensaje"
                ></Field>
                <ErrorMessage
                  name="userMessage"
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
                          {errors.userMessage}
                        </div>
                      </div>
                    </div>
                  )}
                />
                {!errors.userMessage && touched.userMessage ? (
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
