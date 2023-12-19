import { create } from 'zustand';

type CharacterState = {
    character: Character | null;
    setCharacter: (character: Character | null) => void;
};

export const useCharacterStore = create<CharacterState>((set) => ({
    character: null,
    setCharacter: (character) => set({ character }),
}));

