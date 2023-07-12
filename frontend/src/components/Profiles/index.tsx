"use client";
import { motion } from "framer-motion";
import { RiContactsBookFill } from "react-icons/ri";
import { FaPassport } from "react-icons/fa";
import styles from "./style.module.sass";
import UserInfo from "./UserInfo";
import CardInfo from "./Card/CardInfo";
import Card from "./Card";

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
        <div style={{ zIndex: "10" }} className={styles.profile__cards}>
          <div className={styles.card}>
            <CardInfo icon={<RiContactsBookFill size={25} />}>
              <Card />
            </CardInfo>
          </div>
          {/* <div className={styles.card}>
            <CardInfo icon={<FaPassport size={25} />}>
              <Card />
              <Card />
            </CardInfo>
          </div>
          <div className={styles.card}>
            <CardInfo icon={<FaPassport size={25} />}>
              <Card />
            </CardInfo>
          </div> */}
        </div>
      </>
    </motion.section>
  );
};

export default ProfilePage;
