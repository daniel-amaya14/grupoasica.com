import { Html, Head, Main, NextScript } from 'next/document';
import Favicon from '@/components/Meta/Favicon';
import Metadatos from '@/components/Meta/Metadatos';

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <Metadatos />
        <Favicon />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
