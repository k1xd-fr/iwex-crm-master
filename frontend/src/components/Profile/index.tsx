"use client";
import { motion } from "framer-motion";
import { RiContactsBookFill } from "react-icons/ri";
import { FaPassport } from "react-icons/fa";
import styles from "./style.module.sass";
import UserInfo from "./UserInfo";
import CardInfo from "./Card/CardInfo";
import Card from "./Card";
import { useRouter } from "next/navigation";

type Props = {};

const ProfilePage: React.FC<Props> = () => {
  const router = useRouter();
  const hasAccess = true; // Set this flag based on the access granted status

  const handleCardClick = (url: string) => {
    if (hasAccess) {
      router.push(url);
    } else {
      console.log("Access not granted");
    }
  };

  const renderCard = (
    title: string,
    icon: React.ReactNode,
    link: string,
    text: string,
    lock: boolean
  ) => (
    <CardInfo title={title} icon={icon} tooltip="Hello">
      <Card link={() => handleCardClick(link)} lock={lock} text={text} />
    </CardInfo>
  );

  return (
    <motion.section
      className={styles.profile}
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.1 }}
    >
      <motion.h2
        style={{
          zIndex: "10",
          color: "#fff",
          fontWeight: "300",
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.1, delay: 0.1 }}
      >
        Личный кабинет
      </motion.h2>

      <UserInfo />
      <div style={{ zIndex: "10" }} className={styles.profile__cards}>
        <div className={styles.df2}>
          {renderCard(
            "Анкета",
            <RiContactsBookFill color="#ffcc00" size={25} />,
            "/profile/add-Questionnaire",
            "Заполни анкету",
            hasAccess
          )}
          {renderCard(
            "Immatrikulations",
            <FaPassport color="#ffcc00" size={25} />,
            "/profile/document-Immatrikulations",
            "Заполни анкету",
            hasAccess
          )}
        </div>
        <div>
          <CardInfo
            tooltip="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio veniam incidunt fuga accusamus mollitia. Odit, laboriosam voluptas. Nesciunt magnam repellendus, fugit, accusantium eveniet saepe iure eum sit corporis suscipit tenetur?"
            title="Справки и док-ты"
            icon={<FaPassport color="#ffcc00" size={25} />}
          >
            <div className={styles.df}>
              <Card
                lock={!hasAccess}
                link={() => handleCardClick("/profile/document-Register")}
                text="Справки для регистрации"
              />
              <Card
                lock={hasAccess}
                link={() => handleCardClick("/profile/document-Embassy")}
                text="Справки для посольства"
              />
            </div>
          </CardInfo>
        </div>
      </div>
    </motion.section>
  );
};

export default ProfilePage;
