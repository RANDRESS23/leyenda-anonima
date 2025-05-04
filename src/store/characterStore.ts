import { create } from 'zustand'

export interface Character {
  name: string;
  description: string;
  category: string;
  level: string;
  hint: string;
  images: string[];
}

type Store = {
  character: Character | null;
  category: string | null;
  level: string | null;
  setCategory: (category: string | null) => void;
  setLevel: (level: string | null) => void;
  setCharacter: (character: Character | null) => void;
}

export const useCharacterStore = create<Store>()((set) => ({
  character: null,
  category: null,
  level: null,
  setCategory: (newCategory) => set(() => ({ category: newCategory })),
  setLevel: (newLevel) => set(() => ({ level: newLevel })),
  setCharacter: (newCharacter) => set(() => ({ character: newCharacter })),
}))