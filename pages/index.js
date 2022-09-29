import { MainLayout } from "../layouts";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <MainLayout>
      <Profile />
    </MainLayout>
  );
}

const Profile = () => {
  return <div>Profile</div>;
};
