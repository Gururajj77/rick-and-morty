import styles from "./LocationCard.module.css";
const LocationCard = ({ locationDetails }: LocationProps) => {
  return (
    <>
      <div className={styles.locationGrid}>
        {locationDetails.pages.map((page) =>
          page.results.map((location: LocationType) => (
            <div key={location.id} className={styles.locationCard}>
              <h3>{location.name}</h3>
              <p>Type: {location.type}</p>
              <p>Dimension: {location.dimension}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default LocationCard;
