import React from 'react';
import LayoutSoluciones from '@/layout/LayoutSoluciones';
import ImageBanner from '@/public/images/soluciones/proteccion-activos.webp';
import Container from '@/components/Elements/Container';

const LayoutSolucionesProps = {
  bannerTitlte: 'Protección de Activos',
  imageUrl: ImageBanner,
};

export default function ProteccionActivos() {
  return (
    <LayoutSoluciones {...LayoutSolucionesProps}>
      <Container>
        <h2 className="text-xl font-semibold">Proteccion de Activos</h2>
      </Container>
    </LayoutSoluciones>
  );
}
