import internal from "stream";
import {
    FETCH_EMP_REQUEST,
    FETCH_EMP_SUCCESS,
    FETCH_EMP_FAILURE,

    DELETE_EMP_SUCCESS,
    DELETE_EMP_REQUEST,
    DELETE_EMP_FAILURE,

    ADD_EMP_SUCCESS,
    ADD_EMP_REQUEST,
    ADD_EMP_FAILURE,


    UPDATE_EMP_SUCCESS,
    UPDATE_EMP_REQUEST,
    UPDATE_EMP_FAILURE,
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



// ################# ADD EMPLOYMENT Type and interfaces #########4
export interface AddPayload{
  values: {name:string,salary:number, gender:string,DoB:Date};
  callback: any;
}  
export interface AddEmpRequest {
    type: typeof ADD_EMP_REQUEST;
    payload:AddPayload;
  }
  
  export interface AddEmpFailurePayload {
    error: string;
  }
  

  export interface AddEmpSuccessPayload {
    message: string;
  }
  export type AddEmpSuccess = {
    type: typeof ADD_EMP_SUCCESS;
    payload: AddEmpSuccessPayload;
  };
  export type AddEmpFailure = {
    type: typeof ADD_EMP_FAILURE;
    payload: AddEmpFailurePayload;
  };

  

  // ################# UPDATE EMPLOYMENT Type and interfaces #########4
export interface UpdatePayload{
  values: {name:string,salary:number, gender:string,DoB:Date};
  callback: any;
}  
export interface UpdateEmpRequest {
    type: typeof UPDATE_EMP_REQUEST;
    payload:UpdatePayload;
  }
  
  export interface UpdateEmpFailurePayload {
    error: string;
  }
  

  export interface UpdateEmpSuccessPayload {
    message: string;
  }
  export type UpdateEmpSuccess = {
    type: typeof UPDATE_EMP_SUCCESS;
    payload: UpdateEmpSuccessPayload;
  };
  export type UpdateEmpFailure = {
    type: typeof UPDATE_EMP_FAILURE;
    payload: UpdateEmpFailurePayload;
  };

  export type EmpActions =
    | FetchEmpRequest
    | FetchEmpSuccess
    | FetchEmpFailure
    | DeleteEmpRequest
    | DeleteEmpSuccess
    | DeleteEmpFailure
    | AddEmpRequest
    | AddEmpSuccess
    | AddEmpFailure
    | UpdateEmpRequest
    | UpdateEmpSuccess
    | UpdateEmpFailure
    ;