import {
    FETCH_EMP_REQUEST,
    FETCH_EMP_SUCCESS,
    FETCH_EMP_FAILURE,
  } from "./actionTypes";
  
  import { EmpActions, EmpState } from "./types";
  
  const initialState: EmpState = {
    pending: false,
    employees: [],
    error: null,
  };
  
  export default (state = initialState, action: EmpActions) => {
    switch (action.type) {
      case FETCH_EMP_REQUEST:
        return {
          ...state,
          pending: true,
        };
      case FETCH_EMP_SUCCESS:
        return {
          ...state,
          pending: false,
          employees: action.payload.employees,
          error: null,
        };
      case FETCH_EMP_FAILURE:
        return {
          ...state,
          pending: false,
          employees: [],
          error: action.payload.error,
        };
      default:
        return {
          ...state,
        };
    }
  };