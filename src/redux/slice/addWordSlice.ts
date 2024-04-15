import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Word {
  id: string;
  category_id: string;
  word: string;
  content: string;
}

interface WordState {
  words: Word[];
}

const initialState: WordState = {
  words: [],
};

export const wordSlice = createSlice({
  name: "words",
  initialState,
  reducers: {
    addWord: (state, action: PayloadAction<Word>) => {
      state.words.push(action.payload);
    },
    removeWord: (state, action: PayloadAction<string>) => {
      state.words = state.words.filter((word) => word.id !== action.payload);
    },
  },
});

export const { addWord, removeWord } = wordSlice.actions;

export default wordSlice.reducer;
