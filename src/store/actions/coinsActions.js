import * as types from "./actionType/coinsTypes";

export const setCoins = (coins) => ({
  type: types.SET_COINS,
  payload: coins,
});

export const addCoins = (amount) => ({
  type: types.ADD_COINS,
  payload: amount,
});

export const spendCoins = (amount) => ({
  type: types.SPEND_COINS,
  payload: amount,
});
