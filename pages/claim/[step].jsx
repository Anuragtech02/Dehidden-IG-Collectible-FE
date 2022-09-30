import Image from "next/image";
import { useRouter } from "next/router";
import { Button, RoundedButton } from "../../components";
import { MainLayout } from "../../layouts";
import styles from "./Claim.module.scss";
import walletImage from "../../assets/images/getStarted.png";
import BottomSheet from "../../components/BottomSheet";

const Claim = () => {
  const { step } = useRouter().query;

  console.log({ step });

  switch (step) {
    case "0":
      return <Step0 />;
    case "1":
      return (
        <WithActiveTab>
          <Step1 step={1} />
        </WithActiveTab>
      );
    case "2":
      return (
        <WithActiveTab>
          <Step2 step={2} />
        </WithActiveTab>
      );
    case "3":
      return (
        <WithActiveTab>
          <Step3 step={3} />
        </WithActiveTab>
      );
    default:
      return <Step0 />;
  }
};

export default Claim;

const WithActiveTab = ({ step, children }) => {
  return (
    <MainLayout classes={[styles.withActiveTabContainer]}>
      <div className={styles.tabs}>
        <div className={step >= 1 ? styles.active : ""}></div>
        <div className={step >= 2 ? styles.active : ""}></div>
        <div className={step == 3 ? styles.active : ""}></div>
      </div>
      <div className={styles.content}>{children}</div>
    </MainLayout>
  );
};

const Step0 = () => {
  return (
    <MainLayout classes={[styles.container]}>
      <h1>
        🔥🎉 <br />
        Your Collectible is ready to claim
      </h1>
      <RoundedButton variant="solid" classes={[styles.nextBtn]}>
        What&apos;s Next
      </RoundedButton>
    </MainLayout>
  );
};

const Step1 = () => {
  return (
    <section>
      <h1>
        Connect.
        <br />
        Select.
        <br />
        Collect.
      </h1>
      <Image src={walletImage} alt="wallet" layout="responsive" />
      <BottomSheet classes={[styles.bottomSheet]}>
        <Button>Let&apos;s Get Started</Button>
      </BottomSheet>
    </section>
  );
};

const Step2 = () => {
  return (
    <section>
      <h1>
        🔥🎉 <br />
        Your Collectible is ready to claim
      </h1>
      <RoundedButton variant="solid" classes={[styles.nextBtn]}>
        What&apos;s Next
      </RoundedButton>
    </section>
  );
};

const Step3 = () => {
  return (
    <section>
      <h1>
        🔥🎉 <br />
        Your Collectible is ready to claim
      </h1>
      <RoundedButton variant="solid" classes={[styles.nextBtn]}>
        What&apos;s Next
      </RoundedButton>
    </section>
  );
};
