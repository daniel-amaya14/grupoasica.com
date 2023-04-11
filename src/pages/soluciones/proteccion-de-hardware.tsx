import React from 'react';
import LayoutSoluciones from '@/layout/LayoutSoluciones';
import ImageBanner from '@/public/images/soluciones/hardware.webp';
import Container from '@/components/Elements/Container';

const LayoutSolucionesProps = {
  bannerTitlte: 'Protección de Hardware',
  imageUrl: ImageBanner,
};

export default function ProteccionHardware() {
  return (
    <LayoutSoluciones {...LayoutSolucionesProps}>
      <Container>
        <h2 className="text-xl font-semibold">Protección de Hardware</h2>
      </Container>
    </LayoutSoluciones>
  );
}
