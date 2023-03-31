import React from 'react';
import RootLayout from '@/layout/RootLayout';
import ListCards from '@/components/ListCards';
import CardLarge from '@/components/CardLarge';
import ListPartners from '@/components/ListPartners';
import { Icon } from '@iconify/react';

import IMGOffice from '@/public/images/office365.png';
import IMGManagement from '@/public/images/management.jpg';
import IMGWellness from '@/public/images/wellness.jpg';

const ItemsSerevicios = [
  {
    name: 'Gobierno',
    href: 'gobierno',
    icon: 'fluent:building-government-24-regular',
  },
  { name: 'Corporación', href: 'corporacion', icon: 'clarity:building-line' },
  { name: 'PYMES', href: 'pymes', icon: 'fluent:building-16-regular' },
  {
    name: 'Banca y Finanzas',
    href: 'banca-finanzas',
    icon: 'mingcute:bank-line',
  },
  { name: 'Salud', href: 'salud', icon: 'bi:hospital' },
  { name: `Estudiante`, href: `estudiante`, icon: 'ph:student-fill' },
];

const iconsAbout = [
  { icon: 'ph:folder-open-bold', title: '+400', span: 'Proyectos' },
  { icon: 'uil:users-alt', title: '+100', span: 'Clientes' },
  { icon: 'ic:round-star-outline', title: '+28 años', span: 'Experiencia' },
  { icon: 'ph:briefcase', title: '+37 partners', span: 'A nivel mundial' },
];

const ItemsCertificaciones = [
  {
    name: 'CPTS',
    description: 'HTB Certified Penetration Testing Specialist',
    modulos: '28',
  },
  {
    name: 'CBBH',
    description: 'HTB Certified Bug Bounty Hunter',
    modulos: '20',
  },
  {
    name: 'Otro',
    description: 'Lorem ipsum dolor sit amet',
    modulos: '20',
  },
];

const ItemsCredenciales = [
  { name: 'Certificación DD' },
  { name: 'Gremlin' },
  { name: 'JumpCloud' },
  { name: 'CATO' },
  { name: 'Acumatica' },
];

export default function Home() {
  return (
    <>
      <RootLayout withBanner={true}>
        {/* quién eres */}
        <section className="pb-10 xl:px-48">
          <h2 className="text-3xl font-bold text-fontPrimary text-center mb-8 md:text-4xl">
            ¿Quién eres?
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
            <h2 className="text-2xl font-bold text-fontPrimary text-justify mb-4 md:text-4xl">
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
              ducimus omnis voluptatibus amet placeat, soluta repudiandae
              mollitia facilis, repellat molestiae quisquam ullam? Quo
              molestias, ducimus soluta ratione molestiae aut nobis.
            </p>
          </div>
          <div className="grid grid-cols-auto-layout-14 auto-rows-auto grid-flow-dense place-items-center gap-4">
            {ItemsCertificaciones.map(({ name, description, modulos }) => (
              <CardLarge
                title={name}
                key={name.toLowerCase().replaceAll(' ', '-')}
              >
                <p className="text-xs mb-3">{description}</p>
                <div className="flex items-center gap-6">
                  <div className="flex justify-center items-center gap-2">
                    <Icon icon="fluent:layer-20-filled" />
                    <p className="text-xs">{modulos} módulos</p>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <Icon icon="mingcute:certificate-fill" />
                    <p className="text-xs">{modulos} Examen Incluido</p>
                  </div>
                </div>
              </CardLarge>
            ))}
          </div>
        </section>

        {/* capacitate con nosotros */}
        <section className="py-10 px-8 xl:px-40 xl:py-20">
          <div className="flex flex-col gap-4 mb-6">
            <h2 className="text-2xl font-bold text-fontPrimary text-justify md:text-4xl">
              Capacítate con nosotros
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              ducimus omnis voluptatibus amet placeat, soluta repudiandae
              mollitia facilis, repellat molestiae quisquam ullam? Quo
              molestias, ducimus soluta ratione molestiae aut nobis.
            </p>
          </div>
          <div className="grid grid-cols-auto-layout-16 auto-rows-auto grid-flow-dense place-items-center gap-4">
            <CardLarge
              title="Gestión (Diplomado)"
              src={IMGWellness}
            >
              <p className="text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus sed finibus libero. Nullam vitae sodales est. Orci
                varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus.
              </p>
            </CardLarge>

            <CardLarge
              title="Coaching Bienestar"
              src={IMGManagement}
            >
              <p className="text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus sed finibus libero. Nullam vitae sodales est. Orci
                varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus.
              </p>
            </CardLarge>

            <CardLarge
              title="Microsoft Office"
              src={IMGOffice}
            >
              <p className="text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus sed finibus libero. Nullam vitae sodales est. Orci
                varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus.
              </p>
            </CardLarge>
          </div>
        </section>

        {/* nuestras credenciales */}
        <section className="py-10 px-8 xl:px-40 xl:py-20">
          <div className="flex flex-col gap-4 mb-6">
            <h2 className="text-2xl font-bold text-fontPrimary text-justify md:text-4xl">
              Nuestras credenciales
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              ducimus omnis voluptatibus amet placeat, soluta repudiandae
              mollitia facilis, repellat molestiae quisquam ullam? Quo
              molestias, ducimus soluta ratione molestiae aut nobis.
            </p>
          </div>
          <div className="grid grid-cols-auto-layout-16 auto-rows-auto grid-flow-dense place-items-center gap-4">
            {ItemsCredenciales.map(({ name }) => (
              <CardLarge
                title={name}
                key={name.toLowerCase().replaceAll(' ', '-')}
              >
                <p className="text-xs">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus sed finibus libero. Nullam vitae sodales est. Orci
                  varius natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus.
                </p>
              </CardLarge>
            ))}
          </div>
        </section>

        {/* partners */}
        <section className="py-10 px-8 xl:px-40 xl:py-20">
          <div>
            <h2 className="text-2xl font-bold text-fontPrimary text-justify mb-6 md:text-4xl">
              Únete a nuestra red de colaboradores y crezcamos juntos en la era
              digital.
            </h2>
            <ListPartners />
            <div className="text-center">
              <button className="bg-blue-700 hover:bg-blue-800 text-white py-3 px-4 rounded-md active:ring-4 active:ring-blue-300">
                Quiero ser partner
              </button>
            </div>
          </div>
        </section>
      </RootLayout>
    </>
  );
}
