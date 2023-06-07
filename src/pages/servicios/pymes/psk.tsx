import React from 'react';
import Image from 'next/image';
import ImgPskloud from '@/public/images/software/psk/pskloud.webp';
import BannerContacto from '@/components/BannerContacto';

export default function Psk() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-100 py-8 px-6 md:py-12 md:px-20">
        <div className="container mx-auto flex flex-col items-center">
          <h1 className="font-bold text-3xl leading-normal md:text-4xl text-center">
            PSKloud Small Business
          </h1>
          <p className="text-center mt-3 max-w-2xl">
            PSKloud Small Business es un software de gestión empresarial
            intuitivo y fácil de usar para pequeñas empresas. Controla
            operaciones de ventas, compras, inventario y finanzas con múltiples
            monedas y niveles de acceso configurables. Completamente integrado
            al sistema contable y de nómina, es una solución escalable y
            eficiente.
          </p>
        </div>
      </section>

      <div className="py-8 px-6 flex flex-col gap-20 md:py-12 md:px-20">
        <section className="flex flex-col gap-10 justify-center items-center lg:flex-row">
          <div>
            <h2 className="font-semibold text-2xl text-justify leading-normal mb-2 md:mb-4 md:text-3xl lg:text-left">
              Mismo software administrativo pero en la web
            </h2>
            <p className="text-justify max-w-3xl">
              Funciona bajo las mismas características del sistema
              administrativo, sólo que está disponible en la web, por eso puedes
              conectarte y llevar desde cualquier lugar del mundo la gestión de
              tu empresa, realizar pedidos y consultar las cuentas e
              inventarios, verificar informes de documentos emitidos por la
              empresa y movimientos internos, sin perder detalle de lo que
              acontece en la empresa, adicionalmente tener un respaldo en la
              nube de la información. Small Business te brinda confort en el uso
              de diferentes dispositivos, con diseños totalmente responsivos que
              demuestran que la tecnología forma parte de nuestros principios en
              el desarrollo de nuevas ideas como casa de software líder en
              mercados internacionales.
            </p>
          </div>

          <Image
            src={ImgPskloud}
            alt="Freebalance"
            className="w-1/2 md:w-2/3 lg:w-1/3 h-fit object-cover"
          />
        </section>

        <section>
          <h2 className="font-semibold text-2xl leading-normal mb-2 md:mb-4 md:text-3xl">
            ¿Por qué PSKloud?
          </h2>
          <div className="grid gap-10 md:gap-8 md:grid-cols-3 mt-3">
            <div>
              <h3 className="font-semibold text-primary">
                Interfaz amigable y funcional para el usuario
              </h3>
              <p className="mt-1 text-justify">
                Tiene una novedosa y amigable interfaz para la operación de
                todas las funciones que tiene el sistema. Cuenta con varios
                iconos de ayuda, vídeo e información escrita, también cuenta con
                un manual de usuario.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary">
                Importación y exportación de datos fácil y rápida
              </h3>
              <p className="mt-1 text-justify">
                Permite la importación y exportación de datos.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary">
                Acceso seguro y configurable para los usuarios
              </h3>
              <p className="mt-1 text-justify">
                El acceso de los usuarios es configurable por niveles, lo que
                permite la seguridad de la data.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h2 className="font-semibold text-2xl text-justify leading-normal mb-2 md:mb-4 md:text-3xl lg:text-left">
              Sistema administrativo PSKloud: Gestión y control integral
              empresarial
            </h2>
            <p className="text-justify">
              Adaptable a cualquier tipo de empresa, el sistema administrativo
              PSKloud permite la gestión y el control de todas las operaciones
              de tu empresa,{' '}
              <strong>
                abarcando las áreas de ventas, compras, bancos, cuentas por
                cobrar, cuentas por pagar, inventario y mucho más.
              </strong>{' '}
              Es completamente integrado al sistema contable y al sistema de
              nómina, adicionalmente incluye el <strong>punto de Venta</strong>{' '}
              para el manejo eficiente y rápido de las operaciones en ventas
              para negocios como{' '}
              <strong>
                supermercados, tiendas, restaurantes, y un sinfín de
                establecimientos.
              </strong>
            </p>
          </div>
          <div className="mt-10">
            <h3 className="font-semibold text-xl text-justify leading-normal mb-2 md:mb-4 md:text-2xl lg:text-left">
              Características
            </h3>
            <ul className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
              <li className="flex gap-2 items-start">
                <span>
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    strokeWidth={2}
                    width={16}
                    height={16}
                    className="w-7 max-w-7 aspect-square"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path
                      d="M0 0h24v24H0z"
                      fill="none"
                      stroke="none"
                    ></path>
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                    <path d="M9 12l2 2l4 -4"></path>
                  </svg>
                </span>
                <p className="text-justify">
                  Novedosa interfaz que facilita la operación de todas las
                  opciones.
                </p>
              </li>
              <li className="flex gap-2 items-start">
                <span>
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    strokeWidth={2}
                    width={16}
                    height={16}
                    className="w-7 max-w-7 aspect-square"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path
                      d="M0 0h24v24H0z"
                      fill="none"
                      stroke="none"
                    ></path>
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                    <path d="M9 12l2 2l4 -4"></path>
                  </svg>
                </span>
                <p className="text-justify">
                  Capacidad de controlar hasta 999 agencias o sucursales por
                  cada empresa creada.
                </p>
              </li>
              <li className="flex gap-2 items-start">
                <span>
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    strokeWidth={2}
                    width={16}
                    height={16}
                    className="w-7 max-w-7 aspect-square"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path
                      d="M0 0h24v24H0z"
                      fill="none"
                      stroke="none"
                    ></path>
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                    <path d="M9 12l2 2l4 -4"></path>
                  </svg>
                </span>
                <p className="text-justify">
                  Multi-moneda en las operaciones de venta, cobros, compras,
                  pagos y bancos.
                </p>
              </li>
              <li className="flex gap-2 items-start">
                <span>
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    strokeWidth={2}
                    width={16}
                    height={16}
                    className="w-7 max-w-7 aspect-square"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path
                      d="M0 0h24v24H0z"
                      fill="none"
                      stroke="none"
                    ></path>
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                    <path d="M9 12l2 2l4 -4"></path>
                  </svg>
                </span>
                <p className="text-justify">
                  Capacidad de controlar Múltiples empresas (en su versión
                  Multi-empresas).
                </p>
              </li>
              <li className="flex gap-2 items-start">
                <span>
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    strokeWidth={2}
                    width={16}
                    height={16}
                    className="w-7 max-w-7 aspect-square"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path
                      d="M0 0h24v24H0z"
                      fill="none"
                      stroke="none"
                    ></path>
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                    <path d="M9 12l2 2l4 -4"></path>
                  </svg>
                </span>
                <p className="text-justify">
                  Consecutivos de documentos independiente por cada sucursal.
                </p>
              </li>
              <li className="flex gap-2 items-start">
                <span>
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    strokeWidth={2}
                    width={16}
                    height={16}
                    className="w-7 max-w-7 aspect-square"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path
                      d="M0 0h24v24H0z"
                      fill="none"
                      stroke="none"
                    ></path>
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                    <path d="M9 12l2 2l4 -4"></path>
                  </svg>
                </span>
                <p className="text-justify">
                  Configuración de niveles de acceso y seguridad por usuarios.
                </p>
              </li>
              <li className="flex gap-2 items-start">
                <span>
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    strokeWidth={2}
                    width={16}
                    height={16}
                    className="w-7 max-w-7 aspect-square"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path
                      d="M0 0h24v24H0z"
                      fill="none"
                      stroke="none"
                    ></path>
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                    <path d="M9 12l2 2l4 -4"></path>
                  </svg>
                </span>
                <p className="text-justify">
                  Hasta seis (6) series de facturas por cada sucursal.
                </p>
              </li>
              <li className="flex gap-2 items-start">
                <span>
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    strokeWidth={2}
                    width={16}
                    height={16}
                    className="w-7 max-w-7 aspect-square"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path
                      d="M0 0h24v24H0z"
                      fill="none"
                      stroke="none"
                    ></path>
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                    <path d="M9 12l2 2l4 -4"></path>
                  </svg>
                </span>
                <p className="text-justify">
                  Manejo de siete (7) precios por cada artículo.
                </p>
              </li>
              <li className="flex gap-2 items-start">
                <span>
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    strokeWidth={2}
                    width={16}
                    height={16}
                    className="w-7 max-w-7 aspect-square"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path
                      d="M0 0h24v24H0z"
                      fill="none"
                      stroke="none"
                    ></path>
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                    <path d="M9 12l2 2l4 -4"></path>
                  </svg>
                </span>
                <p className="text-justify">
                  Integración total entre sus módulos.
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/*  */}
        <BannerContacto href="/servicios/formulario" />
      </div>
    </>
  );
}
