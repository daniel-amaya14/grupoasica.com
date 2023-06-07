import React from 'react';
import {
  IconGovernment,
  IconBank,
  IconHealthLogo,
  IconCommunications,
} from '@/components/Icons';

const colors = {
  blue: 'border-blue-50 bg-blue-100 text-blue-600',
  orange: 'border-orange-50 bg-orange-100 text-orange-600',
  green: 'border-green-50 bg-green-100 text-green-600',
  'blue-gray': 'border-blue-gray-50 bg-blue-gray-100 text-blue-gray-600',
  purple: 'border-purple-50 bg-purple-100 text-purple-600',
  teal: 'border-teal-50 bg-teal-100 text-teal-600',
  cyan: 'border-cyan-50 bg-cyan-100 text-cyan-600',
  pink: 'border-pink-50 bg-pink-100 text-pink-600',
};

const items = [
  {
    title: 'Gobierno',
    href: '#sas-gobierno',
    icon: IconGovernment,
    color: colors.cyan,
  },
  {
    title: 'Finanzas',
    href: '#sas-finanzas',
    icon: IconBank,
    color: colors.green,
  },
  {
    title: 'Salud',
    href: '#sas-salud',
    icon: IconHealthLogo,
    color: colors.blue,
  },
  {
    title: 'Telecomunicaciones',
    href: '#sas-telcom',
    icon: IconCommunications,
    color: colors.teal,
  },
];

