import React, { useRef, useEffect, useState } from 'react';
import domtoimage from 'dom-to-image';

const Username = () => {
    const [userName, setUserName] = useState('');
    const [query, setQuery] = useState('');
    const [user, setUser] = useState({});
    const [hasSearched, setHasSearched] = useState(false);
    const cardRef = useRef(null);

    const downloadCard = () => {
        const node = cardRef.current;
        if (!node) return;

        domtoimage.toPng(node)
            .then((dataUrl) => {
                const link = document.createElement('a');
                link.download = 'profile_card.png';
                link.href = dataUrl;
                link.click();
            })
            .catch((error) => {
                console.error('Error generating image:', error);
            });
    };

    useEffect(() => {
        const apiCall = async () => {
            if (!query) return;

            try {
                const res = await fetch(`https://api.github.com/users/${query}`);
                const data = await res.json();

                if (data.message === 'Not Found') {
                    setUser({});
                } else {
                    setUser(data);
                }
            } catch (error) {
                console.error('Fetch error:', error);
                setUser({});
            }
        };

        apiCall();
    }, [query]);

    return (
        <>
            <h1 className='text-4xl text-center text-black font-semibold'>GitHub Users API</h1>

            <div className='flex justify-center my-10'>
                <input
                    type="text"
                    className='rounded-3xl border px-4 py-2'
                    placeholder="Enter GitHub username"
                    onChange={(e) => setUserName(e.target.value)}
                />
                <button
                    className='mx-2 py-2 px-6 rounded-[10px] bg-cyan-700 text-white hover:bg-cyan-600'
                    onClick={() => {
                        setQuery(userName.trim());
                        setHasSearched(true);
                    }}
                >
                    Search
                </button>
            </div>

            <div className='flex justify-center items-center'>
                <div className="w-full max-w-sm mt-5 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    {hasSearched && Object.keys(user).length === 0 ? (
                        <div className="text-center p-5">
                            <h1 className="text-lg text-red-600 font-semibold">User Not Found</h1>
                        </div>
                    ) : (
                        Object.keys(user).length !== 0 && (
                            <div className="flex mt-10 flex-col items-center pb-10" ref={cardRef}>
                                <img
                                    className="w-24 h-24 mb-3 rounded-full shadow-lg"
                                    src={user.avatar_url || null}
                                    alt="User avatar"
                                />
                                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                                    {user.name || user.login}
                                </h5>
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                    {user.bio || 'No bio available'}
                                </span>
                                <div className="mt-4 md:mt-6">
                                    <button
                                        onClick={downloadCard}
                                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Download
                                    </button>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </>
    );
};

export default Username;
