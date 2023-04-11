import React from 'react';
import LayoutSoluciones from '@/layout/LayoutSoluciones';
import ImageBanner from '@/public/images/soluciones/inventario-farmacia.webp';
import Container from '@/components/Elements/Container';

const LayoutSolucionesProps = {
  bannerTitlte: 'Inventario de Farmacia',
  imageUrl: ImageBanner,
};

export default function InventarioFarmacia() {
  return (
    <LayoutSoluciones {...LayoutSolucionesProps}>
      <Container>
        <h2 className="text-xl font-semibold">Inventario de Farmacia</h2>
      </Container>
    </LayoutSoluciones>
  );
}
