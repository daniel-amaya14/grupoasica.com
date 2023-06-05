import React from 'react';
import Image from 'next/image';
import ImgSeguridadInformacion from '@/public/images/software/seguridad-informacion/seguridad-informacion.webp';
import ImgWhiteHat from '@/public/images/software/seguridad-informacion/white-hat.webp';
import BannerContacto from '@/components/BannerContacto';

export default function Seguridad() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-100 py-8 px-6 md:py-12 md:px-20">
        <div className="container mx-auto flex flex-col items-center">
          <h1 className="font-bold text-3xl leading-normal md:text-4xl text-center">
            Seguridad de la información
          </h1>
          <p className="text-center mt-3 max-w-2xl">
            Ofrecemos servicios de seguridad de la información que garantiza la
            protección de los datos sensibles o confidenciales de nuestros
            clientes. Nuestro equipo de expertos en seguridad informática
            analiza los riesgos, implementa medidas de seguridad y monitorea la
            red para detectar actividades sospechosas. Utilizamos tecnologías y
            herramientas de seguridad de vanguardia para asegurar la protección
            de los datos en todo momento.
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="py-8 px-6 flex flex-col gap-20 md:py-12 md:px-20">
        <section className="flex flex-col gap-4 justify-center items-center md:flex-row">
          <div className="lg:mr-10">
            <h2 className="font-semibold text-2xl text-justify leading-normal mb-2 md:mb-4 md:text-3xl md:text-left">
              Servicios administrados de seguridad de la información (ISAAS)
            </h2>
            <p className="text-justify">
              La creciente demanda en herramientas y soluciones de seguridad ha
              llevado a Grupo ASICA a expandir su cartera de servicios, les
              presentamos gestión de Seguridad de la Información con una
              propuesta económica innovadora, “pague lo que consuma”. Los
              servicios tercerizados de Grupo ASICA le permitirá versatilidad en
              la implementación de seguridad TI bajo requerimientos nuevos y
              antiguos. Siempre rigiéndose por los importantes estándares
              internacionales. La entrega del servicio se ofrece los siguientes
              módulos.
            </p>
          </div>

          <Image
            src={ImgSeguridadInformacion}
            alt="Freebalance"
            className="w-full h-fit object-cover rounded md:w-1/3 md:hidden lg:block"
          />
        </section>

        <section className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div>
            <h3 className="font-semibold text-xl text-justify leading-normal mb-2 md:mb-4 md:text-2xl md:text-left">
              Ciberdefensa como servicio
            </h3>
            <p className="text-justify">
              Gestión filtración de dominios a nivel de correo electrónico y
              acceso web, para evitar ingreso a páginas web fraudulentas o
              distractoras. Con nuestro servicio de gestión administrada, se
              despreocupará de hacer filtrado web desde sus cortafuegos, o
              proxis, y permitirá que estos se concentren en las tareas para las
              que fueron creados, y así economizar recursos de infraestructura,
              y un significativo ahorro en esfuerzo humano. El servicio incluye
              un informe mensual, quincenal, semanal de los accesos detectados.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-xl text-justify leading-normal mb-2 md:mb-4 md:text-2xl md:text-left">
              Prevención como servicio
            </h3>
            <p className="text-justify">
              Ingeniería del caos a sistemas críticos dentro y fuera de la
              infraestructura implementada, con la intención de comprobar qué
              sistemas de operación crítica pueden sucumbir ante ataques
              cibernéticos, medir su riesgo de ocurrencia, y así evaluar las
              mitigaciones necesarias para evitar un caos a la operación. La
              Ingeniería del Caos nos permite también evaluar nuestros sistemas
              de alertas, o departamentos a cargo del monitoreo (como por
              ejemplo los SOCs, NOCs y ThreatOps).
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-xl text-justify leading-normal mb-2 md:mb-4 md:text-2xl md:text-left">
              Mitigación como servicio
            </h3>
            <p className="text-justify">
              Llegamos a donde los Antivirus no llegan. Grupo ASICA y Huntress
              cazarán el malware oculto no encontrado por las soluciones de
              Antivirus, al detectar y mitigar posible malware que ya infecta a
              una red interna, de servidores y equipos de cómputo. El servicio
              también provee estrategias de mitigación del malware encontrado, y
              con el tercerizado servicio de ThreatOps de Huntress, se reducen
              la cantidad de falsos positivos y se optimiza la mitigación y
              resolución de malware.
            </p>
          </div>
        </section>

        <section className="flex felx-col gap-10 md:flex-row">
          <div>
            <h3 className="font-semibold text-2xl text-justify leading-normal mb-2 md:mb-4 md:text-3xl md:text-left">
              White-Hat como servicio
            </h3>
            <p className="text-justify">
              Con la intención de probar que todo el ecosistema de herramientas
              de seguridad, están dando resultados apropiados, se requiere hacer
              una simulación de un ataque cibernético. Grupo ASICA ofrece tres
              metodologías de Hackeo Ético (White-Box, Gray-Box, Black-Box
              testing). Nuestros Hacker éticos, atacarán una serie de objetivos
              del perímetro o de infraestructura interna, a manera de comprobar
              que los sistemas de seguridad funcionan correctamente.
            </p>
          </div>
          <Image
            src={ImgWhiteHat}
            alt="Freebalance"
            className="w-full h-fit object-cover rounded md:w-1/3 md:hidden lg:block"
          />
        </section>

        {/*  */}
        <BannerContacto href="/servicios/formulario" />
      </div>
    </>
  );
}
