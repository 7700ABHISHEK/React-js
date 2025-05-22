import React, { useEffect, useState } from 'react'

const Username = () => {

    const [userName, setUserName] = useState('');
    const [query, setQuery] = useState('');
    const [user, setUser] = useState({});

    
    useEffect(() => {
        console.log("Hello");
        const apiCall = async () => {
            
            if (!query) {
                return;
            }
            
            let res = await fetch(`https://api.github.com/users/${query}`)
            let data = await res.json();
            
            setUser(data);
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


            <div className='flex justify-center items-center'>
                <div className="w-full max-w-sm mt-5 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    {
                        Object.keys(user) == 0 ? <div>
                            <h1>Not Found</h1>
                        </div>
                        :
                        <div className="flex mt-10 flex-col items-center pb-10">
                            <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={user.avatar_url}alt="Bonnie image" />
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{user.name}</h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">{user.bio}</span>
                            <div className=" mt-4 md:mt-6">
                                <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Download</a>
                            </div>
                        </div>
                    }
                </div>

            </div>


        </>
    )
}

export default Username