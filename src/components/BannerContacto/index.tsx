import React from 'react';
import Link from 'next/link';

export default function BannerContacto({
  href = '/contacto',
}: {
  description?: string;
  href?: string;
}) {
  return (
    <div className="max-w-xl text-center mx-auto">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold md:text-3xl md:leading-tight">
          Contactanos
        </h2>
        <p className="text-center tracking-wide max-w-md mx-auto">
          Para obtener más información, da clic en el botón de abajo, y llena la
          información solicitada.
        </p>
      </div>
      <div className="max-w-xs mx-auto mt-5">
        <Link
          className="w-full py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md text-sm border border-transparent font-semibold bg-blue-500 text-white transition-all hover:bg-blue-600 focus:outline-none active:bg-blue-400"
          href={href}
          target="_blank"
        >
          Contacto
        </Link>
      </div>
    </div>
  );
}
