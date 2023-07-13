import styles from "./loader.module.sass";

const Loader = () => {
  return (
    <div className={styles.lds_facebook}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;
