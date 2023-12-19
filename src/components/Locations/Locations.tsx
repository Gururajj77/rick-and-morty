import { useInfiniteQuery } from "@tanstack/react-query";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import LoadingComponent from "../Utils/Loader/LoadingComponent";
import ErrorComponent from "../Utils/Error/ErrorComponent";
import { fetchLocations } from "./Utils/LocationsUtilFunctions";
import LocationCard from "./LocationCard/LocationCard";
import styles from "./Locations.module.css";
import { useState } from "react";
import useDebounce from "../../hooks/useDebounce";

const Locations = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const debouncedLocation = useDebounce(searchQuery, 700);

  const { data, fetchNextPage, hasNextPage, status } = useInfiniteQuery({
    queryKey: ["locations", debouncedLocation],
    queryFn: ({ pageParam = 1 }) => fetchLocations(pageParam, searchQuery),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.info.next ? allPages?.length + 1 : undefined;
    },
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  const loader = useInfiniteScroll(fetchNextPage, hasNextPage);

  if (status === "pending") {
    return <LoadingComponent />;
  }

  if (status === "error") {
    return <ErrorComponent />;
  }

  return (
    <div>
      <div className={styles.searchBarContainer}>
        <input
          type="text"
          className={styles.searchBar}
          placeholder="Character"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <LocationCard locationDetails={data} />
      <div ref={loader} />
    </div>
  );
};

export default Locations;
