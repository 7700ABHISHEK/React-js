const EmployeesTable = ({ employees }) => {

    const getDepartment = (id) => {
        switch(id){
            case 1:
                return "Desigining";
            case 2:
                return "Devlopment";
            case 3:
                return "Finance";
            case 4:
                return "Sales";
        } 
    }

    return (
        <table className="min-w-full text-sm text-left text-gray-700 dark:text-gray-300">
            <thead className="bg-gray-100 dark:bg-gray-800 text-xs uppercase text-gray-600 dark:text-gray-400">
                <tr>
                    <th className="px-6 py-4">Number</th>
                    <th className="px-6 py-4">Name</th>
                    <th className="px-6 py-4">Salary</th>
                    <th className="px-6 py-4">Department</th>
                    <th className="px-6 py-4 text-center">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map((employee, idx) => {
                        return <tr key={employee.id} className="bg-white dark:bg-gray-900 border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                            <td className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">{idx + 1}</td>
                            <td className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">{employee.name}</td>
                            <td className="px-6 py-4">{employee.salary}</td>
                            <td className="px-6 py-4">{getDepartment(Number(employee.department))}</td>
                            <td className="px-6 py-4 flex justify-center gap-5">
                                <button className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 font-semibold transition">Edit</button>
                                <button className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 font-semibold transition">Delete</button>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    )
}

export default EmployeesTable