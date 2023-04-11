import React from 'react';
import Link from 'next/link';
// import Feature from '@/serviceSections';

import {
  IconGovernment,
  IconCorporation,
  IconPymes,
  IconBank,
  IconHealthLogo,
  IconStudent,
  IconProps,
} from '@/components/Icons';

// const features = {
//   gobierno: {
//     id: 'gobierno',
//     title: 'Gobierno',
//     href: '/gobierno',
//     items: [
//       'Personalización: Cada solución se adapta a las necesidades específicas de la organización, lo que garantiza un enfoque personalizado y adaptado a cada cliente.',
//       'Innovación: Proporcionamos soluciones tecnológicas innovadoras que mejoran la eficiencia y eficacia de los procesos gubernamentales.',
//       'Seguridad: Nos enfocamos en la seguridad de la información y la privacidad de los datos de nuestros clientes, asegurando la protección y confidencialidad de los datos sensibles.',
//       'Soporte técnico: Brindamos un soporte técnico continuo y atención al cliente excepcional, para garantizar la satisfacción y el éxito a largo plazo de nuestros clientes.',
//       'Cumplimiento de plazos y presupuestos: Nos comprometemos a cumplir con los plazos y presupuestos acordados, con una transparencia en los costos desde el inicio del proyecto.',
//     ],
//     Icon: () => IconGovernment,
//   },
//   corporacion: {
//     id: 'corporacion',
//     title: 'Corpocación',
//     href: '/corporacion',
//     items: [
//       'Personalización: Cada solución se adapta a las necesidades específicas de la organización, lo que garantiza un enfoque personalizado y adaptado a cada cliente.',
//       'Innovación: Proporcionamos soluciones tecnológicas innovadoras que mejoran la eficiencia y eficacia de los procesos gubernamentales.',
//       'Seguridad: Nos enfocamos en la seguridad de la información y la privacidad de los datos de nuestros clientes, asegurando la protección y confidencialidad de los datos sensibles.',
//       'Soporte técnico: Brindamos un soporte técnico continuo y atención al cliente excepcional, para garantizar la satisfacción y el éxito a largo plazo de nuestros clientes.',
//       'Cumplimiento de plazos y presupuestos: Nos comprometemos a cumplir con los plazos y presupuestos acordados, con una transparencia en los costos desde el inicio del proyecto.',
//     ],
//     Icon: () => IconCorporation,
//   },
//   pymes: {
//     id: 'pymes',
//     title: 'PYMES ',
//     href: '/pymes',
//     items: [
//       'Personalización: Cada solución se adapta a las necesidades específicas de la organización, lo que garantiza un enfoque personalizado y adaptado a cada cliente.',
//       'Innovación: Proporcionamos soluciones tecnológicas innovadoras que mejoran la eficiencia y eficacia de los procesos gubernamentales.',
//       'Seguridad: Nos enfocamos en la seguridad de la información y la privacidad de los datos de nuestros clientes, asegurando la protección y confidencialidad de los datos sensibles.',
//       'Soporte técnico: Brindamos un soporte técnico continuo y atención al cliente excepcional, para garantizar la satisfacción y el éxito a largo plazo de nuestros clientes.',
//       'Cumplimiento de plazos y presupuestos: Nos comprometemos a cumplir con los plazos y presupuestos acordados, con una transparencia en los costos desde el inicio del proyecto.',
//     ],
//     Icon: () => IconPymes,
//   },
//   banca: {
//     id: 'banca',
//     title: 'Banca y Finanzas',
//     href: '/banca-finanzas',
//     items: [
//       'Personalización: Cada solución se adapta a las necesidades específicas de la organización, lo que garantiza un enfoque personalizado y adaptado a cada cliente.',
//       'Innovación: Proporcionamos soluciones tecnológicas innovadoras que mejoran la eficiencia y eficacia de los procesos gubernamentales.',
//       'Seguridad: Nos enfocamos en la seguridad de la información y la privacidad de los datos de nuestros clientes, asegurando la protección y confidencialidad de los datos sensibles.',
//       'Soporte técnico: Brindamos un soporte técnico continuo y atención al cliente excepcional, para garantizar la satisfacción y el éxito a largo plazo de nuestros clientes.',
//       'Cumplimiento de plazos y presupuestos: Nos comprometemos a cumplir con los plazos y presupuestos acordados, con una transparencia en los costos desde el inicio del proyecto.',
//     ],
//     Icon: () => IconBank,
//   },
//   salud: {
//     id: 'salud',
//     title: 'Salud',
//     href: '/salud',
//     items: [
//       'Personalización: Cada solución se adapta a las necesidades específicas de la organización, lo que garantiza un enfoque personalizado y adaptado a cada cliente.',
//       'Innovación: Proporcionamos soluciones tecnológicas innovadoras que mejoran la eficiencia y eficacia de los procesos gubernamentales.',
//       'Seguridad: Nos enfocamos en la seguridad de la información y la privacidad de los datos de nuestros clientes, asegurando la protección y confidencialidad de los datos sensibles.',
//       'Soporte técnico: Brindamos un soporte técnico continuo y atención al cliente excepcional, para garantizar la satisfacción y el éxito a largo plazo de nuestros clientes.',
//       'Cumplimiento de plazos y presupuestos: Nos comprometemos a cumplir con los plazos y presupuestos acordados, con una transparencia en los costos desde el inicio del proyecto.',
//     ],
//     Icon: () => IconHealthLogo,
//   },
//   estudiante: {
//     id: 'estudiantes',
//     title: 'Estudiante y Pasantes',
//     href: '/estudiantes',
//     items: [
//       'Personalización: Cada solución se adapta a las necesidades específicas de la organización, lo que garantiza un enfoque personalizado y adaptado a cada cliente.',
//       'Innovación: Proporcionamos soluciones tecnológicas innovadoras que mejoran la eficiencia y eficacia de los procesos gubernamentales.',
//       'Seguridad: Nos enfocamos en la seguridad de la información y la privacidad de los datos de nuestros clientes, asegurando la protección y confidencialidad de los datos sensibles.',
//       'Soporte técnico: Brindamos un soporte técnico continuo y atención al cliente excepcional, para garantizar la satisfacción y el éxito a largo plazo de nuestros clientes.',
//       'Cumplimiento de plazos y presupuestos: Nos comprometemos a cumplir con los plazos y presupuestos acordados, con una transparencia en los costos desde el inicio del proyecto.',
//     ],
//     Icon: () => IconStudent,
//   },
// };

