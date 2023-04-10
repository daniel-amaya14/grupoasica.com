import React from 'react';
import Link from 'next/link';

interface BannerServiciosProps {
  title?: string;
  description?: string;
  href?: string;
}

export default function BannerServicios({
  title,
  description,
  href,
}: BannerServiciosProps) {
  return (
    <div className="px-6 py-6 bg-purple-700 dark:bg-gray-800 md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
      <div className="xl:w-0 xl:flex-1">
        <h2 className="text-2xl font-extrabold leading-8 tracking-tight text-white sm:text-3xl sm:leading-9">
          {title ? title : '¿Deseas contratar nuestros servicios?'}
        </h2>
        <p className="max-w-3xl mt-3 text-lg leading-6 text-indigo-200">
          {description
            ? description
            : 'Rellena nuestro formulario para contratar un servicio específico o personalizado y nos pondremos en contacto contigo a la brevedad posible.'}
        </p>
      </div>
      <div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
        <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
          <Link
            href={href ? href : '/servicios/formulario'}
            className="flex items-center justify-center w-full px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-purple-500 border border-transparent rounded-md hover:bg-purple-400 focus:outline-none focus:bg-purple-400"
          >
            Haz clic aquí
          </Link>
        </div>
      </div>
    </div>
  );
}
