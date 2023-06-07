import React from 'react';
import Image from 'next/image';
import BannerContacto from '@/components/BannerContacto';

export default function Riesgos() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-100 py-8 px-6 md:py-12 md:px-20">
        <div className="container mx-auto flex flex-col items-center">
          <h1 className="font-bold text-3xl leading-normal md:text-4xl text-center">
            SAS Riesgos
          </h1>
          <p className="text-center mt-3 max-w-2xl">
            Mejore su gestión financiera con SAS NIIF9, cumpliendo con normas
            internacionales para informes financieros confiables y precisos.
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
                src="https://images.unsplash.com/photo-1535320903710-d993d3d77d29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                alt="Image Description"
              />
            </div>

            <div className="mt-5 sm:mt-10 lg:mt-0">
              <div className="space-y-6 sm:space-y-8">
                <div className="space-y-2 md:space-y-4">
                  <h2 className="text-3xl font-bold text-gray-800 lg:text-4xl">
                    Soluciones avanzadas para la gestión integral de riesgos
                    empresariales
                  </h2>
                  <p className="tracking-wide">
                    En Grupo ASICA, entendemos que la gestión de riesgos
                    efectiva es fundamental para el éxito y la sostenibilidad de
                    cualquier empresa. Con SAS Riesgos, ofrecemos soluciones
                    avanzadas que le permitirán identificar, evaluar y mitigar
                    los riesgos empresariales de manera integral.
                    <br />
                    <br />
                    SAS Riesgos es una plataforma de gestión de riesgos
                    empresariales líder en el mercado. Con su enfoque holístico
                    y herramientas de vanguardia, permite a las organizaciones
                    anticipar y abordar los riesgos, fortaleciendo la toma de
                    decisiones estratégicas y garantizando la continuidad del
                    negocio.
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
                    Identificación y evaluación de riesgos
                  </h3>
                  <p className="mt-1 tracking-wide">
                    Nuestros consultores expertos en riesgos trabajarán
                    estrechamente con su empresa para identificar y evaluar los
                    riesgos específicos que enfrenta. Utilizaremos metodologías
                    probadas y herramientas avanzadas de análisis de riesgos
                    para comprender las amenazas y oportunidades asociadas a su
                    industria y contexto empresarial
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
                    Diseño de estrategias de mitigación
                  </h3>
                  <p className="mt-1 tracking-wide">
                    Desarrollaremos estrategias de mitigación personalizadas
                    para abordar los riesgos identificados. Estas estrategias
                    estarán diseñadas para minimizar la exposición a los riesgos
                    y maximizar las oportunidades de crecimiento y éxito
                    empresarial. Nuestro enfoque integral garantizará que todos
                    los aspectos clave de su empresa estén cubiertos.
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
                    Implementación de SAS riesgos
                  </h3>
                  <p className="mt-1 tracking-wide">
                    Nuestros expertos en SAS Riesgos se encargarán de
                    implementar la plataforma en su empresa, adaptándola a sus
                    necesidades y objetivos específicos. Proporcionaremos
                    capacitación y soporte continuo para garantizar que su
                    equipo esté preparado para utilizar todas las
                    funcionalidades de la herramienta y aprovechar al máximo sus
                    capacidades.
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
                    Monitoreo y actualización continua
                  </h3>
                  <p className="mt-1 tracking-wide">
                    La gestión de riesgos es un proceso continuo. Nuestro equipo
                    realizará un seguimiento constante de los riesgos,
                    utilizando indicadores clave de rendimiento y métricas
                    relevantes. Realizaremos actualizaciones periódicas para
                    garantizar que sus estrategias de mitigación estén alineadas
                    con los cambios en su entorno empresarial.
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
