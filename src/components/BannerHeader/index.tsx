import React from 'react';
import ImgHero from '@/public/images/hero.jpg';
import Image from 'next/image';

export default function BannerHeader() {
  return (
    <div className="relative ">
      {/* titulo */}
      <div className="w-full text-center absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:top-1/2 xl:top-[40%]">
        <h1 className="text-white uppercase text-xl font-semibold drop-shadow-4xl md:text-4xl xl:text-5xl">
          <span className="text-[#00D1FF] font-bold ">
            Desarrollamos soluciones
          </span>{' '}
          <br />a la medida desde 1994
        </h1>
      </div>

      {/* hero - img */}
      <Image
        src={ImgHero}
        loading="lazy"
        alt=""
        className="object-cover w-full h-full"
      />

      {/* svg */}
      <div className="text-primary w-full absolute bottom-[-2px]">
        <svg
          viewBox="0 0 1440 79"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-38 79C265.2 -26.3333 720 -26.3333 1478 79H-38Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
}
