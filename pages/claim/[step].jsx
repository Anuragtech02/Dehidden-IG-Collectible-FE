import Image from "next/image";
import { useRouter } from "next/router";
import { Button, RoundedButton } from "../../components";
import { MainLayout } from "../../layouts";
import styles from "./Claim.module.scss";
import walletImage from "../../assets/images/connectWallet.png";
import getStartedWalletImage from "../../assets/images/getStarted.png";
import BottomSheet from "../../components/BottomSheet";
import { useContext } from "react";
import GlobalContext from "../../utils/contexts/GlobalContext";

const Claim = () => {
  const { step } = useRouter().query;

  const { nft } = useContext(GlobalContext);

  console.log({ step });

  switch (step) {
    case "0":
      return <Step0 />;
    case "1":
      return (
        <WithActiveTab>
          <Step1 step={1} nft={nft} />
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

const Step1 = ({ nft }) => {
  return (
    <section>
      <h1>
        Connect.
        <br />
        Select.
        <br />
        Collect.
      </h1>
      <Image src={getStartedWalletImage} alt="wallet" layout="responsive" />
      <BottomSheet classes={[styles.bottomSheet]}>
        <div className={styles.details}>
          <Image
            src={nft?.image}
            alt="nft"
            layout="fixed"
            width={60}
            height={60}
            objectFit="contain"
          />
          <p>Claim {nft?.owner?.name}&apos;s exclusive collectible now!</p>
        </div>
        <Button classes={[styles.btn]}>Let&apos;s Get Started</Button>
      </BottomSheet>
    </section>
  );
};

const Step2 = () => {
  const { walletAddress, setWalletAddress, nft } = useContext(GlobalContext);

  function handleClickCoinbase() {
    setWalletAddress("TEMP_VALUE");
  }

  return (
    <section>
      {!walletAddress ? (
        <>
          <h1>
            Connect or
            <br />
            select your
            <br />
            wallet
          </h1>
          <Image src={walletImage} alt="wallet" layout="responsive" />
          <BottomSheet classes={[styles.bottomSheet, styles.step2BottomSheet]}>
            <Button onClick={handleClickCoinbase}>Coinbase</Button>
            <Button variant="secondary" classes={[styles.btn]}>
              Create Wallet
            </Button>
          </BottomSheet>
        </>
      ) : (
        <>
          <h1>
            Add Collectible
            <br />
            to your wallet
          </h1>
          <Image src={nft?.image} alt="nft" layout="responsive" />
          <BottomSheet classes={[styles.bottomSheet, styles.step2BottomSheet]}>
            <h4>Wallet Connected!</h4>
            <Button classes={[styles.btn]}>Add To Wallet</Button>
          </BottomSheet>
        </>
      )}
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
