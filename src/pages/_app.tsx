import { AppProps } from 'next/app';
import { ThemeProvider, ThemeProviderProps } from 'next-themes';
import { Header } from '../components/Header';
import { ContinentContextProvider } from '../context';

import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider storageKey='theme' themes={['light', 'dark']}>
      <ContinentContextProvider>
        <Header />
        <Component {...pageProps} />
      </ContinentContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;
