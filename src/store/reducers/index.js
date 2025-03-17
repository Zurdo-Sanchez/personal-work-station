import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import notificationReducer from "./notificationsReducer";
import configReducer from "./configReducer ";

const rootReducer = combineReducers({
  users: usersReducer,
  notifications: notificationReducer,
  config: configReducer,
});

export default rootReducer;
