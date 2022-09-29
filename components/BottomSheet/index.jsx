import styles from "./BottomSheet.module.scss";

const BottomSheet = ({ children }) => {
  return (
    <div className={styles.container}>
      <span className={styles.marker}></span>
      <div className={styles.main}>{children}</div>
    </div>
  );
};

export default BottomSheet;
