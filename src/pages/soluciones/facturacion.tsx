import React from 'react';
import LayoutSoluciones from '@/layout/LayoutSoluciones';
import ImageBanner from '@/public/images/soluciones/facturacion.jpg';
import Container from '@/components/Elements/Container';

const LayoutSolucionesProps = {
  bannerTitlte: 'Facturación',
  imageUrl: ImageBanner,
};

export default function Facturacion() {
  return (
    <LayoutSoluciones {...LayoutSolucionesProps}>
      <Container>
        <h2 className="text-xl font-semibold">Facturación</h2>
      </Container>
    </LayoutSoluciones>
  );
}
