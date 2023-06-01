import React from 'react';
import {
  IconFolderOpen,
  IconStart,
  IconBriefcase,
  IconUsers,
} from '@/components/Icons';
const stats = [
  { title: '+400', span: 'Proyectos', icon: IconFolderOpen },
  { title: '+100', span: 'Clientes', icon: IconUsers },
  { title: '+28', span: 'Años de experiencia', icon: IconStart },
  { title: '+37', span: 'Partners', icon: IconBriefcase },
];

export default function About() {
  return (
    <section className="bg-primary relative z-10 overflow-hidden ">
      <div className="max-w-7xl px-4 py-16 mx-auto sm:px-6 lg:px-8 lg:py-24">
        {/* title */}
        <div className="mb-10 md:mb-14">
          <h2 className="text-white text-4xl font-bold leading-tight xl:text-4xl mb-5">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-white">
            Somos líderes en software propio y de terceros en Honduras y
            Centroamérica, ofreciendo servicios de consultoría y asesoría
            informática para organizaciones complejas con un equipo
            especializado en desarrollo, implementación y capacitación de
            software. Nos comprometemos a optimizar el potencial de nuestros
            clientes con soluciones oportunas.
          </p>
        </div>
        {/* items stats */}
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {stats.map(({ title, span, icon }) => {
            return (
              <div
                key={title}
                className="flex flex-col rounded-xl border shadow-sm bg-white bg-opacity-70"
              >
                <div className="flex gap-x-4 p-4 md:p-5">
                  <div className="flex h-[46px] w-[46px] flex-shrink-0 items-center justify-center rounded-md bg-gray-100">
                    {React.createElement(icon, {
                      className: 'h-6 w-6 text-gray-600',
                    })}
                  </div>

                  <div className="grow">
                    <p className="text-xs uppercase tracking-wide text-gray-500">
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
    </section>
  );
}
