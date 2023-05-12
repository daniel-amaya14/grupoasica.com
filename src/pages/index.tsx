import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ImageHome from '@/public/images/imghero.webp';
import InfoServices from '@/components/InfoServices';
import PartnerSection from '@/components/Home/PartnerSection';
import Aprende from '@/components/Home/Aprende';
import Capacitaciones from '@/components/Home/Capacitaciones';
import Certificaciones from '@/components/Home/Certificaciones';
import {
  IconFolderOpen,
  IconStart,
  IconBriefcase,
  IconUsers,
} from '@/components/Icons';

export default function Home() {
  useEffect(() => {
    document.title =
      'Grupo ASICA | Soluciones tecnológicas para un futuro exitoso';
  }, []);

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
              <div className="flex gap-3 border-2 border-gray-200 px-4 py-6 rounded-lg text-white sm:flex-col">
                <IconFolderOpen className="w-12 h-12 inline-block" />
                <div>
                  <h2 className="title-font font-medium text-3xl">+400</h2>
                  <p className="leading-relaxed">Proyectos</p>
                </div>
              </div>
            </div>
            {/* clientes */}
            <div className="p-2 w-full">
              <div className="flex gap-3 border-2 border-gray-200 px-4 py-6 rounded-lg text-white sm:flex-col">
                <IconUsers className="w-12 h-12 inline-block" />
                <div>
                  <h2 className="title-font font-medium text-3xl">+100</h2>
                  <p className="leading-relaxed">Clientes</p>
                </div>
              </div>
            </div>
            {/* experiencia */}
            <div className="p-2 w-full">
              <div className="flex gap-3 border-2 border-gray-200 px-4 py-6 rounded-lg text-white sm:flex-col">
                <IconStart className="w-12 h-12 inline-block" />
                <div>
                  <h2 className="title-font font-medium text-3xl">+28</h2>
                  <p className="leading-relaxed">Años de experiencia</p>
                </div>
              </div>
            </div>
            {/* partners */}
            <div className="p-2 w-full">
              <div className="flex gap-3 border-2 border-gray-200 px-4 py-6 rounded-lg text-white sm:flex-col">
                <IconBriefcase className="w-12 h-12 inline-block" />
                <div>
                  <h2 className="title-font font-medium text-3xl">+37</h2>
                  <p className="leading-relaxed">Partners</p>
                </div>
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
                      stopColor="white"
                      stopOpacity={0.07}
                    />
                    <stop
                      offset="1"
                      stopColor="white"
                      stopOpacity={0}
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
                      stopColor="white"
                      stopOpacity={0.07}
                    />
                    <stop
                      offset="1"
                      stopColor="white"
                      stopOpacity={0}
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
