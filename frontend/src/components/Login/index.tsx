"use client";
import { useState } from "react";
import styles from "./login.module.sass";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";

const Login = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [authData, setAuthData] = useState({
    identifier: "",
    password: "",
  });

  const submitForm = (event: React.FormEventHandler<HTMLFormElement> | any) => {
    event.preventDefault();
  };

  const togglePassword = () => {
    setShowPassword((prevPassword) => !prevPassword);
  };

  const changeHandler = (event) => {
    setAuthData((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={submitForm}>
        <div className={styles.group}>
          <input
            type="email"
            name="email"
            required
            className={styles.input}
            onChange={changeHandler}
          />
          <span className={styles.highlight}></span>
          <span className={styles.bar}></span>
          <label className={styles.label}>Email</label>
        </div>

        <div className={styles.group}>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            required
            className={styles.input}
            onChange={changeHandler}
          />
          <span className={styles.highlight}></span>
          <span className={styles.bar}></span>
          <label className={styles.label}>Password</label>
          {showPassword ? (
            <BiSolidShow className={styles.showIcon} onClick={togglePassword} />
          ) : (
            <BiSolidHide className={styles.showIcon} onClick={togglePassword} />
          )}
        </div>
        <div className={styles.group}>
          <button className={styles.btn}>Авторизоваться</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
