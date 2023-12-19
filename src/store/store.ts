import { create } from 'zustand';
import { Character } from '../components/Characters/Utils/customTypes';

type CharacterState = {
    character: Character | null;
    setCharacter: (character: Character | null) => void;
};

export const useCharacterStore = create<CharacterState>((set) => ({
    character: null,
    setCharacter: (character) => set({ character }),
}));

