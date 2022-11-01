import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link href="http://fonts.cdnfonts.com/css/montserrat" rel="stylesheet" />
      </Head>
      <body id='body' >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}