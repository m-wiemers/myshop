import { useEffect, useState } from "react";
import LoginForm from "../components/login/LoginForm";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [user, setUser] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [clickable, setClickable] = useState<boolean>(false);

  function handleLogin(e) {
    e.preventDefault();
    console.log("clicked");
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
      <main className={styles.main}>
        <LoginForm
          clickable={clickable}
          onClick={handleLogin}
          userName={user}
          userNameChange={(e) => setUser(e.target.value)}
          password={password}
          passwordChange={(e) => setPassword(e.target.value)}
        />
      </main>
    </>
  );
}
