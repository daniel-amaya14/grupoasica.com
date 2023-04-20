import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Poppins } from 'next/font/google';
import RootLayout from '@/layout/RootLayout';

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '900'],
  subsets: ['latin'],
  variable: '--poppins-font',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={poppins.className}>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </div>
  );
}
