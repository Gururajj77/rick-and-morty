import React, { createContext, useState, useContext } from 'react';

export const CharacterContext = createContext();

export const useCharacterContext = () => useContext(CharacterContext);

export const CharacterProvider = ({ children }) => {
  const [character, setCharacter] = useState(null);

  return (
    <CharacterContext.Provider value={{ character, setCharacter }}>
      {children}
    </CharacterContext.Provider>
  );
};
