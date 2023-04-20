import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ImageHome from '@/public/images/imghero.webp';
import InfoServices from '@/components/InfoServices';
import PartnerSection from '@/components/Home/PartnerSection';
import Aprende from '@/components/Home/Aprende';
import Capacitaciones from '@/components/Home/Capacitaciones';
import Certificaciones from '@/components/Home/Certificaciones';

export default function Home() {
  return (
    <>
      {/* hero */}
      <section className="relative h-full flex justify-center items-center md:h-[100vh]">
        <Image
          src={ImageHome}
          alt="Picture of the author"
          fill={true}
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40 bg-gradient-to-r from-black/40 to-black/40"></div>

        <div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
          <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl sm:text-center md:max-w-2xl">
            <h1 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
              Tu socio confiable en soluciones tecnológicas para un futuro
              exitoso
              <br className="hidden md:block" />
              {/* <span className="relative inline-block px-2">
              <span className="relative text-teal-900 z-10">lazy dog</span>
              <div className="absolute inset-0 -skew-x-12 transform bg-teal-400" />
            </span> */}
            </h1>
            <p className="mb-6 text-base text-white md:text-lg">
              Confía en Grupo ASICA, con más de 28 años liderando soluciones
              tecnológicas de calidad para impulsar el crecimiento de tu empresa
              con responsabilidad y visión a futuro.
            </p>

            {/* <p className="mb-10 max-w-md text-xs tracking-wide text-indigo-100 sm:mx-auto sm:text-sm md:mb-16">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque.
          </p> */}
            <Link
              href="#servicios"
              scroll={false}
              aria-label="Scroll down"
              className="mx-auto flex h-10 w-10 transform items-center justify-center rounded-full border border-gray-400 text-white duration-300 hover:scale-110 hover:border-teal-400 hover:text-teal-400 hover:shadow motion-safe:animate-bounce-slow"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="currentColor"
              >
                <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0">
          <svg
            viewBox="0 0 224 12"
            fill="currentColor"
            className="-mb-1 w-full text-white"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
          </svg>
        </div>
      </section>

      {/* services */}
      <section
        className="px-6 py-20 xl:px-16"
        id="servicios"
      >
        <InfoServices title="¿Quién eres?" />
      </section>

      {/* stats */}
      <section className="">
        <div className="bg-fontPrimary relative z-10 overflow-hidden py-12 px-8 md:p-[70px]">
          {/* title */}
          <div className="mb-10">
            <h2 className="text-white text-3xl font-bold xl:text-4xl mb-5">
              ¿Por qué elegirnos?
            </h2>
            <p className="text-white text-justify">
              Somos líderes en software propio y de terceros en Honduras y
              Centroamérica, ofreciendo servicios de consultoría y asesoría
              informática para organizaciones complejas con un equipo
              especializado en desarrollo, implementación y capacitación de
              software. Nos comprometemos a optimizar el potencial de nuestros
              clientes con soluciones oportunas.
            </p>
          </div>
          {/* items stats */}
          <div className="-mx-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {/* proyectos */}
            <div className="p-2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="currentColor"
                    d="M248.23 112.31A20 20 0 0 0 232 104h-12V88a20 20 0 0 0-20-20h-68l-26.66-20a20.12 20.12 0 0 0-12-4H40a20 20 0 0 0-20 20v144a12 12 0 0 0 12 12h179.1a12 12 0 0 0 11.33-8l28.49-81.47l.06-.17a20 20 0 0 0-2.75-18.05ZM92 68l26.67 20a20.12 20.12 0 0 0 12 4H196v12H69.77a20 20 0 0 0-18.94 13.58L44 137.15V68Zm110.59 128H48.89l23.72-68h153.76Z"
                  />
                </svg>

                <h2 className="title-font font-medium text-3xl">+400</h2>
                <p className="leading-relaxed">Proyectos</p>
              </div>
            </div>
            {/* clientes */}
            <div className="p-2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="text-white w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12.3 12.22A4.92 4.92 0 0 0 14 8.5a5 5 0 0 0-10 0a4.92 4.92 0 0 0 1.7 3.72A8 8 0 0 0 1 19.5a1 1 0 0 0 2 0a6 6 0 0 1 12 0a1 1 0 0 0 2 0a8 8 0 0 0-4.7-7.28ZM9 11.5a3 3 0 1 1 3-3a3 3 0 0 1-3 3Zm9.74.32A5 5 0 0 0 15 3.5a1 1 0 0 0 0 2a3 3 0 0 1 3 3a3 3 0 0 1-1.5 2.59a1 1 0 0 0-.5.84a1 1 0 0 0 .45.86l.39.26l.13.07a7 7 0 0 1 4 6.38a1 1 0 0 0 2 0a9 9 0 0 0-4.23-7.68Z"
                  />
                </svg>
                <h2 className="title-font font-medium text-3xl">+100</h2>
                <p className="leading-relaxed">Clientes</p>
              </div>
            </div>
            {/* experiencia */}
            <div className="p-2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m19.65 9.04l-4.84-.42l-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73l3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27l1-4.28l-3.32-2.88l4.38-.38L12 6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28L12 15.4z"
                  />
                </svg>

                <h2 className="title-font font-medium text-3xl">+28</h2>
                <p className="leading-relaxed">Años de experiencia</p>
              </div>
            </div>
            {/* partners */}
            <div className="p-2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white w-12 h-12 mb-3 inline-block"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="currentColor"
                    d="M216 56h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V72a16 16 0 0 0-16-16ZM96 48a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm120 24v41.61A184 184 0 0 1 128 136a184.07 184.07 0 0 1-88-22.38V72Zm0 128H40v-68.36A200.19 200.19 0 0 0 128 152a200.25 200.25 0 0 0 88-20.37V200Zm-112-88a8 8 0 0 1 8-8h32a8 8 0 0 1 0 16h-32a8 8 0 0 1-8-8Z"
                  />
                </svg>
                <h2 className="title-font font-medium text-3xl">+37</h2>
                <p className="leading-relaxed">Partners</p>
              </div>
            </div>
          </div>
          {/* svg */}
          <div>
            <span className="absolute top-0 left-0 z-[-1]">
              <svg
                width="239"
                height="212"
                viewBox="0 0 189 162"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="16"
                  cy="-16.5"
                  rx="173"
                  ry="178.5"
                  transform="rotate(180 16 -16.5)"
                  fill="url(#paint0_linear)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="-157"
                    y1="-107.754"
                    x2="98.5011"
                    y2="-106.425"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop
                      stop-color="white"
                      stop-opacity="0.07"
                    />
                    <stop
                      offset="1"
                      stop-color="white"
                      stop-opacity="0"
                    />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span className="absolute bottom-0 right-0 z-[-1]">
              <svg
                width="191"
                height="208"
                viewBox="0 0 191 208"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="173"
                  cy="178.5"
                  rx="173"
                  ry="178.5"
                  fill="url(#paint0_linear)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="-3.27832e-05"
                    y1="87.2457"
                    x2="255.501"
                    y2="88.5747"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop
                      stop-color="white"
                      stop-opacity="0.07"
                    />
                    <stop
                      offset="1"
                      stop-color="white"
                      stop-opacity="0"
                    />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </div>
        </div>
      </section>

      {/*  */}
      <Aprende />

      {/* cursos */}
      <section className="px-6 xl:px-16">
        <div className="flex flex-col gap-10">
          {/* capacitaciones */}
          <div>
            <div className="mb-4">
              <h3 className="text-2xl font-semibold">Capacitate</h3>
            </div>
            <Capacitaciones />
          </div>

          {/* certificaciones */}
          <div>
            <div className="mb-4">
              <h3 className="text-2xl font-semibold">Certifícate</h3>
            </div>
            <Certificaciones />
          </div>
        </div>
      </section>

      {/* partners */}
      <section className="px-6 py-20 xl:px-16">
        <PartnerSection />
      </section>
    </>
  );
}
