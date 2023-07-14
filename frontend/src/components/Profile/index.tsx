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
          style={{ zIndex: "10", color: "#ffcc00" }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          Личный кабинет
        </motion.h2>

        <UserInfo />
        <div style={{ zIndex: "10" }} className={styles.profile__cards}>
          <div className={styles.df2}>
            <CardInfo
              title="Анкета"
              icon={<RiContactsBookFill color="#ffcc00" size={25} />}
              tooltip="Hello"
            >
              <Card
                link={() => handleCardClick("/profile/document-Questionnaire")}
                lock={true}
                text="Заполни анкету"
              />
            </CardInfo>
            <CardInfo
              tooltip="Hello pidrasd"
              title="Immatrikulations"
              icon={<FaPassport color="#ffcc00" size={25} />}
            >
              <Card
                lock={false}
                link={() =>
                  handleCardClick("/profile/document-Immatrikulations")
                }
                text="Заполни анкету"
              />
            </CardInfo>
          </div>
          <div>
            <CardInfo
              tooltip="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio veniam incidunt fuga accusamus mollitia. Odit, laboriosam voluptas. Nesciunt magnam repellendus, fugit, accusantium eveniet saepe iure eum sit corporis suscipit tenetur?"
              title="Справки и док-ты"
              icon={<FaPassport color="#ffcc00" size={25} />}
            >
              <div className={styles.df}>
                <Card
                  lock={false}
                  link={() => handleCardClick("/profile/document-Embassy")}
                  text="Справки для регистрации"
                />
                <Card
                  lock={false}
                  link={() => handleCardClick("/profile/document-Register")}
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
