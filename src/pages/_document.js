import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Slabo+27px&display=swap"
          rel="stylesheet"
        />
      </Head>

      <body className="bg-black p-10">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
