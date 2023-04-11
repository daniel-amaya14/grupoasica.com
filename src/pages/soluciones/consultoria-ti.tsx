import React from 'react';
import LayoutSoluciones from '@/layout/LayoutSoluciones';
import ImageBanner from '@/public/images/soluciones/consultoria-ti.webp';
import Container from '@/components/Elements/Container';

const LayoutSolucionesProps = {
  bannerTitlte: 'Consultoría TI',
  imageUrl: ImageBanner,
};

export default function ConsultoriTI() {
  return (
    <LayoutSoluciones {...LayoutSolucionesProps}>
      <Container>
        <h2 className="text-xl font-semibold">Consultoría TI</h2>
      </Container>
    </LayoutSoluciones>
  );
}
