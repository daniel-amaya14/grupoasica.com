import React from 'react';
import LayoutSoluciones from '@/layout/LayoutSoluciones';
import ImageBanner from '@/public/images/soluciones/inteligencia-artificial.jpg';
import Container from '@/components/Elements/Container';

const LayoutSolucionesProps = {
  bannerTitlte: 'Inteligencia Artificial',
  imageUrl: ImageBanner,
};

export default function InteligenciaArtificial() {
  return (
    <LayoutSoluciones {...LayoutSolucionesProps}>
      <Container>
        <h2 className="text-xl font-semibold">Inteligencia Artificial</h2>
      </Container>
    </LayoutSoluciones>
  );
}
