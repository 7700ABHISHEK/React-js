import React, { memo } from 'react'

const Person = ({ users, deleteUser }) => {

    
    console.log(users);

    const handleDelete = (id) => {
        deleteUser(id);
    }

    return (
        <div className='mt-5'>
            {
                users.map((user) =>
                    <div key={user.id} className='mb-5'>
                        <h1>{user.name}</h1>
                        <button className='btn btn-danger' onClick={() => handleDelete(user.id)}>Delete</button>
                    </div>
                )
            }
        </div>
    )
}

export default memo(Person);