import { createSlice } from "@reduxjs/toolkit";
import * as types from "../actions/actionType/usersTypes";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    user: null,
    loading: false,
    error: null,
    resetPasswordSuccess: false,
    userCreated: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(types.LOGIN_REQUEST, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(types.SET_USER, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(types.LOGIN_FAILURE, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(types.LOGOUT_SUCCESS, (state) => {
        state.user = null;
      })
      .addCase(types.LOGOUT_FAILURE, (state, action) => {
        state.error = action.payload;
      })
      .addCase(types.SET_RESET_PASSWORD_SUCCESS, (state, action) => {
        state.resetPasswordSuccess = action.payload;
      })
      .addCase(types.SET_USER_CREATED, (state, action) => {
        state.userCreated = action.payload;
      });
  },
});

export default usersSlice.reducer;
