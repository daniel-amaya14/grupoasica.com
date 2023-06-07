import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ImgBugBountryHuntre from '@/public/images/cursos/bug-bounty-hunter.svg';
import ImgPenetrationTestingSpecialist from '@/public/images/cursos/penetration-testing-specialist.png';

const itemsCertificados = [
  {
    title: 'Certificado de Bug Bounty Hunter',
    description:
      'Es una certificación muy práctica que evalúa las habilidades de los candidatos para la caza de bugs y el pentesting de aplicaciones web.',
    image: ImgBugBountryHuntre,
    href: '/cursos',
  },
  {
    title: 'Certificado de Penetration Testing Specialist',
    description:
      'Es una certificación muy práctica que evalúa las habilidades de pruebas de penetración de los candidatos.',
    image: ImgPenetrationTestingSpecialist,
    href: '/cursos',
  },
];

export default function Certificados() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {itemsCertificados.map(({ title, description, image, href }) => {
        return (
          <Link
            href={href}
            key={title}
            className="group"
          >
            <div
              className="group h-full flex flex-col rounded-lg border bg-white shadow-sm transition  lg:flex-row hover:shadow-lg"
              key={title}
            >
              <Image
                className="w-full h-64 bg-gray-100 rounded-t-lg object-cover lg:h-auto lg:w-48 lg:rounded-none lg:rounded-l-lg"
                src={image}
                alt=""
              />
              <div className="flex flex-col justify-start p-6">
                <div className="flex gap-2 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-bookmark"
                    width={24}
                    height={24}
                    strokeWidth="1.5"
                    stroke="#2c3e50"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="currentColor"
                      d="M248 128a56 56 0 1 0-96 39.14V224a8 8 0 0 0 11.58 7.16L192 216.94l28.42 14.22A8 8 0 0 0 232 224v-56.86A55.81 55.81 0 0 0 248 128Zm-56-40a40 40 0 1 1-40 40a40 40 0 0 1 40-40Zm3.58 112.84a8 8 0 0 0-7.16 0L168 211.06v-32.47a55.94 55.94 0 0 0 48 0v32.47ZM136 192a8 8 0 0 1-8 8H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16a8 8 0 0 1-16 0H40v128h88a8 8 0 0 1 8 8Zm-16-56a8 8 0 0 1-8 8H72a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8Zm0-32a8 8 0 0 1-8 8H72a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8Z"
                    />
                  </svg>
                  <h3 className="text-lg font-medium leading-tight text-neutral-800">
                    {title}
                  </h3>
                </div>
                <p className="mb-4 text-sm text-neutral-600">{description}</p>
                <span className="flex items-center gap-1 text-xs font-semibold text-neutral-500 mt-auto transition-all group-hover:text-blue-500">
                  Ver más
                  <svg
                    className="w-2.5 h-auto transition-transform duration-500 ease-in-out group-hover:translate-x-1"
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1 7C0.447715 7 -3.73832e-07 7.44771 -3.49691e-07 8C-3.2555e-07 8.55228 0.447715 9 1 9L13.0858 9L7.79289 14.2929C7.40237 14.6834 7.40237 15.3166 7.79289 15.7071C8.18342 16.0976 8.81658 16.0976 9.20711 15.7071L16.0303 8.88388C16.5185 8.39573 16.5185 7.60427 16.0303 7.11612L9.20711 0.292893C8.81658 -0.0976318 8.18342 -0.0976318 7.79289 0.292893C7.40237 0.683417 7.40237 1.31658 7.79289 1.70711L13.0858 7L1 7Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
