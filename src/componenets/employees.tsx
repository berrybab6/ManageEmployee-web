import React, { useEffect } from "react";
import { EmpCard } from "./empcard";

import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  getPendingSelector,
  getEmpSelector,
  getErrorSelector,
} from "../store/employee/selectors"
import { fetchEmpRequest } from "../store/employee/actions";

 
const CardContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1f2229;
  overflow: hidden;
`;

const Separator = styled.span`
  margin-left: 10px;
  margin-right: 10px;
`;

export default function Employees() {
    const dispatch = useDispatch();
    const pending = useSelector(getPendingSelector);
    const employees = useSelector(getEmpSelector);
    const error = useSelector(getErrorSelector);
  
    useEffect(() => {
      dispatch(fetchEmpRequest());
    }, []);
    const start = new Date(Date.now());


  return (
    <div className="Employee">
      <h1>Card component</h1>
      <h2>props: title, date, and img</h2>

      <CardContainer>
           {pending ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        employees.map((emp, index) => (
          <div style={{ marginBottom: "10px" }} key={emp.name}>

             <EmpCard _id={"1"} name={emp.name} gender ={emp.gender} salary={emp.salary} DoB={start}  /> 
          </div>
            

        ))
      )}
        <Separator />
        {/* <EmpCard title={"My Card"} date={2} imgUrl={img2} /> */}
      </CardContainer>
    </div>
  );
}