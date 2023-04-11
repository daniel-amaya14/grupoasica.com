import React from 'react';
import LayoutSoluciones from '@/layout/LayoutSoluciones';
import ImageBanner from '@/public/images/soluciones/entrenamiento.jpg';
import Container from '@/components/Elements/Container';

const LayoutSolucionesProps = {
  bannerTitlte: 'Entrenamiento',
  imageUrl: ImageBanner,
};

export default function Entrenamiento() {
  return (
    <LayoutSoluciones {...LayoutSolucionesProps}>
      <Container>
        <h2 className="text-xl font-semibold">Entrenamiento</h2>
      </Container>
    </LayoutSoluciones>
  );
}
