import React from 'react'

const UserList = ({ users, deleteUser, getEditUser }) => {

    const handleDelete = (userID) => {
        deleteUser(userID);
    }

    const handleEdit = (user) => {
        getEditUser(user);
    }

    return (
        <div className='container mx-auto px-12 py-16'>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                {
                    users.length > 0 ?
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Gender
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Number
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Email
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Password
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((user, idx) => {
                                        return <tr key={user.id} className="odd:bg-white even:bg-gray-50 border-gray-200">
                                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                {user.name}
                                            </td>
                                            <td className="px-6 py-4">
                                                {user.gender}
                                            </td>
                                            <td className="px-6 py-4">
                                                {user.phone}
                                            </td>
                                            <td className="px-6 py-4">
                                                {user.email}
                                            </td>
                                            <td className="px-6 py-4">
                                                {user.password}
                                            </td>
                                            <td className="px-6 py-4 flex gap-5">
                                                <button className="font-medium text-blue-600 hover:underline" onClick={() => handleEdit(user)}>Edit</button>
                                                <button className="font-medium text-red-600 hover:underline" onClick={() => handleDelete(user.id)}>Delete</button>
                                            </td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                        : 
                        <div>
                            <h1 className='text-red-600 font-semibold text-3xl text-center'>No User Found</h1>
                        </div>
                }
            </div>

        </div>
    )
}

export default UserList