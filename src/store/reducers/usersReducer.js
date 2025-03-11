import * as types from "../actions/actionType/usersTypes";

const initialState = {
  user: null,
  loading: false,
  error: null,
  passwordResetSuccess: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case types.SET_RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        passwordResetSuccess: action.payload,
      };

    default:
      return state;
  }
};

export default usersReducer;
