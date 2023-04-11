import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html
      lang="es"
      className="scroll-smooth"
    >
      <Head />
      <body className="bg-primary">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
