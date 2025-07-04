import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { deleteStudent } from "../features/students/studentSlice"

const Student = () => {

    const students = useSelector((store) => {
        return store.students.list
    })

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteStudent(id))
    }

    return (
        <div className="container mx-auto px-10">

            <h1 className="text-3xl text-center py-10">Student CRUD Operation</h1>

            <div className="flex justify-between my-8">
                <h1 className="text-3xl font-semibold">Add Student</h1>
                <button className="bg-blue-700 px-3 py-2 rounded-xl text-white hover:bg-blue-600" onClick={() => navigate("/add-student")} >Add Student</button>
            </div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Course
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Age
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Skill
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            students.map((student) => {
                                return <tr key={student.id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {student.name}
                                    </th>
                                    <td className="px-6 py-4">
                                        {student.course}
                                    </td>
                                    <td className="px-6 py-4">
                                        {student.age}
                                    </td>
                                    <td className="px-6 py-4">
                                        {student.skill}
                                    </td>
                                    <td className="px-6 py-4 flex gap-5">
                                        <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                                        <button className="font-medium text-red-600 dark:text-red-500 hover:underline" onClick={() => handleDelete(student.id)} >Delete</button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Student