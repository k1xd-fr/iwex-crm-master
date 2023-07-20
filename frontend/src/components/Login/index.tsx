"use client";
import { useState } from "react";
import styles from "./login.module.sass";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";
import { useTranslation } from "react-i18next";
import Image from "next/image";
// import { postAuth } from "@/api/login";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import axios from "axios";

const Login = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const { t, i18n } = useTranslation();
  const [authData, setAuthData] = useState({
    email: "",
    password: "",
  });

  // const router = useRouter();

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const date = new Date();
    date.setTime(date.getTime() + 20 * 1000);

    try {
      const response = await axios.post(
        "http://10.137.60.137:8000/api/accounts/login/",
        authData,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`, // Добавляем заголовок авторизации с токеном
          },
        }
      );
      const data = response.data;

      Cookies.set("token", data.jwt, {
        expires: date,
      });
      if (data) {
        console.log(data);
        // alert("вы зашли нахуй");
      }
    } catch (error) {
      alert("Incorrect email or password");
    }
  };

  const togglePassword = () => {
    setShowPassword((prevPassword) => !prevPassword);
  };

  const changeLanguage = (language: any) => {
    i18n.changeLanguage(language);
  };

  const changeHandler = (event: any) => {
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
        <div className={styles.logo_title}>
          <Image src="/img/iwex.svg" width={40} height={40} alt="logo-iwex" />
          <h2 className={styles.form_title}>{t("titleLogin")}</h2>
        </div>
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
      <ul className={styles.circles}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};
export default Login;