const heroItems = {
  links: [
    {
      title: 'Gobierno',
      href: 'gobierno',
      Icon: (props: IconProps) => <IconGovernment {...props} />,
    },
    {
      title: 'Corporación',
      href: 'corporacion',
      Icon: (props: IconProps) => <IconCorporation {...props} />,
    },
    {
      title: 'PYMES',
      href: 'pymes',
      Icon: (props: IconProps) => <IconPymes {...props} />,
    },
    {
      title: 'Banca y Finanzas',
      href: 'banca-finanzas',
      Icon: (props: IconProps) => <IconBank {...props} />,
    },
    {
      title: 'Salud',
      href: 'salud',
      Icon: (props: IconProps) => <IconHealthLogo {...props} />,
    },
    {
      title: 'Estudiantes',
      href: 'estudiantes',
      Icon: (props: IconProps) => <IconStudent {...props} />,
    },
  ],
};

export default function PageServicios() {
  return (
    <>
      {/* hero */}
      <section className="bg-gradient-to-b from-slate-200 to-white px-6 py-20 xl:px-16">
        {/*  */}
        <div className="max-w-screen-xl">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg lg:gap-x-16 lg:items-center">
            <div className="mx-auto max-w-lg lg:mx-0">
              <h1 className="text-3xl font-bold xl:text-4xl">
                Nuestro Servicios
              </h1>

              <p className="mt-4 text-gray-600 text-justify">
                Ofrecemos soluciones informáticas y servicios especializados
                para satisfacer las necesidades de nuestros clientes en
                distintos ámbitos.
              </p>

              {/* <Link
                href="#"
                className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Solicitar Servicio
              </Link> */}
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {heroItems.links.map((link) => (
                <LinkHero
                  key={link.href}
                  {...link}
                />
              ))}
            </div>
          </div>
        </div>
        {/*  */}
        <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-0 lg:pt-20">
          <h2 className="mb-8 text-2xl font-semibold leading-none">
            ¿Qué podemos ofrecer?
          </h2>
          <ul className="grid gap-3 gap-y-6 md:grid-cols-2 text-justify">
            <li className="flex space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 h-5 fill-current dark:dark:text-violet-400"
              >
                <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
              </svg>
              <span>
                Experiencia y conocimientos en tecnología e informática.
              </span>
            </li>
            <li className="flex space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 h-5 fill-current dark:dark:text-violet-400"
              >
                <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
              </svg>
              <span>
                Equipo de profesionales altamente capacitados y especializados.
              </span>
            </li>
            <li className="flex space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 h-5 fill-current dark:dark:text-violet-400"
              >
                <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
              </svg>
              <span>
                Tecnología avanzada y herramientas de software eficientes.
              </span>
            </li>
            <li className="flex space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 h-5 fill-current dark:dark:text-violet-400"
              >
                <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
              </svg>
              <span>
                Soluciones personalizadas y adaptadas a las necesidades del
                cliente.
              </span>
            </li>
            <li className="flex space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 h-5 fill-current dark:dark:text-violet-400"
              >
                <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
              </svg>
              <span>Atención al cliente excepcional y comunicación clara.</span>
            </li>
            <li className="flex space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 h-5 fill-current dark:dark:text-violet-400"
              >
                <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
              </svg>
              <span>
                Soluciones innovadoras y creativas que agreguen valor.
              </span>
            </li>
            <li className="flex space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 h-5 fill-current dark:dark:text-violet-400"
              >
                <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
              </svg>
              <span>
                Foco en la seguridad de la información y la privacidad de los
                datos.
              </span>
            </li>
            <li className="flex space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 h-5 fill-current dark:dark:text-violet-400"
              >
                <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
              </svg>
              <span>
                Servicios de soporte y mantenimiento post-implementación.
              </span>
            </li>
            <li className="flex space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 h-5 fill-current dark:dark:text-violet-400"
              >
                <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
              </svg>
              <span>
                Compromiso con la puntualidad y transparencia en los costos.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* content */}
      {/* <section className="flex flex-col gap-20 px-6 pt-10 pb-20 xl:px-16 bg-white">
        
        <Feature {...features.gobierno}>
          Las soluciones informáticas para el sector de gobierno son
          herramientas tecnológicas esenciales para mejorar la eficiencia y
          eficacia en la gestión de las organizaciones gubernamentales.
          Ofrecemos soluciones de vanguardia diseñadas a medida para satisfacer
          las necesidades específicas del sector público.
          <br />
          <br />
          Nuestro equipo de profesionales altamente capacitados está
          comprometido en proporcionar soluciones personalizadas para cada
          cliente. Desde la implementación de sistemas ERP hasta el análisis de
          datos y la ciberseguridad, nuestro enfoque es proporcionar soluciones
          eficientes y efectivas.
        </Feature>

        
        <Feature {...features.corporacion}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem harum
          assumenda mollitia velit quod sapiente nisi, ab iure quos, dolore
          corporis obcaecati facilis culpa cum quibusdam minus dolorem tempora
          praesentium? Ab minima id architecto ipsum ipsa, neque deserunt aut
          dolore tempora hic numquam quas delectus repellendus optio facilis
          beatae est, accusamus fuga. Sed esse recusandae eligendi, officia
          temporibus perferendis id?
        </Feature>

        <Feature {...features.pymes}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem harum
          assumenda mollitia velit quod sapiente nisi, ab iure quos, dolore
          corporis obcaecati facilis culpa cum quibusdam minus dolorem tempora
          praesentium? Ab minima id architecto ipsum ipsa, neque deserunt aut
          dolore tempora hic numquam quas delectus repellendus optio facilis
          beatae est, accusamus fuga. Sed esse recusandae eligendi, officia
          temporibus perferendis id?
        </Feature>

        <Feature {...features.banca}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem harum
          assumenda mollitia velit quod sapiente nisi, ab iure quos, dolore
          corporis obcaecati facilis culpa cum quibusdam minus dolorem tempora
          praesentium? Ab minima id architecto ipsum ipsa, neque deserunt aut
          dolore tempora hic numquam quas delectus repellendus optio facilis
          beatae est, accusamus fuga. Sed esse recusandae eligendi, officia
          temporibus perferendis id?
        </Feature>

        <Feature {...features.salud}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem harum
          assumenda mollitia velit quod sapiente nisi, ab iure quos, dolore
          corporis obcaecati facilis culpa cum quibusdam minus dolorem tempora
          praesentium? Ab minima id architecto ipsum ipsa, neque deserunt aut
          dolore tempora hic numquam quas delectus repellendus optio facilis
          beatae est, accusamus fuga. Sed esse recusandae eligendi, officia
          temporibus perferendis id?
        </Feature>

        <Feature {...features.estudiante}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem harum
          assumenda mollitia velit quod sapiente nisi, ab iure quos, dolore
          corporis obcaecati facilis culpa cum quibusdam minus dolorem tempora
          praesentium? Ab minima id architecto ipsum ipsa, neque deserunt aut
          dolore tempora hic numquam quas delectus repellendus optio facilis
          beatae est, accusamus fuga. Sed esse recusandae eligendi, officia
          temporibus perferendis id?
        </Feature>
      </section> */}
    </>
  );
}

interface LinkHeroProps {
  title: string;
  href: string;
  Icon: any;
}

const LinkHero = ({ title, href, Icon }: LinkHeroProps) => {
  return (
    <Link
      href={`/${href}`}
      scroll={false}
      className="block rounded-xl bg-white bg-opacity-75 border border-gray-100 p-4 shadow-sm transition duration-300 transform hover:-translate-y-2 hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring group"
    >
      <span className="inline-block rounded-lg p-3">
        <Icon
          className="text-fontPrimary"
          width={32}
          height={32}
        />
        {/* <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          ></path>
        </svg> */}
      </span>

      <h2 className="mt-2 font-semibold">{title}</h2>

      {/* <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
        Lorem ipsum dolor sit amet consectetur.
      </p> */}
    </Link>
  );
};
