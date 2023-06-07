import React from 'react';
import Image from 'next/image';
import ImgCursos from '@/public/images/cursos.webp';
import ImgBugBountryHuntre from '@/public/images/cursos/bug-bounty-hunter.svg';
import ImgPenetrationTestingSpecialist from '@/public/images/cursos/penetration-testing-specialist.png';
import ImgOffice from '@/public/images/logo-office.png';
import ImgWellness from '@/public/images/wellness.jpg';
import FormCursos from '@/components/Forms/FormCursos';

export default function Cursos() {
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
        <h1 className="relative text-white mb-6 text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">
          Certifícate y Capacítate
        </h1>
      </div>
      {/* contenido */}
      <div className="relative max-w-7xl px-4 py-10 mx-auto sm:px-6 lg:px-8 lg:py-14">
        <div className="space-y-20">
          {/*  */}
          <div className="grid md:grid-cols-2 gap-12">
            <h2 className="text-3xl text-gray-800 font-bold">
              Todas nuestras certificaciones y capacitaciones incluyen
            </h2>
            <div className="grid items-center gap-12 sm:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-gray-50">
                  <svg
                    className="h-5 w-5 text-gray-600"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                      fill="none"
                      fillOpacity={0.1}
                    />
                    <path
                      d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="mt-3">
                  <h3 className="text-base font-semibold text-gray-800">
                    Diploma / Certificado
                  </h3>
                </div>
              </div>

              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-gray-50">
                  <svg
                    className="h-5 w-5 text-gray-600"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                      fill="none"
                      fillOpacity={0.1}
                    />
                    <path
                      d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="mt-3">
                  <h3 className="text-base font-semibold text-gray-800">
                    Material de Estudio
                  </h3>
                </div>
              </div>

              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-gray-50">
                  <svg
                    className="h-5 w-5 text-gray-600"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                      fill="none"
                      fillOpacity={0.1}
                    />
                    <path
                      d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="mt-3">
                  <h3 className="text-base font-semibold text-gray-800">
                    Modalidad Virtual
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/*  */}
          <div
            className="md:grid lg:grid-cols-2 lg:gap-12 xl:gap-20"
            id="diplomado-gestion"
          >
            <div>
              <Image
                className="rounded-xl"
                width={900}
                height={900}
                src={ImgWellness}
                alt="Image Description"
              />
            </div>

            <div className="mt-5 sm:mt-10 lg:mt-0">
              <div className="space-y-6">
                <div className="space-y-2 md:space-y-4">
                  <h2 className="text-3xl font-bold text-gray-800 lg:text-4xl">
                    Diplomado en gestión
                  </h2>
                  <p className="tracking-wide">
                    Nuestro Diplomado en Gestión te brindará las habilidades y
                    conocimientos necesarios para destacar en el ámbito de la
                    gestión empresarial. Durante este programa, aprenderás una
                    variedad de temas clave que te permitirán organizar,
                    identificar y crear documentos de manera efectiva, así como
                    también adherirte a la normativa ISO 9001.
                  </p>
                </div>

                <div className="hs-accordion-group">
                  <div
                    className="hs-accordion"
                    id="hs-basic-with-title-and-arrow-stretched-gestion-heading-one"
                  >
                    <button
                      className="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left text-gray-800 transition"
                      aria-controls="hs-basic-with-title-and-arrow-stretched-gestion-collapse-one"
                    >
                      Proceso de organización documental
                      <svg
                        className="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500"
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
                        />
                      </svg>
                      <svg
                        className="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                    <div
                      id="hs-basic-with-title-and-arrow-stretched-gestion-collapse-one"
                      className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                      aria-labelledby="hs-basic-with-title-and-arrow-stretched-gestion-heading-one"
                    >
                      <p>
                        Aprenderás las mejores prácticas para organizar y
                        gestionar documentos de manera eficiente. Obtendrás
                        habilidades en clasificación, almacenamiento y
                        recuperación de información, lo que te permitirá
                        optimizar los procesos documentales en tu organización.
                      </p>
                    </div>
                  </div>

                  <div
                    className="hs-accordion"
                    id="hs-basic-with-title-and-arrow-stretched-gestion-heading-two"
                  >
                    <button
                      className="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left text-gray-800 transition"
                      aria-controls="hs-basic-with-title-and-arrow-stretched-gestion-collapse-two"
                    >
                      Identificación de documentos relevantes
                      <svg
                        className="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500"
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
                        />
                      </svg>
                      <svg
                        className="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                    <div
                      id="hs-basic-with-title-and-arrow-stretched-gestion-collapse-two"
                      className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                      aria-labelledby="hs-basic-with-title-and-arrow-stretched-gestion-heading-two"
                    >
                      <p>
                        Adquirirás la capacidad de identificar y evaluar
                        documentos relevantes para el funcionamiento de tu
                        empresa. Aprenderás a distinguir entre documentos
                        críticos y aquellos de menor importancia, lo que te
                        ayudará a priorizar y enfocar tus esfuerzos de gestión.
                      </p>
                    </div>
                  </div>

                  <div
                    className="hs-accordion"
                    id="hs-basic-with-title-and-arrow-stretched-gestion-heading-three"
                  >
                    <button
                      className="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left text-gray-800 transition"
                      aria-controls="hs-basic-with-title-and-arrow-stretched-gestion-collapse-three"
                    >
                      Creación de documentos efectivos
                      <svg
                        className="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500"
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
                        />
                      </svg>
                      <svg
                        className="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                    <div
                      id="hs-basic-with-title-and-arrow-stretched-gestion-collapse-three"
                      className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                      aria-labelledby="hs-basic-with-title-and-arrow-stretched-gestion-heading-three"
                    >
                      <p>
                        Aprenderás técnicas y principios para crear documentos
                        claros, concisos y efectivos. Ganarás habilidades en
                        redacción, estructuración de contenido y presentación
                        visual, lo que te permitirá comunicarte de manera
                        efectiva a través de tus documentos empresariales.
                      </p>
                    </div>
                  </div>

                  <div
                    className="hs-accordion"
                    id="hs-basic-with-title-and-arrow-stretched-gestion-heading-three"
                  >
                    <button
                      className="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left text-gray-800 transition"
                      aria-controls="hs-basic-with-title-and-arrow-stretched-gestion-collapse-four"
                    >
                      Cumplimiento de la normativa ISO 9001
                      <svg
                        className="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500"
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
                        />
                      </svg>
                      <svg
                        className="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                    <div
                      id="hs-basic-with-title-and-arrow-stretched-gestion-collapse-four"
                      className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                      aria-labelledby="hs-basic-with-title-and-arrow-stretched-gestion-heading-four"
                    >
                      <p>
                        Obtendrás una comprensión profunda de los requisitos y
                        principios de la normativa ISO 9001, un estándar
                        reconocido internacionalmente para la gestión de la
                        calidad. Aprenderás cómo implementar y mantener un
                        sistema de gestión de calidad que cumpla con los
                        estándares establecidos.
                      </p>
                    </div>
                  </div>

                  <div
                    className="hs-accordion"
                    id="hs-basic-with-title-and-arrow-stretched-gestion-heading-five"
                  >
                    <button
                      className="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left text-gray-800 transition"
                      aria-controls="hs-basic-with-title-and-arrow-stretched-gestion-collapse-five"
                    >
                      Herramientas y tecnologías para la gestión documental
                      <svg
                        className="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500"
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
                        />
                      </svg>
                      <svg
                        className="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                    <div
                      id="hs-basic-with-title-and-arrow-stretched-gestion-collapse-five"
                      className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                      aria-labelledby="hs-basic-with-title-and-arrow-stretched-gestion-heading-five"
                    >
                      <p>
                        Explorarás diversas herramientas y tecnologías
                        utilizadas en la gestión documental. Conocerás sistemas
                        de gestión electrónica de documentos (GED), software de
                        colaboración y otras soluciones tecnológicas que pueden
                        mejorar la eficiencia y efectividad de tus procesos
                        documentales.
                      </p>
                    </div>
                  </div>

                  <div
                    className="hs-accordion"
                    id="hs-basic-with-title-and-arrow-stretched-gestion-heading-six"
                  >
                    <button
                      className="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left text-gray-800 transition"
                      aria-controls="hs-basic-with-title-and-arrow-stretched-gestion-collapse-six"
                    >
                      Mejores prácticas de gestión documental
                      <svg
                        className="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500"
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
                        />
                      </svg>
                      <svg
                        className="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                    <div
                      id="hs-basic-with-title-and-arrow-stretched-gestion-collapse-six"
                      className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                      aria-labelledby="hs-basic-with-title-and-arrow-stretched-gestion-heading-six"
                    >
                      <p>
                        Obtendrás una visión integral de las mejores prácticas
                        de gestión documental utilizadas en diferentes
                        industrias. Aprenderás de casos de estudio y ejemplos
                        reales para obtener ideas y enfoques innovadores que
                        puedas aplicar en tu propio entorno empresarial.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*  */}
          <div
            className="md:grid lg:grid-cols-2 lg:gap-12 xl:gap-20"
            id="diplomado-office"
          >
            <div className="lg:order-2">
              <Image
                className="rounded-xl"
                width={900}
                height={900}
                src={ImgOffice}
                alt="Image Description"
              />
            </div>

            <div className="mt-5 sm:mt-10 lg:mt-0">
              <div className="space-y-6">
                <div className="space-y-2 md:space-y-4">
                  <h2 className="text-3xl font-bold text-gray-800 lg:text-4xl">
                    Certificado en microsoft office
                  </h2>
                  <p className="tracking-wide">
                    Nuestro Diplomado en Microsoft Office te brindará las
                    habilidades necesarias para utilizar de manera profesional
                    las principales herramientas de la suite de Office,
                    incluyendo Word, Excel, PowerPoint y el resto de
                    herramientas de Office 365.
                  </p>
                </div>

                <div className="hs-accordion-group">
                  <div
                    className="hs-accordion"
                    id="hs-basic-with-title-and-arrow-stretched-office-heading-one"
                  >
                    <button
                      className="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left text-gray-800 transition"
                      aria-controls="hs-basic-with-title-and-arrow-stretched-office-collapse-one"
                    >
                      Microsoft Word Avanzado
                      <svg
                        className="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500"
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
                        />
                      </svg>
                      <svg
                        className="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                    <div
                      id="hs-basic-with-title-and-arrow-stretched-office-collapse-one"
                      className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300  "
                      aria-labelledby="hs-basic-with-title-and-arrow-stretched-office-heading-one"
                    >
                      <p>
                        Aprende a utilizar Word de manera avanzada, dominando
                        funciones como el formato de texto y párrafos, creación
                        de estilos, inserción de tablas y gráficos, generación
                        de índices y tablas de contenido, automatización de
                        tareas, entre otros.
                      </p>
                    </div>
                  </div>

                  <div
                    className="hs-accordion"
                    id="hs-basic-with-title-and-arrow-stretched-office-heading-two"
                  >
                    <button
                      className="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left text-gray-800 transition"
                      aria-controls="hs-basic-with-title-and-arrow-stretched-office-collapse-two"
                    >
                      Microsoft Excel Profesional
                      <svg
                        className="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500"
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
                        />
                      </svg>
                      <svg
                        className="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                    <div
                      id="hs-basic-with-title-and-arrow-stretched-office-collapse-two"
                      className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                      aria-labelledby="hs-basic-with-title-and-arrow-stretched-office-heading-two"
                    >
                      <p>
                        Adquiere habilidades avanzadas en Excel para el análisis
                        y manejo de datos. Aprenderás a utilizar fórmulas y
                        funciones avanzadas, crear tablas dinámicas, realizar
                        análisis de datos, utilizar macros y automatizar tareas,
                        y generar informes y gráficos profesionales.
                      </p>
                    </div>
                  </div>

                  <div
                    className="hs-accordion"
                    id="hs-basic-with-title-and-arrow-stretched-office-heading-three"
                  >
                    <button
                      className="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left text-gray-800 transition"
                      aria-controls="hs-basic-with-title-and-arrow-stretched-office-collapse-three"
                    >
                      Microsoft PowerPoint Creativo
                      <svg
                        className="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500"
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
                        />
                      </svg>
                      <svg
                        className="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                    <div
                      id="hs-basic-with-title-and-arrow-stretched-office-collapse-three"
                      className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                      aria-labelledby="hs-basic-with-title-and-arrow-stretched-office-heading-three"
                    >
                      <p>
                        Descubre cómo crear presentaciones impactantes y
                        profesionales con PowerPoint. Aprenderás a utilizar las
                        funciones avanzadas de diseño y formato, trabajar con
                        imágenes, audio y video, crear transiciones y
                        animaciones, y mejorar tus habilidades de presentación y
                        comunicación visual.
                      </p>
                    </div>
                  </div>

                  <div
                    className="hs-accordion"
                    id="hs-basic-with-title-and-arrow-stretched-office-heading-three"
                  >
                    <button
                      className="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left text-gray-800 transition"
                      aria-controls="hs-basic-with-title-and-arrow-stretched-office-collapse-four"
                    >
                      Herramientas de Office 365
                      <svg
                        className="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500"
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
                        />
                      </svg>
                      <svg
                        className="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                    <div
                      id="hs-basic-with-title-and-arrow-stretched-office-collapse-four"
                      className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                      aria-labelledby="hs-basic-with-title-and-arrow-stretched-office-heading-four"
                    >
                      <p>
                        Explora el resto de herramientas disponibles en Office
                        365, como Outlook, OneNote, Teams y SharePoint.
                        Aprenderás a utilizar estas herramientas de manera
                        eficiente y a aprovechar sus funcionalidades para
                        mejorar la productividad y colaboración en tu entorno de
                        trabajo.
                      </p>
                    </div>
                  </div>

                  <div
                    className="hs-accordion"
                    id="hs-basic-with-title-and-arrow-stretched-office-heading-five"
                  >
                    <button
                      className="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left text-gray-800 transition"
                      aria-controls="hs-basic-with-title-and-arrow-stretched-office-collapse-five"
                    >
                      Integración y Automatización
                      <svg
                        className="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500"
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
                        />
                      </svg>
                      <svg
                        className="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                    <div
                      id="hs-basic-with-title-and-arrow-stretched-office-collapse-five"
                      className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                      aria-labelledby="hs-basic-with-title-and-arrow-stretched-office-heading-five"
                    >
                      <p>
                        Descubre cómo integrar y automatizar las herramientas de
                        Office para maximizar tu eficiencia. Aprenderás a
                        vincular datos entre aplicaciones, utilizar complementos
                        y macros para simplificar tareas repetitivas, y
                        aprovechar las opciones de colaboración en tiempo real.
                      </p>
                    </div>
                  </div>

                  <div
                    className="hs-accordion"
                    id="hs-basic-with-title-and-arrow-stretched-office-heading-six"
                  >
                    <button
                      className="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left text-gray-800 transition"
                      aria-controls="hs-basic-with-title-and-arrow-stretched-office-collapse-six"
                    >
                      Trucos y Consejos Profesionales
                      <svg
                        className="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500"
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
                        />
                      </svg>
                      <svg
                        className="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                    <div
                      id="hs-basic-with-title-and-arrow-stretched-office-collapse-six"
                      className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                      aria-labelledby="hs-basic-with-title-and-arrow-stretched-office-heading-six"
                    >
                      <p>
                        Aprende consejos y trucos profesionales para utilizar
                        las herramientas de Office de manera más eficiente.
                        Descubrirás atajos de teclado, funciones ocultas y
                        técnicas avanzadas que te ayudarán a agilizar tus tareas
                        y mejorar tu productividad.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*  */}
          <div
            className="md:grid lg:grid-cols-2 lg:gap-12 xl:gap-20"
            id="diplomado-bug-bounty-hunting"
          >
            <div className="bg-gray-100 rounded-xl">
              <Image
                width={900}
                height={900}
                src={ImgBugBountryHuntre}
                alt="Image Description"
              />
            </div>

            <div className="mt-5 sm:mt-10 lg:mt-0">
              <div className="space-y-6">
                <div className="space-y-2 md:space-y-4">
                  <h2 className="text-3xl font-bold text-gray-800 lg:text-4xl">
                    Certificado de bug bounty hunting
                  </h2>
                  <p className="tracking-wide">
                    El Certificado de Bug Bounty Hunting te proporcionará las
                    habilidades esenciales para convertirte en un cazador de
                    errores certificado y altamente competente. A través de este
                    programa, adquirirás los conocimientos y técnicas necesarios
                    para identificar y aprovechar vulnerabilidades en sistemas
                    informáticos y aplicaciones web.
                  </p>
                </div>

                <div className="hs-accordion-group">
                  <div
                    className="hs-accordion"
                    id="hs-basic-with-title-and-arrow-stretched-bug-bounty-hunting-heading-one"
                  >
                    <button
                      className="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left text-gray-800 transition"
                      aria-controls="hs-basic-with-title-and-arrow-stretched-bug-bounty-hunting-collapse-one"
                    >
                      Conceptos fundamentales de seguridad
                      <svg
                        className="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500"
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
                        />
                      </svg>
                      <svg
                        className="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                    <div
                      id="hs-basic-with-title-and-arrow-stretched-bug-bounty-hunting-collapse-one"
                      className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300  "
                      aria-labelledby="hs-basic-with-title-and-arrow-stretched-bug-bounty-hunting-heading-one"
                    >
                      <p>
                        Aprenderás los principios básicos de seguridad
                        informática y las metodologías utilizadas en el mundo
                        del bug bounty hunting. Comprenderás los fundamentos de
                        las vulnerabilidades comunes y cómo aprovecharlas para
                        mejorar la seguridad.
                      </p>
                    </div>
                  </div>

                  <div
                    className="hs-accordion"
                    id="hs-basic-with-title-and-arrow-stretched-bug-bounty-hunting-heading-two"
                  >
                    <button
                      className="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left text-gray-800 transition"
                      aria-controls="hs-basic-with-title-and-arrow-stretched-bug-bounty-hunting-collapse-two"
                    >
                      Metodologías de caza de bugs
                      <svg
                        className="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500"
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
                        />
                      </svg>
                      <svg
                        className="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                    <div
                      id="hs-basic-with-title-and-arrow-stretched-bug-bounty-hunting-collapse-two"
                      className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                      aria-labelledby="hs-basic-with-title-and-arrow-stretched-bug-bounty-hunting-heading-two"
                    >
                      <p>
                        Explorarás diferentes metodologías y enfoques utilizados
                        por los cazadores de errores profesionales. Aprenderás a
                        identificar y analizar activamente posibles
                        vulnerabilidades en sistemas y aplicaciones, y a
                        reportar los hallazgos de manera clara y efectiva.
                      </p>
                    </div>
                  </div>

                  <div
                    className="hs-accordion"
                    id="hs-basic-with-title-and-arrow-stretched-bug-bounty-hunting-heading-three"
                  >
                    <button
                      className="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left text-gray-800 transition"
                      aria-controls="hs-basic-with-title-and-arrow-stretched-bug-bounty-hunting-collapse-three"
                    >
                      Pruebas de penetración y escaneo de vulnerabilidades
                      <svg
                        className="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500"
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
                        />
                      </svg>
                      <svg
                        className="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                    <div
                      id="hs-basic-with-title-and-arrow-stretched-bug-bounty-hunting-collapse-three"
                      className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                      aria-labelledby="hs-basic-with-title-and-arrow-stretched-bug-bounty-hunting-heading-three"
                    >
                      <p>
                        Obtendrás habilidades prácticas en pruebas de
                        penetración y escaneo de vulnerabilidades. Aprenderás a
                        utilizar herramientas y técnicas para identificar
                        debilidades en la seguridad, evaluar la exposición a
                        riesgos y descubrir posibles puntos de entrada para
                        ataques.
                      </p>
                    </div>
                  </div>

                  <div
                    className="hs-accordion"
                    id="hs-basic-with-title-and-arrow-stretched-bug-bounty-hunting-heading-three"
                  >
                    <button
                      className="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left text-gray-800 transition"
                      aria-controls="hs-basic-with-title-and-arrow-stretched-bug-bounty-hunting-collapse-four"
                    >
                      Identificación y explotación de vulnerabilidades web
                      <svg
                        className="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500"
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
                        />
                      </svg>
                      <svg
                        className="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                    <div
                      id="hs-basic-with-title-and-arrow-stretched-bug-bounty-hunting-collapse-four"
                      className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                      aria-labelledby="hs-basic-with-title-and-arrow-stretched-bug-bounty-hunting-heading-four"
                    >
                      <p>
                        Te familiarizarás con las vulnerabilidades comunes en
                        aplicaciones web, como inyecciones SQL, ataques de
                        cross-site scripting (XSS), manipulación de sesiones y
                        más. Aprenderás a identificar estas vulnerabilidades y a
                        aprovecharlas de manera ética para demostrar su impacto.
                      </p>
                    </div>
                  </div>

                  <div
                    className="hs-accordion"
                    id="hs-basic-with-title-and-arrow-stretched-bug-bounty-hunting-heading-five"
                  >
                    <button
                      className="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left text-gray-800 transition"
                      aria-controls="hs-basic-with-title-and-arrow-stretched-bug-bounty-hunting-collapse-five"
                    >
                      Reporte de vulnerabilidades
                      <svg
                        className="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500"
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
                        />
                      </svg>
                      <svg
                        className="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                    <div
                      id="hs-basic-with-title-and-arrow-stretched-bug-bounty-hunting-collapse-five"
                      className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                      aria-labelledby="hs-basic-with-title-and-arrow-stretched-bug-bounty-hunting-heading-five"
                    >
                      <p>
                        Aprenderás a documentar y comunicar de manera efectiva
                        las vulnerabilidades encontradas. Desarrollarás
                        habilidades para elaborar informes claros y concisos,
                        que incluyan información relevante y evidencia de las
                        vulnerabilidades descubiertas, lo cual es fundamental
                        para garantizar una respuesta adecuada y soluciones
                        oportunas.
                      </p>
                    </div>
                  </div>

                  <div
                    className="hs-accordion"
                    id="hs-basic-with-title-and-arrow-stretched-bug-bounty-hunting-heading-six"
                  >
                    <button
                      className="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left text-gray-800 transition"
                      aria-controls="hs-basic-with-title-and-arrow-stretched-bug-bounty-hunting-collapse-six"
                    >
                      Ética y responsabilidad en el bug bounty hunting
                      <svg
                        className="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500"
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
                        />
                      </svg>
                      <svg
                        className="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                    <div
                      id="hs-basic-with-title-and-arrow-stretched-bug-bounty-hunting-collapse-six"
                      className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                      aria-labelledby="hs-basic-with-title-and-arrow-stretched-bug-bounty-hunting-heading-six"
                    >
                      <p>
                        Comprenderás la importancia de la ética y la
                        responsabilidad en el campo del bug bounty hunting.
                        Aprenderás a operar de manera legal y ética, respetando
                        las políticas y términos establecidos por las
                        plataformas y organizaciones que participan en programas
                        de recompensa por errores.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*  */}
          <div
            className="md:grid lg:grid-cols-2 lg:gap-12 xl:gap-20"
            id="diplomado-penetration-testing-specialist"
          >
            <div className="bg-gray-100 rounded-xl lg:order-2">
              <Image
                width={900}
                height={900}
                src={ImgPenetrationTestingSpecialist}
                alt="Image Description"
              />
            </div>

            <div className="mt-5 sm:mt-10 lg:mt-0">
              <div className="space-y-6">
                <div className="space-y-2 md:space-y-4">
                  <h2 className="text-3xl font-bold text-gray-800 lg:text-4xl">
                    Certificado de penetration testing specialist
                  </h2>
                  <p className="tracking-wide">
                    El Certificado de Penetration Testing Specialist te
                    proporcionará las habilidades y conocimientos esenciales
                    para convertirte en un especialista en pruebas de
                    penetración. A través de este curso, aprenderás las técnicas
                    y metodologías utilizadas para identificar y evaluar
                    vulnerabilidades en sistemas informáticos.
                  </p>
                </div>

                <div className="hs-accordion-group">
                  <div
                    className="hs-accordion"
                    id="hs-basic-with-title-and-arrow-stretched-penetration-testing-specialist-heading-one"
                  >
                    <button
                      className="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left text-gray-800 transition"
                      aria-controls="hs-basic-with-title-and-arrow-stretched-penetration-testing-specialist-collapse-one"
                    >
                      Conceptos fundamentales de seguridad
                      <svg
                        className="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500"
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
                        />
                      </svg>
                      <svg
                        className="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                    <div
                      id="hs-basic-with-title-and-arrow-stretched-penetration-testing-specialist-collapse-one"
                      className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300  "
                      aria-labelledby="hs-basic-with-title-and-arrow-stretched-penetration-testing-specialist-heading-one"
                    >
                      <p>
                        Adquirirás una comprensión sólida de los conceptos
                        básicos de seguridad informática y las metodologías
                        utilizadas en las pruebas de penetración. Conocerás las
                        diferentes fases de un ataque y aprenderás a pensar como
                        un hacker ético para identificar posibles
                        vulnerabilidades
                      </p>
                    </div>
                  </div>

                  <div
                    className="hs-accordion"
                    id="hs-basic-with-title-and-arrow-stretched-penetration-testing-specialist-heading-two"
                  >
                    <button
                      className="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left text-gray-800 transition"
                      aria-controls="hs-basic-with-title-and-arrow-stretched-penetration-testing-specialist-collapse-two"
                    >
                      Técnicas de enumeración y escaneo
                      <svg
                        className="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500"
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
                        />
                      </svg>
                      <svg
                        className="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                    <div
                      id="hs-basic-with-title-and-arrow-stretched-penetration-testing-specialist-collapse-two"
                      className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                      aria-labelledby="hs-basic-with-title-and-arrow-stretched-penetration-testing-specialist-heading-two"
                    >
                      <p>
                        Aprenderás a utilizar herramientas y técnicas de
                        enumeración y escaneo para descubrir información sobre
                        sistemas y servicios en una red. Conocerás las mejores
                        prácticas para identificar puertos abiertos, servicios
                        expuestos y configuraciones inseguras.
                      </p>
                    </div>
                  </div>

                  <div
                    className="hs-accordion"
                    id="hs-basic-with-title-and-arrow-stretched-penetration-testing-specialist-heading-three"
                  >
                    <button
                      className="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left text-gray-800 transition"
                      aria-controls="hs-basic-with-title-and-arrow-stretched-penetration-testing-specialist-collapse-three"
                    >
                      Identificación y explotación de vulnerabilidades
                      <svg
                        className="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500"
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
                        />
                      </svg>
                      <svg
                        className="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                    <div
                      id="hs-basic-with-title-and-arrow-stretched-penetration-testing-specialist-collapse-three"
                      className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                      aria-labelledby="hs-basic-with-title-and-arrow-stretched-penetration-testing-specialist-heading-three"
                    >
                      <p>
                        Obtendrás habilidades prácticas en la identificación y
                        explotación de vulnerabilidades comunes en sistemas y
                        aplicaciones. Aprenderás a utilizar herramientas
                        especializadas para encontrar debilidades en la
                        seguridad, como inyecciones SQL, ataques de cross-site
                        scripting (XSS) y manipulación de sesiones.
                      </p>
                    </div>
                  </div>

                  <div
                    className="hs-accordion"
                    id="hs-basic-with-title-and-arrow-stretched-penetration-testing-specialist-heading-three"
                  >
                    <button
                      className="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left text-gray-800 transition"
                      aria-controls="hs-basic-with-title-and-arrow-stretched-penetration-testing-specialist-collapse-four"
                    >
                      Pruebas de penetración web y de red
                      <svg
                        className="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500"
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
                        />
                      </svg>
                      <svg
                        className="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                    <div
                      id="hs-basic-with-title-and-arrow-stretched-penetration-testing-specialist-collapse-four"
                      className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                      aria-labelledby="hs-basic-with-title-and-arrow-stretched-penetration-testing-specialist-heading-four"
                    >
                      <p>
                        Explorarás las técnicas y metodologías utilizadas en las
                        pruebas de penetración web y de red. Aprenderás a
                        realizar pruebas de intrusión en aplicaciones web,
                        evaluar la seguridad de una infraestructura de red y
                        simular ataques realistas para identificar posibles
                        brechas de seguridad.
                      </p>
                    </div>
                  </div>

                  <div
                    className="hs-accordion"
                    id="hs-basic-with-title-and-arrow-stretched-penetration-testing-specialist-heading-five"
                  >
                    <button
                      className="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left text-gray-800 transition"
                      aria-controls="hs-basic-with-title-and-arrow-stretched-penetration-testing-specialist-collapse-five"
                    >
                      Análisis de vulnerabilidades y explotación de escenarios
                      complejos
                      <svg
                        className="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500"
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
                        />
                      </svg>
                      <svg
                        className="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                    <div
                      id="hs-basic-with-title-and-arrow-stretched-penetration-testing-specialist-collapse-five"
                      className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                      aria-labelledby="hs-basic-with-title-and-arrow-stretched-penetration-testing-specialist-heading-five"
                    >
                      <p>
                        Desarrollarás habilidades avanzadas en el análisis de
                        vulnerabilidades y la explotación de escenarios
                        complejos. Aprenderás a utilizar técnicas avanzadas para
                        descubrir y explotar vulnerabilidades difíciles de
                        detectar, como ataques de fuerza bruta, escalada de
                        privilegios y evasión de sistemas de detección de
                        intrusos.
                      </p>
                    </div>
                  </div>

                  <div
                    className="hs-accordion"
                    id="hs-basic-with-title-and-arrow-stretched-penetration-testing-specialist-heading-six"
                  >
                    <button
                      className="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left text-gray-800 transition"
                      aria-controls="hs-basic-with-title-and-arrow-stretched-penetration-testing-specialist-collapse-six"
                    >
                      Reporte y recomendaciones de seguridad
                      <svg
                        className="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500"
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
                        />
                      </svg>
                      <svg
                        className="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                    <div
                      id="hs-basic-with-title-and-arrow-stretched-penetration-testing-specialist-collapse-six"
                      className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                      aria-labelledby="hs-basic-with-title-and-arrow-stretched-penetration-testing-specialist-heading-six"
                    >
                      <p>
                        Dominarás la creación de informes de seguridad
                        profesionales y efectivos. Aprenderás a documentar y
                        comunicar los resultados de tus pruebas de manera clara
                        y concisa, incluyendo recomendaciones de seguridad para
                        mitigar las vulnerabilidades identificadas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*  */}
          <div
            className="grid gap-12 md:grid-cols-2"
            id="formulario"
          >
            <div>
              <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl lg:text-5xl lg:leading-tight">
                Solicitar
              </h1>
              <p className="mt-4 text-gray-800 tracking-wide md:text-lg">
                En Grupo ASICA, estamos comprometidos con tu desarrollo
                profesional y queremos brindarte las mejores oportunidades para
                que adquieras experiencia práctica y te prepares para tu
                carrera.
              </p>
            </div>

            <div className="relative">
              <div className="flex flex-col rounded-xl border p-4 sm:p-6 lg:p-10">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  Rellene el formulario
                </h2>

                <FormCursos />

                <div className="mt-3 text-center">
                  <p className="text-sm text-gray-500">
                    Le responderemos en 1-2 días laborables.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
