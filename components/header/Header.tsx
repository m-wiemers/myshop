import LoginForm from "../login/LoginForm";
import styles from "./Header.module.css";

function Header(handleLogin) {
  return (
    <header className={styles.header}>
      <LoginForm path={"products"} onClick={handleLogin} />
    </header>
  );
}

export default Header;
