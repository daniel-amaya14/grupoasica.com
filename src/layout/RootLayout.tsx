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
        <link
          rel="shortcut icon"
          href="./favicon.ico"
          type="image/x-icon"
        />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
