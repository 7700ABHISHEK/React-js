import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import Login from "./pages/Login"
import About from "./pages/About"
import Service from "./pages/Service"
import Contact from "./pages/Contact"
import Employees from "./pages/Employees"
const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/service" element={<Service />}/>
                <Route path="/contact" element={<Contact />}/>
                <Route path="/employees" element={<Employees />}/>
                <Route path="/login" element={<Login />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App