import { all } from "redux-saga/effects";
import watchUsersSaga from "./usersSaga";

export default function* rootSaga() {
  yield all([watchUsersSaga()]);
}
