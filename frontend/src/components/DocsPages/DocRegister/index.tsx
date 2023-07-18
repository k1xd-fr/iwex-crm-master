"use client";
import Link from "next/link";
import React from "react";
import { FaPassport } from "react-icons/fa";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import styles from "./style.module.sass";
interface Document {
  name: string;
  status: boolean;
  title: string;
  default_title: string;
  url?: string;
  filename: string;
  is_confirm?: boolean;
}
const Register = () => {
  return (
    <div className={styles.reg}>
      <Link
        href="/profile"
        className={styles.reg__backlink}
        style={{ color: "#333" }}
      >
        <MdOutlineKeyboardArrowLeft size={50} color="#fc0" />
        Назад
      </Link>
      <h1 className={styles.reg__title}>Справки и док-ты</h1>
      <span className={styles.reg__span}>Справки для регистрации</span>
      <div></div>
    </div>
  );
};

export default Register;
