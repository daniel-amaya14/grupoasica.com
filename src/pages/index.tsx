import React from 'react';
import Hero from '@/components/Home/Hero';
import Services from '@/components/Home/Services';
import About from '@/components/Home/About';
import Partners from '@/components/Home/Partners';
import Certificado from '@/components/Home/Certificado';
import Capacitaciones from '@/components/Home/Capacitaciones';
import Cursos from '@/components/Home/Cursos';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Cursos />
      <Certificado />
      <Capacitaciones />
      <Partners />
    </>
  );
}
