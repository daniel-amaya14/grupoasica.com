import React, { useEffect } from 'react';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import RootLayout from '@/layout/RootLayout';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // @ts-ignore
    import('preline');
  }, []);

  return (
    <div>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </div>
  );
}
