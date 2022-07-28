import  { useState, useEffect } from "react";
import { Button} from "./button"

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { useForm } from "react-hook-form";
import {Label,DateDiv, Input } from "./forms";

import { useDispatch, } from "react-redux";


import { addEmpRequest, fetchEmpRequest, updateEmpRequest } from "../store/employee/actions";

export default function AddEmployeeForm({isShown, isUpdateShown, data}) {
    
    const [inputs, setInputs] = useState({
        empName: isUpdateShown?data["name"]:'',
        salary:isUpdateShown?data["salary"]:0,
        gender: isUpdateShown?data["gender"]:''
    });
    const [startDate, setStartDate] = useState(new Date());

    const [submitted, setSubmitted] = useState(false);
    const { empName, salary, gender } = inputs;
    function handleChange(e:any) {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

const dispatch = useDispatch();

useEffect(() => {
    dispatch(fetchEmpRequest());
    
  }, [dispatch]);
const callback =(data:string)=>{
    if(isShown){
    console.log("an Employee Created Succesfully");}
    else if(isUpdateShown){
        console.log("You Have Updated an Employee Succesfully");
  }
    
  }
  
    function handleSubmit(e:any) {
        e.preventDefault();

        setSubmitted(true);
        if(isUpdateShown){
            dispatch(updateEmpRequest({
                values:{
                    id:data["id"],
                    name:empName?empName:data["name"],
                    salary:salary===0?data["salary"]:salary,
                    gender:gender?gender:data["gender"],
                    DoB:startDate===new Date()?data["DoB"]:startDate
                },
                callback
            }));
            window.location.reload();

        }

        if (isShown && empName && salary && gender) {
            console.log('hello form is submmitted')
           
            dispatch(addEmpRequest({
              values:{
                name:empName,
                salary:salary,
                gender:gender,
                DoB:startDate
              },
              callback
            }));
            window.location.reload();
      
            // dispatch(userActions.login(username, password, from));
        }
    }
   



    return (

        <div className="basis-1/2 md:basis-1/3">
            <form name="form" onSubmit={handleSubmit} className="basis-1/2 md:basis-1/3 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-8">
                    <Label htmlFor="empName">
                        Employee Name
                    </Label>
                    <Input name="empName" value={empName} onChange={handleChange}  id="empName" type="text" placeholder="Employee Name" />
                    {submitted && !empName &&
                        <div className="mt-2 text-sm text-red-600">Employee Name is required</div>
                    }
                </div>
                <div className="mb-8 py-2 px-3">

                    <Label  htmlFor="salary">
                        Salary
                    </Label>
                    <Input name="salary" value={salary} type="number" onChange={handleChange} id="salary" placeholder="salary" />
                  
                </div>
                <div className="mb-6">
                    <Label  htmlFor="gender">
                        Gender
                    </Label>
                    <div onChange={handleChange} >
                     <input type="radio" value="Male" name="gender"  onChange={handleChange}/> Male
                    <input type="radio" value="Female" name="gender" onChange={handleChange}/> Female
                    </div>
                 
                </div>
                <DateDiv>

                    <Label  >
                        Select Date
                    </Label>
                    <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} />

                </DateDiv>

                <div className="flex items-center justify-between">
                    <Button onClick={function (e:any) {
                        handleSubmit(e);}}
                         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                       {
                           isUpdateShown && "Update Employee"
                       }
                        {
                           isShown && "Add Employee"
                       }
                        
                    </Button>

                </div>
            </form>

        </div>
    );
}
