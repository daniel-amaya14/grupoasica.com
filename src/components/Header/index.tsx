import React from 'react';
import Navbar from '@/components/Navbar';

interface HeaderProps {
  children?: React.ReactNode;
  isHome?: Boolean;
}

export default function Header({ children, isHome = false }: HeaderProps) {
  return (
    <>
      <header
        className={`${
          isHome ? 'xl:h-screen h-[30rem]' : 'mb-24'
        } flex flex-col justify-center relative`}
      >
        {/* navegación */}
        <Navbar />

        {children}
      </header>
    </>
  );
}
