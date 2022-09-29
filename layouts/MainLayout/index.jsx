import styles from "./MainLayout.module.scss";
import { BottomNavigation } from "../../components";

const MainLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <main>{children}</main>
      <BottomNavigation />
      <div className={styles.hello}>hello</div>
    </div>
  );
};

export default MainLayout;
