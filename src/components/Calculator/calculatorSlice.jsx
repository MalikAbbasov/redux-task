import { createSlice } from "@reduxjs/toolkit";

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState: {
    value: 0,
  },
  reducers: {
    adding: (state,action) => {
      state.value = action.payload.num1 + action.payload.num2;
    },
    divide: (state,action) => {
      state.value = action.payload.num1 / action.payload.num2;
    },
    subtract: (state,action) => {
      state.value = action.payload.num1 - action.payload.num2;
    },
    multiply: (state,action) => {
      state.value = action.payload.num1 * action.payload.num2;
    },
  },
});

export const {adding,divide,subtract,multiply} = calculatorSlice.actions;

export default calculatorSlice.reducer;