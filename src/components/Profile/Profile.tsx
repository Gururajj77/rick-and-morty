import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchSingleCharacter } from "./Utils/profileUtilFunctions";
import LoadingComponent from "../Utils/Loader/LoadingComponent";
import styles from "./Profile.module.css";
import { useEffect } from "react";
const Profile = () => {
  const { id } = useParams<{ id: string | undefined }>();
  const queryClient = useQueryClient();

  const { data, status } = useQuery({
    queryKey: ["profile"],
    queryFn: () => fetchSingleCharacter(id),
  });

  useEffect(() => {
    return () => {
      queryClient.resetQueries({ queryKey: ["todos"] });
    };
  }, [queryClient]);

  if (status === "pending") {
    return <LoadingComponent />;
  }

  if (status === "error") {
    return <div>Error fetching data</div>;
  }
  return (
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
        <p className={styles.characterInfoP}>Location: {data.location.name}</p>
        <div className={styles.episodes}>
          <h3>Episodes:</h3>
          <ul className={styles.episodesUl}>
            {data.episode.map((episodeUrl: string) => (
              <li className={styles.episodesLi} key={episodeUrl}>
                Episode {episodeUrl.split("/").pop()}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
