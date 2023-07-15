import { motion } from "framer-motion";
import styles from "./style.module.sass";
import LockIcon from "../../shared/LockIconAnimated";
import { Button } from "@mui/material";
const Card: React.FC<{
  text: string;
  link: () => void;
  lock: boolean;
}> = ({ text, link, lock }) => {
  return (
    <div style={{ cursor: "pointer" }} onClick={link}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        style={{
          zIndex: "10",
          display: "flex",
          flexWrap: "wrap",
          background: "#333",
        }}
        className={
          !lock ? styles.card : styles.card + " " + styles.card__active
        }
      >
        <LockIcon lock={lock}></LockIcon>
        <div className={styles.text}>
          <h4>{text}</h4>
          <Button
            className={
              !lock ? styles.more : styles.more + " " + styles.more__active
            }
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
