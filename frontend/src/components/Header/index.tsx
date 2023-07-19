"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./navigation.module.sass";
import BasicMenu from "../ChangeLanguage";
import Image from "next/image";
import { BiLogOutCircle } from "react-icons/bi";
import { useRouter } from "next/router";

const Header = () => {
  const text = "IWEX";

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // const { asPath } = useRouter();

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Link href="/" className={styles.logo}>
          <Image src="./img/iwex.svg" width={35} height={35} alt="logo-iwex" />
          <span className={styles.logo_text}>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ delay: index * 0.1 }}
              >
                {letter}
              </motion.span>
            ))}
          </span>
        </Link>
        <div className={styles.icon_translate_logout}>
          <BasicMenu />
          <Link href="/" className={styles.logout}>
            <BiLogOutCircle className={styles.icon_logout} />
            Выйти
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
