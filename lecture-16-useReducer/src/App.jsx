import React, { useReducer } from 'react'

const initialState = {
    users: [
        {
            id: 1,
            name: "Suraj"
        },

        {
            id: 2,
            name: "Sujar"
        },

        {
            id: 3,
            name: "jusar"
        },
    ]
}

const reducer = (state, action) => {
    const id = action.payload;

    switch (action.type) {
        case "CLEAR_USER":
            return state.users = [];
        case "DELETE_USER":
            const userArr = state.users.filter((user) => {
                return user.id !== id;
            })

            return { users: userArr }

    }
}

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleClear = () => {
        dispatch({ type: "CLEAR_USER" });
    }

    const handleDelete = (id) => {
        dispatch({ type: "DELETE_USER", payload: id });
    }

    return (
        <div>
            {
                state.users?.map((user) => {
                    return <div key={user.id}>
                        <h1>{user.name}</h1>
                        <button onClick={() => handleDelete(user.id)}>Delete</button>
                    </div>
                })
            }

            <br /><br /><br />

            <button onClick={handleClear}> Clear</button>
        </div >
    )
}

export default App