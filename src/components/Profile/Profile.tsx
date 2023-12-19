import styles from "./Profile.module.css";
import { useCharacterStore } from "../../store/store";
import Episode from "./Episodes/Episode";
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
            <h2 className={styles.characterInfoH2}>{data.name}</h2>
            <p
              className={`${styles.characterInfoP} ${
                styles[data.status.toLowerCase()]
              }`}
            >
              {data.status} - {data.species}
            </p>
            <p className={styles.characterInfoP}>Gender: {data.gender}</p>
            <p className={styles.characterInfoP}>Origin: {data.origin.name}</p>
            <p className={styles.characterInfoP}>
              Location: {data.location.name}
            </p>

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
