import { configureStore } from "@reduxjs/toolkit";
import sentenceSlice from "../features/sentence/sentenceSlice";

export const store = configureStore({
  reducer: {
    sentence: sentenceSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
