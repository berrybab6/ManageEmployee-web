import axios, { AxiosPromise } from "axios";
import { AnyIfEmpty } from "react-redux";
import { all, call, put, takeLatest } from "redux-saga/effects";

import { fetchEmpFailure, fetchEmpSuccess } from "./actions";
import { deleteEmpFailure, deleteEmpSuccess } from "./actions";
import { addEmpFailure, addEmpSuccess } from "./actions";

import { DELETE_EMP_REQUEST } from "./actionTypes";

import { FETCH_EMP_REQUEST } from "./actionTypes";
import { ADD_EMP_REQUEST } from "./actionTypes";

import { IEmp } from "./types";

const getEmployees = () =>
  axios.get<IEmp[]>("http://192.168.0.16:5000/");

  const deleteE= async (payload:any) =>{
    
    const i= payload["id"]
    const myJSON:string = JSON.stringify(i);
 
    const message  = await axios.delete<string>(`http://192.168.0.16:5000/${i}`);
    
    return message;
  }
  
  const addEmp= async (payload:{name:string, salary:number, gender:string, DoB:Date}) =>{
    
    // const i= payload["id"]
    // const myJSON:string = JSON.stringify(i);
 
    const { data }  = await axios.post<IEmp>(`http://192.168.0.16:5000/`,{...payload},
    {
      headers:{
        "Content-Type":"application/json",
        Accept:"application/json",
      }
    });
    
    return data;
  } 
  


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

function* deleteEmpSaga(action:any) {
  try {
    console.log("IDDD");
    console.log(action.payload.values);
    const response:{message:string} = yield call(deleteE,action.payload.values);
    
    yield put(
      deleteEmpSuccess({
        message: response.message,
      })
    );

    action.payload.callback(response.message);

  } catch (e) {
    yield put(
      deleteEmpFailure({
        error:"Unable to Delete Employees",
      })
    );
  }
}


function* addEmpSaga(action:any) {
  try {
    console.log("IDDD");
    console.log(action.payload.values);
    const response:{message:string} = yield call(addEmp,
      {name:action.payload.values.name,
      salary:action.payload.values.salary,
      gender:action.payload.values.gender,
      DoB:action.payload.values.DoB
    });
    
    yield put(
      addEmpSuccess({
        message: response.message,
      })
    );

    action.payload.callback(response.message);

  } catch (e) {
    yield put(
      addEmpFailure({
        error:"Unable to Add Employees",
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
  yield all([takeLatest(DELETE_EMP_REQUEST, deleteEmpSaga)]);

}

export default empSaga;