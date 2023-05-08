import React from 'react';
import ListSoluciones from '@/components/ListSoluciones';
import ListServices from '@/components/ListServices';

export default function PageServicios() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-100 py-8 px-6 md:py-12 md:px-20">
        <div className="container mx-auto">
          <h1 className="font-bold text-3xl text-center marker:leading-normal md:text-4xl">
            Descrubra soluciones de Grupo ASICA y sus socios
          </h1>
          <p className="text-center max-w-2xl mt-3">
            Ofrecemos una amplia gama de servicios para satisfacer tus
            necesidades tecnológicas, desde el soporte y mantenimiento de
            sistemas hasta la implementación de soluciones de seguridad y
            software personalizado.
          </p>
        </div>
      </section>

      {/* Content */}

      <div className="flex flex-col gap-20 px-6 py-8 md:py-12 md:px-20">
        {/* servicios */}
        <section>
          <div className="">
            <h2 className="font-semibold text-2xl leading-normal mb-5 md:text-3xl">
              Explora soluciones por sector
            </h2>
            <ListServices />
          </div>
        </section>

        {/* soluciones */}
        <section>
          <div className="">
            <h2 className="font-semibold text-2xl leading-normal mb-5 md:text-3xl">
              Explorar todas las soluciones
            </h2>
            <ListSoluciones />
          </div>
        </section>
      </div>
    </>
  );
}
