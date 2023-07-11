"use client";
import { motion, useCycle } from "framer-motion";
import Link from "next/link";
import styles from "./navigation.module.sass";

const Header = () => {
  const text = "IWEX";
  const [animationState, cycleAnimationState] = useCycle("scale", "rotate");

  const variants = {
    scale: { scale: 1.1 },
    rotate: { rotate: 360 },
  };

  const handleAnimationCycle = () => {
    cycleAnimationState();
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Link href="/">
          <motion.a
            className={styles.logo}
            whileHover={animationState}
            onClick={handleAnimationCycle}
          >
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
