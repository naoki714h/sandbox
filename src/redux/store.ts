import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/redux/slice/counterSlice";
import addWordReducer from "@/redux/slice/addWordSlice";
import addCategoryReducer from "@/redux/slice/addWordCategorySlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    addWord: addWordReducer,
    addCategory: addCategoryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
