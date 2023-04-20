import React from 'react';
import HeroSoluciones, {
  HeroSolucionesProps,
} from '@/components/HeroSoluciones';

interface LayoutSolucionesProps extends HeroSolucionesProps {
  children: React.ReactNode;
}

export default function LayoutSoluciones({
  bannerTitlte,
  children,
  imageUrl,
}: LayoutSolucionesProps) {
  return (
    <>
      <HeroSoluciones
        bannerTitlte={bannerTitlte}
        imageUrl={imageUrl}
      />
      {children}
    </>
  );
}
