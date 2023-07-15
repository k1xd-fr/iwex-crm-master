import Link from "next/link";
import styles from "./addQuestionnaire.module.sass";
import { BiLogOut } from "react-icons/bi";
import AddUserPhoto from "../Add-photo";

const AddProfile = () => {
  return (
    <div className={styles.sidebar_container}>
      <aside className={styles.sideBar}>
        <Link href="/" className={styles.logout}>
          <BiLogOut />
          Назад
        </Link>
        <div className={styles.sidebar_content}>
          <nav className={styles.nav}>
            <a href="#" className={styles.nav_link}>
              Личные данные
            </a>
            <a href="#" className={styles.nav_link}>
              Место рождения
            </a>
            <a href="#" className={styles.nav_link}>
              Адрес прописки
            </a>
            <a href="#" className={styles.nav_link}>
              Фактический адрес
            </a>
            <a href="#" className={styles.nav_link}>
              Фактический адрес
            </a>
            <a href="#" className={styles.nav_link}>
              Паспортные данные
            </a>
            <a href="#" className={styles.nav_link}>
              Контакты
            </a>
            <a href="#" className={styles.nav_link}>
              Информация об университетах и учёбе
            </a>
            <a href="#" className={styles.nav_link}>
              Информация о родителях
            </a>
            <a href="#" className={styles.nav_link}>
              Информация о вашем опыте работы
            </a>
            <a href="#" className={styles.nav_link}>
              Владения языками
            </a>
            <a href="#" className={styles.nav_link}>
              Водительские права
            </a>
            <a href="#" className={styles.nav_link}>
              Умение езды
            </a>
            <a href="#" className={styles.nav_link}>
              Умение езды на велосипеде
            </a>
            <a href="#" className={styles.nav_link}>
              Хобби
            </a>
            <a href="#" className={styles.nav_link}>
              Доп информация
            </a>
          </nav>
        </div>
      </aside>
      <div className={styles.wrapper}>
        <div className={styles.wrapper_content}>
          <div className={styles.userInfo}>
            <h3>Фотография</h3>
            <AddUserPhoto />
          </div>
          <div className={styles.userDataInputs}></div>
        </div>
      </div>
    </div>
  );
};

export default AddProfile;
