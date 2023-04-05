import React from 'react';

export default function PageServicios() {
  return (
    <>
      {/* pb-10 py-6 px-8 xl:px-40 xl:py-10 */}
      <section className="flex flex-col gap-20 px-6 py-20 xl:px-16">
        {/*  */}
        <div className="">
          <h1 className="text-2xl font-bold text-fontPrimary text-justify pb-4 md:text-4xl">
            Nuestros Servicios
          </h1>
          <p className="text-sm md:text-base">
            ofrecemos soluciones informáticas y servicios especializados para
            satisfacer las necesidades de nuestros clientes en distintos
            ámbitos. Nuestros servicios incluyen el diseño e implementación de
            sistemas de gestión de información, la automatización de procesos
            empresariales y la implementación de sistemas de gobierno
            electrónico. También ofrecemos servicios de consultoría y
            asesoramiento en temas relacionados con tecnología y procesos
            empresariales. Nuestros expertos trabajan en estrecha colaboración
            con nuestros clientes para comprender sus necesidades específicas y
            desarrollar soluciones personalizadas para alcanzar sus objetivos.
            Nos esforzamos por ofrecer soluciones innovadoras y seguras, que
            cumplan con los más altos estándares de calidad y eficiencia. En
            resumen, nuestro objetivo es proporcionar soluciones y servicios de
            la más alta calidad, para mejorar la eficiencia, productividad y
            rentabilidad de nuestros clientes.
          </p>
          <p className="mt-4 italic">
            Deseas entrenarte en un sector en especifico.{' '}
            <span className="text-blue-500">Click aquí</span>
          </p>
        </div>
      </section>
    </>
  );
}
