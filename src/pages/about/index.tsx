import React from 'react';
import ImageAbout from '@/public/images/imghero.webp';
import Image from 'next/image';
import ImgMision from '@/public/images/mision.webp';
import ImgVision from '@/public/images/vision.webp';
import ImgValores from '@/public/images/valores.webp';
import {
  IconBriefcase,
  IconStart,
  IconUsers,
  IconFolderOpen,
} from '@/components/Icons';

const valores = [
  'Ética',
  'Respeto',
  'Innovación',
  'Calidad',
  'Actitud de servicio',
  'Sentido de pertenencia',
];

export default function About() {
  return (
    <>
      <section className="relative">
        <Image
          src={ImageAbout}
          alt="Picture of the author"
          fill={true}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-r from-black/40 to-black/40"></div>
        <div className="relative py-20 px-8 xl:px-36 xl:py-28">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Sobre nosotros
            </h1>
            <p className="mt-6 text-base tracking-tight text-white text-justify">
              Somos líder en la implementación de software propio y de terceros
              en Honduras y Centroamérica. Ofrecemos servicios de consultoría y
              asesoría en informática para organizaciones complejas y contamos
              con un equipo altamente especializado. Somos expertos en
              desarrollo, implementación y capacitación de software para
              diferentes sectores. Nuestro compromiso es optimizar el potencial
              de nuestros clientes implementando soluciones en tiempo y forma.
            </p>
          </div>
        </div>
      </section>
      <div className="py-6 px-8 xl:px-36 xl:py-10 flex flex-col gap-16">
        {/* historia */}
        <section>
          <h2 className="text-2xl font-semibold md:text:3xl mb-3">
            Nuestra historia
          </h2>
          <p className="text-base text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
            dolor dignissimos nulla ex totam ea qui quas rem labore. Modi dolore
            suscipit nobis eos accusamus reprehenderit rerum repellat, cum
            doloribus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Officia totam explicabo ab ut minima, ipsam dolores, cumque dolorem
            corrupti eum quibusdam dignissimos deleniti? Earum facere
            reprehenderit impedit, quod quam ipsam? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Libero quam placeat molestiae
            recusandae esse. Id dolor omnis quasi labore reiciendis. Cum,
            pariatur? Ea numquam ratione nesciunt sed totam deserunt. Harum!
          </p>
        </section>

        {/* stats */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:px-0 lg:grid-cols-4 xl:gap-x-12">
          {/*  */}
          <div className="overflow-hidden bg-white border border-gray-200 rounded-lg">
            <div className="px-4 py-6">
              <div className="flex items-start">
                <IconFolderOpen className="flex-shrink-0 w-10 h-10 -mt-1 text-primary" />
                <div className="ml-4">
                  <h4 className="text-base font-bold text-gray-900">+400</h4>
                  <p className="mt-1 text-sm font-medium leading-tight text-gray-500">
                    Proyectos
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="overflow-hidden bg-white border border-gray-200 rounded-lg">
            <div className="px-4 py-6">
              <div className="flex items-start">
                <IconUsers className="flex-shrink-0 w-10 h-10 -mt-1 text-primary" />
                <div className="ml-4">
                  <h4 className="text-base font-bold text-gray-900">+100</h4>
                  <p className="mt-1 text-sm font-medium leading-tight text-gray-500">
                    Clientes
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="overflow-hidden bg-white border border-gray-200 rounded-lg">
            <div className="px-4 py-6">
              <div className="flex items-start">
                <IconStart className="flex-shrink-0 w-10 h-10 -mt-1 text-primary" />
                <div className="ml-4">
                  <h4 className="text-base font-bold text-gray-900">
                    +28 años
                  </h4>
                  <p className="mt-1 text-sm font-medium leading-tight text-gray-500">
                    Experiencia
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="overflow-hidden bg-white border border-gray-200 rounded-lg">
            <div className="px-4 py-6">
              <div className="flex items-start">
                <IconBriefcase className="flex-shrink-0 w-10 h-10 -mt-1 text-primary" />
                <div className="ml-4">
                  <h4 className="text-base font-bold text-gray-900">
                    +37 partners
                  </h4>
                  <p className="mt-1 text-sm font-medium leading-tight text-gray-500">
                    A nivel mundial
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* mision y vision */}
        <section className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* mision */}
          <article>
            <header className="rounded-lg h-64 overflow-hidden">
              <Image
                alt="content"
                className="object-cover object-center h-full w-full"
                src={ImgMision}
              />
            </header>
            <footer>
              <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">
                Misión
              </h2>
              <p className="leading-relaxed text-base text-justify">
                Proveer productos y servicios con tecnología de punta,
                utilizando metodologías y estándares de clase mundial,
                respaldados por profesionales certificados para brindar un
                servicio eficiente, que garantice la inversión de nuestros
                clientes, así como la rentabilidad y crecimiento permanentes de
                nuestra empresa.
              </p>
            </footer>
          </article>

          {/* vision */}
          <article>
            <header className="rounded-lg h-64 overflow-hidden">
              <Image
                alt="content"
                className="object-cover object-center h-full w-full"
                src={ImgVision}
              />
            </header>
            <footer>
              <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">
                Visión
              </h2>
              <p className="leading-relaxed text-base text-justify">
                Ser para el 2025 el grupo líder en gestión, consultoría,
                desarrollo e integración de soluciones de arquitectura
                informática empresarial, para satisfacer las necesidades de
                nuestros clientes y contribuir al desarrollo de la región
                centroamericana.
              </p>
            </footer>
          </article>
        </section>

        {/* valores */}
        <section className="flex flex-col gap-4 md:flex-row ">
          <div>
            <div className="w-full mb-5">
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                Valores
              </h2>
              <div className="leading-relaxed text-justify w-full sm:pr-2">
                Creemos que estos valores son fundamentales para crear una
                cultura empresarial sólida y sostenible, y nos comprometemos a
                mantenerlos en todo lo que hacemos.
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {valores.map((valor) => {
                return (
                  <div
                    className="w-full py-2 pr-2"
                    key={valor}
                  >
                    <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                      </svg>
                      <span className="title-font font-medium">{valor}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-full rounded-lg overflow-hidden sm:max-w-2/3">
            <Image
              className="object-cover object-center w-full h-full"
              src={ImgValores}
              alt="stats"
            />
          </div>
        </section>
      </div>
    </>
  );
}
