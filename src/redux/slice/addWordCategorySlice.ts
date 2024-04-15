import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Category {
  id: string;
  categoryName: string;
  content: string;
}

interface categorystate {
  categories: Category[];
}

const initialState: categorystate = {
  categories: [],
};

export const categoryslice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    addCategory: (state, action: PayloadAction<Category>) => {
      state.categories.push(action.payload);
    },
    removeCategory: (state, action: PayloadAction<string>) => {
      state.categories = state.categories.filter(
        (word) => word.id !== action.payload,
      );
    },
  },
});

export const { addCategory, removeCategory } = categoryslice.actions;

export default categoryslice.reducer;
