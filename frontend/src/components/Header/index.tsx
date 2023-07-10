import Link from "next/link";
import styles from "./navigation.module.sass";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <a href="/" className={styles.logo}>
          IWEX
        </a>
        {/* <nav className={styles.nav}></nav> */}
      </div>
    </header>
  );
};

export default Header;
