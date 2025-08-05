import { NextComponentType } from 'next';
import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';
import { NextRouter, withRouter } from "next/router";
import Script from 'next/script';


interface WithRouterProps {
    router: NextRouter
}

interface DocumentProps extends WithRouterProps {}

class MyDocument extends Document<DocumentProps> {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)

        return { ...initialProps, locale: ctx?.locale }
    }

    render() {
        const locale = this.props.locale;
        const dir = locale === "ar" ? "rtl" : "ltr";
        
        
        return (
          <Html dir={dir} lang={locale}>
            <Head>
                <meta charSet="utf-8" />
                <meta name="format-detection" content="telephone=no"></meta>

                <title>A El Kaimouni</title>
                <meta name="description" content="Hi there! I'm El Kaimouni Abderrahmane, a dedicated Software Engineer and Data Scientist student passionate about crafting innovative solutions. Specializing in Web Development, skilled in both frontend and backend, I excel in DevOps practices, I'm proficient in deploying projects on various hosting environments, including VPS and cloud services, I bring a wealth of technical expertise to the table." />

                <link rel="icon" href="/favicon.png" />
            </Head>
            <body>
                <Main />
                <NextScript />

            </body>
          </Html>
        )
      }
}

export default withRouter(MyDocument as NextComponentType<DocumentContext, any, any>);
