import { BrowserRouter, Route, Routes } from "react-router-dom"
import Student from "./pages/Student"
import AddStudent from "./pages/AddStudent"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Student />} />
                <Route path="/add-student" element={<AddStudent />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App