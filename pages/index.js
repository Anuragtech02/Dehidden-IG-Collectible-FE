import { Button } from "../components";
import BottomSheet from "../components/BottomSheet";
import { MainLayout } from "../layouts";
import styles from "./Home.module.scss";
import { images, icons } from "../assets/";
import React from "react";
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Tabs, Tab, Box } from "@mui/material";
import styled from "@emotion/styled";

//images
import profile from "../assets/images/profile.png";
import diamond from "../assets/images/diamond.png";
import candy from "../assets/images/candy.png";
import rocket from "../assets/images/rocket.png";
import cat from "../assets/images/cat.png";
import hand from "../assets/images/hand.png";
import addCollectible from "../assets/images/addCollectible.png";

//icons
import blueTick from "../assets/icons/blueTick.svg";
import gridIcon from "../assets/icons/gridIcon.svg";
import tickInPolygon from "../assets/icons/tickInPolygon.svg";
import redHeart from "../assets/icons/redHeart.svg";

export default function Home() {
  return (
    <MainLayout>
      <Profile />
    </MainLayout>
  );
}

const NFTStories = [
  {
    name: "Diamond",
    image: diamond,
  },
  {
    name: "Candy",
    image: candy,
  },
  {
    name: "Rocket",
    image: rocket,
  },
  {
    name: "Cat",
    image: cat,
  },
  {
    name: "Hand",
    image: hand,
  },
  {
    name: "Candy",
    image: candy,
  },
  {
    name: "Rocket",
    image: rocket,
  },
  {
    name: "Cat",
    image: cat,
  },
  {
    name: "Hand",
    image: hand,
  },
];

const Profile = () => {
  const [currentTabIndex, setCurrentTabIndex] = React.useState(0);
  return (
    <div className={styles.container}>
      <PersonInfo />
      <div className={styles.nftStories}>
        {NFTStories.map((story, index) => (
          <NFTStory key={index} count={index + 1} {...story} />
        ))}
      </div>
      {/* <ConnectButton /> */}
      <div className={styles.tabs}>
        <Box sx={{ width: "100%" }}>
          <div className={styles.tabHeader}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <StyledTabs
                value={currentTabIndex}
                onChange={(_, index) => setCurrentTabIndex(index)}
                aria-label="basic tabs example"
              >
                <Tab icon={<Image src={tickInPolygon} alt="Profile Tab" />} />
                <Tab icon={<Image src={gridIcon} alt="Grid Tab" />} />
              </StyledTabs>
            </Box>
          </div>
          <TabPanel value={currentTabIndex} index={0}>
            <FirstTab />
          </TabPanel>
          <TabPanel value={currentTabIndex} index={1}>
            <SecondTab />
          </TabPanel>
        </Box>
      </div>
      <div className={styles.buttonContainer}>
        <Button classes={styles.claimButton}>Claim This Collectible</Button>
      </div>
    </div>
  );
};

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{}}>{children}</Box>}
    </div>
  );
};

const FirstTab = (props) => {
  const {} = props;
  return (
    <div className={styles.tab}>
      <div className={styles.imageContainer}>
        <Image layout="responsive" src={addCollectible} alt="Add Collectible" />
      </div>
      <div className={styles.tags}>
        {
          <div className={styles.tag}>
            <Image width="15px" src={tickInPolygon} alt="Digital Collectible" />
            <p>Digital Collectible</p>
          </div>
        }
      </div>
      <div className={styles.info}>
        <div className={styles.likedBy}>
          <Image src={redHeart} alt="Liked By" />
          <p>1,41,263 Claimed</p>
        </div>
        <div className={styles.basic}>
          <h3 className={styles.name}>Space Cadet</h3>
          <h4 className={styles.subHeading}>ERC-721</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit
            condimentum rhoncus amet enim. Sit.
          </p>
        </div>
        <div className={styles.horizontalLine}></div>
        <div className={styles.blockchainInfo}>
          <div className={styles.blockchain}>
            <h3>Blockchain Info</h3>
            <p>This NFT was minted on the Polygon Blockchain</p>
          </div>
          <div className={styles.rest}>
            <h4>Contract address</h4>
            <p>0xax1e17et872ge1ie97241203712938209djxa</p>
          </div>
          <div className={styles.rest}>
            <h4>Token ID</h4>
            <p>16</p>
          </div>
          <div className={styles.rest}>
            <h4>Blockchain</h4>
            <p>Polygon</p>
          </div>
        </div>
        <div className={styles.horizontalLine}></div>
      </div>
    </div>
  );
};

const SecondTab = () => {
  return <div className={styles.tab}>Hello 2</div>;
};

const PersonInfo = () => {
  return (
    <div className={styles.personInfo}>
      <div className={styles.left}>
        <Image src={profile} alt="Person Name" />
      </div>
      <div className={styles.right}>
        <div className={styles.name}>
          <p className={styles.heading}>samantharuthprabhuoffl </p>{" "}
          <Image src={blueTick} alt="Blue Tick" />
        </div>
        <p className={styles.subHeading}>Digital Collectible Space </p>
      </div>
    </div>
  );
};

const NFTStory = ({ image, name, count }) => {
  return (
    <div className={styles.nftStoryContainer}>
      <div className={styles.nftStory}>
        <Image src={image} alt={name} />
      </div>
      <p>{count}</p>
    </div>
  );
};

const StyledTabs = styled(Tabs)(() => {
  return {
    ".MuiTabs-flexContainer": {
      button: {
        flex: 1,
        color: "var(--clr-white)",
      },
    },
    ".MuiTabs-indicator": {
      backgroundColor: "var(--clr-white)",
      height: "1px",
    },
  };
});
