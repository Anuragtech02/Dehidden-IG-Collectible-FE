import clsx from "clsx";
import styles from "./BottomSheet.module.scss";

const BottomSheet = ({ children, classes }) => {
  return (
    <div className={clsx(styles.container, classes)}>
      <span className={styles.marker}></span>
      <div className={styles.main}>{children}</div>
    </div>
  );
};

export default BottomSheet;
