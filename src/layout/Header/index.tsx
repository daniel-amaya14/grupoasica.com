import React from 'react';
import Navbar from '@/layout/Navbar';

interface HeaderProps {
  children?: React.ReactNode;
}

export default function Header({ children }: HeaderProps) {
  return (
    <>
      <header>
        {/* navegación */}
        <Navbar />

        {children}
      </header>
    </>
  );
}
