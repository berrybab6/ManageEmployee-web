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
  
  import {
    DELETE_EMP_REQUEST,
    DELETE_EMP_FAILURE,
    DELETE_EMP_SUCCESS,
  } from "./actionTypes";

  import {
    DeleteEmpRequest,
    DeleteEmpSuccess,
    DeletePayload,
    DeleteEmpSuccessPayload,
    DeleteEmpFailure,
    DeleteEmpFailurePayload,

    
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



  // ######## Delete Payload

  
  export const deleteEmpRequest = (payload:DeletePayload): DeleteEmpRequest => ({
    type: DELETE_EMP_REQUEST,
    payload
  });
  
  export const deleteEmpSuccess = (
    payload: DeleteEmpSuccessPayload
  ): DeleteEmpSuccess => ({
    type: DELETE_EMP_SUCCESS,
    payload,
  });
  
  export const deleteEmpFailure = (
    payload: DeleteEmpFailurePayload
  ): DeleteEmpFailure => ({
    type: DELETE_EMP_FAILURE,
    payload,
  });