import React from 'react';
import Image from 'next/image';
import BannerContacto from '@/components/BannerContacto';

export default function IdentidadDigital() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-100 py-8 px-6 md:py-12 md:px-20">
        <div className="container mx-auto flex flex-col items-center">
          <h1 className="font-bold text-3xl leading-normal md:text-4xl text-center">
            Identidad Digital
          </h1>
          <p className="text-center mt-3 max-w-2xl">
            Potencie su marca en línea con nuestra experiencia en identidad
            digital para destacar entre la competencia.
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-7xl px-4 py-10 mx-auto sm:px-6 lg:px-8 lg:py-14">
        <div className="space-y-16">
          {/*  */}
          <div className="md:grid md:grid-cols-2 md:gap-12 xl:gap-32">
            <div className="md:order-2">
              <Image
                className="rounded-xl"
                width={800}
                height={900}
                src="https://images.unsplash.com/photo-1504270997636-07ddfbd48945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80"
                alt="Image Description"
              />
            </div>

            <div className="mt-5 sm:mt-10 lg:mt-0">
              <div className="space-y-6 sm:space-y-8">
                <div className="space-y-2 md:space-y-4">
                  <h2 className="text-3xl font-bold text-gray-800 lg:text-4xl">
                    Destaque en el Mundo Digital
                  </h2>
                  <p className="text-gray-500 tracking-wide">
                    En el entorno empresarial actual, la identidad digital es
                    esencial para el éxito de cualquier empresa. En Grupo ASICA,
                    entendemos la importancia de tener una presencia en línea
                    sólida y coherente que refleje la esencia de su negocio y
                    conecte con su audiencia. Nuestra experiencia en identidad
                    digital le permitirá destacar en el mundo digital y generar
                    una impresión duradera en sus clientes.
                    <br />
                    <br />
                    Nuestro enfoque estratégico y creativo nos permite
                    desarrollar una identidad digital única y auténtica para su
                    empresa. Trabajaremos estrechamente con usted para
                    comprender su visión, sus valores y sus objetivos
                    comerciales, y luego crearemos una estrategia integral de
                    identidad digital que resalte lo mejor de su marca.
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
                    Diseño de Logotipo
                  </h3>
                  <p className="mt-1 text-gray-600 tracking-wide">
                    Un logotipo bien diseñado es la piedra angular de su
                    identidad de marca. Nuestro equipo de diseñadores gráficos
                    expertos creará un logotipo distintivo y memorable que
                    represente la esencia de su empresa y resuene con su
                    audiencia objetivo.
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
                    Diseño de Sitio Web
                  </h3>
                  <p className="mt-1 text-gray-600 tracking-wide">
                    Su sitio web es su carta de presentación en línea. Nuestro
                    equipo de desarrolladores web y diseñadores creará un sitio
                    web moderno, intuitivo y responsive que refleje la identidad
                    de su marca y proporcione una experiencia de usuario
                    excepcional.
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
                    Estrategia de Redes Sociales
                  </h3>
                  <p className="mt-1 text-gray-600 tracking-wide">
                    Las redes sociales son una herramienta poderosa para
                    interactuar con su audiencia y promover su marca. Nuestros
                    especialistas en redes sociales desarrollarán una estrategia
                    personalizada para las plataformas relevantes a su negocio,
                    generando contenido atractivo y gestionando de manera
                    efectiva su presencia en línea.
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
                    Marketing de Contenidos
                  </h3>
                  <p className="mt-1 text-gray-600 tracking-wide">
                    El contenido relevante y de calidad es fundamental para
                    captar y retener la atención de su audiencia. Nuestros
                    expertos en marketing de contenidos crearán estrategias y
                    desarrollarán contenido atractivo que mejore la visibilidad
                    de su marca y establezca su autoridad en su industria.
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
                    Estrategia de SEO (Optimización de Motores de Búsqueda)
                  </h3>
                  <p className="mt-1 text-gray-600 tracking-wide">
                    Una estrategia de SEO sólida es fundamental para mejorar la
                    visibilidad de su sitio web en los motores de búsqueda.
                    Nuestros expertos en SEO realizarán análisis de palabras
                    clave, optimizarán su sitio web para mejorar su
                    clasificación en los motores de búsqueda y desarrollarán
                    estrategias de contenido para aumentar el tráfico orgánico
                    hacia su sitio.
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
                    Gestión de Campañas de Publicidad en Línea
                  </h3>
                  <p className="mt-1 text-gray-600 tracking-wide">
                    Para aumentar la visibilidad de su marca y atraer a su
                    audiencia objetivo, ofrecemos servicios de gestión de
                    campañas de publicidad en línea. Nuestro equipo se encargará
                    de crear y gestionar campañas publicitarias efectivas en
                    plataformas como Google Ads y redes sociales, maximizando su
                    retorno de inversión y generando resultados tangibles.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/*  */}
          <BannerContacto href="/servicios/formulario" />
        </div>
      </div>
    </>
  );
}
