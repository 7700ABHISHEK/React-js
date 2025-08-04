import React, { useCallback, useState } from 'react'
import Person from './components/person';

const App = () => {

    const [users, setUsers] = useState([
        {
            id: 1,
            name: "Abhishek",
        },

        {
            id: 2,
            name: "Suraj",
        },

        {
            id: 3,
            name: "Kaushal"
        },

        {
            id: 4,
            name: "Dev"
        },
    ]);
    const [count, setCount] = useState(0);
    let [value, setValue] = useState(1000);

    const new1 = function getvalue() {
        for (let i = 1; i < value; i++) {
            return value *= i;
        }
    }

    console.log(new1());

    const deleteUser = useCallback((id) => {
        const newUser = users.filter((user) => {
            return user.id !== id;
        });

        setUsers(newUser);

    }, [users])


    return (
        <div className='m-5'>
            <h1>Count: {count}</h1>
            <button className='btn btn-primary' onClick={() => setCount(count + 1)}>Increment</button>

            <Person users={users} deleteUser={deleteUser} />
        </div>
    )
}

export default App