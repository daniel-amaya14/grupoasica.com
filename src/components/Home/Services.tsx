import React from 'react';
import Link from 'next/link';
import {
  IconGovernment,
  IconCorporation,
  IconPymes,
  IconHealthLogo,
  IconStudentGraduate,
  IconBank,
} from '@/components/Icons';

const colors = {
  blue: 'border-blue-50 bg-blue-100 text-blue-600',
  orange: 'border-orange-50 bg-orange-100 text-orange-600',
  green: 'border-green-50 bg-green-100 text-green-600',
  'blue-gray': 'border-blue-gray-50 bg-blue-gray-100 text-blue-gray-600',
  purple: 'border-purple-50 bg-purple-100 text-purple-600',
  teal: 'border-teal-50 bg-teal-100 text-teal-600',
  cyan: 'border-cyan-50 bg-cyan-100 text-cyan-600',
  pink: 'border-pink-50 bg-pink-100 text-pink-600',
};

const listServices = [
  {
    title: 'Gobierno',
    description:
      'Automatiza, inventaría, gestiona presupuestos de activos. Entro otros',
    href: '/servicios/gobierno',
    icon: IconGovernment,
    color: colors.cyan,
  },
  {
    title: 'Corporación',
    description:
      'Soluciones completas para alcanzar objetivos tecnológicos empresariales.',
    href: '/servicios/corporacion',
    icon: IconCorporation,
    color: colors.orange,
  },
  {
    title: 'Pymes',
    href: '/servicios/pymes',
    description:
      'Aumenta ventas, controla inventario, protégete. Descubre soluciones para PYMES.',
    icon: IconPymes,
    color: colors.purple,
  },
  {
    title: 'Banca y Finanzas',
    description:
      'IA moldea el mundo. Grupo ASICA te lleva a la vanguardia financiera.',
    href: '/servicios/banca',
    icon: IconBank,
    color: colors.green,
  },
  {
    title: 'Salud',
    description:
      'Mejora atención médica, genera ingresos. Descubre nuestras soluciones clínicas.',
    href: '/servicios/salud',
    icon: IconHealthLogo,
    color: colors.blue,
  },
  {
    title: 'Estudiante',
    description: 'Grupo ASICA: guía eficiente en el mundo de TI. ¡Únete!',
    href: '/servicios/educacion',
    icon: IconStudentGraduate,
    color: colors.teal,
  },
];

export default function Services() {
  return (
    <section
      className="max-w-7xl px-4 py-10 mx-auto grid gap-8 sm:px-6 md:py-16 lg:px-8 lg:py-[9rem] lg:grid-cols-6 lg:gap-12 scroll-my-12"
      id="servicios"
    >
      <div className="lg:col-span-2">
        <h2 className="text-4xl font-bold leading-tight">¿Quién eres?</h2>
        <p className="text-gray-600 tracking-wide mt-2 md:max-w-xl lg:max-w-2xl">
          Ofrecemos soluciones informáticas y servicios especializados para
          satisfacer las necesidades de nuestros clientes en distintos ámbitos.
        </p>
        <div className="space-x-2">
          <Link
            href="/servicios"
            className="mt-4 inline-block"
          >
            <div className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white text-sm transition-all hover:bg-blue-600 focus:outline-none active:bg-blue-400">
              Más información
            </div>
          </Link>
          <Link
            href="/servicios/formulario"
            className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-blue-500 hover:bg-blue-100 focus:outline-none transition-all text-sm"
          >
            Solicitar servicio
          </Link>
        </div>
      </div>
      <div className="lg:col-span-4">
        <div className="grid items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {listServices.map(({ title, description, href, icon, color }) => {
            return (
              <Link
                href={href}
                key={title}
              >
                <div className="w-full h-[8.375rem] bg-white rounded-lg p-4 transition-all duration-300 border-[1px] border-blue-100 border-opacity-0 hover:shadow-lg hover:border-opacity-100 hover:scale-105 active:border-blue-200 lg:h-[9.625rem]">
                  <div className="flex items-center gap-x-2 mb-3">
                    <div
                      className={`inline-flex justify-center items-center w-12 h-12 aspect-square rounded-full border-4 ${color}`}
                    >
                      {React.createElement(icon, {
                        className: 'w-6 h-6',
                      })}
                    </div>
                    <div className="">
                      <h4 className="block text-base font-semibold text-gray-800">
                        {title}
                      </h4>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{description}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
