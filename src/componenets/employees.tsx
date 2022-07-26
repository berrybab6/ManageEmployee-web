import React, { useEffect } from "react";
import { EmpCard } from "./empcard";
import {AddEmpButton} from "./button"

import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  getPendingSelector,
  getEmpSelector,
  getErrorSelector,
} from "../store/employee/selectors"
import { fetchEmpRequest } from "../store/employee/actions";

 
const CardContainer = styled.div`
  
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: #1f2229;
  overflow: hidden;
`;

const Separator = styled.span`
  margin-left: 10px;
  margin-right: 10px;
 

`;
const LelaContainer = styled.div`
  display:flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`

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
    <LelaContainer className="Employee">
      <h1>Employee</h1>
      <AddEmpButton />
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
    </LelaContainer>
  );
}