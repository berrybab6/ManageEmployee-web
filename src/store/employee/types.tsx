import {
    FETCH_EMP_REQUEST,
    FETCH_EMP_SUCCESS,
    FETCH_EMP_FAILURE,
  } from "./actionTypes";
  
  export interface IEmp {
    empId: string;
    name: string;
    gender: string;
    salary:number;
    DoB: Date;
  }
  
  export interface EmpState {
    pending: boolean;
    employees: IEmp[];
    error: string | null;
  }
  
  export interface FetchEmpSuccessPayload {
    employees: IEmp[];
  }
  
  export interface FetchEmpFailurePayload {
    error: string;
  }
  
  export interface FetchEmpRequest {
    type: typeof FETCH_EMP_REQUEST;
  }
  
  export type FetchEmpSuccess = {
    type: typeof FETCH_EMP_SUCCESS;
    payload: FetchEmpSuccessPayload;
  };
  
  export type FetchEmpFailure = {
    type: typeof FETCH_EMP_FAILURE;
    payload: FetchEmpFailurePayload;
  };
  
  export type EmpActions =
    | FetchEmpRequest
    | FetchEmpSuccess
    | FetchEmpFailure;