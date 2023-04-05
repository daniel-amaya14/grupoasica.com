import React from 'react';
// import BannerHeader from '@/components/BannerHeader';
import Hero from '@/components/BannerHeader/Hero';
import ListCardsServicios from '@/components/ListCardsServicios';
import ListCardsCertificaciones from '@/components/ListCardsCertificaciones';
import ListCardsCredenciales from '@/components/ListCardsCredenciales';
import ListCardsCapacitaciones from '@/components/ListCardsCapacitaciones';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import PartnerSection from '@/components/PartnerSection';

const iconsAbout = [
  { icon: 'ph:folder-open-bold', title: '+400', span: 'Proyectos' },
  { icon: 'uil:users-alt', title: '+100', span: 'Clientes' },
  { icon: 'ic:round-star-outline', title: '+28 años', span: 'Experiencia' },
  { icon: 'ph:briefcase', title: '+37 partners', span: 'A nivel mundial' },
];

export default function Home() {
  return (
    <>
      {/* banner */}
      {/* <BannerHeader /> */}
      <Hero />

      {/* quién eres */}
      <section className="pb-10 xl:px-48 mt-40">
        <h2 className="text-3xl font-bold text-fontPrimary text-center mb-8 md:text-4xl">
          ¿Quién eres?
          <br />
        </h2>
        <ListCardsServicios />
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
          <div>
            <ul className="flex justify-center items-center flex-wrap gap-4 md:gap-10 xl:gap-16">
              {iconsAbout.map(({ icon, title, span }) => (
                <li
                  key={title.toLowerCase().replaceAll(' ', '-')}
                  className="flex flex-col gap-0.5 justify-center items-center text-sm w-[120px] aspect-square"
                >
                  <Icon
                    className="text-fontPrimary"
                    icon={icon}
                    width={42}
                  />
                  <p className="font-semibold">{title}</p>
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

      {/* certificate con nosotros */}
      <section className="py-10 px-8 xl:px-40 xl:py-20">
        <div className="flex flex-col gap-4 mb-6">
          <h2 className="text-2xl font-bold text-fontPrimary text-justify md:text-4xl">
            Certifícate con nosotros
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            ducimus omnis voluptatibus amet placeat, soluta repudiandae mollitia
            facilis, repellat molestiae quisquam ullam? Quo molestias, ducimus
            soluta ratione molestiae aut nobis.
          </p>
        </div>
        <ListCardsCertificaciones />
      </section>

      {/* capacitate con nosotros */}
      <section className="py-10 px-8 xl:px-40 xl:py-20">
        <div className="flex flex-col gap-4 mb-6">
          <h2 className="text-2xl font-bold text-fontPrimary text-justify md:text-4xl">
            Capacítate con nosotros
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            ducimus omnis voluptatibus amet placeat, soluta repudiandae mollitia
            facilis, repellat molestiae quisquam ullam? Quo molestias, ducimus
            soluta ratione molestiae aut nobis.
          </p>
        </div>
        <ListCardsCapacitaciones />
      </section>

      {/* nuestras credenciales */}
      <section className="py-10 px-8 xl:px-40 xl:py-20">
        <div className="flex flex-col gap-4 mb-6">
          <h2 className="text-2xl font-bold text-fontPrimary text-justify md:text-4xl">
            Nuestras credenciales
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            ducimus omnis voluptatibus amet placeat, soluta repudiandae mollitia
            facilis, repellat molestiae quisquam ullam? Quo molestias, ducimus
            soluta ratione molestiae aut nobis.
          </p>
        </div>
        <ListCardsCredenciales />
      </section>

      {/* partners */}
      <section>
        <div className="items-center px-8 py-12 mx-auto 2xl:max-w-7xl lg:px-16 md:px-12 xl:px-36 lg:py-32 w-xl">
          <div className="lg:items-center lg:gap-8 lg:grid lg:grid-cols-2">
            <div className="max-w-xl mb-14 lg:mb-0 lg:p-6">
              <div className="">
                <h2 className="text-2xl font-bold text-fontPrimary text-justify mb-4 md:text-4xl">
                  Nuestros partners
                </h2>
                <p className="max-w-xl text-base tracking-tight text-gray-600 mb-6">
                  Contamos con la mejor red de colaboradores. Nuestros partners
                  nos ayudan a ofrecer soluciones integrales a nuestros
                  clientes. Si quieres ser parte de nuestra red de
                  colaboradores, contáctanos.
                </p>
                <div>
                  <Link
                    href="/partners"
                    className="bg-blue-700 hover:bg-blue-800 text-white py-3 px-4 rounded-md active:ring-4 active:ring-blue-300"
                  >
                    Conocer más
                  </Link>
                </div>
              </div>
            </div>
            <PartnerSection />
          </div>
        </div>
      </section>
    </>
  );
}
