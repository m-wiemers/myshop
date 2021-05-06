import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";
import Header from "../components/header/Header";

function MyApp({ Component, pageProps }: AppProps) {
  function handleLogin(e) {
    e.preventDefault();
  }

  return (
    <>
      <Head>
        <title>My Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header handleLogin={handleLogin} />

        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default MyApp;
