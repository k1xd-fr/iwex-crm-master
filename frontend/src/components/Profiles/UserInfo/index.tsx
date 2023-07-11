import { style } from "@mui/system";
import Image from "next/image";
import { CgProfile } from "react-icons/cg";
import { motion } from "framer-motion";

import styles from "./style.module.sass";
const UserInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      style={{ zIndex: "10" }}
    >
      <div className={styles.profile}>
        <div className={styles.header}>
          <CgProfile size={25} />
          <h4>Профиль</h4>
        </div>
        <hr style={{ height: "2px", background: "white", border: "none" }} />
        <div className={styles.body}>
          <Image
            src="/img/base__avatar.png"
            alt="Avatar"
            width={145}
            height={150}
          />
          <div className={styles.body__user}>
            <h2>Almaz Junusov</h2>
            <div className={styles.body__user__block}>
              <div className={styles.info}>
                <div className={styles.info__more}>
                  <span>Университет</span>
                  <h3>Пример Университета</h3>
                </div>
                <div className={styles.info__more}>
                  <span>Факультет</span>
                  <h3>Пример Факультета</h3>
                </div>
                <div className={styles.info__more}>
                  <span>Город</span>
                  <h3> -- </h3>
                </div>
              </div>
              <div className={styles.info}>
                <div className={styles.info__more}>
                  <span>Номер</span>
                  <h3> +996550599099 </h3>
                </div>
                <div className={styles.info__more}>
                  <span>Дата рождения</span>
                  <h3> 12.03.2003 </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default UserInfo;
