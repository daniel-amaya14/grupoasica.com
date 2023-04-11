import React from 'react';
import LayoutSoluciones from '@/layout/LayoutSoluciones';
import ImageBanner from '@/public/images/soluciones/automatizacion.webp';
import Container from '@/components/Elements/Container';

const LayoutSolucionesProps = {
  bannerTitlte: 'Automatización',
  imageUrl: ImageBanner,
};

export default function Automatizacion() {
  return (
    <LayoutSoluciones {...LayoutSolucionesProps}>
      <Container>
        <h2 className="text-xl font-semibold">Automatizacion</h2>
      </Container>
    </LayoutSoluciones>
  );
}
