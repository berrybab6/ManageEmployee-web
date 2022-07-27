import React, { useState } from "react";

// import Input from '@material-tailwind/react/Input';
import {ButtonContainer, Button} from "./button"

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { useForm } from "react-hook-form";
import { FormGroup, Label, Input, Message } from "./forms";

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

    function handleSubmit(e:any) {
        e.preventDefault();

        setSubmitted(true);
        if (empName && salary && gender) {
            console.log('hello form is submmitted')
            // const { from } = location.state || { from: { pathname: "/" } };
            // dispatch(userActions.login(username, password, from));
        }
    }
    function setGender(event:any) {
      console.log(event.target.value);
    }

    // function validatePhoneNumber(number) {
    //     const isValidPhoneNumber = validator.isMobilePhone(number)
    //     console.log(isValidPhoneNumber);
    //     return (isValidPhoneNumber)
    // }

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
                    {/* {submitted && !salary &&
                        <div className="mt-2 text-sm text-red-600">Employee Salary is required</div>
                    } */}
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
                        Gender
                    </label>
                    <div onChange={handleChange}>
                     <input type="radio" value="MALE" name="gender" onChange={handleChange}/> Male
                    <input type="radio" value="FEMALE" name="gender" onChange={handleChange}/> Female
                    </div>
                    {/* <Input name="phone" value={phone} onChange={handleChange} className="form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="text" placeholder="phone" />
                    {submitted && !phone &&
                        <div className="mt-2 text-sm text-red-600">phone is required</div>
                    } */}
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
