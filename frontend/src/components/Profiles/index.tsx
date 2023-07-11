import Card from "./Card";
import styles from "./style.module.sass";
import UserInfo from "./UserInfo";

const ProfilePage = () => {
  return (
    <section className={styles.profile}>
      <h3>Личный кабинет</h3>
      <UserInfo></UserInfo>
      <Card></Card>
    </section>
  );
};

export default ProfilePage;
