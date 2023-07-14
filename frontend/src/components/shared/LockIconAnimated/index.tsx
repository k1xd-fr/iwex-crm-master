import { useState } from "react";
import { motion } from "framer-motion";
import { AiFillLock, AiFillUnlock } from "react-icons/ai";

const LockIcon = ({ lock }) => {
  const [isOpen, setIsOpen] = useState(lock);

  return (
    <div style={{ height: "50px" }}>
      <motion.div
        whileTap={{ scale: 1.5 }}
        layout
        // style={{ position: "absolute", top: 0, left: 0 }}
      >
        {isOpen ? (
          <AiFillUnlock color="#ffcc00" size={40} />
        ) : (
          <AiFillLock color="#ffcc00" size={40} />
        )}
      </motion.div>
    </div>
  );
};

export default LockIcon;
