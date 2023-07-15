import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiFillLock, AiFillUnlock } from "react-icons/ai";
import styles from "./style.module.sass";
interface LockIconProps {
  lock: boolean;
}

const LockIcon: React.FC<LockIconProps> = ({ lock }) => {
  const [isOpen, setIsOpen] = useState<boolean>(lock);

  return (
    <div style={{ height: "50px" }}>
      <motion.div
        whileTap={{ scale: 1.5 }}
        layout
        // style={{ position: "absolute", top: 0, left: 0 }}
      >
        {lock ? (
          <AiFillUnlock
            className={!lock ? styles.active : styles.lock}
            size={40}
          />
        ) : (
          <AiFillLock color="#ffcc00" size={40} />
        )}
      </motion.div>
    </div>
  );
};

export default LockIcon;
