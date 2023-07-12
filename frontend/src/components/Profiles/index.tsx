"use client";
import { motion } from "framer-motion";
import Card from "./Card";
import styles from "./style.module.sass";
import UserInfo from "./UserInfo";

const ProfilePage = () => {
  return (
    <motion.section
      className={styles.profile}
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
    >
      <>
        <motion.h2
          style={{ zIndex: "10" }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          Личный кабинет
        </motion.h2>

        <UserInfo />
        <Card />
      </>
    </motion.section>
  );
};

export default ProfilePage;
