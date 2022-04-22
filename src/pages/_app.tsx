import React from 'react';
import { AppProps } from 'next/app';

import { GlobalStyles } from '../styles/GlobalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  );
}

export default MyApp;
