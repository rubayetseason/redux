import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0 };

const counterSlice = createSlice({
  // need to provide name, initialState, reducer
  name: "counter",
  initialState,
  reducers: {
    //create reducer function
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.count = state.count + action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
