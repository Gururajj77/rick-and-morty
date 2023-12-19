import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchEpisodes } from "./Utils/episodesCustomFunction";
import useDebounce from "../../hooks/useDebounce";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import { useState } from "react";
import ErrorComponent from "../Utils/Error/ErrorComponent";
import LoadingComponent from "../Utils/Loader/LoadingComponent";
import styles from "./Episodes.module.css";
import EpisodeCard from "./EpisodeCard/EpisodeCard";
const Episodes = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const debouncedEpisode = useDebounce(searchQuery, 700);

  const { data, fetchNextPage, hasNextPage, status } = useInfiniteQuery({
    queryKey: ["episodes", debouncedEpisode],
    queryFn: ({ pageParam = 1 }) => fetchEpisodes(pageParam, searchQuery),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.info.next ? allPages?.length + 1 : undefined;
    },
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  const loader = useInfiniteScroll(fetchNextPage, hasNextPage);

  return (
    <>
      <div className={styles.searchBarContainer}>
        <input
          type="text"
          className={styles.searchBar}
          placeholder="Episode"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div>
        {status === "pending" && <LoadingComponent />}
        {status === "error" && <ErrorComponent />}
        {status === "success" && (
          <>
            <EpisodeCard episodeDetails={data} />
            <div ref={loader} />
          </>
        )}
      </div>
    </>
  );
};

export default Episodes;
