import React from "react";
import { motion } from "framer-motion";
import { AiFillLock, AiFillUnlock } from "react-icons/ai";
import styles from "./style.module.sass";

interface LockIconProps {
  lock: boolean;
}

const LockIcon: React.FC<LockIconProps> = ({ lock }) => {
  return (
    <div style={{ height: "50px" }}>
      <motion.div whileTap={{ scale: 1.5 }} layout>
        {lock ? (
          <AiFillLock color="#ffcc00" size={40} />
        ) : (
          <AiFillUnlock className={styles.lock} color="#333" size={40} />
        )}
      </motion.div>
    </div>
  );
};

export default LockIcon;
