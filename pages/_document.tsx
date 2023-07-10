import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="See pictures my pictures"
          />
          <meta property="og:site_name" content="photography.tomasps.tk" />
          <meta
            property="og:description"
            content="See pictures my pictures"
          />
          <meta property="og:title" content="TomasPS Pictures" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="TomasPS Pictures" />
          <meta
            name="twitter:description"
            content="See my pictures without downloading them"
          />
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
