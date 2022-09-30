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

const { profile, diamond, candy, rocket, cat, hand } = images;
const { blueTick, gridIcon, tickInPolygon } = icons;

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
          <TabPanel value={currentTabIndex} index={0}>
            Item One
          </TabPanel>
          <TabPanel value={currentTabIndex} index={1}>
            Item Two
          </TabPanel>
        </Box>
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
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      <p>hello</p>
    </div>
  );
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
