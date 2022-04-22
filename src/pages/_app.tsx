import React from 'react';
import { AppProps } from 'next/app';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { GlobalStyles } from '../styles/GlobalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <GlobalStyles />
    </>
  );
}

export default MyApp;
