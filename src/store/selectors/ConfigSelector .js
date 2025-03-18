import { createSelector } from "reselect";

// 🔹 Obtener el estado del usuario desde Redux
const selectConfigState = (state) => state.config;

export const getThemeSelector = createSelector(
  [selectConfigState],
  (config) => config.theme
);
export const getLanguageSelector = createSelector(
  [selectConfigState],
  (config) => config.language
);
export const getOrderCardsSelector = createSelector(
  [selectConfigState],
  (config) => config.orderCard
);
