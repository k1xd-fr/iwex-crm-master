import React from "react";
import { motion } from "framer-motion";
import { Button } from "@mui/material";
import LockIcon from "../../shared/LockIconAnimated";
import styles from "./style.module.sass";

const Card: React.FC<{
  text: string;
  link: () => void;
  lock: boolean;
}> = ({ text, link, lock }) => {
  const ClickLink = () => {
    if (!lock) {
      link();
    }
  };

  return (
    <div style={{ cursor: "pointer" }} onClick={ClickLink}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className={`${styles.card} ${lock ? "" : styles.card__active}`}
        style={{
          zIndex: 10,
          display: "flex",
          flexWrap: "wrap",
          background: "#333",
        }}
      >
        <LockIcon lock={lock} />
        <div className={styles.text}>
          <h4>{text}</h4>
          <Button
            className={`${styles.more} ${lock ? "" : styles.more__active}`}
          >
            Подробнее
          </Button>
        </div>
        <Button className={styles.btn}>Открыть</Button>
      </motion.div>
    </div>
  );
};

export default Card;
