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

//images
import claimed from "../../assets/images/claimed.png";

import whatsapp from "../../assets/icons/whatsapp.png";
import facebook from "../../assets/icons/facebook.png";
import snapchat from "../../assets/icons/snapchat.png";
import messages from "../../assets/icons/messages.png";
import messenger from "../../assets/icons/messenger.png";
import link from "../../assets/icons/link.png";

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
    case "4":
      return (
        <WithActiveTab>
          <Step4 step={4} />
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
        <div className={step >= 1 ? styles.activeTab : ""}></div>
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
    <MainLayout classes={[styles.container, styles.step]}>
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
    <section className={styles.step}>
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
    <section className={styles.step}>
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
            <Button
              onClick={() => router.push("/claim/3")}
              classes={[styles.btn]}
            >
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
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [nft, walletAddress, router]);

  function onClickAddToWallet() {
    router.push("/claim/4");
  }

  return (
    <section className={styles.step}>
      <h1>
        Spicing up your <br /> wallet
      </h1>
      <div className={styles.loadingContainer}>
        <Loading success={!loading} text="Monkey business going on" />
      </div>
      {!loading && (
        <BottomSheet classes={[styles.bottomSheet, styles.step2BottomSheet]}>
          <h4>Wallet Connected!</h4>
          <Button classes={[styles.btn]} onClick={onClickAddToWallet}>
            Proceed
          </Button>
        </BottomSheet>
      )}
    </section>
  );
};

const Step4 = () => {
  const [loading, setLoading] = useState(true);

  return (
    <section className={styles.step}>
      <h1>Yay! Now the collectible is in your wallet!</h1>
      <Image src={claimed} alt="NFT" layout="responsive" />

      <BottomSheet classes={[styles.bottomSheet, styles.step2BottomSheet]}>
        <h4>Collectible Added!</h4>
        <Button classes={[styles.btn]}>Great!</Button>
        <div className={styles.icons}>
          <div className={styles.icon}>
            <Image
              src={link}
              alt="link"
              layout="fixed"
              width={30}
              height={30}
            />
          </div>
          <div className={styles.icon}>
            <Image
              src={whatsapp}
              alt="whatsapp"
              layout="fixed"
              width={30}
              height={30}
            />
          </div>
          <div className={styles.icon}>
            <Image
              src={facebook}
              alt="facebook"
              layout="fixed"
              width={30}
              height={30}
            />
          </div>
          <div className={styles.icon}>
            <Image
              src={messenger}
              alt="messanger"
              layout="fixed"
              width={30}
              height={30}
            />
          </div>
          <div className={styles.icon}>
            <Image
              src={snapchat}
              alt="snapchat"
              layout="fixed"
              width={30}
              height={30}
            />
          </div>
          <div className={styles.icon}>
            <Image
              src={messages}
              alt="messages"
              layout="fixed"
              width={30}
              height={30}
            />
          </div>
        </div>
      </BottomSheet>
    </section>
  );
};
