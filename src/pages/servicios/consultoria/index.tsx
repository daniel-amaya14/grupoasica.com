import React from 'react';
import Image from 'next/image';
import BannerContacto from '@/components/BannerContacto';

export default function Consultoria() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-100 py-8 px-6 md:py-12 md:px-20">
        <div className="container mx-auto flex flex-col items-center">
          <h1 className="font-bold text-3xl leading-normal md:text-4xl text-center">
            Consultoría TI
          </h1>
          <p className="text-center tracking-wide mt-3 max-w-2xl">
            Optimiza tu negocio con nuestra consultoría de TI. Diseñamos
            estrategias tecnológicas, optimizamos infraestructuras, gestionamos
            proyectos, fortalecemos la seguridad de la información y facilitamos
            la transformación digital. Confía en nuestros expertos para impulsar
            tu crecimiento y maximizar el potencial de la tecnología en tu
            empresa.
          </p>
        </div>
      </section>
      {/* Content */}
      <section className="mx-auto max-w-7xl px-4 py-16 space-y-20 sm:px-6 md:py-28 lg:px-8">
        {/*  */}
        <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
          <div className="md:order-2">
            <Image
              className="rounded-xl h-full w-full"
              width={1260}
              height={750}
              src="https://images.pexels.com/photos/8439682/pexels-photo-8439682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Image Description"
            />
          </div>

          <div className="mt-5 sm:mt-10 md:order-1 lg:mt-0">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-2 md:space-y-4">
                <h2 className="text-3xl font-bold text-gray-800 lg:text-4xl">
                  Consultoría de TI personalizada para el crecimiento
                  empresarial
                </h2>
                <p className="text-gray-500">
                  En Grupo Asica, ofrecemos servicios de consultoría de TI
                  diseñados para ayudar a las empresas a optimizar sus
                  operaciones, mejorar su eficiencia y aprovechar al máximo la
                  tecnología. Nuestro equipo de consultores expertos en
                  tecnología trabaja de la mano con nuestros clientes para
                  comprender sus desafíos y ofrecer soluciones personalizadas
                  que impulsen su crecimiento y éxito.
                </p>
                <p className="text-gray-500">
                  Nuestro equipo de consultores de TI altamente capacitados y
                  con amplia experiencia se dedica a comprender las necesidades
                  únicas de su empresa y a desarrollar soluciones personalizadas
                  que impulsen la eficiencia, la productividad y el crecimiento.
                  Ya sea que necesite optimizar sus sistemas actuales,
                  implementar nuevas tecnologías o diseñar una estrategia de
                  transformación digital, estamos aquí para guiarlo en cada paso
                  del camino.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*  */}
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
                  Estrategia y Planificación Tecnológica
                </h3>
                <p className="mt-1 text-gray-600">
                  Analizamos las necesidades y objetivos de tu empresa para
                  desarrollar una estrategia tecnológica sólida y un plan de
                  implementación eficiente. Te ayudamos a alinear la tecnología
                  con tus metas empresariales y a identificar las mejores
                  oportunidades para impulsar la innovación.
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
                  Optimización de Infraestructura
                </h3>
                <p className="mt-1 text-gray-600">
                  Evaluamos tu infraestructura tecnológica existente y
                  realizamos recomendaciones para optimizarla en términos de
                  rendimiento, seguridad y costo. Nos aseguramos de que tu
                  infraestructura esté adecuadamente dimensionada y actualizada
                  para satisfacer las necesidades actuales y futuras de tu
                  negocio.
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
                  Gestión de Proyectos de TI
                </h3>
                <p className="mt-1 text-gray-600">
                  Nuestros consultores te brindan soporte en la gestión de
                  proyectos de TI, desde la planificación inicial hasta la
                  implementación y seguimiento posterior. Aplicamos las mejores
                  prácticas en gestión de proyectos para asegurar que tus
                  iniciativas tecnológicas se entreguen a tiempo y dentro del
                  presupuesto.
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
                  Seguridad de la Información
                </h3>
                <p className="mt-1 text-gray-600">
                  Te ayudamos a proteger tus activos más valiosos a través de
                  soluciones de seguridad de la información robustas. Realizamos
                  evaluaciones de riesgos, implementamos políticas y
                  procedimientos de seguridad, y proporcionamos soluciones de
                  vanguardia para salvaguardar tus datos y sistemas contra
                  amenazas internas y externas.
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
                  Transformación Digital
                </h3>
                <p className="mt-1 text-gray-600">
                  Guiamos a las empresas en su viaje de transformación digital,
                  identificando oportunidades para adoptar tecnologías
                  emergentes que impulsen la eficiencia, la productividad y la
                  innovación. Te asesoramos en la implementación de soluciones
                  como la inteligencia artificial, el aprendizaje automático, la
                  nube y la analítica de datos.
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
                  Soporte y Mantenimiento
                </h3>
                <p className="mt-1 text-gray-600">
                  Brindamos servicios de soporte técnico continuo y
                  mantenimiento de tus sistemas para garantizar un
                  funcionamiento sin problemas. Nuestro equipo está disponible
                  para resolver problemas, realizar actualizaciones, aplicar
                  parches de seguridad y brindar asistencia técnica cuando más
                  lo necesites.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*  */}
        <BannerContacto
          description="para conocer cómo nuestra consultoría de TI puede ayudarlo a
              alcanzar sus objetivos empresariales!."
          href="/servicios/formulario"
        />
      </section>
    </>
  );
}
