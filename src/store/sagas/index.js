import { all } from "redux-saga/effects";
import watchUsersSaga from "./usersSaga";
import { watchNotificationsSaga } from "./notificationsSaga";
export default function* rootSaga() {
  yield all([watchUsersSaga(), watchNotificationsSaga()]);
}
