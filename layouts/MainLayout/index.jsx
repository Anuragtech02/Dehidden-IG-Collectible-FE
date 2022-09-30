import styles from "./MainLayout.module.scss";
import { BottomNavigation } from "../../components";

const MainLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.maxWidthContainer}>
        <main>{children}</main>
        <BottomNavigation />
      </div>
    </div>
  );
};

export default MainLayout;
