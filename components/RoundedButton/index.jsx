import clsx from "clsx";
import styles from "./RoundedButton.module.scss";

const RoundedButton = ({
  children,
  variant = "primary",
  leftIcon,
  rightIcon,
}) => {
  return (
    <button className={clsx(styles.btn, styles[variant])}>
      <span>
        <span className={styles.leftIcon}>{leftIcon}</span>
        <span>{children}</span>
        <span className={styles.rightIcon}>{rightIcon}</span>
      </span>
    </button>
  );
};

export default RoundedButton;
