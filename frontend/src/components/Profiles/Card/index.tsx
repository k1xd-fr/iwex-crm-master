import { motion } from "framer-motion";
import styles from "./style.module.sass";
import LockIcon from "../../shared/LockIconAnimated";
const Card = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      style={{ zIndex: "10" }}
      className={styles.card}
    >
      <LockIcon></LockIcon>
      <div></div>
    </motion.div>
  );
};

export default Card;
