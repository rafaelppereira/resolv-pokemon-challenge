import React from 'react';
import { AppProps } from 'next/app';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { AuthContextProvider } from '../contexts/AuthContext';

import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import { GlobalStyles } from '../styles/GlobalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop={false}
        draggable={false}
        closeOnClick
        pauseOnHover
      />
      <GlobalStyles />
    </AuthContextProvider>
  );
}

export default MyApp;
