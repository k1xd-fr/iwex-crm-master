import Image from "next/image";
import styles from "./footer.module.sass";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_container}>
        <div className={styles.footer_logo}>
          <Image
            src="./img/iwex.svg"
            width={30}
            height={30}
            alt="iwex-footer-logo"
          />
          <h3>Iwex</h3>
        </div>
        <p className={styles.footer_p}>
          Все права защищены компанией Iwex Kg | 2011-2023г
        </p>
      </div>
    </div>
  );
};

export default Footer;
