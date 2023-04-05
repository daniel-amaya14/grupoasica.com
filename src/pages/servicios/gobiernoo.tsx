import React from 'react';
import RootLayout from '@/layout/RootLayout';

export default function Gobierno() {
  return (
    <RootLayout>
      <section>
        <div className="py-6 px-8 xl:px-40 xl:py-10">
          <div>
            <h1 className="text-2xl font-bold text-fontPrimary text-justify pb-4 md:text-4xl">
              Gobierno
            </h1>
            <p className="text-sm pb-6 md:text-base md:pb-10">
              Proporcionamos soluciones informáticas y servicios especializados,
              con el propósito de mejorar la eficiencia y transparencia de las
              instituciones públicas.
              <br />
              <br />
              Diseñamos soluciones a medida para la gestión de información,
              automatización de procesos y sistemas de gobierno electrónico, y
              brindamos consultoría y asesoramiento para la toma de decisiones
              informadas y políticas tecnológicas. Nuestras soluciones son
              innovadoras, seguras y cumplen con las normativas vigentes, para
              garantizar la privacidad de la información. Buscamos mejorar la
              calidad de los servicios públicos y aumentar la confianza y
              satisfacción de los ciudadanos.
            </p>
          </div>
        </div>
      </section>
    </RootLayout>
  );
}
