import React, { useEffect, useState } from 'react'

const Username = () => {

    const [userName, setUserName] = useState('');
    const [query, setQuery] = useState('');

    useEffect(()=>{

        const apiCall = async ()=>{
            let res = await fetch(`https://api.github.com/users/${query}`)
            let data = await res.json();

            // console.log(data);
        }

        apiCall();
    }, [query]);

    return (
        <>
            <h1 className='text-4xl text-center text-black font-semibold'>Github Users Api</h1>

            <div className='flex justify-center my-10'>
                <input type="text" className='rounded-3xl' onChange={(e) => {
                    setUserName(e.target.value)
                }
                } />
                <button className='mx-2 py-2 px-6 rounded-[10px] bg-cyan-700 text-white hover:bg-cyan-600' onClick={() => {
                    setQuery(userName);
                }}>Search</button>
            </div>

            <div className='flex justify-center items-center mt-40'>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"></h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Download
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Username