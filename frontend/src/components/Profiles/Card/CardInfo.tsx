import { useState } from "react";
import { ReactComponentElement, ReactNode } from "react";
import { FaRegQuestionCircle } from "react-icons/fa";
import { IconType } from "react-icons";
import styles from "./style.module.sass";

interface CardInfoProps {
  children: ReactNode;
  icon: ReactComponentElement<IconType>;
  title: string;
}

const CardInfo: React.FC<CardInfoProps> = ({ children, icon, title }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className={styles.cardInfo}>
      <div className={styles.cardInfo__info}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {icon}
          <h4>{title}</h4>
        </div>
        <div>
          <FaRegQuestionCircle
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            size={25}
          />
          {isHovered && <h1>dasd</h1>}
        </div>
      </div>
      {children}
    </div>
  );
};

export default CardInfo;
