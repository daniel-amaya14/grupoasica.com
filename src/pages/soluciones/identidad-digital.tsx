import React from 'react';
import LayoutSoluciones from '@/layout/LayoutSoluciones';
import ImageBanner from '@/public/images/soluciones/identidad-digital.jpg';
import Container from '@/components/Elements/Container';

const LayoutSolucionesProps = {
  bannerTitlte: 'Identidad Digital',
  imageUrl: ImageBanner,
};

export default function IdentidadDigital() {
  return (
    <LayoutSoluciones {...LayoutSolucionesProps}>
      <Container>
        <h2 className="text-xl font-semibold">Identidad Digital</h2>
      </Container>
    </LayoutSoluciones>
  );
}
