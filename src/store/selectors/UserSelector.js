import { createSelector } from "reselect";

// 🔹 Obtener el estado del usuario desde Redux
const selectUserState = (state) => state.users;

// 🔹 Selector para obtener el usuario autenticado
export const getUserSelector = createSelector(
  [selectUserState],
  (users) => users.user
);

// 🔹 Selector para verificar si hay un error en la autenticación
export const getAuthErrorSelector = createSelector(
  [selectUserState],
  (users) => users.error
);

// 🔹 Selector para verificar si la app está cargando (por ejemplo, mientras hace login)
export const getAuthLoadingSelector = createSelector(
  [selectUserState],
  (users) => users.loading
);
