import { takeLatest, put, delay, select } from "redux-saga/effects";
import * as types from "../actions/actionType/notificationsTypes";
import {
  setDurationNotification,
  setMessageNotification,
  setVisibleNotification,
  setTypeNotification,
} from "../actions/notificationsActions";

function* handleAutoHideNotification(payload) {
  // Set the message
  yield put(setMessageNotification(payload.message));
  // Set the type
  yield put(setTypeNotification(payload.type));
  // Set the duration
  yield put(setDurationNotification(payload.duration));
  // Set the visibility
  yield put(setVisibleNotification(true));
}

// Watcher Saga
export function* watchNotificationsSaga() {
  yield takeLatest(types.SHOW_NOTIFICATION, handleAutoHideNotification);
}
