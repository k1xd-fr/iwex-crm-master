import styles from "./footer.module.sass";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_container}>
        <h1>Iwex</h1>
        <p className={styles.footer_p}>
          Все права защищены компанией Iwex Kg | 2011-2023г
        </p>
      </div>
    </div>
  );
};

export default Footer;
