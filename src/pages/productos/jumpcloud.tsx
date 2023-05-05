import React from 'react';
import Image from 'next/image';
import ImgJumpCloud from '@/public/images/software/jumpcloud/jumpcloud.png';
import ImgDirectoryPlatform from '@/public/images/software/jumpcloud/jumpcloud-directory-platform.png';
import ImgPlatform from '@/public/images/software/jumpcloud/platform.png';
import ImgIdentity from '@/public/images/software/jumpcloud/identity.png';
import ImgDevices from '@/public/images/software/jumpcloud/devices.png';
import ImgAccess from '@/public/images/software/jumpcloud/access.png';

export default function jumpcloud() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-100 py-8 px-6 md:py-12 md:px-20">
        <div className="container mx-auto flex flex-col items-center">
          <h1 className="font-bold text-3xl leading-normal md:text-4xl text-center">
            JumpCloud
          </h1>
          <p className="text-center mt-3 max-w-2xl">
            JumpCloud es una plataforma de gestión de identidad y acceso en la
            nube que permite a las empresas gestionar y asegurar el acceso de
            sus usuarios a sistemas, aplicaciones y recursos en cualquier lugar
            y desde cualquier dispositivo. La plataforma ofrece funciones de
            autenticación, autorización y gestión de usuarios, así como
            capacidades de cumplimiento y auditoría.
          </p>
        </div>
      </section>

      <div className="py-8 px-6 flex flex-col gap-20 md:py-12 md:px-20">
        <section className="flex flex-col gap-4 justify-center items-center md:flex-row">
          <div className="order-2 md:order-1">
            <h2 className="font-semibold text-2xl leading-normal mb-2 md:mb-4 md:text-3xl">
              La plataforma de gestión de identidad y acceso en la nube líder
              para empresas
            </h2>
            <p className="text-justify">
              Descubre cómo <strong>JumpCloud</strong> puede ayudar a tu empresa
              a gestionar y asegurar el acceso de los usuarios a sistemas,
              aplicaciones y recursos en cualquier lugar y desde cualquier
              dispositivo. Conoce las funciones de autenticación, autorización y
              gestión de usuarios de la plataforma, así como sus capacidades de
              cumplimiento y auditoría. Aprende cómo JumpCloud puede ayudarte a
              reducir los riesgos de seguridad y aumentar la productividad en tu
              organización mediante un enfoque basado en políticas y una
              solución integral para la gestión de identidad y acceso en la
              nube.
            </p>
          </div>

          <Image
            src={ImgJumpCloud}
            alt="Freebalance"
            className="w-1/2 md:w-1/3 h-fit object-cover order-1 md:order-2"
          />
        </section>

        <section>
          <div className="flex flex-col gap-6 lg:flex-row">
            <h2 className="font-semibold text-2xl leading-normal mb-2 md:mb-4 md:text-3xl lg:min-w-max">
              Por qué JumpCloud
            </h2>
            <p className="text-justify">
              La plataforma de directorio abierto de JumpCloud hace posible
              unificar su pila tecnológica a través de la gestión de
              identidades, accesos y dispositivos, de una manera rentable que no
              sacrifica la seguridad ni la funcionalidad.
            </p>
          </div>
          <ul className="grid grid-cols-1 gap-10 md:grid-cols-3 mt-10">
            <li>
              <h3 className="font-semibold text-lg leading-normal mb-2 md:text-xl">
                Evitar la dispersión informática
              </h3>
              <p className="text-justify">
                Utilice la plataforma de directorio abierto de JumpCloud para
                gestionar fácilmente toda su pila tecnológica y reducir el
                número de soluciones puntuales necesarias para que todo funcione
                sin problemas.
              </p>
            </li>
            <li>
              <h3 className="font-semibold text-lg leading-normal mb-2 md:text-xl">
                Reducir costes
              </h3>
              <p className="text-justify">
                El catálogo de JumpCloud de capacidades de integración
                pre-construidas y abiertas, además de su sólido conjunto de
                características y su interfaz fácil de usar, reduce
                significativamente su coste total de TI.
              </p>
            </li>
            <li>
              <h3 className="font-semibold text-lg leading-normal mb-2 md:text-xl">
                Cobertura TI completa
              </h3>
              <p className="text-justify">
                Mejore su postura de seguridad, logre fácilmente el cumplimiento
                y obtenga soporte completo para las operaciones de TI con la
                plataforma de directorios JumpCloud.
              </p>
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="font-semibold text-2xl leading-normal md:text-3xl">
            Platafroma de directorios de JumpCloud
          </h2>
          <Image
            src={ImgDirectoryPlatform}
            alt="Freebalance"
            className="w-full md:w-full h-fit object-cover shadow rounded"
          />
        </section>

        <section className="flex flex-col gap-4 items-center lg:flex-row-reverse lg:items-start lg:gap-6">
          <div>
            <span className="uppercase text-xs font-semibold text-fontPrimary tracking-widest">
              plataforma
            </span>
            <h3 className="font-semibold text-xl leading-normal mb-2 md:mb-4 md:text-2xl">
              Plataforma de Open Directory
            </h3>
            <p className="text-justify">
              La plataforma de directorio abierto de JumpCloud hace posible
              unificar su pila tecnológica a través de la gestión de
              identidades, accesos y dispositivos, de una manera rentable que no
              sacrifica la seguridad ni la funcionalidad.
            </p>
            <ul className="flex flex-col gap-4 mt-4 lg:mt-6">
              <li className="flex items-start gap-2 lg:items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-[#14a19c]"
                >
                  <path
                    fill="currentColor"
                    d="m10.6 13.8l-2.15-2.15q-.275-.275-.7-.275t-.7.275q-.275.275-.275.7t.275.7L9.9 15.9q.3.3.7.3t.7-.3l5.65-5.65q.275-.275.275-.7t-.275-.7q-.275-.275-.7-.275t-.7.275L10.6 13.8ZM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"
                  />
                </svg>
                Unificar las identidades de los usuarios en toda la
                infraestructura
              </li>
              <li className="flex items-start gap-2 lg:items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-[#14a19c]"
                >
                  <path
                    fill="currentColor"
                    d="m10.6 13.8l-2.15-2.15q-.275-.275-.7-.275t-.7.275q-.275.275-.275.7t.275.7L9.9 15.9q.3.3.7.3t.7-.3l5.65-5.65q.275-.275.275-.7t-.275-.7q-.275-.275-.7-.275t-.7.275L10.6 13.8ZM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"
                  />
                </svg>
                Dispositivos seguros, independientemente del sistema operativo y
                la ubicación
              </li>
              <li className="flex items-start gap-2 lg:items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-[#14a19c]"
                >
                  <path
                    fill="currentColor"
                    d="m10.6 13.8l-2.15-2.15q-.275-.275-.7-.275t-.7.275q-.275.275-.275.7t.275.7L9.9 15.9q.3.3.7.3t.7-.3l5.65-5.65q.275-.275.275-.7t-.275-.7q-.275-.275-.7-.275t-.7.275L10.6 13.8ZM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"
                  />
                </svg>
                Facilitar el acceso a los recursos a todos los usuarios
              </li>
            </ul>
          </div>
          <Image
            src={ImgPlatform}
            alt="Freebalance"
            className="w-full md:w-1/2 h-fit object-cover shadow rounded"
          />
        </section>

        <section className="flex flex-col gap-4 items-center lg:flex-row lg:items-start lg:gap-6">
          <div>
            <span className="uppercase text-xs font-semibold text-fontPrimary tracking-widest">
              Identidad
            </span>
            <h3 className="font-semibold text-xl leading-normal mb-2 md:mb-4 md:text-2xl">
              Centralizar identidades
            </h3>
            <p className="text-justify">
              Disfrute de una gestión de identidades centralizada y a gran
              escala con identidades de usuario unificadas, en toda la
              organización, independientemente de dónde se originen. Integre
              fácilmente otras fuentes de identidad para mantener
              automáticamente las identidades actualizadas y alineadas en todos
              los recursos conectados. Elimine los vectores de ataque
              relacionados con la proliferación de identidades y reduzca los
              costes asociados al uso de soluciones puntuales de gestión de
              identidades.
            </p>
            <ul className="flex flex-col gap-4 mt-4 lg:mt-6">
              <li className="flex items-start gap-2 lg:items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-[#14a19c]"
                >
                  <path
                    fill="currentColor"
                    d="m10.6 13.8l-2.15-2.15q-.275-.275-.7-.275t-.7.275q-.275.275-.275.7t.275.7L9.9 15.9q.3.3.7.3t.7-.3l5.65-5.65q.275-.275.275-.7t-.275-.7q-.275-.275-.7-.275t-.7.275L10.6 13.8ZM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"
                  />
                </svg>
                Unificar identidades con capacidades de integración abiertas
              </li>
              <li className="flex items-start gap-2 lg:items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-[#14a19c]"
                >
                  <path
                    fill="currentColor"
                    d="m10.6 13.8l-2.15-2.15q-.275-.275-.7-.275t-.7.275q-.275.275-.275.7t.275.7L9.9 15.9q.3.3.7.3t.7-.3l5.65-5.65q.275-.275.275-.7t-.275-.7q-.275-.275-.7-.275t-.7.275L10.6 13.8ZM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"
                  />
                </svg>
                Proteja su identidad con la autenticación multifactor integrada
              </li>
              <li className="flex items-start gap-2 lg:items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-[#14a19c]"
                >
                  <path
                    fill="currentColor"
                    d="m10.6 13.8l-2.15-2.15q-.275-.275-.7-.275t-.7.275q-.275.275-.275.7t.275.7L9.9 15.9q.3.3.7.3t.7-.3l5.65-5.65q.275-.275.275-.7t-.275-.7q-.275-.275-.7-.275t-.7.275L10.6 13.8ZM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"
                  />
                </svg>
                Proteja sus credenciales con el gestor de contraseñas nativo
              </li>
            </ul>
          </div>
          <Image
            src={ImgIdentity}
            alt="Freebalance"
            className="w-full md:w-1/2 h-fit object-cover shadow rounded"
          />
        </section>

        <section className="flex flex-col gap-4 items-center lg:flex-row-reverse lg:items-start lg:gap-6">
          <div>
            <span className="uppercase text-xs font-semibold text-fontPrimary tracking-widest">
              Dispositivos
            </span>
            <h3 className="font-semibold text-xl leading-normal mb-2 md:mb-4 md:text-2xl">
              Dispositivos seguros
            </h3>
            <p className="text-justify">
              Gestione toda su flota, independientemente del sistema operativo o
              la ubicación, y cree una base de gestión de dispositivos escalable
              que evolucione con usted. Desde un solo panel, gestione toda la
              infraestructura de servidores y dispositivos, ya sean móviles o no
              móviles, propiedad de la empresa o parte de una iniciativa BYOD.
              Utilice JumpCloud para cumplir la normativa, supervisar eventos de
              forma centralizada, gestionar y exportar datos de dispositivos,
              aplicar políticas, parchear equipos y mucho más.
            </p>
            <ul className="flex flex-col gap-4 mt-4 lg:mt-6">
              <li className="flex items-start gap-2 lg:items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-[#14a19c]"
                >
                  <path
                    fill="currentColor"
                    d="m10.6 13.8l-2.15-2.15q-.275-.275-.7-.275t-.7.275q-.275.275-.275.7t.275.7L9.9 15.9q.3.3.7.3t.7-.3l5.65-5.65q.275-.275.275-.7t-.275-.7q-.275-.275-.7-.275t-.7.275L10.6 13.8ZM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"
                  />
                </svg>
                Gestione todos los puntos finales en una sola plataforma
              </li>
              <li className="flex items-start gap-2 lg:items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-[#14a19c]"
                >
                  <path
                    fill="currentColor"
                    d="m10.6 13.8l-2.15-2.15q-.275-.275-.7-.275t-.7.275q-.275.275-.275.7t.275.7L9.9 15.9q.3.3.7.3t.7-.3l5.65-5.65q.275-.275.275-.7t-.275-.7q-.275-.275-.7-.275t-.7.275L10.6 13.8ZM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"
                  />
                </svg>
                Proteger todos los dispositivos que acceden a los recursos de la
                empresa
              </li>
              <li className="flex items-start gap-2 lg:items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-[#14a19c]"
                >
                  <path
                    fill="currentColor"
                    d="m10.6 13.8l-2.15-2.15q-.275-.275-.7-.275t-.7.275q-.275.275-.275.7t.275.7L9.9 15.9q.3.3.7.3t.7-.3l5.65-5.65q.275-.275.275-.7t-.275-.7q-.275-.275-.7-.275t-.7.275L10.6 13.8ZM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"
                  />
                </svg>
                Aplique políticas y parchee sistemas a distancia
              </li>
            </ul>
          </div>
          <Image
            src={ImgDevices}
            alt="Freebalance"
            className="w-full md:w-1/2 h-fit object-cover shadow rounded"
          />
        </section>

        <section className="flex flex-col gap-4 items-center lg:flex-row lg:items-start lg:gap-6">
          <div>
            <span className="uppercase text-xs font-semibold text-fontPrimary tracking-widest">
              Acceso
            </span>
            <h3 className="font-semibold text-xl leading-normal mb-2 md:mb-4 md:text-2xl">
              Acceso sin fricciones
            </h3>
            <p className="text-justify">
              Simplifique la incorporación, la baja y los cambios de acceso
              continuos y proporcione a los usuarios acceso a los recursos que
              necesitan de forma inmediata, eficaz y segura. Reduzca las
              fricciones entre departamentos mediante funciones de integración
              abierta que sincronizan sus herramientas, unifican la gestión de
              privilegios de acceso y mejoran la productividad de los empleados.
              Asegure el acceso con políticas de acceso condicional que protegen
              sus recursos de las amenazas cambiantes.
            </p>
            <ul className="flex flex-col gap-4 mt-4 lg:mt-6">
              <li className="flex items-start gap-2 lg:items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-[#14a19c]"
                >
                  <path
                    fill="currentColor"
                    d="m10.6 13.8l-2.15-2.15q-.275-.275-.7-.275t-.7.275q-.275.275-.275.7t.275.7L9.9 15.9q.3.3.7.3t.7-.3l5.65-5.65q.275-.275.275-.7t-.275-.7q-.275-.275-.7-.275t-.7.275L10.6 13.8ZM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"
                  />
                </svg>
                Acceso basado en grupos y control de privilegios
              </li>
              <li className="flex items-start gap-2 lg:items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-[#14a19c]"
                >
                  <path
                    fill="currentColor"
                    d="m10.6 13.8l-2.15-2.15q-.275-.275-.7-.275t-.7.275q-.275.275-.275.7t.275.7L9.9 15.9q.3.3.7.3t.7-.3l5.65-5.65q.275-.275.275-.7t-.275-.7q-.275-.275-.7-.275t-.7.275L10.6 13.8ZM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"
                  />
                </svg>
                Supervisión de accesos a gran escala y registro de sucesos
              </li>
              <li className="flex items-start gap-2 lg:items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-[#14a19c]"
                >
                  <path
                    fill="currentColor"
                    d="m10.6 13.8l-2.15-2.15q-.275-.275-.7-.275t-.7.275q-.275.275-.275.7t.275.7L9.9 15.9q.3.3.7.3t.7-.3l5.65-5.65q.275-.275.275-.7t-.275-.7q-.275-.275-.7-.275t-.7.275L10.6 13.8ZM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"
                  />
                </svg>
                Gestión integral del ciclo de vida de todos los usuarios
              </li>
            </ul>
          </div>
          <Image
            src={ImgAccess}
            alt="Freebalance"
            className="w-full md:w-1/2 h-fit object-cover shadow rounded"
          />
        </section>
      </div>
    </>
  );
}
