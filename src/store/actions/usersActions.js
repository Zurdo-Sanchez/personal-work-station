import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  LOGIN_WITH_GOOGLE,
  LOGIN_WITH_GITHUB,
} from "./actionType/usersTypes";

// Email & Password Login
export const loginRequest = (email, password) => ({
  type: LOGIN_REQUEST,
  payload: { email, password },
});

// Google Login
export const loginWithGoogle = () => ({
  type: LOGIN_WITH_GOOGLE,
});

// GitHub Login
export const loginWithGitHub = () => ({
  type: LOGIN_WITH_GITHUB,
});

// Logout
export const logoutRequest = () => ({
  type: LOGOUT_REQUEST,
});

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});

export const logoutFailure = (error) => ({
  type: LOGOUT_FAILURE,
  payload: error,
});
