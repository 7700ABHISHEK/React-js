import React, { useRef, useState } from 'react'

const FormValidation = () => {

    const [input, setInput] = useState({
        fname: '', lname: '', email: '', phone: '', password: '', cpassword: ''
    });
    const [errors, setErrors] = useState({});

    const formRef = useRef(null);

    const handleChange = (e) => {
        setInput({ ...input, [e.target.id]: e.target.value }); // dynamic keys
    }

    console.log(input);

    const handleSubmit = (e) => {
        e.preventDefault();

        let validationErrors = {}

        if(input.fname.trim() === ''){
            validationErrors.fname = "Please Enter proper first name";
        }

        if(input.lname.trim() === ''){
            validationErrors.lname = "Please Enter proper last name";
        }

        if(input.password.trim() === '' || input.password.length < 8){
            validationErrors.password = "Please Enter a strong password";
        }

        if(input.cpassword.trim() === '' || input.cpassword !== input.password){
            validationErrors.cpassword = "Password and Confirm Password Should Match";
        }

        setErrors(validationErrors);

        if(Object.keys(validationErrors).length == 0){
            formRef.current.submit();
        }
    }

    console.log(errors);

    return (
        <div className='container mx-auto my-4 px-10'>

            <h1 className='my-8 font-semibold text-center text-3xl'>Form Validation</h1>

            <form onSubmit={handleSubmit} ref={formRef}>
                <div>
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                            <label htmlFor="fname" className="block mb-2 text-sm font-medium text-gray-900 ">First name</label>
                            <input type="text" id="fname" className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="John" required onChange={handleChange} value={input.fname} />
                        </div>
                        <div>
                            <label htmlFor="lname" className="block mb-2 text-sm font-medium text-gray-900 ">Last name</label>
                            <input type="text" id="lname" className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Doe" required onChange={handleChange} value={input.lname} />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email address</label>
                            <input type="email" id="email" className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" pattern="^[^@\s]+@[^@\s]+\.[^@\s]+$" placeholder="john.doe@company.com" required onChange={handleChange} value={input.email}/>
                        </div>
                        <div>
                            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 ">Phone number</label>
                            <input type="tel" id="phone" className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="123-45-678" required onChange={handleChange} value={input.phone}/>
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                            <input type="password" id="password" className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="•••••••••" required onChange={handleChange} value={input.password}/>
                        </div>
                        <div>
                            <label htmlFor="cpassword" className="block mb-2 text-sm font-medium text-gray-900 ">Confirm password</label>
                            <input type="password" id="cpassword" className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="•••••••••" required onChange={handleChange} value={input.cpassword}/>
                        </div>
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </div>

            </form>

        </div>
    )
}

export default FormValidation;