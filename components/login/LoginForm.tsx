import LoginButton from "../button/Button";
import styles from "./LoginForm.module.css";
import Link from "next/link";
import { ChangeEventHandler, MouseEventHandler } from "react";

export type LoginFormProps = {
  userName: string;
  userNameChange: ChangeEventHandler<HTMLInputElement>;
  password: string;
  passwordChange: ChangeEventHandler<HTMLInputElement>;
  clickable: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
  path: string;
};

function LoginForm({
  onClick,
  path,
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
