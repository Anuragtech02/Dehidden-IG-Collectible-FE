import clsx from "clsx";
import styles from "./Button.module.scss";

const Button = ({ children, variant = "primary", classes }) => {
  return (
    <button className={clsx(styles.btn, styles[variant], classes)}>
      {children}
    </button>
  );
};

export default Button;
