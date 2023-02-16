import PrimaryLayout from "@/layout/primary/Primary";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

declare global {
  interface Window {
    ethereum: any;
  }
}

const App = ({ Component, pageProps }: AppProps) => (
  <PrimaryLayout>
    <Component {...pageProps} />
  </PrimaryLayout>
);

export default App;
