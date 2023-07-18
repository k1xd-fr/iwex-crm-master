import React from "react";
import Image from "next/image";
import { CgProfile } from "react-icons/cg";
import { motion } from "framer-motion";

import styles from "./style.module.sass";

const UserInfo = () => {
  const data = {
    first__name: "Almaz",
    last__name: "Junusov",
    avatar: "/img/base__avatar.jpeg",
    uni: "manas",
    fac: "it-programming",
    city: "Bishkek",
    num: "996550599099",
    dbth: "12.04.2004",
  };

  const avatarSrc = data?.avatar || "/img/base__avatar.png";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      style={{ zIndex: 10 }}
    >
      <div className={styles.profile}>
        <div className={styles.header}>
          <CgProfile color="#ffcc00" size={30} />
          <h2 style={{ color: "#fff", fontWeight: "300" }}>Профиль</h2>
        </div>
        <hr className={styles.hr} />
        <div className={styles.body}>
          <div className={styles.avatar}>
            <Image
              src={avatarSrc}
              alt="User Avatar"
              width={145}
              height={150}
              className={styles.avatar__img}
            />
          </div>
          <div className={styles.body__user}>
            <h2 style={{ color: "#fff" }}>
              {data.first__name || data.last__name
                ? `${data?.first__name} ${data?.last__name}`
                : "UserName"}
            </h2>
            <div className={styles.body__user__block}>
              <div className={styles.info}>
                <div className={styles.info__more}>
                  <span>Университет</span>
                  <h3 style={{ color: "#fff" }}>{data?.uni || "--"}</h3>
                </div>
                <div className={styles.info__more}>
                  <span>Факультет</span>
                  <h3 style={{ color: "#fff" }}>{data?.fac || "--"}</h3>
                </div>
                <div className={styles.info__more}>
                  <span>Город</span>
                  <h3 style={{ color: "#fff" }}>{data?.city || "--"} </h3>
                </div>
              </div>
              <div className={styles.info}>
                <div className={styles.info__more}>
                  <span>Номер</span>
                  <h3 style={{ color: "#fff" }}>
                    {data?.num ? `+${data?.num}` : "--"}
                  </h3>
                </div>
                <div className={styles.info__more}>
                  <span>Дата рождения</span>
                  <h3 style={{ color: "#fff" }}>{data?.dbth || "--"}</h3>
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
