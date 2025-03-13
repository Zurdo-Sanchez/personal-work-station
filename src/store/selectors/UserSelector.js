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

//selector para verificar si la recuperación de contraseña fue exitosa
export const getPasswordResetSuccessSelector = createSelector(
  [selectUserState],
  (users) => users.resetPasswordSuccess
);
export const getUserCreatedSelector = createSelector(
  [selectUserState],
  (users) => users.userCreated
);
