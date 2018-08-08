import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'
import config from '../../config'

function ProgressiveHeader() {
  if (config.server.progressive)
    return (
      <Head>
        <link rel="manifest" href="manifest.json"/>
        <title>Elizabeth Yount UX|UI</title>

        <meta name="mobile-web-app-capable" content="yes"/>
        <meta name="apple-mobile-web-app-capable" content="yes"/>
        <meta name="application-name" content="MA"/>
        <meta name="apple-mobile-web-app-title" content="MA"/>
        <meta name="theme-color" content="#FFF"/>
        <meta name="msapplication-navbutton-color" content="#FFF"/>
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
        <meta name="msapplication-starturl" content="/"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

        <link rel="icon" href="homescreen.jpg"/>
        <link rel="apple-touch-icon" href="homescreen.jpg"/>
      </Head>
    );

  else
    return (
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
      </Head>
    );
}

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }

  render() {
    return (
      <html>
        <ProgressiveHeader/>
        <body>
          {this.props.customValue}
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
