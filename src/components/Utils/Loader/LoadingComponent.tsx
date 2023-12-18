import "./LoadingComponent.css";

const LoadingComponent = () => {
  return (
    <div className="loading-container">
      <div className="portal">
        <div className="portal-inner"></div>
      </div>
      <p>Loading adventures...</p>
    </div>
  );
};

export default LoadingComponent;
