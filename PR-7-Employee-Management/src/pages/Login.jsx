import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = ({ setIsLogin }) => {
    const [input, setInput] = useState({
        email: '', password: '',
    });
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const handleChange = (e) => {
        setInput({ ...input, [e.target.id]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = {};

        if (input.password.trim() == '' || input.password.trim().length < 8) {
            validationErrors.password = "Please Enter Valid Password";
        }

        setErrors(validationErrors);

        if(Object.keys(validationErrors).length > 0){
            return;
        }

        if (input.email === "admin@gmail.com" && input.password === "admin@123") {
            localStorage.setItem("isLogin", JSON.stringify(true));
            setIsLogin(true);
            navigate("/employees")
            toast.success("LoggedIn Successfully...")
        } else{
            toast.error("Please Enter Valid Email or Password...")
        }
    }


    return (
        <div className="my-vh bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
                    <p className="text-gray-600">Sign in to your account</p>
                </div>

                {/* Form */}
                <form className="space-y-6" onSubmit={handleSubmit}>
                    {/* Email Field */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={input.email}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 placeholder-gray-400"
                            placeholder="Enter your email"
                            pattern="^[^@\s]+@[^@\s]+\.[^@\s]+$"
                            title="Please enter a valid email address"
                            required
                            onChange={handleChange}
                        />
                    </div>

                    {/* Password Field */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={input.password}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 placeholder-gray-400"
                            placeholder="Enter your password"
                            onChange={handleChange}
                        />
                        {
                            errors && <p className='text-red-600 font-semibold'>{errors.password}</p>
                        }
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-105">
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login