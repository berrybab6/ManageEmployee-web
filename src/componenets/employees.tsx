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
import { TableContainer } from "./tableStyles";
import EmployeeTable from "./table";

 


const LelaContainer = styled.div`
  display:flex;
  width: 100%;
  height: 100%;
  
  flex-direction: column;
`

export default function Employees() {
    
    useEffect(() => {
      
    }, []);


  return (
    <LelaContainer >
      <h1>Employee Information</h1>
      
      <AddEmpButton />
     <EmployeeTable />
    </LelaContainer>
  );
}