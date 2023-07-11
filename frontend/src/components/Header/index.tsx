"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./navigation.module.sass";

const Header = () => {
  const text = "IWEX";

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Link href="/">
          <span className={styles.logo}>
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
      </div>
    </header>
  );
};

export default Header;
