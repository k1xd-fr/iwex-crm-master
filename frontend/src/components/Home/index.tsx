import Link from "next/link";
import styles from "./home.module.sass";

const HomeComponent = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_container}>
        <div className={styles.description_wrap}>
          <h1 className={styles.title}> Добро пожаловать на Iwex CRM</h1>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
            necessitatibus reprehenderit fuga sint accusantium fugit nulla,
            asperiores eligendi. Fugiat aliquam ex dignissimos reprehenderit
            rerum!
          </p>
          <Link href="/login" className={styles.btn_link}>
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
