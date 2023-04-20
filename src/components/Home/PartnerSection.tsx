import React from 'react';
import Link from 'next/link';
import PartnersList from '@/components/PartnersList';

export default function PartnerSection() {
  return (
    <section>
      <div className="items-center">
        <div className="lg:items-center lg:gap-8 lg:grid lg:grid-cols-2">
          <div className="max-w-xl mb-14 lg:mb-0">
            <div className="">
              <h2 className="text-3xl font-bold xl:text-4xl mb-5">
                Nuestros partners
              </h2>
              <p className="max-w-xl text-base tracking-tight mb-10 text-gray-600 text-justify">
                Contamos con la mejor red de colaboradores. Nuestros partners
                nos ayudan a ofrecer soluciones integrales a nuestros clientes.
                Si quieres ser parte de nuestra red de colaboradores,
                contáctanos.
              </p>
              <div className="">
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
