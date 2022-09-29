import styles from "./MainLayout.module.scss";
import { BottomNavigation } from "../../components";

const MainLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <main>{children}</main>
      <BottomNavigation />
    </div>
  );
};

export default MainLayout;
