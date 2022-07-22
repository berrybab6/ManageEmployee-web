import { createSelector } from "reselect";

import { AppState } from "../rootReducer";

const getPending = (state: AppState) => state.employee.pending;

const getEmployees = (state: AppState) => state.employee.employees;

const getError = (state: AppState) => state.employee.error;

export const getEmpSelector = createSelector(getEmployees, (employees) => employees);

export const getPendingSelector = createSelector(
  getPending,
  (pending) => pending
);

export const getErrorSelector = createSelector(getError, (error) => error);