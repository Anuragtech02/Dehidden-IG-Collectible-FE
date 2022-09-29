import { Button } from "../components";
import BottomSheet from "../components/BottomSheet";
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
  return (
    <div>
      <Button>Let&apos;s Get Started</Button>
      <BottomSheet>
        <Button>This is btn</Button>
      </BottomSheet>
    </div>
  );
};
