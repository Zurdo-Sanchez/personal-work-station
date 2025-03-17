import { createSlice } from "@reduxjs/toolkit";
import * as types from "../actions/actionType/configTypes";

const usersSlice = createSlice({
  name: "config",
  initialState: {
    theme: "light",
    language: "es",
    orderCard: [1, 2, 3],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(types.SET_THEME, (state, action) => {
        state.theme = action.payload;
      })
      .addCase(types.SET_LANGUAGE, (state, action) => {
        state.language = action.payload;
      })
      .addCase(types.SET_ORDER_CARD, (state, action) => {
        state.orderCard = action.payload;
      });
  },
});

export default usersSlice.reducer;
