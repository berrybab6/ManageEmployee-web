import {
    FETCH_EMP_REQUEST,
    FETCH_EMP_SUCCESS,
    FETCH_EMP_FAILURE,

    DELETE_EMP_REQUEST,
    DELETE_EMP_SUCCESS,
    DELETE_EMP_FAILURE,

    ADD_EMP_REQUEST,
    ADD_EMP_SUCCESS,
    ADD_EMP_FAILURE,
  } from "./actionTypes";
  
  import { EmpActions, EmpState } from "./types";
  
  const initialState: EmpState = {
    pending: false,
    employees: [],
    message:null,
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

        // ######## Delete Employement
        case DELETE_EMP_REQUEST:
          return {
            ...state,
            pending: true,
          };
        case DELETE_EMP_SUCCESS:
          return {
            ...state,
            pending: false,
            message: action.payload.message,
            error: null,
          };
        case DELETE_EMP_FAILURE:
          return {
            ...state,
            pending: false,
            message:null,
            error: action.payload.error,
          };

           // ######## ADD Employeee Reducer
        case ADD_EMP_REQUEST:
          return {
            ...state,
            pending: true,
          };
        case ADD_EMP_SUCCESS:
          return {
            ...state,
            pending: false,
            message: action.payload.message,
            error: null,
          };
        case ADD_EMP_FAILURE:
          return {
            ...state,
            pending: false,
            message:null,
            error: action.payload.error,
          };
      default:
        return {
          ...state,
        };
    }
  };