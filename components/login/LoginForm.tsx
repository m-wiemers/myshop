import { useEffect, useState } from "react";
import LoginButton from "../button/Button";
import styles from "./LoginForm.module.css";
import Link from "next/link";

function LoginForm(onClick, path) {
  const [userName, setUserName] = useState<boolean>(false);
  const [password, setPassword] = useState<boolean>(false);
  const [clickable, setClickable] = useState<boolean>(false);

  function UserNameChange(e) {
    const value = e.target.value;
    if (value.length > 3) {
      setUserName(true);
    }
    if (value.length < 3) {
      setUserName(false);
    }
  }

  function PasswordChange(e) {
    const value = e.target.value;
    if (value.length >= 3) {
      setPassword(true);
    }
    if (value.length < 3) {
      setPassword(false);
    }
  }

  useEffect(() => {
    if (userName && password) {
      setClickable(true);
    }
    if (!userName || !password) {
      setClickable(false);
    }
  });

  return (
    <div className={styles.container}>
      <form>
        <p>UserName {userName && "👨"}</p>
        <input className={styles.input} onChange={UserNameChange} type="text" />
        <p>Password {password && "🔑"}</p>
        <input
          className={styles.input}
          onChange={PasswordChange}
          type="password"
        />
        {clickable && (
          <div className={styles.button}>
            <Link href={path}>
              <LoginButton label="LOGIN" clickable={true} onClick={onClick} />
            </Link>
          </div>
        )}
      </form>
    </div>
  );
}

export default LoginForm;
