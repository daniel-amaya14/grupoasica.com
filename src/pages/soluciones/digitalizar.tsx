import React from 'react';
import LayoutSoluciones from '@/layout/LayoutSoluciones';
import ImageBanner from '@/public/images/soluciones/digitalizar.webp';

const LayoutSolucionesProps = {
  bannerTitlte: 'Digitalizar',
  imageUrl: ImageBanner,
};

export default function Digitalizar() {
  return (
    <LayoutSoluciones {...LayoutSolucionesProps}>
      <div className="container mx-auto py-8 px-6 md:py-12 md:px-20">
        <h2 className="text-xl font-semibold">Digitalizar</h2>
      </div>
    </LayoutSoluciones>
  );
}
