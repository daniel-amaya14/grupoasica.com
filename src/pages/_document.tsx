import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html
      lang="es"
      className="scroll-smooth"
    >
      <Head />
      <body className="text-justify">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
