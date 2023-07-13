"use client";
import { motion } from "framer-motion";
import { RiContactsBookFill } from "react-icons/ri";
import { FaPassport } from "react-icons/fa";
import styles from "./style.module.sass";
import UserInfo from "./UserInfo";
import CardInfo from "./Card/CardInfo";
import Card from "./Card";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
  const router = useRouter();

  const handleCardClick = (url: string) => {
    router.push(url);
  };
  return (
    <motion.section
      className={styles.profile}
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
    >
      <>
        <motion.h2
          style={{ zIndex: "10" }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          Личный кабинет
        </motion.h2>

        <UserInfo />
        <div style={{ zIndex: "10" }} className={styles.profile__cards}>
          <div className={styles.df2}>
            <CardInfo title="Анкета" icon={<RiContactsBookFill size={25} />}>
              <Card
                link={() => handleCardClick("/profile/anketa")}
                lock={true}
                text="Заполни анкету"
              />
            </CardInfo>
            <CardInfo title="Анкета" icon={<FaPassport size={25} />}>
              <Card
                lock={false}
                link={() => handleCardClick("/profile/anketa2")}
                text="Заполни анкету"
              />
            </CardInfo>
          </div>
          <div>
            <CardInfo title="Справки и док-ты" icon={<FaPassport size={25} />}>
              <div className={styles.df}>
                <Card
                  lock={false}
                  link={() => handleCardClick("/profile/anketa3")}
                  text="Справки для регистрации"
                />
                <Card
                  lock={false}
                  link={() => handleCardClick("/profile/anketa4")}
                  text="Справки для посольства"
                />
              </div>
            </CardInfo>
          </div>
        </div>
      </>
    </motion.section>
  );
};

export default ProfilePage;
