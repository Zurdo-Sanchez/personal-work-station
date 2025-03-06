import { createSlice } from "@reduxjs/toolkit";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} from "../actions/actionType/usersTypes";

const usersSlice = createSlice({
  name: "users",
  initialState: { user: null, loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(LOGIN_REQUEST, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(LOGIN_SUCCESS, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(LOGIN_FAILURE, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(LOGOUT_SUCCESS, (state) => {
        state.user = null;
      })
      .addCase(LOGOUT_FAILURE, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default usersSlice.reducer;
