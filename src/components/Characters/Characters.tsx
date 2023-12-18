import { useInfiniteQuery } from "@tanstack/react-query";
import "./Characters.css";
import { fetchCharacters } from "./Utils/CharacterUtilFunctions";
import CharacterCard from "./CharacterCard/CharacterCard";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import LoadingComponent from "../Utils/Loader/LoadingComponent";
const Characters = () => {
  const { data, fetchNextPage, hasNextPage, status } = useInfiniteQuery({
    queryKey: ["characters"],
    queryFn: ({ pageParam = 1 }) => fetchCharacters(pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.info.next ? allPages?.length + 1 : undefined;
    },
  });

  const loader = useInfiniteScroll(fetchNextPage, hasNextPage);

  if (status === "pending") {
    return <LoadingComponent />;
  }

  if (status === "error") {
    return <div>Error fetching data</div>;
  }

  return (
    <div className="character-grid">
      <CharacterCard characterCard={data} />
      <div ref={loader} />
    </div>
  );
};

export default Characters;
