"use client";
import Link from "next/link";
import styles from "./home.module.sass";
import { motion } from "framer-motion";

const textAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.3 },
  }),
};

const HomeComponent = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      className={styles.container}
    >
      <div className={styles.wrapper}>
        <div className={styles.wrapper_container}>
          <div className={styles.description_wrap}>
            <motion.h1
              custom={1}
              variants={textAnimation}
              className={styles.title}
            >
              Добро пожаловать на Iwex CRM
            </motion.h1>
            <motion.p
              custom={2}
              variants={textAnimation}
              className={styles.text}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
              necessitatibus reprehenderit fuga sint accusantium fugit nulla,
              asperiores eligendi. Fugiat aliquam ex dignissimos reprehenderit
              rerum!
            </motion.p>
            <Link href="/login" className={styles.btn_link}>
              Login
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HomeComponent;
