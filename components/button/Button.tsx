import { MouseEventHandler } from "react";
import styles from "./Button.module.css";

export type ButtonProps = {
  label: string;
  clickable: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

function LoginButton({ label, onClick, clickable }: ButtonProps) {
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
