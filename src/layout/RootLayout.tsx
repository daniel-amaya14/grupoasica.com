import React from 'react';
import Header from '@/components/Header';
import BannerHeader from '@/components/BannerHeader';
import Footer from '@/components/Footer';

interface RootLayoutProps {
  children: React.ReactNode;
  withBanner?: Boolean;
}

export default function RootLayout({
  children,
  withBanner = false,
}: RootLayoutProps) {
  console.log(withBanner);
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
