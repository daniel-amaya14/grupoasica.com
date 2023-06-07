import React from 'react';
import Image from 'next/image';
import ImgSas from '@/public/partners/sas.svg';
import BannerContacto from '@/components/BannerContacto';
import TabSas from '@/components/TabSas';

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
      <div>
        <div className="max-w-7xl px-4 py-10 mx-auto space-y-20 sm:px-6 lg:px-8 lg:py-14">
          <section className="flex flex-col gap-10 justify-center items-center lg:flex-row">
            <div>
              <h2 className="font-semibold text-2xl leading-normal mb-2 md:mb-4 md:text-3xl">
                Líder en analítica de datos desde hace 40 años
              </h2>
              <p className="text-justify max-w-3xl">
                SAS es una empresa líder en el campo de la analítica de datos
                con una trayectoria de más de 40 años en el mercado. Su
                compromiso con la innovación y la excelencia en el análisis de
                datos ha llevado a la creación de soluciones de vanguardia que
                ayudan a las empresas a tomar decisiones más informadas y
                efectivas. Con una amplia gama de productos y servicios, SAS es
                la elección preferida de miles de organizaciones en todo el
                mundo para aprovechar el valor de sus datos. Confíe en la
                experiencia de SAS para transformar su negocio con la mejor
                tecnología de analítica de datos disponible en el mercado.
              </p>
            </div>

            <Image
              src={ImgSas}
              alt="Freebalance"
              className="w-1/2 md:w-2/3 lg:w-1/3 h-fit object-cover"
            />
          </section>
        </div>

        <TabSas />

        {/*  */}
        <div className="py-10">
          <BannerContacto href="/servicios/formulario" />
        </div>
      </div>
    </>
  );
}
