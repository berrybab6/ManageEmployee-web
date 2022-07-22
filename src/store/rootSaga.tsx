import { all, fork } from "redux-saga/effects";

import empSaga from "./employee/sagas";

export function* rootSaga() {
  yield all([fork(empSaga)]);
}