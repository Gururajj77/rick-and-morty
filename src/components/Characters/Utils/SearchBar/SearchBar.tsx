import React from "react";
import styles from "./SearchBar.module.css";

type SearchBarProps = {
  searchValue: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  statusValue: string;
  onStatusChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  genderValue: string;
  onGenderChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  speciesValue: string;
  onSearchSpeciesChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar = ({
  searchValue,
  onSearchChange,
  statusValue,
  onStatusChange,
  genderValue,
  onGenderChange,
  speciesValue,
  onSearchSpeciesChange,
}: SearchBarProps) => {
  return (
    <div className={styles.searchBarContainer}>
      <input
        type="text"
        className={styles.searchBar}
        placeholder="Character"
        value={searchValue}
        onChange={onSearchChange}
      />
      <input
        type="text"
        className={styles.searchBar}
        placeholder="Species"
        value={speciesValue}
        onChange={onSearchSpeciesChange}
      />
      <select
        className={styles.filterSelect}
        value={statusValue}
        onChange={onStatusChange}
      >
        <option value="">Status</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
      <select
        className={styles.filterSelect}
        value={genderValue}
        onChange={onGenderChange}
      >
        <option value="">Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="genderless">Genderless </option>
        <option value="unknown">Unknown</option>
      </select>
    </div>
  );
};

export default SearchBar;
