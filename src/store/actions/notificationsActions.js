import * as types from "./actionType/notificationsTypes";

// Mostrar notificación con tiempo configurable
export const showNotification = (message, type, duration) => ({
  type: types.SHOW_NOTIFICATION,
  payload: { message, type, duration },
});

// Ocultar notificación manualmente
export const hideNotification = () => ({
  type: types.HIDE_NOTIFICATION,
});

// Configurar mensaje de la notificación
export const setMessageNotification = (message) => ({
  type: types.SET_MESSAGE_NOTIFICATION,
  payload: message,
});

// Configurar tipo de la notificación
export const setTypeNotification = (type) => ({
  type: types.SET_TYPE_NOTIFICATION,
  payload: type,
});

// Configurar duración de la notificación
export const setDurationNotification = (duration) => ({
  type: types.SET_DURATION_NOTIFICATION,
  payload: duration,
});

// Configurar visibilidad de la notificación
export const setVisibleNotification = (visible) => ({
  type: types.SET_VISIBLE_NOTIFICATION,
  payload: visible,
});
