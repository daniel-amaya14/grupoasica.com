import React from 'react';
import RootLayout from '@/layout/RootLayout';
import { Icon } from '@iconify/react';

const iconsAbout = [
  { icon: 'ph:folder-open-bold', title: '+400', span: 'Proyectos' },
  { icon: 'uil:users-alt', title: '+100', span: 'Clientes' },
  { icon: 'ic:round-star-outline', title: '+28 años', span: 'Experiencia' },
  { icon: 'ph:briefcase', title: '+37 partners', span: 'A nivel mundial' },
];

export default function About() {
  return (
    <RootLayout>
      <section className="flex flex-col justify-between overflow-hidden">
        <div className="py-6 px-8 xl:px-40 xl:py-10">
          <h2 className="text-2xl font-bold text-[#5D4B9F] pb-4 md:text-4xl">
            Grupo ASICA
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
          <div>
            <ul className="flex justify-center items-center flex-wrap gap-4 md:gap-10 xl:gap-16">
              {iconsAbout.map(({ icon, title, span }) => (
                <li
                  key={title.toLowerCase().replaceAll(' ', '-')}
                  className="flex flex-col gap-0.5 justify-center items-center text-sm w-[120px] aspect-square"
                >
                  <Icon
                    icon={icon}
                    width={42}
                  />
                  <p>{title}</p>
                  <span>{span}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </RootLayout>
  );
}
