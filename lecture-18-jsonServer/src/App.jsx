import { useEffect, useState } from "react"

const App = () => {
    const [users, setUsers] = useState([]);
    const [input, setInput] = useState({
        name: "", course: ""
    });

    const URL = "http://localhost:7700/users";

    // fetching User logic
    const fetchUser = async () => {
        let res = await fetch(URL);
        let data = await res.json();

        setUsers(data);
    }

    useEffect(() => {
        fetchUser();
    }, [])

    // Adding User logic
    const handleAddUser = async (e) => {
        e.preventDefault();

        await fetch(URL, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(input)
        })

        fetchUser();
        setInput({name: "", course: ""})
    }


    // Delete User Logic
    const handleChange = (e) => {
        setInput({...input, [e.target.id]: e.target.value});
    }



    const handleDelete = async (id) => {
        await fetch(`${URL}/${id}`, {
            method: "DELETE",
        })

        fetchUser();
    }

    const handleEdit = async (id) => {
        await fetch(`${URL}/${id}`, {
            method: "PUT",
            headers:{
                "Content-type": "application/json"
            }, 
            body: JSON.stringify(input)
        })

        fetchUser();
    }

    return (
        <div>

            <form onSubmit={handleAddUser}>
                <input type="text" id="name" value={input.name} onChange={handleChange}/>
                <br /><br />
                <input type="text" id="course" value={input.course} onChange={handleChange}/>
                <br /><br />
                <button>AddUser</button>
            </form>

            {
                users.map((user) => {
                    return <div key={user.id}>
                        <h1>{user.name}</h1>
                        <h2>{user.course}</h2>
                        <button onClick={() => handleDelete(user.id)}>❌</button>
                        <button onClick={() => handleEdit(user.id)}>🖊️</button>
                    </div>
                })
            }
        </div>
    )
}

export default App