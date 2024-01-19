import { createSlice } from "@reduxjs/toolkit";

const initialState = { isCount: 0 };

const counterSlise = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state, action) => {
      state.isCount += 1;
    },
    decrement: (state, action) => {
      state.isCount -= 1;
    },
  },
});

export const { increment, decrement } = counterSlise.actions;
export default counterSlise.reducer;
