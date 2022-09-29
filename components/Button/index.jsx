import clsx from "clsx";
import styles from "./Button.module.scss";

const Button = ({ children, variant = "primary" }) => {
  return (
    <button className={clsx(styles.btn, styles[variant])}>{children}</button>
  );
};

export default Button;
