import { AppProps } from "next/app";
import { Header } from "../components/Header";
import { ContinentContextProvider } from "../context";

import "../styles/global.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContinentContextProvider>
      <Header />
      <Component {...pageProps} />
    </ContinentContextProvider>
  );
}

export default MyApp;
