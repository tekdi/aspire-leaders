import { AppProps } from 'next/app';
import Head from 'next/head';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import customAdminTheme from '@/styles/customTheme'; // Adjust path accordingly
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to admin-app!</title>
      </Head>
      <CssVarsProvider theme={customAdminTheme} defaultMode="light">
        <CssBaseline />
        <main className="app">
          <Component {...pageProps} />
        </main>
      </CssVarsProvider>
    </>
  );
}

export default CustomApp;
