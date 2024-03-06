import { createSlice } from "@reduxjs/toolkit";

const initialState = { question: "" };

const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    question(state) {
      state.value;
    },
    answer(state) {
      state.value;
    },
  },
});

export const { question, answer } = questionSlice.actions;
export default questionSlice.reducer;
