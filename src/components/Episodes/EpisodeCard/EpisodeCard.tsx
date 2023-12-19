import { Episode, EpisodeProps, episodePage } from "../Utils/customTypes";
import styles from "./EpisodeCard.module.css";

const EpisodeCard = ({ episodeDetails }: EpisodeProps) => {
  return (
    <>
      <div className={styles.episodeGrid}>
        {episodeDetails.pages.map((page: episodePage) =>
          page.results.map((episode: Episode) => (
            <div key={episode.id} className={styles.episodeCard}>
              <h3>{episode.name}</h3>
              <p>{episode.air_date}</p>
              <p>{episode.episode}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default EpisodeCard;
