import { useNavigate } from "react-router-dom"
import EmployeesTable from "../components/EmployeesTable"
import { useEffect, useState } from "react";

const Employees = () => {
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("employees")) || [];
        setEmployees(data);
    }, [])

    return (
        <div className="container mx-auto px-10 py-10">
            <div className="overflow-x-auto">
                <div className="min-w-full shadow-xl rounded-2xl overflow-hidden">

                    <div className="flex items-center justify-between my-5">
                        <h1 className="text-3xl font-semibold mb-4">Employees details</h1>
                        <button type="button" className="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center" onClick={()=>{
                            navigate("/add-employees");
                        }}>Add Employees</button>
                    </div>

                    <EmployeesTable employees={employees}/>

                </div>
            </div>
        </div>

    )
}

export default Employees