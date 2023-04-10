import React from 'react';
import BannerServicios from '@/components/BannerServicios';

interface LayoutServiciosProps {
  children: React.ReactNode;
}

export default function LayoutServicios({ children }: LayoutServiciosProps) {
  return (
    <>
      {children}
      <BannerServicios />
    </>
  );
}
