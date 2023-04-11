import React from 'react';
import LayoutSoluciones from '@/layout/LayoutSoluciones';
import ImageBanner from '@/public/images/soluciones/ciberseguridad.jpg';
import Container from '@/components/Elements/Container';

const LayoutSolucionesProps = {
  bannerTitlte: 'Ciberseguridad',
  imageUrl: ImageBanner,
};

export default function Ciberseguridad() {
  return (
    <LayoutSoluciones {...LayoutSolucionesProps}>
      <Container>
        <h2 className="text-xl font-semibold">Ciberseguridad</h2>
      </Container>
    </LayoutSoluciones>
  );
}
