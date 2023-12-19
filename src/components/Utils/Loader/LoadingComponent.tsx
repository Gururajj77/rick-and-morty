import styles from "./LoadingComponent.module.css";
const LoadingComponent = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.portal}>
        <div className={styles.portalInner}></div>
      </div>
      <p>Loading adventures...</p>
    </div>
  );
};

export default LoadingComponent;
