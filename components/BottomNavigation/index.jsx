import React from "react";
import { icons } from "../../assets";
import styles from "./BottomNavigation.module.scss";
import Image from "next/image";

const { leftArrow, rightArrow, share, clock, refresh } = icons;

const navigations = [
  {
    name: "back",
    icon: leftArrow,
  },

  {
    name: "forward",
    icon: rightArrow,
  },
  {
    name: "share",
    icon: share,
  },
  {
    name: "clock",
    icon: clock,
  },
  {
    name: "refresh",
    icon: refresh,
  },
];

const BottomNavigation = () => {
  return (
    <div className={styles.container}>
      {navigations?.map((navigation, index) => {
        return (
          <div key={index} className={styles.icon}>
            <Image src={navigation.icon} alt={navigation.name} />
          </div>
        );
      })}
    </div>
  );
};

export default BottomNavigation;
