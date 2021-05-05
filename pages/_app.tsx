import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";
import { useState } from "react";
import Header from "../components/header/Header";

function MyApp({ Component, pageProps }: AppProps) {
  const [loggedIn, setLoggedIn] = useState(true);

  function handleLogin(e) {
    e.preventDefault();
    setLoggedIn(true);
  }

  return (
    <>
      <Head>
        <title>My Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div>
          <Header handleLogin={handleLogin} />
        </div>
        <main>{loggedIn && <Component {...pageProps} />}</main>
      </div>
    </>
  );
}

export default MyApp;
