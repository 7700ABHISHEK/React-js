import { useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addStudent } from "../features/students/studentSlice";

const AddStudent = () => {

    const [input, setInput] = useState({
        name: "", age: "", skill: "", course: ""
    })

    const [error, setError] = useState({});

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setInput({ ...input, [e.target.id]: e.target.value })
        setError({...error, [e.target.id]: "" })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedError = {}

        if (input.name == "") {
            updatedError.name = "Enter Valid Name...";
        }

        if (input.age == "") {
            updatedError.age = "Enter Valid Age...";
        }

        if (input.skill == "") {
            updatedError.skill = "Enter Valid Skills...";
        }

        if (input.course == "") {
            updatedError.course = "Enter Valid Course...";
        }

        setError(updatedError);

        if (Object.keys(updatedError).length > 0){
            return;
        }

        dispatch(addStudent(input));
        navigate("/");
    }

    return (
        <div>
            <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
                <h1 className="my-10 text-center text-4xl font-semibold">Add Student</h1>

                <div className="mb-5">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                    <input type="text" id="name" className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ex:- John Doe" onChange={handleChange} />
                    {
                        error && <p className="text-red-600 font-semibold">{error.name}</p>
                    }
                </div>
                <div className="mb-5">
                    <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Age</label>
                    <input type="number" id="age" className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ex:- 20" onChange={handleChange} />
                    {
                        error && <p className="text-red-600 font-semibold">{error.age}</p>
                    }
                </div>
                <div className="mb-5">
                    <label htmlFor="skill" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Skills</label>
                    <input type="text" id="skill" className="bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ex:- React, java, C++" onChange={handleChange} />
                    {
                        error && <p className="text-red-600 font-semibold">{error.skill}</p>
                    }
                </div>

                <div className="mb-5">
                    <label htmlFor="course" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                    <select id="course" className="bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleChange}>
                        <option value="">Choose a Course</option>
                        <option value="Full Stack Web Dev">Full Stack Web Dev</option>
                        <option value="UI / UX">UI / UX</option>
                        <option value="AI / ML">AI / ML</option>
                        <option value="Cyber Security">Cyber Security</option>
                    </select>
                    {
                        error && <p className="text-red-600 font-semibold">{error.course}</p>
                    }
                </div>

                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>

        </div>
    )
}

export default AddStudent