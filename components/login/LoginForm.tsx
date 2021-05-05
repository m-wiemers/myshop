import { useEffect, useState } from "react";
import LoginButton from "../button/Button";
import styles from "./LoginForm.module.css";

function LoginForm(onClick) {
  const [clickable, setClickable] = useState(false);
  const [password, setPassword] = useState(false);
  const [userName, setUserName] = useState(false);

  function UserNameChange(event) {
    const value = event.target.value;
    if (value.length > 2) {
      setUserName(true);
    }
    if (value.length < 3) {
      setUserName(false);
    }
  }

  function PasswordChange(event) {
    const value = event.target.value;
    if (value.length > 2) {
      setPassword(true);
    }
    if (value.length < 3) {
      setPassword(false);
    }
  }

  useEffect(() => {
    if (password && userName) {
      setClickable(true);
    }
    if (!password || !userName) {
      setClickable(false);
    }
  }, [password, userName]);

  return (
    <div className={styles.container}>
      <form>
        UserName
        {userName && "👨"}
        <input className={styles.input} onChange={UserNameChange} type="text" />
        Password
        {password && "🔑"}
        <input
          className={styles.input}
          onChange={PasswordChange}
          type="password"
        />
        <LoginButton label="LOGIN" clickable={clickable} onClick={onClick} />
      </form>
    </div>
  );
}

export default LoginForm;
