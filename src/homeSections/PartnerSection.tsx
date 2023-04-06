import React from 'react';
import Link from 'next/link';
import PartnersList from '@/components/PartnersList';

export default function PartnerSection() {
  return (
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
                nos ayudan a ofrecer soluciones integrales a nuestros clientes.
                Si quieres ser parte de nuestra red de colaboradores,
                contáctanos.
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
          <PartnersList />
        </div>
      </div>
    </section>
  );
}
