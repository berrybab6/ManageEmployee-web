import React, { useEffect, useState } from "react";
import {ButtonContainer, Button} from "./button"

import { Modal } from './addEmployee';
import { useModal, useUpdateModal } from './useModal';

import styled from "styled-components";

import EmployeeTable from "./table";

 


const LelaContainer = styled.div`
  display:flex;
  width: 100%;
  height: 100%;
  
  flex-direction: column;
`

export default function Employees() {
    

    const { isShown, toggle } = useModal();
    const { isUpdateShown, toggleUpdate} = useUpdateModal();
    const [data, setEmpId] = useState({});
    const content = <React.Fragment>Employee Managment App</React.Fragment>;

  return (
       <LelaContainer >
      <h1>Employee Information</h1>
      
      <ButtonContainer >
          <Button onClick={toggle}>Add Employee</Button>
    </ButtonContainer>

      <Modal isShown={isShown} isUpdateShown={isUpdateShown} hide={(isUpdateShown)?toggleUpdate:toggle}  modalContent={content} headerText="Hello" data={data}/>
     <EmployeeTable updateEmp={isUpdateShown} setUpdateEmp={toggleUpdate} setEmpId={setEmpId} />
    </LelaContainer> 
  );
}