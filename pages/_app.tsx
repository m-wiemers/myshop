import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";
import { useEffect, useState } from "react";
import LoginForm from "../components/login/LoginForm";
import { getPasswordDoc } from "../utils/api";

function MyApp({ Component, pageProps }: AppProps) {
  const path = "/products";
  const [user, setUser] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [clickable, setClickable] = useState<boolean>(false);

  async function handleLogin(e) {
    e.preventDefault();
    const thisUser = await getPasswordDoc(user);
    console.log(thisUser.name);
    console.log(thisUser.value);
  }

  useEffect(() => {
    if (user.length >= 4 && password.length >= 4) {
      setClickable(true);
    }
    if (user.length < 4 || password.length < 4) {
      setClickable(false);
    }
  }, [user, password]);

  return (
    <>
      <Head>
        <title>My Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <header>
          <LoginForm
            clickable={clickable}
            onClick={handleLogin}
            path={path}
            userName={user}
            userNameChange={(e) => setUser(e.target.value)}
            password={password}
            passwordChange={(e) => setPassword(e.target.value)}
          />
        </header>

        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default MyApp;
