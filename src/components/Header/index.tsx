import React from 'react';
import Navbar from '@/components/Navbar';
import ImgHero from '@/public/images/hero.jpg';
import Image from 'next/image';

export default function Header() {
  return (
    <>
      <header className="h-[30rem] flex flex-col justify-center relative xl:h-screen">
        {/* navegación */}
        <Navbar />

        {/* titulo */}
        <div className="flex justify-center md:relative md:-top-20">
          <h1 className="text-white uppercase text-xl font-semibold drop-shadow-4xl md:text-5xl">
            <span className="text-[#00D1FF] font-bold ">
              Desarrollamos soluciones
            </span>{' '}
            <br />a la medida desde 1994
          </h1>
        </div>

        {/* hero - img */}
        <Image
          src={ImgHero}
          alt="img-hero"
          fill={true}
          className="object-cover -z-10 md:object-container"
        />

        {/* svg */}
        <div className="text-primary w-full overflow-hidden absolute bottom-[-4px] -z-[1]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="currentColor"
              fillOpacity={1}
              d="M0,192L120,160C240,128,480,64,720,64C960,64,1200,128,1320,160L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            ></path>
          </svg>
        </div>
      </header>
    </>
  );
}
