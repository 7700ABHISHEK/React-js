import React from 'react';

const HomePage = () => {
    return (
        <main className="text-white min-h-screen">
            {/* Hero Section */}
            <section className="relative h-screen flex flex-col items-center justify-center text-center px-6">
                <img 
                    src="/images/temple-hero.jpg" 
                    alt="Temple" 
                    className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
                />
                <div className="z-10 max-w-2xl">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4">Welcome to Shri Ram Mandir</h1>
                    <p className="text-lg sm:text-xl text-gray-300 mb-6">Experience peace, devotion, and divine blessings</p>
                    <button className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-600 transition">
                        Explore More
                    </button>
                </div>
            </section>

            {/* About Section */}
            <section className="px-6 py-16 max-w-5xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4 text-yellow-400">About the Temple</h2>
                <p className="text-gray-300 leading-relaxed">
                    Shri Ram Mandir is a sacred place dedicated to Lord Ram. Founded in 1856, the temple has been a center for spiritual gatherings, bhajans, and festivals. Join us in daily aarti and immerse yourself in divine bliss.
                </p>
            </section>

            {/* Darshan Timings */}
            <section className="bg-gray-800 px-6 py-12">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl font-semibold text-yellow-400 mb-6">Darshan Timings</h2>
                    <ul className="grid sm:grid-cols-2 gap-6 text-gray-300">
                        <li>Morning Aarti: 6:00 AM – 7:00 AM</li>
                        <li>Afternoon Darshan: 12:00 PM – 1:30 PM</li>
                        <li>Evening Aarti: 6:30 PM – 7:30 PM</li>
                        <li>Temple closes at 9:00 PM</li>
                    </ul>
                </div>
            </section>

            {/* Upcoming Events */}
            <section className="px-6 py-16 max-w-5xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4 text-yellow-400">Upcoming Events</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2">Janmashtami Celebration</h3>
                        <p className="text-gray-400">August 26, 2025</p>
                        <p className="text-gray-300 mt-2">Join us for kirtan, bhajans, and midnight prasad distribution.</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2">Ram Navami Yatra</h3>
                        <p className="text-gray-400">April 8, 2026</p>
                        <p className="text-gray-300 mt-2">A spiritual yatra around the city followed by maha aarti.</p>
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <section className="px-6 py-16 bg-gray-800">
                <h2 className="text-3xl font-bold text-center text-yellow-400 mb-8">Temple Gallery</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-6xl mx-auto">
                    <img src="/images/gallery1.jpg" alt="Gallery 1" className="rounded-lg" />
                    <img src="/images/gallery2.jpg" alt="Gallery 2" className="rounded-lg" />
                    <img src="/images/gallery3.jpg" alt="Gallery 3" className="rounded-lg" />
                    <img src="/images/gallery4.jpg" alt="Gallery 4" className="rounded-lg" />
                    <img src="/images/gallery5.jpg" alt="Gallery 5" className="rounded-lg" />
                    <img src="/images/gallery6.jpg" alt="Gallery 6" className="rounded-lg" />
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 py-8 text-center text-gray-400">
                <p>&copy; 2025 Shri Ram Mandir | All Rights Reserved</p>
                <p className="mt-2">Contact: <a href="tel:+919999999999" className="text-yellow-400 hover:underline">+91 99999 99999</a></p>
            </footer>
        </main>
    );
};

export default HomePage;
