import React from 'react';
import Header from '@/components/Header';
import ListCards from '@/components/ListCards';
import { Icon } from '@iconify/react';

const ItemsSerevicios = [
  { name: 'Gobierno', icon: 'fluent:building-government-24-regular' },
  { name: 'Corporación', icon: 'clarity:building-line' },
  { name: 'PYMES', icon: 'fluent:building-16-regular' },
  { name: 'Banca y Finanzas', icon: 'mingcute:bank-line' },
  { name: 'Salud', icon: 'bi:hospital' },
  { name: `Estudiante/Pasante`, icon: 'ph:student-fill' },
];

const iconsAbout = [
  { icon: 'ph:folder-open-bold', title: '+400', span: 'Proyectos' },
  { icon: 'uil:users-alt', title: '+100', span: 'Clientes' },
  { icon: 'ic:round-star-outline', title: '+28 años', span: 'Experiencia' },
  { icon: 'ph:briefcase', title: '+37 partners', span: 'A nivel mundial' },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* que soy */}
        <section className="py-10 xl:px-48">
          <h2 className="text-3xl font-bold text-[#5D4B9F] text-center mb-6 md:text-4xl">
            ¿Qué soy?
            <br />
          </h2>
          <ListCards listItems={ItemsSerevicios} />
        </section>

        {/* sobre nosotros */}
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
            <h2 className="text-2xl font-bold text-[#5D4B9F] pb-6 md:text-4xl">
              Sobre nosotros
            </h2>
            <p className="text-sm pb-6 md:text-base md:pb-10">
              Somo líder en la implementación de software propio y de terceros
              en Honduras y Centroamérica. Ofrecemos servicios de consultoría y
              asesoría en informática para organizaciones complejas y contamos
              con un equipo altamente especializado. Somos expertos en
              desarrollo, implementación y capacitación de software para
              diferentes sectores. Nuestro compromiso es optimizar el potencial
              de nuestros clientes implementando soluciones en tiempo y forma.
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
      </main>
    </>
  );
}
