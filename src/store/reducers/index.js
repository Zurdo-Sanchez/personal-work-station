import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import notificationReducer from "./notificationsReducer";
import configReducer from "./configReducer ";
import coinsReducer from "./coinsReducer";
import tasksReducer from "./tasksReducer";

const rootReducer = combineReducers({
  users: usersReducer,
  notifications: notificationReducer,
  config: configReducer,
  coins: coinsReducer,
  tasks: tasksReducer,
});

export default rootReducer;
