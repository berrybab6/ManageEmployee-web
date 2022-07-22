import {
    FETCH_EMP_REQUEST,
    FETCH_EMP_FAILURE,
    FETCH_EMP_SUCCESS,
  } from "./actionTypes";
  import {
    FetchEmpRequest,
    FetchEmpSuccess,
    FetchEmpSuccessPayload,
    FetchEmpFailure,
    FetchEmpFailurePayload,
  } from "./types";
  
  export const fetchEmpRequest = (): FetchEmpRequest => ({
    type: FETCH_EMP_REQUEST,
  });
  
  export const fetchEmpSuccess = (
    payload: FetchEmpSuccessPayload
  ): FetchEmpSuccess => ({
    type: FETCH_EMP_SUCCESS,
    payload,
  });
  
  export const fetchEmpFailure = (
    payload: FetchEmpFailurePayload
  ): FetchEmpFailure => ({
    type: FETCH_EMP_FAILURE,
    payload,
  });