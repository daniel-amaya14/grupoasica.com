import React from 'react';
import LayoutSoluciones from '@/layout/LayoutSoluciones';
import ImageBanner from '@/public/images/soluciones/edr.webp';
import Container from '@/components/Elements/Container';

const LayoutSolucionesProps = {
  bannerTitlte: 'Endpoint Detection and Response',
  imageUrl: ImageBanner,
};

export default function Edr() {
  return (
    <LayoutSoluciones {...LayoutSolucionesProps}>
      <Container>
        <h2 className="text-xl font-semibold">
          Endpoint Detection and Response
        </h2>
      </Container>
    </LayoutSoluciones>
  );
}
