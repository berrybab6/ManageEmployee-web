import React, { useEffect, useRef, useState } from 'react';

import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import {
  getPendingSelector,
  getEmpSelector,
  getErrorSelector,
} from "../store/employee/selectors"
import { deleteEmpRequest, fetchEmpRequest } from "../store/employee/actions";
import { connect } from 'react-redux';
export default function EmployeeTable(props:any){


// export default function EmployeeTable(props:any) {
    // const users = useSelector(state => state.users);

    // const user = useSelector(state => state.authentication.user);
    // const dispatch = useDispatch();
    
    
    const [isLoading, setIsLoading] = useState(false);
    const [isEmpty, setIsEmpty] = useState(true);
    const [isError, setError] = useState(false);
    const [users , setUsers] = useState([]);
  
    const [msg, setMsg] = useState('');
  
    function handleDelete(empId:string) {
      console.log(empId);
      dispatch(deleteEmpRequest({
        values:{
          id:empId
        },
        callback
      }));
    }
    const [submitted, setSubmitted] = useState(false);
    const [register, setRegister] = useState(false);

    const TableContainer = styled.div`
    overflow-y:hidden;
    overflow-x:auto;
    `;
    const Table = styled.table`
    align-items: center;
    width:100%;
    background: transparent;
    border-collapse:collapse;
    opacity: 0.6;
     
    `;
    const TableHead = styled.thead`
    `;
    const TableRow = styled.tr`
    border: 1px solid black;

    `;
    
    const TableHeading = styled.th`
    padding:15px 10px 15px 10px;
    color:#0900e5;
    text-align: center;
    border: 1px solid LightGrey;
    `;

    
    const TableHeadingBody = styled.th`
    padding:15px 10px 15px 10px;
    color:#000;
    text-align: center;
    border: 1px solid lightGrey;

    // border: none;
    `;
  const EditDeleteRow = styled(TableHeadingBody)`
    padding: 0 5px 0 5px;
`;
    
    
const CardStatWrapper = styled.div`
grid-area: stats;
display: grid;
display: flex;
/* grid-template-columns: 1fr 1fr 1fr; */
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr;
flex-direction: rows;

border-bottom-left-radius: 15px;
border-bottom-right-radius: 15px;
// background: #5930e5;
`;

const CardStats = styled.div`

align-items: center;
justify-content: center;
color:  #000;
padding: 10px;
`;

const LinkText = styled.a`
color:  #5930e5;
text-decoration: none;
`;

const Button = styled.button`
  display: inline-block;
  color:  #5930e5;
  font-size: 1em;
  align-items:center;
  padding: 0.35em 1em;
  border: 2px solid #5930e5;
  border-radius: 3px;
  display: block;
  justify-content: flex-end;
`;

const DeleteButton = styled(Button)`
  color: red;
  border-color: tomato;
`;


const dispatch = useDispatch();
const pending = useSelector(getPendingSelector);
const employees = useSelector(getEmpSelector);
const error = useSelector(getErrorSelector);
const idRef = useRef();
const [empId, setEmpId] = useState("");

const deleteE =(userId:string)=>{
  let data:any = {
    values:{
      id:userId
    },
    callback
  }
  props.deleteE(data);
};

useEffect(() => {
  dispatch(fetchEmpRequest());
  
}, []);

const callback =(data:any)=>{
  console.log("DELETsE an Employee");
}


const start = new Date(Date.now());


  {  return ( error ? (
      <div>Error</div>
    ) : (
     
       
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
                                    
                      <tbody>
                      <tr>
                                      <TableHeadingBody >
                                         {employees[i].name}
                                      </TableHeadingBody>
                                      <TableHeadingBody >
                                      {employees[i].salary}
                                      </TableHeadingBody>
                                      <TableHeadingBody >
                                      {employees[i]._id}
                                      </TableHeadingBody>
                                      <TableHeadingBody >
                                      {employees[i].DoB.toString()}
                                      </TableHeadingBody>

                                      <EditDeleteRow >
                                         <CardStatWrapper>
                                         <CardStats>
      
                                          <Button >update</Button>
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

// const mapDispatchToProps=(dispatch:any)=>({
//   deleteE:(params:any)=>{
//     dispatch(deleteEmpRequest(params))
//   }
// })

// export default connect(null, mapDispatchToProps)(EmployeeTable);