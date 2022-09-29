import { MainLayout } from "../layouts";
import styles from "./Home.module.scss";
import { images, icons } from "../assets/";
import Image from "next/image";

const { profile, diamond, candy, rocket, cat, hand } = images;
const { blueTick } = icons;

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
];

const Profile = () => {
  return (
    <div className={styles.container}>
      <PersonInfo />
      <div className={styles.nftStories}>
        {NFTStories.map((story, index) => (
          <NFTStory key={index} count={index + 1} {...story} />
        ))}
      </div>
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
