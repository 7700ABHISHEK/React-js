import React, { useState } from 'react'

const TodoList = () => {

    const [text, setText] = useState("");
    const [tasks, setTasks] = useState([]);

    const task = () => {
        const newTask = {
            id: Date.now(),
            taskName: text,
            isDone: false
        }

        setTasks([...tasks, newTask])
    }

    const markAsComplete = (id) => {
        tasks.map((task) => {
            console.log(id,task.id);
            
        })

        // if(id == task.id){
        //     console.log(id, task.id);
        // }
    }

    return (
        <div className='coontainer mx-auto'>
            <h1 className='text-center my-5 text-3xl font-serif text-slate-700'>Todo List ☑️</h1>
            <form className="flex items-center max-w-lg mx-auto">
                <label htmlFor="voice-search" className="sr-only">Search</label>
                <div className="relative w-full">
                    <input type="text" id="voice-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Add New Tasks Here ✏️" onChange={(e) => {
                        setText(e.target.value);
                    }} />
                </div>
                <button type="button" className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300" onClick={task}>Search </button>
            </form>


            {/* Table starts */}


            {
                tasks.length > 0
                    ? <div className="relative overflow-x-auto my-10 sm:rounded-lg">
                        <table className="w-6/12 text-sm mx-auto text-left rtl:text-right text-gray-500">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Task name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    tasks.map((task) => {
                                        return <tr key={task.id} className="bg-white border-b border-gray-200">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {task.taskName}
                                            </th>
                                            <td className="px-6 py-4">
                                                <button className="font-medium text-blue-600 hover:underline" onClick={() => {
                                                    markAsComplete(task.id)
                                                }}>Mark as completed</button>
                                            </td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    : <div className='flex justify-center my-10'>
                        <img src="/public/no-task.jpg" alt="No Task Found" className='h-96' />
                    </div>
                // : <h1 className='text-red-600 text-center my-4 text-4xl'>No tasks found</h1>
            }


        </div>
    )
}

export default TodoList