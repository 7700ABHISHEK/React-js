import React, { useEffect, useState } from 'react';

const TodoList = () => {
    const [text, setText] = useState("");
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState("all");
    const [filterTask, setFilterTask] = useState([]);

    useEffect(() => {
        let tempArr = [];

        if (filter === "all") {
            tempArr = tasks;
        } else if (filter === "complete") {
            tempArr = tasks.filter((task) => task.isDone);
        } else {
            tempArr = tasks.filter((task) => !task.isDone);
        }

        setFilterTask(tempArr);
    }, [tasks, filter]);

    const handleClick = () => {
        if (text.trim() === "") {
            alert("Enter any task");
            return;
        }

        const newTask = {
            id: Date.now(),
            taskName: text,
            isDone: false
        };

        setTasks([...tasks, newTask]);
        setText("");
    };

    const markAsComplete = (id) => {
        const updatedTask = tasks.map((task) =>
            task.id === id ? { ...task, isDone: true } : task
        );

        setTasks(updatedTask);
    };

    return (
        <div className="container mx-auto">
            <h1 className="text-center my-5 text-3xl font-serif text-slate-700">Todo List ☑️</h1>

            <div className="flex items-center max-w-lg mx-auto">
                <div className="relative w-8/12">
                    <input
                        type="text"
                        value={text}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Add New Tasks Here ✏️"
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
                <button
                    type="button"
                    className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                    onClick={handleClick}
                >
                    Add task
                </button>
            </div>

            {tasks.length > 0 ? (
                <div>
                    <div className="flex gap-3 justify-center my-5">
                        <button
                            className="bg-indigo-800 px-2 py-3 rounded-md my-5 text-white font-semibold"
                            onClick={() => setFilter("all")}
                        >
                            All tasks
                        </button>
                        <button
                            className="bg-green-700 px-2 py-3 rounded-md my-5 text-white font-semibold"
                            onClick={() => setFilter("complete")}
                        >
                            Complete tasks
                        </button>
                        <button
                            className="bg-red-600 px-2 py-3 rounded-md my-5 text-white font-semibold"
                            onClick={() => setFilter("incomplete")}
                        >
                            Incomplete tasks
                        </button>
                    </div>

                    <div className="relative overflow-x-auto my-10 sm:rounded-lg">
                        <table className="w-6/12 text-sm mx-auto text-left text-gray-500">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3">Task name</th>
                                    <th className="px-6 py-3">Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {filterTask.length > 0 
                                ? (
                                    filterTask.map((task) => (
                                        <tr key={task.id} className="bg-white border-b border-gray-200">
                                            <th
                                                scope="row"
                                                className={`px-6 py-4 font-medium whitespace-nowrap ${task.isDone ? "text-gray-500 line-through" : "text-gray-900"
                                                    } dark:text-white`}
                                            >
                                                {task.taskName}
                                            </th>
                                            <td className="px-6 py-4">
                                                {task.isDone ? (
                                                    <span className="text-green-600 font-semibold">Task completed</span>
                                                ) : (
                                                    <button
                                                        className="font-medium text-blue-600 hover:underline"
                                                        onClick={() => markAsComplete(task.id)}
                                                    >
                                                        Mark as completed
                                                    </button>
                                                )}
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="2" className="text-center py-6 text-gray-600">
                                            <h2>No tasks found for this filter</h2>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            ) : (
                <div className="flex justify-center my-10">
                    <img src="/public/no-task.jpg" alt="No Task Found" className="h-96" />
                </div>
            )}
        </div>
    );
};

export default TodoList;
