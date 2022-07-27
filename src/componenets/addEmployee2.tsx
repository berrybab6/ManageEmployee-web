import React, { useState, useEffect } from "react";

// import Input from '@material-tailwind/react/Input';
import { Button} from "./button"

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { useForm } from "react-hook-form";
import {  Input } from "./forms";

import { useDispatch, } from "react-redux";


import { addEmpRequest, fetchEmpRequest } from "../store/employee/actions";

export default function AddEmployeeForm() {
    // const { register, handleSubmit, formState: { errors } } = useForm();
    
    const [inputs, setInputs] = useState({
        empName: '',
        salary: 0,
        gender: ''
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
    
  }, []);
const callback =(data:any)=>{
    console.log("an Employee Created Succesfully");
  }
  
    function handleSubmit(e:any) {
        e.preventDefault();

        setSubmitted(true);
        if (empName && salary && gender) {
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
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="empName">
                        Employee Name
                    </label>
                    <Input name="empName" value={empName} onChange={handleChange} className="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="empName" type="text" placeholder="Employee Name" />
                    {submitted && !empName &&
                        <div className="mt-2 text-sm text-red-600">Employee Name is required</div>
                    }
                </div>
                <div className="mb-4">

                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="salary">
                        Salary
                    </label>
                    <Input name="salary" value={salary} type="number" onChange={handleChange} className="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="salary" placeholder="salary" />
                  
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
                        Gender
                    </label>
                    <div onChange={handleChange}>
                     <input type="radio" value="Male" name="gender" onChange={handleChange}/> Male
                    <input type="radio" value="Female" name="gender" onChange={handleChange}/> Female
                    </div>
                 
                </div>
                <div className="relative mt-4">

                    <label className="block text-gray-700 text-sm font-bold mb-2" >
                        Select Date
                    </label>
                    <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} />

                </div>

                <div className="flex items-center justify-between">
                    <Button onClick={function (e:any) {
                        handleSubmit(e);}}
                         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Add Employee
                    </Button>

                </div>
            </form>

        </div>
    );
}
