"use client";
import { FaRegQuestionCircle } from "react-icons/fa";
import { Tooltip } from "@mui/material";
import { motion } from "framer-motion";
import styles from "./style.module.sass";

interface CardInfoProps {
  children: React.ReactNode;
  icon: React.ReactNode;
  title: string;
  tooltip: string;
}

const CardInfo: React.FC<CardInfoProps> = ({
  children,
  icon,
  title,
  tooltip,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className={styles.cardInfo}
    >
      <div className={styles.cardInfo__info}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {icon}
          <h4>{title}</h4>
        </div>
        <Tooltip title={tooltip} arrow>
          <div style={{ position: "relative" }}>
            <FaRegQuestionCircle size={25} color="#ffcc00" />
          </div>
        </Tooltip>
      </div>
      {children}
    </motion.div>
  );
};

export default CardInfo;
