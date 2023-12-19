import React from "react";
import "./CharacterCard.css";
import { getStatusClass } from "../Utils/CharacterUtilFunctions";
import { useCharacterStore } from "../../../store/store";

const CharacterCard = ({ characterCard, onNavigate }: CharacterCardProps) => {
  const setCharacter = useCharacterStore((state) => state.setCharacter);

  const showCharacterProfile = (character: Character) => {
    setCharacter(character);
    onNavigate(character.id);
  };
  return (
    <>
      {characterCard.pages.map((page, i) => (
        <React.Fragment key={i}>
          {page.results.map((character: Character) => (
            <div
              className="character-card"
              key={character.id}
              onClick={() => showCharacterProfile(character)}
            >
              <div className="character-image">
                <img src={character.image} alt={character.name} />
              </div>
              <div className="character-details">
                <h3>{character.name}</h3>
                <p className={`${getStatusClass(character.status)}`}>
                  {character.status} - {character.species}
                </p>
                <p>Last known location:</p>
                <p className="location">{character.location.name}</p>
              </div>
            </div>
          ))}
        </React.Fragment>
      ))}
    </>
  );
};

export default CharacterCard;
