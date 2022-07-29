import React, { useEffect, useRef, useState } from 'react';

import styled from "styled-components";
import {Button,
  LinkText,
  EditDeleteRow, 
  CardStatWrapper, 
  CardStats,
  TableContainer,
  TableHead,
  TableHeadingBody,
   TableHeading,
   Table, 
   TableRow} 
   from "./tableStyles"
import { useDispatch, useSelector } from "react-redux";
import {
  getEmpSelector,
  getErrorSelector,
} from "../store/employee/selectors"
import { deleteEmpRequest, fetchEmpRequest } from "../store/employee/actions";
import { connect } from 'react-redux';
export default function EmployeeTable({updateEmp, setUpdateEmp,setEmpId}){

 
    function toDate(date:string) {
      return new Date(date).toDateString();
  }
  
    function handleDelete(empId:string) {
      console.log(empId);
      // if (window.confirm("Are you sure You want to delete?"))
     
      if (window.confirm(`You have deleted user:${empId}`))
      dispatch(deleteEmpRequest({
        values:{
          id:empId
        },
        callback
      }));
      window.location.reload();

    }



 
    const [submitted, setSubmitted] = useState(false);
    const [register, setRegister] = useState(false);

    function EditEmp(empId, name, gender, DoB) {
      setEmpId({id:empId,name:name,gender:gender, DoB:DoB});
      setUpdateEmp();
    }
const DeleteButton = styled(Button)`
  color: red;
  border-color: tomato;
`;


const dispatch = useDispatch();
const employees = useSelector(getEmpSelector);
const error = useSelector(getErrorSelector);


useEffect(() => {
  dispatch(fetchEmpRequest());
  
}, []);

const callback =(data:string)=>{
  console.log("DELETsE an Employee");
}


const start = new Date(Date.now());


  {  return ( error ? (
      <div>Error</div>
    ) : (employees.length===0)?<div>Welcome, Start By adding Employees</div>:(
     
       
                <TableContainer >
                    {employees &&

                        <Table >
                            <TableHead>
                                <TableRow>
                                    <TableHeading>
                                        Name
                                    </TableHeading>
                                    <TableHeading >
                                        Salary
                                    </TableHeading>
                                    <TableHeading >
                                        Gender
                                    </TableHeading>
                                    <TableHeading >
                                        Date Of Birth
                                    </TableHeading>
                                    <TableHeading >
                                    </TableHeading>
                                </TableRow>
                            </TableHead>

                                { Object.keys(employees).map((oneKey, i) => {
                                    return (
                                    
                      <tbody key={employees[i]._id}>
                      <tr >
                                      <TableHeadingBody >
                                         {employees[i].name}
                                      </TableHeadingBody>
                                      <TableHeadingBody >
                                      {employees[i].salary}
                                      </TableHeadingBody>
                                      <TableHeadingBody >
                                      {employees[i].gender}
                                      </TableHeadingBody>
                                      <TableHeadingBody >
                                      {toDate(employees[i].DoB.toString())}
                                      </TableHeadingBody>

                                      <EditDeleteRow >
                                         <CardStatWrapper>
                                         <CardStats>
      
                                          <Button onClick={()=>{
                                            EditEmp(
                                              employees[i]._id,
                                              employees[i].name,
                                              employees[i].gender,
                                              employees[i].DoB
                                            );
                                          }}>update</Button>
                                        </CardStats>
                                        <CardStats>
                                          <DeleteButton onClick={()=>{
                                            console.log("Delete Employee");
                                            // deleteE(employees[i]._id)
                                            handleDelete(employees[i]._id)
                                          }}>delete</DeleteButton>
                                        </CardStats>
                                         </CardStatWrapper>
                                      </EditDeleteRow>
                                      
                                      
                                   
                                  </tr>
                              </tbody>
                     
                                    )})}
  
                                
                        </Table>
  }
                </TableContainer>
      ))
    }
          
                              
}
