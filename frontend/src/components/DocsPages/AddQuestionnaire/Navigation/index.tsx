import styles from "../addQuestionnaire.module.sass";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <a href="#data" className={styles.nav_link}>
        Личные данные
      </a>
      <a href="#country" className={styles.nav_link}>
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
  );
};

export default NavBar;
