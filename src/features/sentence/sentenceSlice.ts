import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

// This enum is used for moving throught the all questions
// So who is the first question, where is the last question!!!
export enum currentEnum {
  who,
  what,
  when,
  where,
}

export interface ISentenceState {
  questions: string[];
  answers: string[];
  sentence: string;
  current: currentEnum;
}

const initialState: ISentenceState = {
  questions: ["Who?", "What?", "When?", "Where?"],
  answers: ["", "", "", ""],
  sentence: "😛Start to answer these questions to generate the sentence",
  current: currentEnum.who,
};

export const sentenceSlice = createSlice({
  name: "sentence",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    next: (state) => {
      // if the current question is where, that means that this is the last question,
      // no need to increment current
      if (state.current !== currentEnum.where) state.current++;
    },
    previous: (state) => {
      // if the current question is who, that means that this is the first question,
      // no need to decrement current
      if (state.current !== currentEnum.who) state.current--;
    },

    generate: (state) => {
      // If some question werent answered, it should show a warning message
      if (
        state.answers[currentEnum.who] === "" ||
        state.answers[currentEnum.what] === "" ||
        state.answers[currentEnum.when] === "" ||
        state.answers[currentEnum.where] === ""
      ) {
        state.sentence = "Not all questions were answered😔";
        return;
      }

      // Capitalize first letter and lowercase the others
      const tempString = state.answers.join(" ").toLowerCase();

      state.sentence =
        "🙃" + tempString.charAt(0).toUpperCase() + tempString.slice(1);
    },

    // Use the PayloadAction type to declare the contents of `action.payload`
    setAnswer: (state, action: PayloadAction<string>) => {
      // Set the action payload to the appropriate question
      state.answers[state.current] = action.payload;
    },
  },
});

export const { next, previous, generate, setAnswer } = sentenceSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state.
export const selectSentence = (state: RootState) => state.sentence.sentence;
export const selectCurrent = (state: RootState) => state.sentence.current;
export const selectQuestions = (state: RootState) => state.sentence.questions;
export const selectAnswers = (state: RootState) => state.sentence.answers;

export default sentenceSlice.reducer;
