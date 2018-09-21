import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render () {
    return (
        <html>
            <Head>
                <title>nextjs</title>
                <link rel='stylesheet' href='/_next/static/style.css'/>
                <meta charSet='utf-8' />
                <meta name='viewport' content='initial-scale=1.0, width=device-width' />
                <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/antd/3.9.2/antd.min.css' />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </html>
    )
  }
}
