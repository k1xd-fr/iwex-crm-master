"use client";
import Link from "next/link";
import styles from "./home.module.sass";
import { motion } from "framer-motion";
import Footer from "../Footer";

import { useTranslation } from "react-i18next";
import BasicMenu from "../ChangeLanguage";

const textAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom: any) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.3 },
  }),
};

const HomeComponent = () => {
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  const { t, i18n } = useTranslation();
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      className={styles.container}
    >
      <div className={styles.wrapper}>
        {/* <BasicMenu /> */}
        <div className={styles.wrapper_container}>
          <div className={styles.description_wrap}>
            <motion.h1
              custom={1}
              variants={textAnimation}
              className={styles.title}
            >
              {t("title")}
              {/* title */}
            </motion.h1>
            <motion.p
              custom={2}
              variants={textAnimation}
              className={styles.text}
            >
              {t("desc")}
            </motion.p>
            <Link href="/login" className={styles.btn_link}>
              {t("btn")}
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </motion.section>
  );
};

export default HomeComponent;
