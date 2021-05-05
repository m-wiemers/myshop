import { MouseEventHandler } from "react";
import styles from "./Button.module.css";

export type LoginButtonProps = {
  label: string;
  clickable: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

function LoginButton({ label, onClick, clickable }: LoginButtonProps) {
  return (
    <button
      className={clickable ? styles.btn : styles.btnforbid}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default LoginButton;
