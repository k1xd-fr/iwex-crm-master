import { ReactComponentElement, ReactNode } from "react";
import { FaRegQuestionCircle } from "react-icons/fa";
import { IconType } from "react-icons";
import styles from "./style.module.sass";
const CardInfo: React.FC<{
  children: ReactNode;
  icon: ReactComponentElement<IconType>;
}> = ({ children, icon }) => {
  return (
    <div className={styles.cardInfo}>
      <div className={styles.cardInfo__info}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {icon}
          <span>Анкета</span>
        </div>
        <FaRegQuestionCircle size={25} />
      </div>
      <div className={styles.cardInfo__cards}>{children}</div>
    </div>
  );
};

export default CardInfo;
