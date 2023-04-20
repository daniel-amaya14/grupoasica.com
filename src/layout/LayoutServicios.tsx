import React from 'react';
import BannerInfoServicios from '@/components/BannerInfoServicios';
interface LayoutServiciosProps {
  children: React.ReactNode;
}

export default function LayoutServicios({ children }: LayoutServiciosProps) {
  return (
    <>
      {children}
      <BannerInfoServicios />
    </>
  );
}
