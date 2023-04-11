import React from 'react';
import HeroServicios from '@/components/HeroServicios';
import { HeroServiciosProps } from '@/components/HeroServicios';

interface LayoutSolucionesProps extends HeroServiciosProps {
  children: React.ReactNode;
}

export default function LayoutSoluciones({
  bannerTitlte,
  children,
  imageUrl,
}: LayoutSolucionesProps) {
  return (
    <>
      <HeroServicios
        bannerTitlte={bannerTitlte}
        imageUrl={imageUrl}
      />
      {children}
    </>
  );
}
