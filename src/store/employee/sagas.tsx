import axios, { AxiosPromise } from "axios";
import { AnyIfEmpty } from "react-redux";
import { all, call, put, takeLatest } from "redux-saga/effects";

import { fetchEmpFailure, fetchEmpSuccess } from "./actions";
import { FETCH_EMP_REQUEST } from "./actionTypes";
import { IEmp } from "./types";

const getEmployees = () =>
  axios.get<IEmp[]>("http://192.168.0.16:5000/");

/*
  Worker Saga: Fied on FETCH_TODO_REQUEST action
*/
function* fetchEmpSaga():any {
  try {
    const response = yield call(getEmployees);
    yield put(
      fetchEmpSuccess({
        employees: response.data,
      })
    );
  } catch (e) {
    yield put(
      fetchEmpFailure({
        error:"Unable to Fetch Employees",
      })
    );
  }
}

/*
  Starts worker saga on latest dispatched `FETCH_TODO_REQUEST` action.
  Allows concurrent increments.
*/
function* empSaga() {
  yield all([takeLatest(FETCH_EMP_REQUEST, fetchEmpSaga)]);
}

export default empSaga;