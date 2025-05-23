import React, { useRef, useState, useEffect } from 'react';
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

        domtoimage.toPng(node, { bgcolor: 'black' })
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
        <div className="min-h-screen bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 p-6">
            <h1 className="text-5xl font-extrabold text-center text-white mb-8 animate__animated animate__fadeInDown">
                GitHub Profile Hunter
            </h1>

            <div className="flex justify-center gap-4 mb-10 animate__animated animate__fadeInUp">
                <input
                    type="text"
                    className="w-64 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-600"
                    placeholder="Enter GitHub username"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <button
                    onClick={() => {
                        setQuery(userName.trim());
                        setHasSearched(true);
                    }}
                    className="px-6 py-2 bg-cyan-700 text-white rounded-full hover:bg-cyan-600 transition"
                >
                    Search
                </button>
            </div>

            <div className="flex justify-center">
                <div className="w-full max-w-md bg-white border border-gray-200 rounded-xl shadow-lg p-6">
                    {hasSearched && Object.keys(user).length === 0 ? (
                        <div className="text-center py-10">
                            <h2 className="text-xl font-semibold text-red-600">User Not Found</h2>
                        </div>
                    ) : (
                        Object.keys(user).length !== 0 && (
                            <>
                                <div
                                    ref={cardRef}
                                    className="flex flex-col items-center bg-black text-white p-8 rounded-lg shadow-md">
                                    <img
                                        className="w-24 h-24 rounded-full border-4 border-white shadow mb-4 animate__animated animate__zoomIn"
                                        src={user.avatar_url}
                                        alt="User avatar"
                                    />
                                    <h2 className="text-2xl font-semibold mb-2">{user.name || user.login}</h2>
                                    <p className="text-sm text-gray-300 text-center">
                                        {user.bio || 'No bio available'}
                                    </p>
                                    <div className='flex my-6 gap-11'>
                                        <div>
                                            <p className='text-center'>{user.followers}</p>
                                            <h5>Followers</h5>
                                        </div>
                                        <div>
                                            <p className='text-center'>{user.following}</p>
                                            <h5>Following</h5>
                                        </div>
                                        <div>
                                            <p className='text-center'>{user.public_repos}</p>
                                            <h5>Repos</h5>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-center mt-6">
                                    <button
                                        onClick={downloadCard}
                                        className="px-5 py-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition"
                                    >
                                        Download Profile Card
                                    </button>
                                </div>
                            </>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default Username;
