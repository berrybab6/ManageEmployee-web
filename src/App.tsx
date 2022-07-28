import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles.css"
import {
  getEmpSelector,
  } from "./store/employee/selectors";
import { fetchEmpRequest } from "./store/employee/actions";
import Employees from "./componenets/employees"
import styled from "styled-components";
const App = () => {
  const ErrorM = styled.div`
  align-items:center;
  display:flex;
  width:100%
  height:100%;
  justify-content:center;
  align-y:center;
  
  `;
  const dispatch = useDispatch();
  const employees = useSelector(getEmpSelector);
  useEffect(() => {
    dispatch(fetchEmpRequest());
  }, [dispatch]);

  return (
    <div className="App">
      {employees.length>0? <Employees />:<ErrorM>
        <h3>Unable to Connect to the Server.
          Please Try Again!!!!!!</h3>
        </ErrorM>}
    
    </div>
  );
};

export default App;