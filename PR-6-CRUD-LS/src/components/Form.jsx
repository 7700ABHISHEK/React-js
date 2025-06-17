import { Input } from 'postcss';
import React, { useState } from 'react'

const Form = ({ addUser }) => {

    const [input, setInput] = useState({
        name: '', gender: '', phone: '', email: '', password: '', cpassword: ''
    });

    const [errors, setErrors] = useState({});

    const handleInput = (e) => {
        setInput({ ...input, [e.target.id]: e.target.value })
        setErrors({ ...errors, [e.target.id]: '' })
    }
    // console.log(input);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};

        if (!input.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!input.gender.trim()) {
            newErrors.gender = 'Select a Gender';
        }

        if (!input.password.trim()) {
            newErrors.password = 'Password is required';
        } else if (input.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters long';
        }

        if (!input.cpassword.trim()) {
            newErrors.cpassword = 'Confirm password is required';
        } else if (input.cpassword !== input.password) {
            newErrors.cpassword = 'Passwords do not match';
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            return;
        }

        addUser({ ...input, id: Date.now() })

        setInput({
            name: '', gender: '', phone: '', email: '', password: '', cpassword: ''
        })
    }

    // console.log(errors);

    return (
        <div className='container mx-auto my-4 px-10'>
            <div>
                <h1 className='text-center mb-11 font-semibold text-3xl'>Form Validation</h1>
            </div>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="grid gap-6 mb-6 items-center md:grid-cols-2">
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Full name</label>
                        <input type="text" value={input.name} id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " onChange={handleInput} placeholder="John" />
                        {
                            errors && <p className='text-red-500 font-semibold'>{errors.name}</p>
                        }
                    </div>
                    <div>
                        <label htmlFor="gender" className='block mb-2 text-sm font-medium text-gray-900'>Gender</label>
                        <ul className="p-0 m-0 items-center text-sm font-medium text-gray-900 rounded-lg sm:flex">
                            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                                <div className="flex items-center ps-3">
                                    <input id="male" name='gender' value='male' type="radio" onChange={(e) => {
                                        setInput({ ...input, [e.target.name]: e.target.value })
                                        setErrors({ ...errors, [e.target.name]: '' })
                                    }} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500" />
                                    <label htmlFor="male" className="w-full py-1 ms-2 text-sm font-medium text-gray-900 ">Male</label>
                                </div>
                            </li>
                            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                                <div className="flex items-center ps-3">
                                    <input id="female" name='gender' value='female' type="radio" onChange={(e) => {
                                        setInput({ ...input, [e.target.name]: e.target.value })
                                        setErrors({ ...errors, [e.target.name]: '' })
                                    }} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500" />
                                    <label htmlFor="female" className="w-full py-1 ms-2 text-sm font-medium text-gray-900 ">Female</label>
                                </div>
                            </li>
                        </ul>
                        {
                            errors && <p className='text-red-500 font-semibold'>{errors.gender}</p>
                        }
                    </div>
                    <div>
                        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">Phone number</label>
                        <input type="tel" value={input.phone} id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" pattern="[6-9]{1}[0-9]{9}" onChange={handleInput} placeholder="123-45-678" />
                    </div>
                    <div className="">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email address</label>
                        <input type="email" value={input.email} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " pattern="[^@\s]+@[^@\s]+\.[^@\s]+" onChange={handleInput} placeholder="john.doe@company.com" />
                    </div>
                    <div className="">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                        <input type="password" value={input.password} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " onChange={handleInput} placeholder="•••••••••" />
                        {
                            errors && <p className='text-red-500 font-semibold'>{errors.password}</p>
                        }
                    </div>
                    <div className="">
                        <label htmlFor="cpassword" className="block mb-2 text-sm font-medium text-gray-900">Confirm password</label>
                        <input type="password" value={input.cpassword} id="cpassword" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " onChange={handleInput} placeholder="•••••••••" />
                        {
                            errors && <p className='text-red-500 font-semibold'>{errors.cpassword}</p>
                        }
                    </div>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
            </form>


        </div>
    )
}

export default Form