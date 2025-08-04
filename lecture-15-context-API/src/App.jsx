import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { createContext } from 'react'

export const AppContext = createContext();

const App = () => {

    const [user, setUser] = useState({name: "Abhishek"});

    const handleLogOut = () => {
        setUser(null);
    }

    return (
        <div>
            <AppContext.Provider value={{user, handleLogOut}}>
                <Navbar />
            </AppContext.Provider>
        </div>
    )
}

export default App