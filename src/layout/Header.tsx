import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LogoAsica from '@/public/images/logo-asica.png';
import ImgEntrenamiento from '@/public/images/entrenamiento.webp';
import { SOLUCIONES } from '@/data/listServices';
import {
  IconGovernment,
  IconCorporation,
  IconPymes,
  IconHealthLogo,
  IconStudentGraduate,
  IconBank,
} from '@/components/Icons';

const colors = {
  blue: 'bg-blue-50 text-blue-500',
  orange: 'bg-orange-50 text-orange-500',
  green: 'bg-green-50 text-green-500',
  'blue-gray': 'bg-blue-gray-50 text-blue-gray-500',
  purple: 'bg-purple-50 text-purple-500',
  teal: 'bg-teal-50 text-teal-500',
  cyan: 'bg-cyan-50 text-cyan-500',
  pink: 'bg-pink-50 text-pink-500',
};

const services = [
  {
    title: 'Gobierno',
    description:
      'Automatiza, inventaría, gestiona presupuestos de activos. Entro otros',
    href: '/servicios/gobierno',
    icon: IconGovernment,
    color: colors.cyan,
  },
  {
    title: 'Corporación',
    description:
      'Soluciones completas para alcanzar objetivos tecnológicos empresariales.',
    href: '/servicios/corporacion',
    icon: IconCorporation,
    color: colors.orange,
  },
  {
    title: 'Pymes',
    href: '/servicios/pymes',
    description:
      'Aumenta ventas, controla inventario, protégete. Descubre soluciones para PYMES.',
    icon: IconPymes,
    color: colors.purple,
  },
  {
    title: 'Banca y Finanzas',
    description:
      'IA moldea el mundo. Grupo ASICA te lleva a la vanguardia financiera.',
    href: '/servicios/banca',
    icon: IconBank,
    color: colors.green,
  },
  {
    title: 'Salud',
    description:
      'Mejora atención médica, genera ingresos. Descubre nuestras soluciones clínicas.',
    href: '/servicios/salud',
    icon: IconHealthLogo,
    color: colors.blue,
  },
  {
    title: 'Estudiante',
    description: 'Grupo ASICA: guía eficiente en el mundo de TI. ¡Únete!',
    href: '/servicios/educacion',
    icon: IconStudentGraduate,
    color: colors.teal,
  },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 inset-x-0 flex flex-wrap border-b-[1px] shadow-sm md:justify-start md:flex-nowrap z-50 w-full bg-white text-sm">
      <nav
        className="relative max-w-[85rem] w-full mx-auto px-4 md:px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="relative md:flex md:items-center md:justify-between">
          <div className="flex items-center justify-between">
            <Link
              className="flex-none text-xl font-semibold"
              href="/"
              aria-label="Brand"
            >
              <Image
                src={LogoAsica}
                alt="asica"
                width={140}
                height={140}
              />
            </Link>
            <div className="md:hidden">
              <button
                type="button"
                className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none transition-all text-sm"
                data-hs-collapse="#navbar-collapse-with-animation"
                aria-controls="navbar-collapse-with-animation"
                aria-label="Toggle navigation"
              >
                <svg
                  className="hs-collapse-open:hidden w-4 h-4"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
                <svg
                  className="hs-collapse-open:block hidden w-4 h-4"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </div>
          </div>

          <div
            id="navbar-collapse-with-animation"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
          >
            <div className="overflow-hidden overflow-y-auto max-h-[75vh] scrollbar-y">
              <div className="flex flex-col gap-x-0 mt-5 divide-y divide-dashed divide-gray-200 md:flex-row md:items-center md:justify-end md:gap-x-7 md:mt-0 md:pl-7 md:divide-y-0 md:divide-solid">
                {/* home */}
                <Link
                  className="font-medium text-gay-800 py-3 md:py-6 hover:text-gray-400"
                  href="/"
                  aria-current="page"
                >
                  Home
                </Link>

                {/* servicios */}
                <div className="group hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] py-3 md:py-4">
                  <Link
                    href="/servicios"
                    className="flex items-center w-full text-gray-800 group-hover:text-gray-400 font-medium"
                  >
                    Servicios
                    <svg
                      className="ml-2 w-2.5 h-2.5 text-gray-600 transition-transform group-hover:rotate-180"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                      ></path>
                    </svg>
                  </Link>

                  <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 w-full hidden z-10 top-full left-0 min-w-[15rem] bg-white md:shadow-2xl rounded-xl before:absolute before:-top-5 before:left-0 before:w-full before:h-5">
                    <div className="md:grid md:grid-cols-2 lg:grid-cols-10">
                      <div className="grid col-span-7 py-2 md:p-4 md:grid-cols-2">
                        {services.map(
                          ({ title, description, href, icon, color }) => {
                            return (
                              <Link
                                href={href}
                                key={title}
                                className="inline-flex"
                              >
                                <div className="flex items-center gap-3 w-full py-2 px-3 rounded-lg transition-all hover:bg-blue-50 hover:bg-opacity-70">
                                  <div className={`rounded-md p-5 ${color}`}>
                                    {React.createElement(icon, {
                                      className: 'h-6 w-6',
                                    })}
                                  </div>
                                  <div>
                                    <span className="antialiased tracking-normal font-sans font-semibold text-blue-gray-900 flex items-center text-sm">
                                      {title}
                                    </span>
                                    <p className="block antialiased font-sans text-sm leading-normal text-gray-700 font-normal">
                                      {description}
                                    </p>
                                  </div>
                                </div>
                              </Link>
                            );
                          }
                        )}
                      </div>

                      <div className="col-span-3">
                        <div className="flex flex-col bg-gray-50 p-6">
                          <span className="text-xs font-semibold uppercase text-gray-800 ">
                            Entrenamientos
                          </span>

                          <Link
                            className="mt-4 group/entrenamiento"
                            href="/servicios/entrenamientos"
                          >
                            <div className="relative w-full h-32 bg-white rounded">
                              <Image
                                className="w-full object-cover object-center rounded-lg"
                                src={ImgEntrenamiento}
                                fill={true}
                                alt="Image Description"
                              />
                            </div>
                            <div className="mt-2">
                              <p className="text-gray-800">
                                En Grupo ASICA, brindamos programas de
                                entrenamiento práctico y significativo para
                                mejorar habilidades técnicas y profesionales.
                              </p>
                              <p className="mt-3 inline-flex items-center gap-x-2 text-sm font-semibold text-gray-800 ">
                                Leer más
                                <svg
                                  className="w-2.5 h-2.5 transition-transform duration-500 ease-in-out group-hover/entrenamiento:translate-x-1"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </p>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* soluciones */}
                <div className="group hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] py-3 md:py-4">
                  <button
                    type="button"
                    className="flex items-center w-full text-gray-800 group-hover:text-gray-400 font-medium"
                  >
                    Souciones
                    <svg
                      className="ml-2 w-2.5 h-2.5 text-gray-600 transition-transform group-hover:rotate-180"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                      ></path>
                    </svg>
                  </button>

                  <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 w-full hidden z-10 top-full left-0 min-w-[15rem] bg-white md:shadow-2xl rounded-xl py-2 md:p-4 before:absolute before:-top-5 before:left-0 before:w-full before:h-5">
                    <div className="md:grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {Object.values(SOLUCIONES)
                        .sort((a, b) => (a.title > b.title ? 1 : -1))
                        .map(({ title, description, href }) => {
                          return (
                            <Link
                              href={href}
                              key={title}
                            >
                              <div className="flex items-center gap-3 w-full h-full py-2 px-3 rounded-lg transition-all hover:bg-blue-50 hover:bg-opacity-70">
                                <div>
                                  <span className="antialiased tracking-normal font-sans font-semibold text-blue-gray-900 flex items-center text-sm">
                                    {title}
                                  </span>
                                  <p className="block antialiased font-sans text-sm leading-normal text-gray-700 font-normal">
                                    {description}
                                  </p>
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                    </div>
                  </div>
                </div>

                {/* nosotros */}
                <div className="group hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] py-3 md:py-6">
                  <button
                    type="button"
                    className="flex items-center w-full text-gray-800 group-hover:text-gray-400 font-medium"
                  >
                    Nosotros
                    <svg
                      className="ml-2 w-2.5 h-2.5 text-gray-600 transition-transform group-hover:rotate-180"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                      ></path>
                    </svg>
                  </button>

                  <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-[705px] lg:w-[750px] hidden z-10 top-full right-0 overflow-hidden bg-white md:shadow-2xl rounded-xl before:absolute before:-top-5 before:left-0 before:w-full before:h-5">
                    <div className="grid grid-cols-2 md:grid-cols-10">
                      {/*  */}
                      <div className="md:col-span-3">
                        <div className="flex flex-col py-6 px-3 md:px-6">
                          <div className="space-y-4">
                            <span className="mb-2 text-xs font-semibold uppercase text-gray-800">
                              Sobre nosotros
                            </span>

                            <Link
                              className="flex gap-x-2 text-gray-800 hover:text-blue-600 "
                              href="/about"
                            >
                              <svg
                                className="flex-shrink-0 w-4 h-4 mt-0.5 text-gray-800 "
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                              >
                                <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
                              </svg>
                              <div className="grow">
                                <p>Historia, Misión y Visión</p>
                              </div>
                            </Link>

                            <Link
                              className="flex gap-x-2 text-gray-800 hover:text-blue-600 "
                              href="/contacto"
                            >
                              <svg
                                className="flex-shrink-0 w-4 h-4 mt-0.5 text-gray-800 "
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                              >
                                <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                                <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                              </svg>
                              <div className="grow">
                                <p>Contacto</p>
                              </div>
                            </Link>

                            <Link
                              className="flex gap-x-2 text-gray-800 hover:text-blue-600 "
                              href="/legal"
                            >
                              <svg
                                className="flex-shrink-0 w-4 h-4 mt-0.5 text-gray-800 "
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                              >
                                <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z" />
                              </svg>
                              <div className="grow">
                                <p>Legal</p>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>

                      {/*  */}
                      <div className="md:col-span-3">
                        <div className="flex flex-col py-6 px-3 md:px-6">
                          <div className="space-y-4">
                            <span className="mb-2 text-xs font-semibold uppercase text-gray-800 ">
                              Soporte
                            </span>

                            <Link
                              className="flex gap-x-2 text-gray-800 hover:text-blue-600 "
                              href="https://grupoasica.freshdesk.com/support/login"
                              target="_blank"
                            >
                              <svg
                                className="flex-shrink-0 w-4 h-4 mt-0.5 text-gray-800 "
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                              >
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                              </svg>
                              <div className="grow">
                                <p>Sistema de Ticket</p>
                              </div>
                            </Link>
                          </div>

                          <div className="mt-7 space-y-4">
                            <span className="mb-2 text-xs font-semibold uppercase text-gray-800 ">
                              Partners
                            </span>

                            <Link
                              className="flex gap-x-2 text-gray-800 hover:text-blue-600 "
                              href="/partners"
                            >
                              <svg
                                className="flex-shrink-0 w-4 h-4 mt-0.5 text-gray-800 "
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                              >
                                <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z" />
                                <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
                              </svg>
                              <div className="grow">
                                <p>Nuestros Partner</p>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>

                      {/*  */}
                      <div className="col-span-full md:col-span-4">
                        <div className="flex flex-col bg-gray-50 p-6">
                          <span className="text-xs font-semibold uppercase text-gray-800 ">
                            Grupo ASICA
                          </span>

                          <Link
                            className="mt-4 group/asica"
                            href="/about"
                          >
                            <div className="aspect-w-16 aspect-h-9 bg-white rounded py-2">
                              <Image
                                className="w-full object-cover rounded-lg"
                                src={LogoAsica}
                                width={100}
                                height={100}
                                alt="Image Description"
                              />
                            </div>
                            <div className="mt-2">
                              <p className="text-gray-800">
                                En Grupo Asica, nuestra misión es innovar y
                                ofrecer soluciones tecnológicas y consultoría
                                empresarial eficientes.
                              </p>
                              <p className="mt-3 inline-flex items-center gap-x-2 text-sm font-semibold text-gray-800 ">
                                Leer más
                                <svg
                                  className="w-2.5 h-2.5 transition-transform duration-500 ease-in-out group-hover/asica:translate-x-1"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </p>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="py-3 md:py-0">
                  <Link
                    className="w-full py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md text-sm border border-transparent font-semibold bg-blue-500 text-white transition-all hover:bg-blue-600 focus:outline-none active:bg-blue-400"
                    href="/contacto"
                  >
                    Contacto
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
