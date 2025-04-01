import * as types from "../actions/actionType/coinsTypes";

const initialState = {
  coins: 0,
};

const coinsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_COINS:
      return { ...state, coins: action.payload };
    case types.ADD_COINS:
      return { ...state, coins: state.coins + action.payload };
    case types.SPEND_COINS:
      return { ...state, coins: state.coins - action.payload };
    default:
      return state;
  }
};

export default coinsReducer;
