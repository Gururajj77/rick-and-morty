import { useQuery } from "@tanstack/react-query";
import { getEpisodeDetails } from "./Utils/episodeCustomFunctions";
import styles from "./Episode.module.css";
type EpisodeProps = {
  episodeUrl: string;
};

const Episode = ({ episodeUrl }: EpisodeProps) => {
  const { data, status } = useQuery({
    queryKey: ["episode", episodeUrl],
    queryFn: () => getEpisodeDetails(episodeUrl),
  });

  if (status === "pending") {
    return <p>Loading...</p>;
  }

  if (status === "error") {
    return <p>Something went wrong!!</p>;
  }

  return (
    <div className={styles.episodeCard}>
      {data && (
        <>
          <p className={styles.episodeTitle}>{data.name}</p>
          <p className={styles.episodeDetails}>Air Date: {data.air_date}</p>
          <p className={styles.episodeCode}>{data.episode}</p>
        </>
      )}
    </div>
  );
};

export default Episode;
