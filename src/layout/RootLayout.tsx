import React from 'react';
import Header from '@/layout/Header';
import Footer from '@/layout/Footer';
import Head from 'next/head';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <Head>
        <title>Grupo ASICA</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
