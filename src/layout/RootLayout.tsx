import React from 'react';
import Header from '@/layout/Header';
import BannerHeader from '@/components/BannerHeader';
import Footer from '@/layout/Footer';

interface RootLayoutProps {
  children: React.ReactNode;
  withBanner?: Boolean;
}

export default function RootLayout({
  children,
  withBanner = false,
}: RootLayoutProps) {
  return (
    <>
      {withBanner ? (
        <Header>
          <BannerHeader />
        </Header>
      ) : (
        <Header />
      )}
      <main className="pt-14">{children}</main>
      <Footer />
    </>
  );
}
