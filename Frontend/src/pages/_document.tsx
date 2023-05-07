// -----> React
import { ReactNode } from 'react';

// -----> Next
import Document, {
  DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript,
} from 'next/document';

import { augmentDocumentWithEmotionCache } from '@pages/_app';
import { I18nProvider, useLocale } from '@react-aria/i18n';
import { SSRProvider } from '@react-aria/ssr';

// -----> Styles

/**
 * Document
 * Support hooks usage for Document
 * @returns Default Document structure
 */
function CustomDocument() {
  const { locale, direction } = useLocale();

  return (

  // Prettier-ignore
    <Html lang={locale} dir={direction}>
      <Head>
        {/* CSP - Content Security Policy */}
        {/* <meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src https://*; child-src 'none';" /> */}
        {/* Progressive Web App */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <link rel="manifest" href="/icons/manifest.json"/>
        <meta name="application-name" content={process.env.APP_NAME}/>
        <meta name="apple-mobile-web-app-capable" content="yes"/>
        <meta name="apple-mobile-web-app-status-bar-style" content="default"/>
        <meta name="apple-mobile-web-app-title" content={process.env.APP_NAME}/>
        <meta name="description" content={process.env.APP_DESCRIPTION}/>
        <meta name="format-detection" content="telephone=no"/>
        <meta name="mobile-web-app-capable" content="yes"/>
        <meta name="msapplication-config" content="/icons/browserconfig.xml"/>
        <meta name="msapplication-TileColor" content="#2B5797"/>
        <meta name="msapplication-tap-highlight" content="no"/>
        <meta name="theme-color" content="#000000"/>
        {/* Web Fonts into the Document are automatically optimized */}
        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" sizes="57x57" href="/icons/apple-touch-icon-57x57.png"/>
        <link rel="apple-touch-icon" sizes="60x60" href="/icons/apple-touch-icon-60x60.png"/>
        <link rel="apple-touch-icon" sizes="72x72" href="/icons/apple-touch-icon-72x72.png"/>
        <link rel="apple-touch-icon" sizes="76x76" href="/icons/apple-touch-icon-76x76.png"/>
        <link rel="apple-touch-icon" sizes="114x114" href="/icons/apple-touch-icon-114x114.png"/>
        <link rel="apple-touch-icon" sizes="120x120" href="/icons/apple-touch-icon-120x120.png"/>
        <link rel="apple-touch-icon" sizes="144x144" href="/icons/apple-touch-icon-144x144.png"/>
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-touch-icon-152x152.png"/>
        <link rel="apple-touch-icon" sizes="167x167" href="/icons/apple-touch-icon-167x167.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon-180x180.png"/>
        <link rel="apple-touch-icon" sizes="1024x1024" href="/icons/apple-touch-icon-1024x1024.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon-precomposed.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png"/>
        {/* Favicons */}
        <link rel="shortcut icon" href="/icons/favicon.ico"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="48x48" href="/icons/favicon-48x48.png"/>
        {/* Apple Splash Screen Startup Images */}
        <link rel="apple-touch-startup-image" href="/icons/apple-touch-startup-image-640x1136.png"
          sizes="640x1136"
          media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"/>
        <link rel="apple-touch-startup-image" href="/icons/apple-touch-startup-image-1136x640.png"
          sizes="1136x640"
          media="(device-width: 568px) and (device-height: 320px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"/>
        <link rel="apple-touch-startup-image" href="/icons/apple-touch-startup-image-750x1334.png"
          sizes="750x1334"
          media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"/>
        <link rel="apple-touch-startup-image" href="/icons/apple-touch-startup-image-1334x750.png"
          sizes="1334x750"
          media="(device-width: 667px) and (device-height: 375px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"/>
        <link rel="apple-touch-startup-image" href="/icons/apple-touch-startup-image-1242x2208.png"
          sizes="1242x2208"
          media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"/>
        <link rel="apple-touch-startup-image" href="/icons/apple-touch-startup-image-2208x1242.png"
          sizes="2208x1242"
          media="(device-width: 736px) and (device-height: 414px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"/>
        <link rel="apple-touch-startup-image" href="/icons/apple-touch-startup-image-1536x2048.png"
          sizes="1536x2048"
          media="(min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)"/>
        <link rel="apple-touch-startup-image" href="/icons/apple-touch-startup-image-2048x1536.png"
          sizes="2048x1536"
          media="(min-device-width: 1024px) and (max-device-width: 768px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape)"/>
        <link rel="apple-touch-startup-image" href="/icons/apple-touch-startup-image-1668x2224.png"
          sizes="1668x2224"
          media="(min-device-width: 834px) and (max-device-width: 834px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)"/>
        <link rel="apple-touch-startup-image" href="/icons/apple-touch-startup-image-2224x1668.png"
          sizes="2224x1668"
          media="(min-device-width: 834px) and (max-device-width: 834px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape)"/>
        <link rel="apple-touch-startup-image" href="/icons/apple-touch-startup-image-2048x2732.png"
          sizes="2048x2732"
          media="(min-device-width: 1024px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)"/>
        <link rel="apple-touch-startup-image" href="/icons/apple-touch-startup-image-2732x2048.png"
          sizes="2732x2048"
          media="(min-device-width: 1024px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape)"/>
      </Head>
      <body>
        <Main/>
        <NextScript/>
      </body>
    </Html>
  );
}

/**
 * I18nProvider
 * Enhance App with I18n SSR Support for all
 * children components
 */
interface I18nProviderIProps {
  children: ReactNode
}

function CustomI18nProvider({ children }: I18nProviderIProps) {
  const { locale } = useLocale();

  return (
    <SSRProvider>
      <I18nProvider locale={locale}>{children}</I18nProvider>
    </SSRProvider>
  );
}

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () => {
      return originalRenderPage({

        // Useful for wrapping the whole react tree
        enhanceApp: (App) => {
          return (props) => {
            return (
              <CustomI18nProvider>
                <App {...props} />
              </CustomI18nProvider>
            );
          };
        },

        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => {
          return Component;
        },
      });
    };

    const initialProps = await Document.getInitialProps(ctx);


    // Append SSR Stylesheets
    return { ...initialProps };
  }

  render() {
    return <CustomDocument/>;
  }
}

augmentDocumentWithEmotionCache(MyDocument);

export default MyDocument;
