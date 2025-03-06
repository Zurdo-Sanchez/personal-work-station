import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import notificationReducer from "./notificationsReducer";

const rootReducer = combineReducers({
  users: usersReducer,
  notifications: notificationReducer,
});

export default rootReducer;
