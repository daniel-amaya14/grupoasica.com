import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ImgSas from '@/public/partners/sas.svg';
import {
  IconGovernment,
  IconBank,
  IconHealthLogo,
  IconCommunications,
} from '@/components/Icons';

export default function Sas() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-100 py-8 px-6 md:py-12 md:px-20">
        <div className="container mx-auto flex flex-col items-center">
          <h1 className="font-bold text-3xl leading-normal md:text-4xl text-center">
            SAS
          </h1>
          <p className="text-center mt-3 max-w-2xl">
            SAS brinda soluciones capaces de extraer, administrar y recuperar
            datos de una gran variedad de fuentes y realizar análisis
            estadísticos sobre ellos, dando la capacidad a su empresa de
            realizar toma de decisiones oportunas, adaptables y eficientes a sus
            necesidades.
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="py-8 px-6 flex flex-col gap-20 md:py-12 md:px-20">
        <section className="flex flex-col gap-10 justify-center items-center lg:flex-row">
          <div>
            <h2 className="font-semibold text-2xl leading-normal mb-2 md:mb-4 md:text-3xl">
              Líder en analítica de datos desde hace 40 años
            </h2>
            <p className="text-justify max-w-3xl">
              SAS es una empresa líder en el campo de la analítica de datos con
              una trayectoria de más de 40 años en el mercado. Su compromiso con
              la innovación y la excelencia en el análisis de datos ha llevado a
              la creación de soluciones de vanguardia que ayudan a las empresas
              a tomar decisiones más informadas y efectivas. Con una amplia gama
              de productos y servicios, SAS es la elección preferida de miles de
              organizaciones en todo el mundo para aprovechar el valor de sus
              datos. Confíe en la experiencia de SAS para transformar su negocio
              con la mejor tecnología de analítica de datos disponible en el
              mercado.
            </p>
          </div>

          <Image
            src={ImgSas}
            alt="Freebalance"
            className="w-1/2 md:w-2/3 lg:w-1/3 h-fit object-cover"
          />
        </section>

        <section>
          <h2 className="font-semibold text-2xl leading-normal mb-4 md:mb-6 md:text-3xl">
            Conéctese con SAS y vea lo que podemos hacer por usted
          </h2>
          <div className="grid grid-col-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <LinkCard
              title="Gobierno"
              Icon={() => <IconGovernment />}
              href="#sas-gobierno"
            />
            <LinkCard
              title="Finanzas"
              Icon={() => <IconBank />}
              href="#sas-finanzas"
            />
            <LinkCard
              title="Salud"
              Icon={() => <IconHealthLogo />}
              href="#sas-salud"
            />
            <LinkCard
              title="Telecomunicaciones"
              Icon={() => <IconCommunications />}
              href="#sas-telcom"
            />
          </div>
        </section>
      </div>

      <div className="">
        <section className="flex flex-col gap-y-24 py-32 bg-[#007cc2] xl:gap-y-40">
          {/*  */}
          <div
            className="flex flex-col gap-y-10 mx-auto max-w-7xl  px-8 md:px-12 lg:px-16 xl:px-24"
            id="sas-gobierno"
          >
            <div>
              <p
                className="inline-flex items-center text-white"
                id="table-of-contents-title"
              >
                <span
                  className="font-mono text-sm"
                  aria-hidden="true"
                >
                  <IconGovernment />
                </span>
                <span className="ml-3 h-3.5 w-px bg-white/20"></span>
                <span className="ml-3 text-base font-medium tracking-tight">
                  Gobierno
                </span>
              </p>
              <h3 className="mt-6 text-3xl font-semibold tracking-tighter text-white lg:mx-auto lg:text-5xl">
                Análisis para el sector público
              </h3>
              <div className="mt-6 max-w-xl">
                <p className="text-white">
                  Impulsa mejores decisiones para la transformación digital del
                  gobierno y mejores resultados para los ciudadanos.
                </p>
              </div>
            </div>
            <div className="mx-auto text-left">
              <h4 className="sr-only">intro.</h4>
              <div className="grid grid-cols-1 gap-x-2 gap-y-4 lg:grid-cols-3 lg:gap-12">
                <div>
                  <div className="space-y-3">
                    <div>
                      <p className="mt-5 text-base font-semibold text-white">
                        Toma de decisiones inteligente en el gobierno
                      </p>
                    </div>
                    <p className="text-sm text-white text-justify">
                      Descubra cómo el gobierno puede incorporar la toma de
                      decisiones impulsada por la IA en los procesos públicos
                      existentes para aprovechar los beneficios de la analítica
                      de datos.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="space-y-3">
                    <div>
                      <p className="mt-5 text-base font-semibold text-white">
                        Gobiernos que lideran a través del cambio
                      </p>
                    </div>
                    <p className="text-sm text-white text-justify">
                      Descubra cómo la analítica y la IA están ayudando a las
                      agencias gubernamentales a enfrentar los desafíos que
                      constantemente sufren las instituciones de gobierno.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="space-y-3">
                    <div>
                      <p className="mt-5 text-base font-semibold text-white">
                        Soluciones de análisis del sector público para combatir
                        el COVID-19
                      </p>
                    </div>
                    <p className="text-sm text-white text-justify">
                      Descubra cómo los datos y el análisis están desempeñando
                      un papel clave para ayudar con la toma de decisiones
                      basada en la evidencia durante la pandemia del COVID-19.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto text-left">
              <div className="space-y-3">
                <h4 className="text-base font-semibold text-white">
                  ¿Por qué elegir SAS para el análisis en el sector público?
                </h4>
                <p className="text-white text-justify">
                  Las agencias del sector público no pueden confiar en los
                  métodos del ayer para resolver los problemas de futuro. La
                  misión del sector público es servir a los ciudadanos,
                  garantizando la seguridad y el bienestar de todas las
                  personas. La innovación es necesaria para lograr esto hoy. Con
                  análisis avanzados, incluida la inteligencia artificial (IA) y
                  el aprendizaje automático, los gobiernos pueden poner los
                  datos a trabajar para mejorar los resultados para los
                  ciudadanos. SAS ayuda a los gobiernos de todos los niveles a
                  tomar mejores decisiones , más rápidas y más rentables que
                  marcan la diferencia en las vidas de las personas a las que
                  sirven.
                </p>
              </div>
            </div>
          </div>
          {/*  */}
          <div
            className="flex flex-col gap-y-10 mx-auto max-w-7xl  px-8 md:px-12 lg:px-16 xl:px-24"
            id="sas-finanzas"
          >
            <div>
              <span
                className="inline-flex items-center text-white"
                id="table-of-contents-title"
              >
                <span
                  className="font-mono text-sm"
                  aria-hidden="true"
                >
                  <IconBank />
                </span>
                <span className="ml-3 h-3.5 w-px bg-white/20"></span>
                <span className="ml-3 text-base font-medium tracking-tight">
                  Finanzas
                </span>
              </span>
              <h3 className="mt-6 text-3xl font-semibold tracking-tighter text-white lg:text-5xl">
                Analítica bancaria
              </h3>
              <div className="mt-6 max-w-xl">
                <p className="text-white">
                  Descubra como mantenerse conectados con los clientes, y así
                  obtener nuevos conocimientos analíticos sobre el riesgo y
                  prevención oportuna.
                </p>
              </div>
            </div>
            <div className="mx-auto text-left">
              <h4 className="sr-only">intro.</h4>
              <div className="grid grid-cols-1 gap-x-2 gap-y-4 lg:grid-cols-3 lg:gap-12">
                <div>
                  <div className="space-y-3">
                    <div>
                      <p className="mt-5 text-base font-semibold text-white">
                        Gestión de riesgos
                      </p>
                    </div>
                    <p className="text-sm text-white text-justify">
                      Establecer una cultura consciente del riesgo. Optimizar el
                      capital y la liquidez. Cumplir con las demandas
                      regulatorias.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="space-y-3">
                    <div>
                      <p className="mt-5 text-base font-semibold text-white">
                        Prevención de Fraude y Delitos Financieros
                      </p>
                    </div>
                    <p className="text-sm text-white text-justify">
                      Garantice una detección y protección superiores. Permitir
                      una mejor prevención. Detecte oportunamente los riesgos
                      mediante la predicción por medio de IA.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="space-y-3">
                    <div>
                      <p className="mt-5 text-base font-semibold text-white">
                        Experiencia del cliente
                      </p>
                    </div>
                    <p className="text-sm text-white text-justify">
                      Personalice cada interacción con el cliente. Gane la
                      confianza de los clientes. Cree experiencias de cliente
                      que importen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto text-left">
              <div className="space-y-3">
                <h4 className="text-base font-semibold text-white">
                  ¿Por qué elegir SAS para análisis bancarios?
                </h4>
                <p className="text-white text-justify">
                  La banca tal como la conocemos está desapareciendo, y todo el
                  ecosistema financiero está experimentando un cambio radical.
                  La digitalización, la tecnología financiera, la banca abierta,
                  la privacidad de datos y las tecnologías de cumplimiento
                  normativo están desempeñando un papel. SAS cree que los bancos
                  sobrevivientes serán organizaciones hiperinteligentes
                  impulsadas por la IA que pueden proporcionar experiencias de
                  cliente personalizadas y confiables, así como cumplir con los
                  mandatos de riesgo y cumplimiento. SAS ofrece un valor
                  comprobado; nuestro objetivo es ayudarlo a desbloquear el
                  vasto potencial de la IA para su transformación digital. Con
                  SAS, su futuro es seguro.
                </p>
              </div>
            </div>
          </div>
          {/*  */}
          <div
            className="flex flex-col gap-y-10 mx-auto max-w-7xl  px-8 md:px-12 lg:px-16 xl:px-24"
            id="sas-salud"
          >
            <div>
              <span
                className="inline-flex items-center text-white"
                id="table-of-contents-title"
              >
                <span
                  className="font-mono text-sm"
                  aria-hidden="true"
                >
                  <IconHealthLogo />
                </span>
                <span className="ml-3 h-3.5 w-px bg-white/20"></span>
                <span className="ml-3 text-base font-medium tracking-tight">
                  Salud
                </span>
              </span>
              <h3 className="mt-6 text-3xl font-semibold tracking-tighter text-white lg:text-5xl">
                Análisis de antención médica
              </h3>
              <div className="mt-6 max-w-xl">
                <p className="text-white">
                  Mejore los resultados y la experiencia de los pacientes a
                  través de análisis avanzados, agilizando las capacidades de
                  respuesta ante incidentes y catástrofes.
                </p>
              </div>
            </div>
            <div className="mx-auto text-left">
              <h4 className="sr-only">intro.</h4>
              <div className="grid grid-cols-1 gap-x-2 gap-y-4 lg:grid-cols-3 lg:gap-12">
                <div>
                  <div className="space-y-3">
                    <div>
                      <p className="mt-5 text-base font-semibold text-white">
                        Salud de la población
                      </p>
                    </div>
                    <p className="text-sm text-white text-justify">
                      Combine datos de salud y de otros orígenes para comprender
                      y predecir las necesidades futuras de salud de la
                      población.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="space-y-3">
                    <div>
                      <p className="mt-5 text-base font-semibold text-white">
                        Optimice la atención médica
                      </p>
                    </div>
                    <p className="text-sm text-white text-justify">
                      Identificar acciones que mejoren la satisfacción del
                      paciente, maximice la utilización de recursos y controle
                      sus costos.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="space-y-3">
                    <div>
                      <p className="mt-5 text-base font-semibold text-white">
                        Fraude y abuso en el cuidado de la salud
                      </p>
                    </div>
                    <p className="text-sm text-white text-justify">
                      Optimice la gestión financiera para impulsar mejores
                      resultados para los pacientes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto text-left">
              <div className="space-y-3">
                <h4 className="text-base font-semibold text-white">
                  ¿Por qué elegir SAS para el análisis de atención médica?
                </h4>
                <p className="text-white text-justify">
                  Conocimientos analíticos que impulsan la atención médica
                  basada en el valor. Inteligencia artificial (IA) integrada,
                  análisis de imágenes y aprendizaje automático. Datos
                  integrados para mejorar las decisiones clínicas. Análisis
                  in-stream de datos del Internet de las Cosas Médicas (IoMT).
                  Con una profunda experiencia en la industria y soluciones de
                  análisis de atención médica creadas para la interoperabilidad,
                  SAS acelera su tiempo de obtención de valor.
                </p>
              </div>
            </div>
          </div>
          {/*  */}
          <div
            className="flex flex-col gap-y-10 mx-auto max-w-7xl  px-8 md:px-12 lg:px-16 xl:px-24"
            id="sas-telcom"
          >
            <div>
              <span
                className="inline-flex items-center text-white"
                id="table-of-contents-title"
              >
                <span
                  className="font-mono text-sm"
                  aria-hidden="true"
                >
                  <IconCommunications />
                </span>
                <span className="ml-3 h-3.5 w-px bg-white/20"></span>
                <span className="ml-3 text-base font-medium tracking-tight">
                  Telecomunicaciones
                </span>
              </span>
              <h3 className="mt-6 text-3xl font-semibold tracking-tighter text-white lg:text-5xl">
                Análisis de telecomunicaciones
              </h3>
              <div className="mt-6 max-w-xl">
                <p className="text-white">
                  El, COVID-19 ha desafiado a los líderes de la industria de
                  maneras imprevistas y ha presentado oportunidades para la
                  innovación. SAS puede ayudarlo a adaptarse al nuevo clima de
                  negocios de hoy y planificar para el futuro, con confianza.
                </p>
              </div>
            </div>
            <div className="mx-auto text-left">
              <h4 className="sr-only">intro.</h4>
              <div className="grid grid-cols-1 gap-x-2 gap-y-4 lg:grid-cols-3 lg:gap-x-12">
                <div>
                  <div className="space-y-3">
                    <div>
                      <p className="mt-5 text-base font-semibold text-white">
                        Gestión de inventario de anuncios
                      </p>
                    </div>
                    <p className="text-sm text-white text-justify">
                      Reúna una visión cohesiva de toda la información
                      relacionada con las audiencias, el inventario y los
                      precios. Gestione y aumente mejor los ingresos
                      publicitarios con una valoración precisa del inventario de
                      anuncios y previsiones de demanda.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="space-y-3">
                    <div>
                      <p className="mt-5 text-base font-semibold text-white">
                        Análisis de audiencia
                      </p>
                    </div>
                    <p className="text-sm text-white text-justify">
                      Utilice los datos de audiencia para comprender mejor a los
                      consumidores a lo largo de sus viajes. Sepa cuándo, dónde
                      y cómo entregar contenido dirigido para reducir la
                      rotación, aumentar los ingresos y mejorar la experiencia
                      del cliente.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="space-y-3">
                    <div>
                      <p className="mt-5 text-base font-semibold text-white">
                        Experiencia del cliente
                      </p>
                    </div>
                    <p className="text-sm text-white text-justify">
                      Obtenga una comprensión más profunda de la experiencia
                      total del cliente para que pueda predecir la rotación y
                      tomar medidas para prevenirla. Organice cada punto de
                      contacto a lo largo del recorrido del cliente, para
                      clientes más felices, leales y mas satisfechos.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="space-y-3">
                    <div>
                      <p className="mt-5 text-base font-semibold text-white">
                        Fraude en telecomunicaciones
                      </p>
                    </div>
                    <p className="text-sm text-white text-justify">
                      Detecte el fraude de suscriptores en tiempo real para
                      aumentar las ganancias y proteger el inventario. Mejore
                      los niveles de servicio con menos falsos positivos y
                      negativos, y mejore la reputación de la marca. Realice una
                      calificación crediticia en tiempo real para reducir los
                      días de ventas pendientes y los gastos de deudas
                      incobrables.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="space-y-3">
                    <div>
                      <p className="mt-5 text-base font-semibold text-white">
                        Análisis de redes de telecomunicaciones
                      </p>
                    </div>
                    <p className="text-sm text-white text-justify">
                      Aplique técnicas analíticas avanzadas a los datos de la
                      red para obtener información más profunda sobre cómo
                      aumentar el rendimiento de la red y mejorar la gestión de
                      las operaciones, con un énfasis especial en la
                      automatización.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto text-left">
              <div className="space-y-3">
                <h4 className="text-base font-semibold text-white">
                  ¿Por qué elegir SAS para análisis de telecomunicaciones,
                  medios y tecnología?
                </h4>
                <p className="text-white text-justify">
                  La analítica impulsará la industria de las telecomunicaciones,
                  los medios y la tecnología (TMT) hacia el futuro. SAS combina
                  de forma única un entorno de análisis industrializado abierto
                  y habilitado para la nube con IA integrada para ayudarlo a
                  resolver los desafíos actuales y futuros.
                  <br />
                  <br />
                  Con SAS, puede reducir los riesgos empresariales. Lucha contra
                  el fraude. Identifique a los clientes para una comunicación
                  relevante a través de canales digitales y físicos. Personaliza
                  ofertas, contenidos y anuncios. Optimice, prediga y automatice
                  la planificación y las operaciones de la red 5G para respaldar
                  la Industria 4.0. SAS está listo para apoyar su transformación
                  digital y avanzar.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

interface LinkCardProps {
  title: string;
  href: string;
  Icon: any;
}

const LinkCard = ({ title, href, Icon }: LinkCardProps) => {
  return (
    <Link
      href={`${href}`}
      scroll={false}
      className="relative flex items-center gap-4 rounded-md bg-white bg-opacity-75 border border-gray-100 px-4 py-8 shadow-sm transition duration-300 transform sm:flex-col sm:items-start sm:py-6 hover:shadow-md hover:-translate-y-2 hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring group"
    >
      <span className="inline-flex">
        <Icon
          className=""
          width={42}
          height={42}
        />
      </span>

      <p className="font-semibold text-fontPrimary text-xl sm:text-base">
        {title}
      </p>
    </Link>
  );
};
