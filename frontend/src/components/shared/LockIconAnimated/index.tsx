import { useState } from "react";
import { motion } from "framer-motion";
import { AiFillLock, AiFillUnlock } from "react-icons/ai";

const LockIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ height: "50px", position: "relative" }} onClick={handleClick}>
      <motion.div
        whileTap={{ scale: 1.5 }}
        layout
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        {isOpen ? <AiFillUnlock size={40} /> : <AiFillLock size={40} />}
      </motion.div>
    </div>
  );
};

export default LockIcon;
