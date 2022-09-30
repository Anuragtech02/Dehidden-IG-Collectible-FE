import styles from "./Loading.module.scss";

const Loading = ({
  text,
  width = "100px",
  height = "100px",
  success = false,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.loading}>
        {!success ? (
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
        ) : (
          <svg
            style={{ stroke: "white" }}
            // className={styles.hehe}
            width={width}
            height={height}
            viewBox="0 0 66 66"
          >
            <circle
              // className={styles.circle}
              fill="none"
              strokeWidth={6}
              strokeLinecap="round"
              cx={33}
              cy={33}
              r={30}
            ></circle>
            <path
              className={styles.check}
              fill="none"
              strokeWidth={6}
              strokeLinecap="round"
              d="M 23 34.2 L 31 42.2 L 42 23"
            ></path>
          </svg>
        )}
      </div>

      {text && <span className={styles.text}>{text}</span>}
    </div>
  );
};

export default Loading;
