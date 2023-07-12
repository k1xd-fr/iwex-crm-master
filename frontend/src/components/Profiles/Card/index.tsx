import { motion } from "framer-motion";
import styles from "./style.module.sass";
import LockIcon from "../../shared/LockIconAnimated";
import { Button } from "@mui/material";
const Card: React.FC<{
  text: string;
}> = ({ text }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      style={{ zIndex: "10", display: "flex", flexWrap: "wrap" }}
      className={styles.card}
    >
      <LockIcon></LockIcon>
      <div className={styles.text}>
        <h4>{text}</h4>
        <Button className={styles.more}>Подробнее</Button>
      </div>
      <Button className={styles.btn}>Открыть</Button>
    </motion.div>
  );
};

export default Card;
