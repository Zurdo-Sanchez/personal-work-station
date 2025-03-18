import { createSlice } from "@reduxjs/toolkit";
import * as types from "../actions/actionType/configTypes";
import { act } from "react";

const usersSlice = createSlice({
  name: "config",
  initialState: {
    theme: "light",
    language: "es",
    orderCard: null,
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
        console.log(action);
      });
  },
});

export default usersSlice.reducer;