export default function TabSas() {
  return (
    <section>
      <nav className="max-w-7xl px-4 py-10 mx-auto space-y-20 sm:px-6 lg:px-8 lg:py-14">
        <ul
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-8"
          aria-label="Tabs"
          role="tablist"
        >
          <button
            className="w-full h-full bg-white rounded-lg p-4 transition-all duration-300 border border-blue-100 hover:shadow-lg hover:border-opacity-100 hover:scale-105 active:border-blue-200"
            id="bar-sas-gobierno"
            data-hs-tab="#sas-gobierno"
            aria-controls="sas-gobierno"
            role="tab"
          >
            <div className="flex items-center gap-x-2">
              <div
                className={`inline-flex justify-center items-center w-12 h-12 aspect-square rounded-full border-4 ${items[0].color}`}
              >
                {React.createElement(items[0].icon, {
                  className: 'w-6 h-6',
                })}
              </div>
              <div className="">
                <h4 className="block text-base font-semibold text-gray-800">
                  {items[0].title}
                </h4>
              </div>
            </div>
          </button>
          <button
            className="w-full h-full bg-white rounded-lg p-4 transition-all duration-300 border border-blue-100 hover:shadow-lg hover:border-opacity-100 hover:scale-105 active:border-blue-200"
            id="bar-sas-finanzas"
            data-hs-tab="#sas-finanzas"
            aria-controls="sas-finanzas"
            role="tab"
          >
            <div className="flex items-center gap-x-2">
              <div
                className={`inline-flex justify-center items-center w-12 h-12 aspect-square rounded-full border-4 ${items[1].color}`}
              >
                {React.createElement(items[1].icon, {
                  className: 'w-6 h-6',
                })}
              </div>
              <div className="">
                <h4 className="block text-base font-semibold text-gray-800">
                  {items[1].title}
                </h4>
              </div>
            </div>
          </button>
          <button
            className="w-full h-full bg-white rounded-lg p-4 transition-all duration-300 border border-blue-100 hover:shadow-lg hover:border-opacity-100 hover:scale-105 active:border-blue-200"
            id="bar-sas-salud"
            data-hs-tab="#sas-salud"
            aria-controls="sas-salud"
            role="tab"
          >
            <div className="flex items-center gap-x-2">
              <div
                className={`inline-flex justify-center items-center w-12 h-12 aspect-square rounded-full border-4 ${items[2].color}`}
              >
                {React.createElement(items[2].icon, {
                  className: 'w-6 h-6',
                })}
              </div>
              <div className="">
                <h4 className="block text-base font-semibold text-gray-800">
                  {items[2].title}
                </h4>
              </div>
            </div>
          </button>
          <button
            className="w-full h-full bg-white rounded-lg p-4 transition-all duration-300 border border-blue-100 hover:shadow-lg hover:border-opacity-100 hover:scale-105 active:border-blue-200"
            id="bar-sas-telcom"
            data-hs-tab="#sas-telcom"
            aria-controls="sas-telcom"
            role="tab"
          >
            <div className="flex items-center gap-x-2">
              <div
                className={`inline-flex justify-center items-center w-12 h-12 aspect-square rounded-full border-4 ${items[3].color}`}
              >
                {React.createElement(items[3].icon, {
                  className: 'w-6 h-6',
                })}
              </div>
              <div className="">
                <h4 className="block text-base font-semibold text-gray-800">
                  {items[3].title}
                </h4>
              </div>
            </div>
          </button>
        </ul>
      </nav>
      <div>
        <section className="flex flex-col gap-y-24 py-32 bg-[#007cc2] xl:gap-y-40">
          {/*  */}
          <div
            id="sas-gobierno"
            role="tabpanel"
            aria-labelledby="bar-sas-gobierno"
          >
            <div className="flex flex-col gap-y-10 mx-auto max-w-7xl px-8 scroll-my-24 md:px-12 lg:px-16 xl:px-24">
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
                    Impulsa mejores decisiones para la transformación digital
                    del gobierno y mejores resultados para los ciudadanos.
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
                        existentes para aprovechar los beneficios de la
                        analítica de datos.
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
                          Soluciones de análisis del sector público para
                          combatir el COVID-19
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
                    personas. La innovación es necesaria para lograr esto hoy.
                    Con análisis avanzados, incluida la inteligencia artificial
                    (IA) y el aprendizaje automático, los gobiernos pueden poner
                    los datos a trabajar para mejorar los resultados para los
                    ciudadanos. SAS ayuda a los gobiernos de todos los niveles a
                    tomar mejores decisiones , más rápidas y más rentables que
                    marcan la diferencia en las vidas de las personas a las que
                    sirven.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div
            className="hidden"
            id="sas-finanzas"
            role="tabpanel"
            aria-labelledby="bar-sas-finanzas"
          >
            <div className="flex flex-col gap-y-10 mx-auto max-w-7xl px-8 scroll-my-24 md:px-12 lg:px-16 xl:px-24">
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
                        Establecer una cultura consciente del riesgo. Optimizar
                        el capital y la liquidez. Cumplir con las demandas
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
                        Garantice una detección y protección superiores.
                        Permitir una mejor prevención. Detecte oportunamente los
                        riesgos mediante la predicción por medio de IA.
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
                    La banca tal como la conocemos está desapareciendo, y todo
                    el ecosistema financiero está experimentando un cambio
                    radical. La digitalización, la tecnología financiera, la
                    banca abierta, la privacidad de datos y las tecnologías de
                    cumplimiento normativo están desempeñando un papel. SAS cree
                    que los bancos sobrevivientes serán organizaciones
                    hiperinteligentes impulsadas por la IA que pueden
                    proporcionar experiencias de cliente personalizadas y
                    confiables, así como cumplir con los mandatos de riesgo y
                    cumplimiento. SAS ofrece un valor comprobado; nuestro
                    objetivo es ayudarlo a desbloquear el vasto potencial de la
                    IA para su transformación digital. Con SAS, su futuro es
                    seguro.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div
            className="hidden"
            id="sas-salud"
            role="tabpanel"
            aria-labelledby="bar-sas-salud"
          >
            <div className="flex flex-col gap-y-10 mx-auto max-w-7xl px-8 scroll-my-24 md:px-12 lg:px-16 xl:px-24">
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
                        Combine datos de salud y de otros orígenes para
                        comprender y predecir las necesidades futuras de salud
                        de la población.
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
                    análisis de atención médica creadas para la
                    interoperabilidad, SAS acelera su tiempo de obtención de
                    valor.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div
            className="hidden"
            id="sas-telcom"
            role="tabpanel"
            aria-labelledby="bar-sas-telcom"
          >
            <div className="flex flex-col gap-y-10 mx-auto max-w-7xl px-8 scroll-my-24 md:px-12 lg:px-16 xl:px-24">
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
                        publicitarios con una valoración precisa del inventario
                        de anuncios y previsiones de demanda.
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
                        Utilice los datos de audiencia para comprender mejor a
                        los consumidores a lo largo de sus viajes. Sepa cuándo,
                        dónde y cómo entregar contenido dirigido para reducir la
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
                        negativos, y mejore la reputación de la marca. Realice
                        una calificación crediticia en tiempo real para reducir
                        los días de ventas pendientes y los gastos de deudas
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
                        aumentar el rendimiento de la red y mejorar la gestión
                        de las operaciones, con un énfasis especial en la
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
                    La analítica impulsará la industria de las
                    telecomunicaciones, los medios y la tecnología (TMT) hacia
                    el futuro. SAS combina de forma única un entorno de análisis
                    industrializado abierto y habilitado para la nube con IA
                    integrada para ayudarlo a resolver los desafíos actuales y
                    futuros.
                    <br />
                    <br />
                    Con SAS, puede reducir los riesgos empresariales. Lucha
                    contra el fraude. Identifique a los clientes para una
                    comunicación relevante a través de canales digitales y
                    físicos. Personaliza ofertas, contenidos y anuncios.
                    Optimice, prediga y automatice la planificación y las
                    operaciones de la red 5G para respaldar la Industria 4.0.
                    SAS está listo para apoyar su transformación digital y
                    avanzar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
