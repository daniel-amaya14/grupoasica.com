import React from 'react';
import ImageAbout from '@/public/images/imghero.webp';
import Image from 'next/image';
import ImgMision from '@/public/images/mision.webp';
import ImgVision from '@/public/images/vision.webp';
import ImgValores from '@/public/images/valores.webp';
import {
  IconBriefcase,
  IconStart,
  IconUsers,
  IconFolderOpen,
} from '@/components/Icons';

const stats = [
  { title: '+400', span: 'Proyectos', icon: IconFolderOpen },
  { title: '+100', span: 'Clientes', icon: IconUsers },
  { title: '+28', span: 'Años de experiencia', icon: IconStart },
  { title: '+37', span: 'Partners', icon: IconBriefcase },
];

const valores = [
  'Ética',
  'Respeto',
  'Innovación',
  'Calidad',
  'Actitud de servicio',
  'Sentido de pertenencia',
];

export default function About() {
  return (
    <>
      <section className="relative">
        <Image
          src={ImageAbout}
          alt="Picture of the author"
          fill={true}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-r from-black/40 to-black/40"></div>
        <div className="relative max-w-7xl px-4 py-16 mx-auto sm:px-6 md:py-24 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Sobre nosotros
            </h1>
            <p className="mt-6 text-base tracking-wide text-white">
              Somos líder en la implementación de software propio y de terceros
              en Honduras y Centroamérica. Ofrecemos servicios de consultoría y
              asesoría en informática para organizaciones complejas y contamos
              con un equipo altamente especializado. Somos expertos en
              desarrollo, implementación y capacitación de software para
              diferentes sectores. Nuestro compromiso es optimizar el potencial
              de nuestros clientes implementando soluciones en tiempo y forma.
            </p>
          </div>
        </div>
      </section>
      <section className="max-w-7xl px-4 py-10 mx-auto sm:px-6 lg:px-8 lg:py-14">
        <div className="flex flex-col gap-16">
          {/* historia */}
          <section>
            <h2 className="text-2xl font-semibold md:text:3xl mb-3">
              Nuestra historia
            </h2>
            <p className="text-base tracking-wide">
              Grupo ASICA es líder empresarial en la implementación de software
              propio y de terceros en Honduras y resto de Centroamérica. Su
              trabajo está enfocado en la consultoría y la asesoría en servicios
              de informática para organizaciones complejas. Con un equipo
              multidisciplinario y altamente especializado, se ha convertido en
              una verdadera garantía de éxito en el desarrollo de proyectos de
              tecnología informática.
              <br />
              <br />
              Grupo ASICA ha basado su desarrollo institucional en la tecnología
              de punta y el compromiso con sus clientes, implementando un
              sistema interno de capacitación continua de su personal. Somos
              expertos en el desarrollo, implementación y capacitación de
              Software para los sectores: Financiero, Distribución, Gestión
              Documental, Recursos Humanos Y ERP para PYME; sin dejar de lado
              nuestra experiencia como un verdadero integrador de diferentes
              soluciones de Software, comprometiéndonos con nuestros clientes en
              implementar en tiempo y forma las soluciones adquiridas con el
              objetivo de que optimicen su potencial.
            </p>
          </section>

          {/* stats */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:px-0 lg:grid-cols-4 xl:gap-x-12">
            {stats.map(({ title, span, icon }) => {
              return (
                <div
                  key={title}
                  className="flex flex-col rounded-lg border shadow-sm bg-white"
                >
                  <div className="flex gap-x-4 p-4 md:p-5">
                    <div className="flex h-[46px] w-[46px] flex-shrink-0 items-center justify-center rounded-md bg-gray-100">
                      {React.createElement(icon, {
                        className: 'h-6 w-6 text-gray-600',
                      })}
                    </div>

                    <div className="grow">
                      <p className="text-xs uppercase tracking-wide text-gray-700">
                        {span}
                      </p>

                      <div className="mt-1 flex items-center gap-x-2">
                        <h3 className="text-xl font-medium text-gray-800 sm:text-2xl">
                          {title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* mision y vision */}
          <section className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {/* mision */}
            <article>
              <header className="rounded-lg h-64 overflow-hidden">
                <Image
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={ImgMision}
                />
              </header>
              <footer>
                <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">
                  Misión
                </h2>
                <p className="leading-relaxed text-base text-justify">
                  Proveer productos y servicios con tecnología de punta,
                  utilizando metodologías y estándares de clase mundial,
                  respaldados por profesionales certificados para brindar un
                  servicio eficiente, que garantice la inversión de nuestros
                  clientes, así como la rentabilidad y crecimiento permanentes
                  de nuestra empresa.
                </p>
              </footer>
            </article>

            {/* vision */}
            <article>
              <header className="rounded-lg h-64 overflow-hidden">
                <Image
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={ImgVision}
                />
              </header>
              <footer>
                <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">
                  Visión
                </h2>
                <p className="leading-relaxed text-base text-justify">
                  Ser para el 2025 el grupo líder en gestión, consultoría,
                  desarrollo e integración de soluciones de arquitectura
                  informática empresarial, para satisfacer las necesidades de
                  nuestros clientes y contribuir al desarrollo de la región
                  centroamericana.
                </p>
              </footer>
            </article>
          </section>

          {/* valores */}
          <section className="flex flex-col gap-4 md:flex-row ">
            <div>
              <div className="w-full mb-5">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                  Valores
                </h2>
                <div className="leading-relaxed text-justify w-full sm:pr-2">
                  Creemos que estos valores son fundamentales para crear una
                  cultura empresarial sólida y sostenible, y nos comprometemos a
                  mantenerlos en todo lo que hacemos.
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {valores.map((valor) => {
                  return (
                    <div
                      className="w-full py-2 pr-2"
                      key={valor}
                    >
                      <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                          viewBox="0 0 24 24"
                        >
                          <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                          <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                        <span className="title-font font-medium">{valor}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="w-full rounded-lg overflow-hidden sm:max-w-2/3">
              <Image
                className="object-cover object-center w-full h-full"
                src={ImgValores}
                alt="stats"
              />
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
