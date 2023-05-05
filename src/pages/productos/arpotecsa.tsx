import React from 'react';
import Image from 'next/image';
import ImgAdmon from '@/public/images/software/administracion-documental.jpg';

export default function Arpotecsa() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-100 py-8 px-6 md:py-12 md:px-20">
        <div className="container mx-auto flex flex-col items-center">
          <h1 className="font-bold text-3xl leading-normal md:text-4xl text-center">
            Arpotecsa
          </h1>
          <p className="text-center mt-3 max-w-2xl">
            Arpotecsa esta diseñada para ayudar y acompañar a las empresas en la
            optimización y automatización de sus procesos de consulta de la
            memoria institucional. Con las soluciones que ofrecen, podrán lograr
            una mayor rapidez y eficiencia en estos procesos, lo que les
            permitirá mejorar su productividad y reducir costos.
          </p>
        </div>
      </section>

      <section className="py-8 px-6 md:py-12 md:px-20">
        {/* administración documental */}
        <section className="mt-12">
          {/*  */}
          <div>
            <h2 className="font-semibold text-2xl leading-normal mb-2 md:mb-4 md:text-3xl">
              Administración Documental
            </h2>
            <p>
              Optimizamos la gestión documental de su empresa para ahorrar
              tiempo y recursos valiosos.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-10 place-items-center mt-10 lg:grid-cols-3">
            <div className="flex flex-col gap-10">
              <article>
                <div className="space-y-3">
                  <div>
                    <div className="flex items-center justify-center w-8 aspect-square text-black bg-gray-100 rounded-md">
                      ❖
                    </div>
                    <p className="mt-2 text-justify">
                      <strong>Consultorías & Asesorías Especializada </strong>—
                      Comienza con un diagnóstico detallado de las necesidades
                      de cada cliente. A partir de allí, aplicamos herramientas
                      específicas como las tablas de retención y las tablas de
                      valoración, para mejorar la gestión de la información y
                      lograr una gestión más eficiente y efectiva en cualquier
                      organización.
                    </p>
                  </div>
                </div>
              </article>
              {/*  */}
              <article>
                <div className="space-y-3">
                  <div>
                    <div className="flex items-center justify-center w-8 aspect-square text-black bg-gray-100 rounded-md">
                      ❖
                    </div>
                    <p className="mt-2 text-justify">
                      <strong>
                        Organización, Administración y Digitalización de
                        Archivos{' '}
                      </strong>
                      — Mejorar la gestión documental en cualquier organización.
                      Nos enfocamos en tres áreas principales: Archivos de
                      gestión, Fondo Acumulado y Historias laborales y clínicas.
                      A través de la digitalización y organización adecuada de
                      cada archivo, podemos optimizar el acceso y la gestión de
                      la información, ahorrando tiempo y recursos valiosos.
                    </p>
                  </div>
                </div>
              </article>
            </div>
            <div className="relative w-full h-60 hidden md:block lg:h-fit lg:aspect-square">
              <Image
                src={ImgAdmon}
                alt="Administración Documental"
                fill={true}
                className="object-cover object-center rounded-lg shadow-md"
              />
            </div>
            <div className="flex flex-col gap-10">
              {/*  */}
              <article>
                <div className="space-y-3">
                  <div>
                    <div className="flex items-center justify-center w-8 aspect-square text-black bg-gray-100 rounded-md">
                      ❖
                    </div>
                    <p className="mt-2 text-justify">
                      <strong>Custodia de Archivo </strong>— Cuando se trata de
                      la Custodia de Archivo, la seguridad y protección son
                      fundamentales. Por eso, ofrecemos una ubicación
                      topográfica segura para la conservación de documentos
                      valiosos. Además, nuestro riguroso control y préstamo de
                      documentos garantiza la confidencialidad y privacidad de
                      cada cliente, brindando tranquilidad y protección para sus
                      documentos más importantes.
                    </p>
                  </div>
                </div>
              </article>
              {/*  */}
              <article>
                <div className="space-y-3">
                  <div>
                    <div className="flex items-center justify-center w-8 aspect-square text-black bg-gray-100 rounded-md">
                      ❖
                    </div>
                    <p className="mt-2 text-justify">
                      <strong>Gestión de Correspondencia </strong>— La
                      automatización de procesos es clave para mejorar la
                      eficiencia y productividad. A través de tecnología
                      avanzada, reducimos errores y aumentamos la velocidad de
                      respuesta, permitiendo a su empresa mantener el control
                      total de su correspondencia.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* transformación digital */}
        <section className="mt-20">
          {/*  */}
          <div>
            <h2 className="font-semibold text-2xl leading-normal mb-2 md:mb-4 md:text-3xl">
              Transformación Digital
            </h2>
            <p>
              Implementamos soluciones digitales para mejorar la eficiencia y
              competitividad de su empresa.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-10 mt-10 md:grid-cols-2">
            {/*  */}
            <article>
              <div className="space-y-3">
                <div className="flex gap-4 items-start">
                  <div className="flex items-center justify-center w-8 h-fit aspect-square text-black bg-gray-100 rounded-md">
                    ❖
                  </div>
                  <p className="text-justify">
                    Software en gestión de correspondencia y archivo
                  </p>
                </div>
              </div>
            </article>
            {/*  */}
            <article>
              <div className="space-y-3">
                <div className="flex gap-4 items-start">
                  <div className="flex items-center justify-center w-8 h-fit aspect-square text-black bg-gray-100 rounded-md">
                    ❖
                  </div>
                  <p className="text-justify">
                    Solución para la modernización de cobro de impuestos
                    territoriales
                  </p>
                </div>
              </div>
            </article>
            {/*  */}
            <article>
              <div className="space-y-3">
                <div className="flex gap-4 items-start">
                  <div className="flex items-center justify-center w-8 h-fit aspect-square text-black bg-gray-100 rounded-md">
                    ❖
                  </div>
                  <p className="text-justify">
                    Sistema especializado para la administración de contenido
                    corporativo
                  </p>
                </div>
              </div>
            </article>
            {/*  */}
            <article>
              <div className="space-y-3">
                <div className="flex gap-4 items-start">
                  <div className="flex items-center justify-center w-8 h-fit aspect-square text-black bg-gray-100 rounded-md">
                    ❖
                  </div>
                  <p className="text-justify">
                    Sistema de control de ingresos sobre sistemas POS.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </section>
      </section>
    </>
  );
}
