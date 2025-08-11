import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { app } from '../config/firebase'
import { toast } from 'react-toastify'

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider(app)

const Signup = () => {

    const [input, setInput] = useState({
        email: '', password: ''
    })

    const navigate = useNavigate();

    const handleClick = async () => {
        try {
            let res = await createUserWithEmailAndPassword(auth, input.email, input.password)
            console.log(res);
            navigate("/books")
        } catch (err) {
            toast.error(err.code, {autoClose: 2000});
        }
    }

    const handleGoogle = async () => {
        try {
            let res = await signInWithPopup(auth, googleProvider);
            console.log(res);
            navigate("/books")
        } catch (err) {
            toast.error(err.code, {autoClose: 2000});
        }
    }

    const handleSumbit = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <h1 className='text-center text-3xl my-10 font-semibold'>Sign Up</h1>
            <form className="max-w-sm mx-auto" onSubmit={handleSumbit}>
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                    <input type="email" id="email" value={input.email} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="admin@gmail.com" required onChange={(e) => {
                        setInput({ ...input, [e.target.id]: e.target.value });
                    }} />
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Your password</label>
                    <input type="password" id="password" value={input.password} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder='12345678' required onChange={(e) => {
                        setInput({ ...input, [e.target.id]: e.target.value });
                    }} />
                </div>
                <div className='flex gap-5'>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center" onClick={handleClick}>Submit</button>
                    <button type="submit" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center" onClick={handleGoogle}>Continue With Google</button>
                </div>
            </form>

        </div>
    )
}

export default Signup