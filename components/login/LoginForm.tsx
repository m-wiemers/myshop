import LoginButton from "../button/Button";
import styles from "./LoginForm.module.css";
import { ChangeEventHandler, MouseEventHandler } from "react";

export type LoginFormProps = {
  userName: string;
  userNameChange: ChangeEventHandler<HTMLInputElement>;
  password: string;
  passwordChange: ChangeEventHandler<HTMLInputElement>;
  onClick: MouseEventHandler<HTMLButtonElement>;
  clickable: boolean;
};

function LoginForm({
  onClick,
  userNameChange,
  passwordChange,
  clickable,
}: LoginFormProps) {
  return (
    <div className={styles.container}>
      <form>
        <p>UserName</p>
        <input className={styles.input} onChange={userNameChange} type="text" />
        <p>Password</p>
        <input
          className={styles.input}
          onChange={passwordChange}
          type="password"
        />
        {clickable && (
          <div className={styles.button}>
            <LoginButton label="LOGIN" clickable={true} onClick={onClick} />
          </div>
        )}
      </form>
    </div>
  );
}

export default LoginForm;
