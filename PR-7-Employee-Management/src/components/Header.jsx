import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'

const Header = ({ setIsLogin }) => {
    const isLogin = JSON.parse(localStorage.getItem("isLogin"))
    const { pathname } = useLocation();

    const navigate = useNavigate();

    return (
        <div>
            <nav className="bg-white border-b border-gray-200">
                <div className="container flex flex-wrap items-center justify-between mx-auto px-10 py-4">
                    <Link to={"/"} className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                    </Link>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col items-center p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
                            <li>
                                <Link to={"/"} className={`${pathname == '/' ? 'text-teal-700' : "text-gray-900 hover:text-teal-700"} `} aria-current="page">Home</Link>
                            </li>
                            <li>
                                <Link to={"/about"} className={`${pathname == '/about' ? 'text-teal-700' : "text-gray-900 hover:text-teal-700"}`}>About</Link>
                            </li>
                            <li>
                                <Link to={"/service"} className={`${pathname == '/service' ? 'text-teal-700' : "text-gray-900 hover:text-teal-700"}`}>Services</Link>
                            </li>
                            <li>
                                <Link to={"/contact"} className={`${pathname == '/contact' ? 'text-teal-700' : "text-gray-900 hover:text-teal-700"}`}>Contact</Link>
                            </li>
                            {
                                isLogin && <li>
                                    <Link to={"/employees"} className={`${pathname == '/employees' || pathname == '/add-employees' || pathname.includes("edit-employee") ? 'text-teal-700' : "text-gray-900 hover:text-teal-700"}`}>Employees</Link>
                                </li>
                            }
                            {
                                isLogin ? <button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center" onClick={() => {
                                    localStorage.setItem("isLogin", JSON.stringify(false));
                                    setIsLogin(false);
                                    navigate("/");
                                }}>
                                    Log Out
                                </button> :
                                    <button onClick={() => {
                                        navigate("/login")
                                    }} type="button" className="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-4 py-2 text-center">
                                        LogIn
                                    </button>
                            }

                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Header