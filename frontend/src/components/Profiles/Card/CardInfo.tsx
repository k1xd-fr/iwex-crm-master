"use client";
import { ReactComponentElement, ReactNode } from "react";
import { FaRegQuestionCircle } from "react-icons/fa";
import { IconType } from "react-icons";
import styles from "./style.module.sass";
import { Tooltip } from "@mui/material";
import { fontSize } from "@mui/system";

interface CardInfoProps {
  children: ReactNode;
  icon: ReactComponentElement<IconType>;
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
    <div className={styles.cardInfo}>
      <div className={styles.cardInfo__info}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {icon}
          <h4>{title}</h4>
        </div>
        <Tooltip style={{ color: "white" }} title={tooltip}>
          <div style={{ position: "relative" }}>
            <FaRegQuestionCircle size={25} color="#ffcc00" />
          </div>
        </Tooltip>
      </div>
      {children}
    </div>
  );
};

export default CardInfo;
