import {
    FETCH_EMP_REQUEST,
    FETCH_EMP_SUCCESS,
    FETCH_EMP_FAILURE,

    DELETE_EMP_SUCCESS,
    DELETE_EMP_REQUEST,
    DELETE_EMP_FAILURE,
  } from "./actionTypes";
  
  export interface IEmp {
    _id: string;
    name: string;
    gender: string;
    salary:number;
    DoB: Date;
  }
  
  export interface EmpState {
    pending: boolean;
    employees: IEmp[];
    message : string | null;
    error: string | null;
  }
  //  ############# GET Employees  ###########3
  
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

// ################# DELETE EMPLOYMENT Type and interfaces #########3
export interface DeletePayload{
  values: {id:string};
  callback: any;
}  
export interface DeleteEmpRequest {
    type: typeof DELETE_EMP_REQUEST;
    payload:DeletePayload;
  }
  
  export interface DeleteEmpFailurePayload {
    error: string;
  }
  

  export interface DeleteEmpSuccessPayload {
    message: string;
  }
  export type DeleteEmpSuccess = {
    type: typeof DELETE_EMP_SUCCESS;
    payload: DeleteEmpSuccessPayload;
  };
  export type DeleteEmpFailure = {
    type: typeof DELETE_EMP_FAILURE;
    payload: DeleteEmpFailurePayload;
  };

  
  export type EmpActions =
    | FetchEmpRequest
    | FetchEmpSuccess
    | FetchEmpFailure
    | DeleteEmpRequest
    | DeleteEmpSuccess
    | DeleteEmpFailure
    ;