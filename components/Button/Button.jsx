import clsx from "clsx";
import styles from "./Button.module.scss";

const Button = ({ children, variant }) => {
  return <button className={clsx(styles.btn)}>{children}</button>;
};

export default Button;
