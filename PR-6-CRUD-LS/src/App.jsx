import { useEffect, useState } from "react"
import Form from "./components/Form"
import UserList from "./components/UserList"

const App = () => {

    const [users, setUsers] = useState([]);

    const addUser = (user) => {
        setUsers((previousUser) => [...previousUser, user]);
    }

    useEffect(() => {
        const oldUsers = JSON.parse(localStorage.getItem("users")) || [];
        setUsers(oldUsers);
    }, [])

    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users));
    }, [users])

    return (
        <div>
            <Form addUser={addUser} />
            <UserList users={users}/>
        </div>
    )
}

export default App