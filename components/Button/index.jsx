import clsx from "clsx";
import styles from "./Button.module.scss";

const Button = ({ children, variant = "primary", classes, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(styles.btn, styles[variant], classes)}
    >
      {children}
    </button>
  );
};

export default Button;
