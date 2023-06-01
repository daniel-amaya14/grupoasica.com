import React from 'react';
import Image from 'next/image';
import ImgAprende from '@/public/svg/aprende.svg';

export default function Cursos() {
  return (
    <section className="max-w-7xl px-4 py-10 mx-auto sm:px-6 lg:px-8 lg:py-14">
      {/* content */}
      <div className="flex flex-col-reverse justify-between items-center gap-10 md:flex-row">
        <div>
          <h2 className="text-3xl font-bold leading-none sm:text-4xl">
            Estudia con {''}
            <span className="text-primary">nosotros</span>
          </h2>
          <p className="mt-3 text-lg max-w-2xl tracking-wide">
            <span className="block mb-4 font-semibold">
              ¿Estás buscando dar un impulso a tu carrera profesional?
            </span>
            ¡Las capacitaciones y certificaciones son la clave para lograrlo!
            Con nuestro catálogo de programas de formación, podrás adquirir las
            habilidades y conocimientos necesarios para destacarte en tu campo
            laboral y aumentar tus oportunidades de crecimiento y desarrollo.
          </p>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <Image
            src={ImgAprende}
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
      </div>
    </section>
  );
}
