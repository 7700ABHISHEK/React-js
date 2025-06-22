import { useState } from "react"
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {

    const [input, setInput] = useState({
        name: '', salary: '', department: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setInput({...input, [e.target.id]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const employeesDetail = {...input, id: Date.now()};

        const employees = JSON.parse(localStorage.getItem("employees")) || [];
        employees.push(employeesDetail);

        localStorage.setItem("employees", JSON.stringify(employees))
        setInput({name: '', salary: '', department: ''});
        navigate('/employees');
    }

    return (
        <div className="container mx-auto p-10">

            <div>
                <h1 className="text-center text-3xl font-semibold mb-10 text-teal-600">Add Employee Here</h1>
            </div>

            <form onSubmit={handleSubmit}>
                <div>
                    <div className="flex flex-wrap items-center">
                        <div className="w-6/12 px-3 mb-6">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Employee Name</label>
                            <input type="text" id="name" value={input.name} className="bg-gray-50 border border-gray-300 outline-0 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required onChange={handleChange}/>
                        </div>
                        <div className="w-6/12 px-3 mb-6">
                            <label htmlFor="salary" className="block mb-2 text-sm font-medium text-gray-900">Salary</label>
                            <input type="number" id="salary" value={input.salary} className="bg-gray-50 border border-gray-300 outline-0 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="₹500" required onChange={handleChange}/>
                        </div>
                        <div className="w-6/12 px-3 mb-6">
                            <label htmlFor="department" className="block mb-2 text-sm font-medium text-gray-900">Department</label>
                            <select id="department" value={input.department} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-0"onChange={handleChange}>
                                <option value="">Choose a Department</option>
                                <option value="1">Designing</option>
                                <option value="2">Development</option>
                                <option value="3">Finance</option>
                                <option value="4">Sales</option>
                            </select>
                        </div>
                        <div className="w-6/12 px-3">
                            <button type="submit" className="text-white bg-indigo-700 py-2 rounded px-6 hover:bg-indigo-800 font-semibold transition">Submit</button>
                        </div>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default AddEmployee