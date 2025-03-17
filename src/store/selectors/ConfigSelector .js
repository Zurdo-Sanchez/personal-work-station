import { createSelector } from "reselect";

// 🔹 Obtener el estado del usuario desde Redux
const selectConfigState = (state) => state.config;

export const getThemeSelector = createSelector(
  [selectConfigState],
  (users) => users.theme
);
export const getLanguageSelector = createSelector(
  [selectConfigState],
  (users) => users.language
);
