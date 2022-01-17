import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import sentenceSlice from "../features/sentence/sentenceSlice";

export const store = configureStore({
  reducer: {
    sentence: sentenceSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
