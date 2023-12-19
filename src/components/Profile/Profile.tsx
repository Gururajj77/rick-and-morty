import styles from "./Profile.module.css";
import { useCharacterStore } from "../../store/store";
import Episode from "./Episodes/Episode";
import Resident from "./Residents/Resident";
const Profile = () => {
  const data = useCharacterStore((state) => state.character);

  return (
    <>
      {data && (
        <div className={styles.characterProfile}>
          <div className={styles.characterImage}>
            <img src={data.image} alt={data.name} />
          </div>
          <div className={styles.characterInfo}>
            <div className={styles.detailCard}>
              <h2 className={styles.detailTitle}>{data.name}</h2>
              <p
                className={`${styles.detailInfo} ${
                  styles[data.status.toLowerCase()]
                }`}
              >
                {data.status} - {data.species}
              </p>
              <p className={styles.detailInfo}>Gender: {data.gender}</p>
              <p className={styles.detailInfo}>Origin: {data.origin.name}</p>
              <p className={styles.detailInfo}>
                Location: {data.location.name}
              </p>
              <p>
                <Resident residentCountUrl={data.location.url} />
              </p>
            </div>

            <div className={styles.episodes}>
              <h3>Episodes:</h3>
              <div className={styles.episodeGrid}>
                {data.episode.map((episodeUrl: string) => (
                  <div className={styles.episodesLi} key={episodeUrl}>
                    <Episode episodeUrl={episodeUrl} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
