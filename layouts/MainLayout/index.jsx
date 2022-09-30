import styles from "./MainLayout.module.scss";
import { BottomNavigation } from "../../components";
import clsx from "clsx";

const MainLayout = ({ children, classes }) => {
  return (
    <div className={clsx(styles.container, classes)}>
      <div className={styles.maxWidthContainer}>
        <main>{children}</main>
        <BottomNavigation />
      </div>
    </div>
  );
};

export default MainLayout;
