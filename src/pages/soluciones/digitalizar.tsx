import React from 'react';
import LayoutSoluciones from '@/layout/LayoutSoluciones';
import ImageBanner from '@/public/images/soluciones/digitalizar.jpg';
import Container from '@/components/Elements/Container';

const LayoutSolucionesProps = {
  bannerTitlte: 'Digitalizar',
  imageUrl: ImageBanner,
};

export default function Digitalizar() {
  return (
    <LayoutSoluciones {...LayoutSolucionesProps}>
      <Container>
        <h2 className="text-xl font-semibold">Digitalizar</h2>
      </Container>
    </LayoutSoluciones>
  );
}
