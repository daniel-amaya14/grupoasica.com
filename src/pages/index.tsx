import React from 'react';
import Hero from '@/components/Home/Hero';
import Services from '@/components/Home/Services';
import About from '@/components/Home/About';
import Partners from '@/components/Home/Partners';
import Certificados from '@/components/Home/Certificados';
import Capacitaciones from '@/components/Home/Capacitaciones';
import Cursos from '@/components/Home/Cursos';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Cursos />
      <div className="max-w-7xl px-4 py-10 mx-auto sm:px-6 lg:px-8 lg:py-14">
        <h2 className="text-4xl font-bold leading-tight mb-6">Certifícate</h2>
        <Certificados />
      </div>
      <Capacitaciones />
      <Partners />
    </>
  );
}
