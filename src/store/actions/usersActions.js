import * as types from "./actionType/usersTypes";

//set loading
export const setLoading = (loading) => ({
  type: types.SET_LOADING,
  payload: loading,
});

// Email & Password Login
export const loginRequest = (email, password) => ({
  type: types.LOGIN_REQUEST,
  payload: { email, password },
});

// Google Login
export const loginWithGoogle = () => ({
  type: types.LOGIN_WITH_GOOGLE,
});

// GitHub Login
export const loginWithGitHub = () => ({
  type: types.LOGIN_WITH_GITHUB,
});

// Logout
export const logoutRequest = () => ({
  type: types.LOGOUT_REQUEST,
});

// Login Success & Failure
export const loginSuccess = (user) => ({
  type: types.LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error) => ({
  type: types.LOGIN_FAILURE,
  payload: error,
});

// Logout Success & Failure
export const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCESS,
});

export const logoutFailure = (error) => ({
  type: types.LOGOUT_FAILURE,
  payload: error,
});

// Register Request, Success & Failure
export const registerRequest = (formData) => ({
  type: types.REGISTER_REQUEST,
  payload: formData,
});

export const registerSuccess = (user) => ({
  type: types.REGISTER_SUCCESS,
  payload: user,
});

export const registerFailure = (error) => ({
  type: types.REGISTER_FAILURE,
  payload: error,
});

export const resetPasswordRequest = (email) => ({
  type: types.RESET_PASSWORD_REQUEST,
  payload: email,
});

export const resetPasswordSuccess = () => ({
  type: types.RESET_PASSWORD_SUCCESS,
});

export const setResetPasswordSuccess = (status) => ({
  type: types.SET_RESET_PASSWORD_SUCCESS,
  payload: status,
});

export const resetPasswordFailure = (error) => ({
  type: types.RESET_PASSWORD_FAILURE,
  payload: error,
});

export const setLoadingSuccess = (user) => ({
  type: types.SET_LOADING_SUCCESS,
  payload: user,
});
