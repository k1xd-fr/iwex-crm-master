import { CgProfile } from "react-icons/cg";
import styles from "./style.module.sass";
const UserInfo = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.profile__header}>
        <CgProfile size={20} />
        <h4>Профиль</h4>
      </div>
      <div></div>
    </div>
  );
};

export default UserInfo;
