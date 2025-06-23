import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';

const EditEmployees = () => {

    const [input, setInput] = useState({
        name: '', salary: '', department: ''
    })

    const [errors, setErrors] = useState({});

    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {

        const employees = JSON.parse(localStorage.getItem("employees")) || [];

        const data = employees.find((employee) => String(employee.id) == id)

        if (data) {
            setInput(data);
        } else {
            toast.error("No Employee Found With This ID");
            navigate("/employees")
        }

    }, [id])


    const handleChange = (e) => {
        setInput({ ...input, [e.target.id]: e.target.value })
    }

    const handleUpdate = (e) => {
        e.preventDefault();

        const validationErrors = {}

        if (input.name.trim() == '') {
            validationErrors.name = "Please Enter Valid Name";
        }

        if (input.salary < 1000) {
            validationErrors.salary = "Please Enter appropriate salary";
        }

        if (input.department == '') {
            validationErrors.department = "Please select a department";
        }

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) {
            return;
        }

        const employees = JSON.parse(localStorage.getItem("employees")) || [];

        const UpdatedEmployees = employees.map((employee) => {
            return employee.id == id ? {
                ...employee, ...input
            } : employee;
        });

        localStorage.setItem("employees", JSON.stringify(UpdatedEmployees));
        toast.success("Employee Details Updated Successfully");
        setInput({ name: '', salary: '', department: '' });
        navigate("/employees");
    }

    return (
        <div className="container mx-auto p-10">

            <div>
                <h1 className="text-center text-3xl font-semibold mb-10 text-teal-600">Edit Employee Here</h1>
            </div>

            <form onSubmit={handleUpdate}>
                <div>
                    <div className="flex flex-wrap items-center">
                        <div className="w-6/12 px-3 mb-6">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Employee Name</label>
                            <input type="text" id="name" value={input.name} className="bg-gray-50 border border-gray-300 outline-0 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required onChange={handleChange} />
                            {
                                errors && <p className='text-red-600 font-semibold'>{errors.name}</p>
                            }
                        </div>
                        <div className="w-6/12 px-3 mb-6">
                            <label htmlFor="salary" className="block mb-2 text-sm font-medium text-gray-900">Salary</label>
                            <input type="number" id="salary" value={input.salary} className="bg-gray-50 border border-gray-300 outline-0 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="₹500" required onChange={handleChange} />
                            {
                                errors && <p className='text-red-600 font-semibold'>{errors.salary}</p>
                            }
                        </div>
                        <div className="w-6/12 px-3 mb-6">
                            <label htmlFor="department" className="block mb-2 text-sm font-medium text-gray-900">Department</label>
                            <select id="department" value={input.department} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-0" onChange={handleChange}>
                                <option value="">Choose a Department</option>
                                <option value="1">Designing</option>
                                <option value="2">Development</option>
                                <option value="3">Finance</option>
                                <option value="4">Sales</option>
                            </select>
                            {
                                errors && <p className='text-red-600 font-semibold'>{errors.department}</p>
                            }
                        </div>
                        <div className="w-6/12 px-3">
                            <button type="submit" className="text-white bg-indigo-700 py-2 rounded px-6 hover:bg-indigo-800 font-semibold transition" >Update</button>
                        </div>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default EditEmployees