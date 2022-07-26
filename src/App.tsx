import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EmpCard } from "./componenets/empcard";
import "./styles.css"
import {
  getPendingSelector,
  getEmpSelector,
  getErrorSelector,
} from "./store/employee/selectors";
import { fetchEmpRequest } from "./store/employee/actions";
import Employees from "./componenets/employees"
const App = () => {
  const dispatch = useDispatch();
  const pending = useSelector(getPendingSelector);
  const employees = useSelector(getEmpSelector);
  const error = useSelector(getErrorSelector);

  useEffect(() => {
    dispatch(fetchEmpRequest());
  }, []);

  return (
    <div className="App">
     <Employees />
      {/* {pending ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        employees.map((emp, index) => (
          <div style={{ marginBottom: "10px" }} key={emp.name}>
            {++index}. {emp.name}
          </div>
        ))
      )} */}
    </div>
  );
};

export default App;