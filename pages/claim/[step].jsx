import Image from "next/image";
import { useRouter } from "next/router";
import { Button, Loading, RoundedButton } from "../../components";
import { MainLayout } from "../../layouts";
import styles from "./Claim.module.scss";
import walletImage from "../../assets/images/connectWallet.png";
import getStartedWalletImage from "../../assets/images/getStarted.png";
import BottomSheet from "../../components/BottomSheet";
import { useContext, useEffect, useState } from "react";
import GlobalContext from "../../utils/contexts/GlobalContext";

const Claim = () => {
  const router = useRouter();
  const { step } = router.query;

  const { nft } = useContext(GlobalContext);

  useEffect(() => {
    if (!["0", "1", "2", "3", "4"].includes(step)) {
      router.push("/claim/0");
    }
  }, [step, router]);

  switch (step) {
    case "0":
      return <Step0 />;
    case "1":
      return (
        <WithActiveTab step={1}>
          <Step1 step={1} nft={nft} />
        </WithActiveTab>
      );
    case "2":
      return (
        <WithActiveTab step={2}>
          <Step2 step={2} />
        </WithActiveTab>
      );
    case "3":
      return (
        <WithActiveTab step={3}>
          <Step3 step={3} />
        </WithActiveTab>
      );
    default:
      return;
  }
};

export default Claim;

const WithActiveTab = ({ step, children }) => {
  return (
    <MainLayout classes={[styles.withActiveTabContainer]}>
      <div className={styles.tabs}>
        <div className={step >= 1 ? styles.activeTab : styles.tab}></div>
        <div className={step >= 2 ? styles.activeTab : ""}></div>
        <div className={step == 3 ? styles.activeTab : ""}></div>
      </div>
      <div className={styles.content}>{children}</div>
    </MainLayout>
  );
};

const Step0 = () => {
  const router = useRouter();
  return (
    <MainLayout classes={[styles.container]}>
      <h1>
        🔥🎉 <br />
        Your Collectible is ready to claim
      </h1>
      <RoundedButton
        onClick={() => router.push("/claim/1")}
        variant="solid"
        classes={[styles.nextBtn]}
      >
        What&apos;s Next
      </RoundedButton>
    </MainLayout>
  );
};

const Step1 = ({ nft }) => {
  const router = useRouter();

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
        <Button onClick={() => router.push("/claim/2")} classes={[styles.btn]}>
          Let&apos;s Get Started
        </Button>
      </BottomSheet>
    </section>
  );
};

const Step2 = () => {
  const router = useRouter();

  const { walletAddress, setWalletAddress, nft } = useContext(GlobalContext);

  function handleClickCoinbase() {
    setWalletAddress("TEMP_VALUE");
  }

  function onClickAddToWallet() {
    router.push("/claim/3");
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
          <div className={styles.nftImage}>
            <Image src={nft?.image} alt="nft" layout="responsive" />
          </div>
          <BottomSheet classes={[styles.bottomSheet, styles.step2BottomSheet]}>
            <h4>Wallet Connected!</h4>
            <Button classes={[styles.btn]} onClick={onClickAddToWallet}>
              Add To Wallet
            </Button>
          </BottomSheet>
        </>
      )}
    </section>
  );
};

const Step3 = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const { nft, walletAddress } = useContext(GlobalContext);

  useEffect(() => {
    if (!nft) {
      router.push("/claim/0");
      return;
    }
    if (!walletAddress) {
      router.push("/claim/2");
      return;
    }
    // setTimeout(() => {
    //   setLoading(false);
    // }, 3000);
  }, [nft, walletAddress, router]);

  function onClickAddToWallet() {}

  return (
    <section>
      <h1>
        Spicing up your <br /> wallet
      </h1>
      {loading && <Loading text="Monkey business going on" />}
      <BottomSheet classes={[styles.bottomSheet, styles.step2BottomSheet]}>
        <h4>Wallet Connected!</h4>
        <Button classes={[styles.btn]} onClick={onClickAddToWallet}>
          Add To Wallet
        </Button>
      </BottomSheet>
    </section>
  );
};
