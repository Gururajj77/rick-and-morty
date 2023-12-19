import { useInfiniteQuery } from "@tanstack/react-query";
import "./Characters.css";
import { fetchCharacters } from "./Utils/CharacterUtilFunctions";
import CharacterCard from "./CharacterCard/CharacterCard";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import LoadingComponent from "../Utils/Loader/LoadingComponent";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import SearchBar from "./Utils/SearchBar/SearchBar";
import ErrorComponent from "../Utils/Error/ErrorComponent";

const Characters = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [searchSpecies, setSearchSpecies] = useState("");

  const debouncedSearchQuery = useDebounce(searchQuery, 700);
  const debouncedSearchSpecies = useDebounce(searchSpecies, 700);

  const { data, fetchNextPage, hasNextPage, status } = useInfiniteQuery({
    queryKey: [
      "characters",
      debouncedSearchQuery,
      statusFilter,
      genderFilter,
      debouncedSearchSpecies,
    ],
    queryFn: ({ pageParam = 1 }) =>
      fetchCharacters(
        pageParam,
        debouncedSearchQuery,
        statusFilter,
        genderFilter,
        debouncedSearchSpecies
      ),
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

  useEffect(() => {
    fetchNextPage();
  }, [
    debouncedSearchQuery,
    statusFilter,
    genderFilter,
    fetchNextPage,
    debouncedSearchSpecies,
  ]);

  return (
    <>
      <div className="searchBarContainer">
        <SearchBar
          searchValue={searchQuery}
          onSearchChange={(e) => setSearchQuery(e.target.value)}
          statusValue={statusFilter}
          onStatusChange={(e) => setStatusFilter(e.target.value)}
          genderValue={genderFilter}
          onGenderChange={(e) => setGenderFilter(e.target.value)}
          speciesValue={searchSpecies}
          onSearchSpeciesChange={(e) => setSearchSpecies(e.target.value)}
        />
      </div>
      <div className="character-grid">
        {status === "pending" && <LoadingComponent />}
        {status === "error" && <ErrorComponent />}
        {status === "success" && (
          <>
            <CharacterCard
              characterCard={data}
              onNavigate={toCharacterProfile}
            />
            <div ref={loader} />
          </>
        )}
      </div>
    </>
  );
};

export default Characters;
