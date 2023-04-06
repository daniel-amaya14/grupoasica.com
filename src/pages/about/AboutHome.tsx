import React from 'react';
import CardStats from '@/components/Cards/CardStats';

const icons = [
  { icon: 'ph:folder-open-bold', title: '+400', span: 'Proyectos' },
  { icon: 'uil:users-alt', title: '+100', span: 'Clientes' },
  { icon: 'ic:round-star-outline', title: '+28 años', span: 'Experiencia' },
  { icon: 'ph:briefcase', title: '+37 partners', span: 'A nivel mundial' },
];

export default function AboutHome() {
  return (
    <>
      <h2 className="text-2xl font-bold text-fontPrimary text-justify pb-4 md:text-4xl">
        Grupo ASICA
      </h2>
      <p className="text-sm pb-6 md:text-base md:pb-10 text-justify">
        Somo líder en la implementación de software propio y de terceros en
        Honduras y Centroamérica. Ofrecemos servicios de consultoría y asesoría
        en informática para organizaciones complejas y contamos con un equipo
        altamente especializado. Somos expertos en desarrollo, implementación y
        capacitación de software para diferentes sectores. Nuestro compromiso es
        optimizar el potencial de nuestros clientes implementando soluciones en
        tiempo y forma.
      </p>
      <div>
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
    </>
  );
}
