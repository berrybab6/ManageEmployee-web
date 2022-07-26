import React, { useEffect, useState } from 'react';

import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import {
  getPendingSelector,
  getEmpSelector,
  getErrorSelector,
} from "../store/employee/selectors"
import { fetchEmpRequest } from "../store/employee/actions";




export default function EmployeeTable() {
    // const users = useSelector(state => state.users);

    // const user = useSelector(state => state.authentication.user);
    // const dispatch = useDispatch();
    
    
    const [isLoading, setIsLoading] = useState(false);
    const [isEmpty, setIsEmpty] = useState(true);
    const [isError, setError] = useState(false);
    const [users , setUsers] = useState([]);
    useEffect(() => {
        // mounted.current = true;
        const url = `http://localhost:8000/v1/admins/custom_users/`;


        const fetchData = async () => {
            setIsLoading(true);

          try {
            const response = await fetch(url);
           
            const json = await response.json();
            setUsers(json.users);

            if(users.length>0){
                setIsEmpty(false)
            }else{
                setIsEmpty(true);
            }
           
            // console.log("Sectors: ", json.sectors[0].district_name);
          } catch (error) {
            console.log("error", error);
            setError(true);
          }
        };


          fetchData();
          setTimeout(() => {
            setIsLoading(false);            
        }, 1500);
        
    }, []);
    const [msg, setMsg] = useState('');
  
    function handleDeleteCancel() {

        setSubmitted(false)

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
    border: none;
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
  align-items:cente;
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

useEffect(() => {
  dispatch(fetchEmpRequest());
}, []);
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
                                      {employees[i].gender}
                                      </TableHeadingBody>
                                      <TableHeadingBody >
                                      {employees[i].DoB.toString()}
                                      </TableHeadingBody>

                                      <th >
                                         <CardStatWrapper>
                                         <CardStats>
      
                                          <Button >update</Button>
                                        </CardStats>
                                        <CardStats>
                                          <DeleteButton >delete</DeleteButton>
                                        </CardStats>
                                         </CardStatWrapper>
                                      </th>
                                      
                                      
                                   
                                  </tr>
                              </tbody>
                     
                                    )})}
  
                                
                        </Table>
  }
                </TableContainer>
      ))
    }
               
            
                              
}
