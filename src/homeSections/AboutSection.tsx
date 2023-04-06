import React from 'react';
import CardStats from '@/components/Cards/CardStats';

const icons = [
  { icon: 'ph:folder-open-bold', title: '+400', span: 'Proyectos' },
  { icon: 'uil:users-alt', title: '+100', span: 'Clientes' },
  { icon: 'ic:round-star-outline', title: '+28 años', span: 'Experiencia' },
  { icon: 'ph:briefcase', title: '+37 partners', span: 'A nivel mundial' },
];

export default function AboutSection() {
  return (
    <section className="bg-white flex flex-col justify-between overflow-hidden">
      {/* svg */}
      <div className="text-primary w-full rotate-180 relative -top-[1px]">
        <svg
          viewBox="0 0 1440 79"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-38 79C265.2 -26.3333 720 -26.3333 1478 79H-38Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* content */}
      <div className="py-10 px-8 xl:px-40 xl:py-20">
        <h2 className="text-2xl font-bold text-fontPrimary text-justify mb-4 md:text-4xl">
          Sobre nosotros
        </h2>
        <p className="text-sm pb-6 md:text-base md:pb-10">
          Somo líder en la implementación de software propio y de terceros en
          Honduras y Centroamérica. Ofrecemos servicios de consultoría y
          asesoría en informática para organizaciones complejas y contamos con
          un equipo altamente especializado. Somos expertos en desarrollo,
          implementación y capacitación de software para diferentes sectores.
          Nuestro compromiso es optimizar el potencial de nuestros clientes
          implementando soluciones en tiempo y forma.
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:px-0 lg:grid-cols-4 xl:gap-x-12">
          {icons.map(({ icon, title, span }) => (
            <CardStats
              key={title}
              icon={icon}
              title={title}
              span={span}
            />
          ))}
        </div>
      </div>

      {/* svg */}
      <div className="text-primary w-full relative -bottom-[1px]">
        <svg
          viewBox="0 0 1440 79"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-38 79C265.2 -26.3333 720 -26.3333 1478 79H-38Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}
