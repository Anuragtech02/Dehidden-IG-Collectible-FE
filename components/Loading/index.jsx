import styles from "./Loading.module.scss";

const Loading = ({ text, width = "100px", height = "100px" }) => {
  return (
    <div className={styles.container}>
      <svg
        className={styles.spinner}
        width={width}
        height={height}
        viewBox="0 0 66 66"
      >
        <circle
          className={styles.circle}
          fill="none"
          strokeWidth={6}
          strokeLinecap="round"
          cx={33}
          cy={33}
          r={30}
        ></circle>
      </svg>
      {text && <span className={styles.text}>{text}</span>}
    </div>
  );
};

export default Loading;
