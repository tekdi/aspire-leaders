import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { CssBaseline } from '@mui/material';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import customLearnerTheme from '@/styles/customTheme';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to learner-app!</title>
      </Head>
      <CssVarsProvider theme={customLearnerTheme} defaultMode="light">
        <CssBaseline>
          <main className="app">
            <Component {...pageProps} />
          </main>
        </CssBaseline>
      </CssVarsProvider>
    </>
  );
}

export default CustomApp;
