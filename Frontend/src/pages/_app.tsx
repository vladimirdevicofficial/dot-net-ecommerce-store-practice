import { useEffect } from 'react';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';

import Layout from '@components/__Layout';
import StoreProvider from '@store/Provider';
import Globals from '@styles/Globals';
import { log } from '@utils/Console/log';
import { createEmotionSsrAdvancedApproach } from 'tss-react/next';

const {
  augmentDocumentWithEmotionCache,
  withAppEmotionCache,
} = createEmotionSsrAdvancedApproach({ key: 'tss' });

export { augmentDocumentWithEmotionCache };

function App({
  Component,
  pageProps,
}: AppProps) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            log('Service Worker registration successful with scope: ', '', registration.scope);
          }, (err) => {
            log('Service Worker registration failed: ', '', err);
          });
      });
    }
  }, []);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0"
        />
        <title />
      </Head>
      <Globals />
      <StoreProvider {...pageProps.initialZustandState}>
        <ThemeProvider enableSystem={false}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </StoreProvider>
    </>
  );
}

export default withAppEmotionCache(App);


