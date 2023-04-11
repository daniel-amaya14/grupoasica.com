import React from 'react';
import LayoutSoluciones from '@/layout/LayoutSoluciones';
import ImageBanner from '@/public/images/soluciones/control-pacientes.webp';
import Container from '@/components/Elements/Container';

const LayoutSolucionesProps = {
  bannerTitlte: 'Control de Pacientes',
  imageUrl: ImageBanner,
};

export default function ControlPacientes() {
  return (
    <LayoutSoluciones {...LayoutSolucionesProps}>
      <Container>
        <h2 className="text-xl font-semibold">Control de Pacientes</h2>
      </Container>
    </LayoutSoluciones>
  );
}
