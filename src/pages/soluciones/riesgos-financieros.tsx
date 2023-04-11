import React from 'react';
import LayoutSoluciones from '@/layout/LayoutSoluciones';
import ImageBanner from '@/public/images/soluciones/riesgos-financieros.jpg';
import Container from '@/components/Elements/Container';

const LayoutSolucionesProps = {
  bannerTitlte: 'Riesgos Financieros',
  imageUrl: ImageBanner,
};

export default function RiesgosFinancieros() {
  return (
    <LayoutSoluciones {...LayoutSolucionesProps}>
      <Container>
        <h2 className="text-xl font-semibold">Riesgos Financieros</h2>
      </Container>
    </LayoutSoluciones>
  );
}
