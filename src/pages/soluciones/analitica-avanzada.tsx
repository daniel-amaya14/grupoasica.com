import React from 'react';
import LayoutSoluciones from '@/layout/LayoutSoluciones';
import ImageBanner from '@/public/images/soluciones/analitica-avanzada.webp';
import Container from '@/components/Elements/Container';

const LayoutSolucionesProps = {
  bannerTitlte: 'Analítica Avanzada',
  imageUrl: ImageBanner,
};

export default function AnaliticaAvanzada() {
  return (
    <LayoutSoluciones {...LayoutSolucionesProps}>
      <Container>
        <h2 className="text-xl font-semibold">Analítica Avanzada</h2>
      </Container>
    </LayoutSoluciones>
  );
}
