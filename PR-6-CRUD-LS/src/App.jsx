import { useEffect, useState } from "react"
import Form from "./components/Form"
import UserList from "./components/UserList"

const App = () => {

    const [users, setUsers] = useState([]);
    const [editUser, setEditUser] = useState(null)

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

    const deleteUser = (userID) => {
        const newUser = users.filter((user) => {
            return userID !== user.id;
        })

        setUsers(newUser);
    }

    const updateUser = (editUser) => {
        const updatedUser = users.map((user) => {
            return user.id === editUser.id ? editUser : user;
        })
        setUsers(updatedUser)
        setEditUser(null);
    }


    const getEditUser = (user) => {
        setEditUser(user)
    }

    return (
        <div>
            <Form addUser={addUser} editUser={editUser} updateUser={updateUser} />
            <UserList users={users} deleteUser={deleteUser} getEditUser={getEditUser} />
        </div>
    )
}

export default App