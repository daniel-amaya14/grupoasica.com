import React from 'react';
import Hero from '@/components/BannerHeader/Hero';
import ServiciosSection from '@/homeSections/ServiciosSection';
import AboutSection from '@/homeSections/AboutSection';
import CertificationSection from '@/homeSections/CertificationSection';
import TrainingSection from '@/homeSections/TrainingSection';
import CredentialsSection from '@/homeSections/CredentialsSection';
import PartnerSection from '@/homeSections/PartnerSection';

export default function Home() {
  return (
    <>
      {/* banner */}
      <Hero />

      {/* quién eres */}
      <ServiciosSection />

      {/* sobre nosotros */}
      <AboutSection />

      {/* certificate con nosotros */}
      <CertificationSection />

      {/* capacitate con nosotros */}
      <TrainingSection />

      {/* nuestras credenciales */}
      <CredentialsSection />

      {/* partners */}
      <PartnerSection />
    </>
  );
}
