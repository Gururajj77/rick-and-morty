import { useInfiniteQuery } from "@tanstack/react-query";
import "./Characters.css";
import { fetchCharacters } from "./Utils/CharacterUtilFunctions";
import CharacterCard from "./CharacterCard/CharacterCard";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import LoadingComponent from "../Utils/Loader/LoadingComponent";
import { useNavigate } from "react-router-dom";
const Characters = () => {
  const { data, fetchNextPage, hasNextPage, status } = useInfiniteQuery({
    queryKey: ["characters"],
    queryFn: ({ pageParam = 1 }) => fetchCharacters(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.info.next ? allPages?.length + 1 : undefined;
    },
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  const navigate = useNavigate();

  const loader = useInfiniteScroll(fetchNextPage, hasNextPage);

  const toCharacterProfile = (id: number) => {
    navigate(`/profile/${id}`);
  };

  if (status === "pending") {
    return <LoadingComponent />;
  }

  if (status === "error") {
    return <div>Error fetching data</div>;
  }

  return (
    <div className="character-grid">
      <CharacterCard characterCard={data} onNavigate={toCharacterProfile} />
      <div ref={loader} />
    </div>
  );
};

export default Characters;
