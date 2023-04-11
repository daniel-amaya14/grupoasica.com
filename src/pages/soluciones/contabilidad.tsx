import React from 'react';
import LayoutSoluciones from '@/layout/LayoutSoluciones';
import ImageBanner from '@/public/images/soluciones/contabilidad.jpg';
import Container from '@/components/Elements/Container';

const LayoutSolucionesProps = {
  bannerTitlte: 'Contabilidad',
  imageUrl: ImageBanner,
};

export default function Contabilidad() {
  return (
    <LayoutSoluciones {...LayoutSolucionesProps}>
      <Container>
        <h2 className="text-xl font-semibold">Contabilidad</h2>
      </Container>
    </LayoutSoluciones>
  );
}
