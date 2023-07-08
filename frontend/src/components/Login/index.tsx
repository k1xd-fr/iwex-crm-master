"use client";

import styles from "./login.module.sass";

const Login = () => {
  return (
    <div className={styles.wrapper}>
      <form className={styles.form}>
        <div className={styles.group}>
          <input type="text" required className={styles.input} />
          <span className={styles.highlight}></span>
          <span className={styles.bar}></span>
          <label className={styles.label}>Name</label>
        </div>

        <div className={styles.group}>
          <input type="text" required className={styles.input} />
          <span className={styles.highlight}></span>
          <span className={styles.bar}></span>
          <label className={styles.label}>Email</label>
        </div>
        <div className={styles.group}>
          <button className={styles.btn}>Авторизоваться</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
