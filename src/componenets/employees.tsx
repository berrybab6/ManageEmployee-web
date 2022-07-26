import React, { useEffect } from "react";
import { EmpCard } from "./empcard";
import {ButtonContainer, Button} from "./button"

import { Modal } from './addEmployee';
import { useModal } from './useModal';

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

    const { isShown, toggle } = useModal();
    const content = <React.Fragment>Hey, I'm a model.</React.Fragment>;

  return (
       <LelaContainer >
      <h1>Employee Information</h1>
      
      <ButtonContainer >
          <Button onClick={toggle}>Add Employee</Button>
    </ButtonContainer>

      <Modal isShown={isShown} hide={toggle} modalContent={content} headerText="Hello"/>
     <EmployeeTable />
    </LelaContainer>

  
  );
}