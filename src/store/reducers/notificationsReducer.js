import * as types from "../actions/actionType/notificationsTypes";

const initialState = {
  message: "",
  type: "info", // Puede ser "success", "error", "warning", "info"
  visible: false,
  duration: 3000, // Duración en milisegundos (0 = permanente)
};

const notificationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_NOTIFICATION:
      return {
        ...state,
        message: action.payload.message,
        type: action.payload.type,
        duration: action.payload.duration,
        visible: true,
      };

    case types.HIDE_NOTIFICATION:
      return {
        ...state,
        visible: false,
      };

    default:
      return state;
  }
};

export default notificationsReducer;
