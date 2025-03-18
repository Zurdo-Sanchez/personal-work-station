import * as types from "./actionType/configTypes";

export const setTheme = (theme) => ({
  type: types.SET_THEME,
  payload: theme,
});

export const setLanguage = (language) => ({
  type: types.SET_LANGUAGE,
  payload: language,
});

export const setOrderCard = (orderCard) => ({
  type: types.SET_ORDER_CARD,
  payload: orderCard,
});
