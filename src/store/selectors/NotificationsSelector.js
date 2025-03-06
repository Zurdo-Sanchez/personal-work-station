// obtener el mensaje de la notificación
export const getMessageNotification = (state) => state.notifications.message;

// obtener el tipo de la notificación
export const getTypeNotification = (state) => state.notifications.type;

// obtener la duración de la notificación
export const getDurationNotification = (state) => state.notifications.duration;

// obtener la visibilidad de la notificación
export const getVisibleNotification = (state) => state.notifications.visible;
