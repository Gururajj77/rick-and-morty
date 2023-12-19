import styles from "./ErrorComponent.module.css";

const ErrorComponent = () => {
  return (
    <div className={styles.errorContainer}>
      <p className={styles.errorMessage}>
        Adventure Halted, please wait for sometime.
      </p>
    </div>
  );
};

export default ErrorComponent;
