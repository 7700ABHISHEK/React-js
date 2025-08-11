import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import Books from './pages/Books'
import { ToastContainer } from 'react-toastify'

const App = () => {
    return (
        <BrowserRouter>
            <ToastContainer />
            <Routes>
                <Route path='/' element={<Signup />} />
                <Route path='/books' element={<Books />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App