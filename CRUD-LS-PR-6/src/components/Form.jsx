import React, { useState } from 'react'

const Form = () => {

    const [input, setInput] = useState({
        name: '', gender: '', phone: '', email: '', password: '', cpassword: ''
    });

    const [errors, setErrors] = useState({});

    const handleInput = (e)=>{
        setInput({...input, [e.target.id]: e.target.value})
    }
    console.log(input);

    return (
        <div className='container mx-auto my-4 px-10'>
            <div>
                <h1 className='text-center mb-11 font-semibold text-3xl'>Form Validation</h1>
            </div>
            <form>
                <div className="grid gap-6 mb-6 items-center md:grid-cols-2">
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Full name</label>
                        <input type="text" value={input.name} id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " onChange={handleInput} placeholder="John" required />
                    </div>
                    <div>
                        <label htmlFor="gender" className='block mb-2 text-sm font-medium text-gray-900'>Gender</label>
                        <ul className="p-0 m-0 items-center text-sm font-medium text-gray-900 rounded-lg sm:flex">
                            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                <div className="flex items-center ps-3">
                                    <input id="gender" name='gender' checked={input.gender === "Male"} value='male' type="radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500" onChange={(e)=>
                                        setInput({...input, gender: e.target.value})
                                     } />
                                    <label htmlFor="male" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 ">Male</label>
                                </div>
                            </li>
                            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                <div className="flex items-center ps-3">
                                    <input id="gender" name='gender'  checked={input.gender === "Female"} value='female' type="radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500" onChange={(e)=> 
                                        setInput({...input, gender: e.target.value})
                                     } />
                                    <label htmlFor="female" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 ">Female</label>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">Phone number</label>
                        <input type="tel" value={input.phone} id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" pattern="[6-9]{1}[0-9]{9}" onChange={handleInput} placeholder="123-45-678" required />
                    </div>
                    <div className="">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email address</label>
                        <input type="email" value={input.email} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " pattern="[^@\s]+@[^@\s]+\.[^@\s]+" onChange={handleInput} placeholder="john.doe@company.com" required />
                    </div>
                    <div className="">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                        <input type="password" value={input.password} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " onChange={handleInput} placeholder="•••••••••" required />
                    </div>
                    <div className="">
                        <label htmlFor="cpassword" className="block mb-2 text-sm font-medium text-gray-900">Confirm password</label>
                        <input type="password" value={input.cpassword} id="cpassword" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " onChange={handleInput} placeholder="•••••••••" required />
                    </div>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
            </form>


        </div>
    )
}

export default Form