import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" />
          <link rel="stylesheet" href="/static/reset.css" />
          <link rel="stylesheet" href="/static/global.css" />
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
