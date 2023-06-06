import React from 'react';
import Image from 'next/image';
import FormStudent from '@/components/Forms/FormStudent';

export default function Estudiante() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-16 space-y-24 sm:px-6 md:pt-6 md:pb-24 lg:px-8">
      {/*  */}
      <div className="grid gap-4 md:grid-cols-2 md:items-center md:gap-8 xl:gap-20">
        <div>
          <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight">
            Impulsa tu{' '}
            <span className="text-blue-600">Carrera Profesional</span>
          </h1>
          <p
            className="mt-3 text-lg text-gray-800 tracking-wide"
            style={{ textWrap: 'balance' }}
          >
            En Grupo ASICA, creemos en la importancia de brindar oportunidades
            de prácticas y pasantías a estudiantes y jóvenes profesionales para
            que adquieran experiencia práctica y desarrollen habilidades
            relevantes en su campo de estudio. Nuestras oportunidades de
            prácticas y pasantías ofrecen un entorno de aprendizaje enriquecedor
            y apoyo para el crecimiento profesional.
          </p>
        </div>

        <div className="relative ml-4">
          <Image
            className="w-full rounded-md"
            src="https://images.pexels.com/photos/8199622/pexels-photo-8199622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            width={1260}
            height={750}
            alt="Image Description"
          />
          <div className="absolute inset-0 -z-[1] -mb-4 -ml-4 mr-4 mt-4 h-full w-full rounded-md bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 lg:-mb-6 lg:-ml-6 lg:mr-6 lg:mt-6"></div>
        </div>
      </div>

      {/*  */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-10 md:text-3xl">
          ¿Qué obtendrás con nosotros?
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
          <div className="space-y-6 lg:space-y-10">
            <div className="flex">
              <svg
                className="mt-2 h-8 w-8 flex-shrink-0 text-gray-800"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                  fill="currentColor"
                  fillOpacity={0.1}
                />
                <path
                  d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                  fill="currentColor"
                />
              </svg>
              <div className="ml-5 sm:ml-8">
                <h3 className="text-base font-semibold text-gray-800 sm:text-lg">
                  Experiencia Real en el Campo
                </h3>
                <p className="mt-1 text-gray-600">
                  Nuestras prácticas y pasantías te permitirán aplicar los
                  conocimientos teóricos adquiridos en tu carrera en un entorno
                  profesional. Trabajarás en proyectos reales, colaborarás con
                  profesionales experimentados y aprenderás de primera mano cómo
                  se aplica la teoría en la práctica.
                </p>
              </div>
            </div>

            <div className="flex">
              <svg
                className="mt-2 h-8 w-8 flex-shrink-0 text-gray-800"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                  fill="currentColor"
                  fillOpacity={0.1}
                />
                <path
                  d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                  fill="currentColor"
                />
              </svg>
              <div className="ml-5 sm:ml-8">
                <h3 className="text-base font-semibold text-gray-800 sm:text-lg">
                  Desarrollo de Habilidades Profesionales
                </h3>
                <p className="mt-1 text-gray-600">
                  Durante tu tiempo con nosotros, tendrás la oportunidad de
                  desarrollar habilidades clave para tu futura carrera. Desde
                  habilidades de comunicación y trabajo en equipo hasta
                  liderazgo y resolución de problemas, nuestras oportunidades de
                  prácticas y pasantías te brindarán una base sólida para tu
                  desarrollo profesional.
                </p>
              </div>
            </div>

            <div className="flex">
              <svg
                className="mt-2 h-8 w-8 flex-shrink-0 text-gray-800"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                  fill="currentColor"
                  fillOpacity={0.1}
                />
                <path
                  d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                  fill="currentColor"
                />
              </svg>
              <div className="ml-5 sm:ml-8">
                <h3 className="text-base font-semibold text-gray-800 sm:text-lg">
                  Mentoría y Orientación
                </h3>
                <p className="mt-1 text-gray-600">
                  Nuestro equipo de profesionales estará a tu disposición para
                  brindarte orientación y mentoría durante tu tiempo con
                  nosotros. Te ayudaremos a establecer metas profesionales,
                  ofreceremos retroalimentación constructiva y compartiremos
                  consejos y conocimientos para ayudarte a crecer y prosperar en
                  tu trayectoria profesional.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6 lg:space-y-10">
            <div className="flex">
              <svg
                className="mt-2 h-8 w-8 flex-shrink-0 text-gray-800"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                  fill="currentColor"
                  fillOpacity={0.1}
                />
                <path
                  d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                  fill="currentColor"
                />
              </svg>
              <div className="ml-5 sm:ml-8">
                <h3 className="text-base font-semibold text-gray-800 sm:text-lg">
                  Aprendizaje Continuo
                </h3>
                <p className="mt-1 text-gray-600">
                  En Grupo ASICA, fomentamos el aprendizaje continuo y el
                  crecimiento personal. Durante tu programa de prácticas y
                  pasantías, tendrás acceso a recursos de aprendizaje
                  adicionales, como capacitaciones internas, talleres y
                  seminarios, que te permitirán ampliar tus conocimientos y
                  habilidades en tu campo de interés. Estamos comprometidos a
                  brindarte una experiencia enriquecedora que impulse tu
                  desarrollo profesional a largo plazo.
                </p>
              </div>
            </div>

            <div className="flex">
              <svg
                className="mt-2 h-8 w-8 flex-shrink-0 text-gray-800"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                  fill="currentColor"
                  fillOpacity={0.1}
                />
                <path
                  d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                  fill="currentColor"
                />
              </svg>
              <div className="ml-5 sm:ml-8">
                <h3 className="text-base font-semibold text-gray-800 sm:text-lg">
                  Exposición a Diversas Áreas Profesionales
                </h3>
                <p className="mt-1 text-gray-600">
                  Como practicante o pasante en Grupo ASICA, tendrás la
                  oportunidad de explorar diferentes áreas y departamentos de
                  nuestra organización. Esto te brindará una perspectiva más
                  amplia de la industria y te permitirá descubrir tus fortalezas
                  e intereses específicos, lo que puede ayudarte a tomar
                  decisiones más informadas sobre tu futuro profesional.
                </p>
              </div>
            </div>

            <div className="flex">
              <svg
                className="mt-2 h-8 w-8 flex-shrink-0 text-gray-800"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                  fill="currentColor"
                  fillOpacity={0.1}
                />
                <path
                  d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                  fill="currentColor"
                />
              </svg>
              <div className="ml-5 sm:ml-8">
                <h3 className="text-base font-semibold text-gray-800 sm:text-lg">
                  Red de Contactos Profesionales
                </h3>
                <p className="mt-1 text-gray-600">
                  Durante tu experiencia con Grupo ASICA, tendrás la oportunidad
                  de establecer contactos con profesionales en tu campo de
                  interés. Estas conexiones pueden ser invaluables para tu
                  futura carrera, ya sea para obtener recomendaciones,
                  oportunidades de empleo o simplemente para ampliar tu red
                  profesional.
                </p>
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
            Únete a nuestro equipo
          </h1>
          <p className="mt-4 text-gray-800 tracking-wide md:text-lg">
            En Grupo ASICA, estamos comprometidos con tu desarrollo profesional
            y queremos brindarte las mejores oportunidades para que adquieras
            experiencia práctica y te prepares para tu carrera.
          </p>
        </div>

        <div className="relative">
          <div className="flex flex-col rounded-xl border p-4 sm:p-6 lg:p-10">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Rellene el formulario
            </h2>

            <FormStudent />

            <div className="mt-3 text-center">
              <p className="text-sm text-gray-500">
                Le responderemos en 1-2 días laborables.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
