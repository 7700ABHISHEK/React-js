import React, { useState } from 'react';
import GooeyNav from '../bitsComponent/GooeyNav';
import GlareHover from '../bitsComponent/GlareHover';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const items = [
        { label: "Home", href: "#" },
        { label: "About", href: "#" },
        { label: "Service", href: "#" },
        { label: "Contact", href: "#" },
    ];

    return (
        <header className="w-full  bg-opacity-70 backdrop-blur-lg px-4 sm:px-8 py-4 z-50 shadow-md">
            <div className="max-w-7xl mx-auto flex items-center justify-between">

                
                <div className="flex-shrink-0">
                    <img
                        src="/logo-img/logo-img.png"
                        alt="logo"
                        className="w-24 h-16 object-contain"
                    />
                </div>

                
                <div className="hidden md:block">
                    <GooeyNav
                        items={items}
                        particleCount={15}
                        particleDistances={[90, 10]}
                        particleR={100}
                        initialActiveIndex={0}
                        animationTime={600}
                        timeVariance={300}
                        colors={[1, 2, 3, 1, 2, 3, 1, 4]}
                    />
                </div>

                
                <div className="hidden md:block">
                    <GlareHover
                        glareColor="#ffffff"
                        glareOpacity={0.4}
                        glareAngle={-30}
                        glareSize={300}
                        transitionDuration={800}
                        playOnce={false}
                    >
                        <Link to={"/signup"} className='rounded-lg text-sm px-5 py-2 text-white font-semibold transition'>
                            Sign Up
                        </Link>
                    </GlareHover>
                </div>

                
                <div className="md:hidden">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-white focus:outline-none"
                    >
                        {menuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            
            {menuOpen && (
                <div className="md:hidden mt-4 px-4 space-y-4 bg-opacity-80 py-6 rounded-md shadow-xl backdrop-blur-md border">
                    {items.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            className="block text-white text-lg font-medium transition"
                        >
                            {item.label}
                        </a>
                    ))}
                    <GlareHover
                        glareColor="#ffffff"
                        glareOpacity={0.3}
                        glareAngle={-30}
                        glareSize={300}
                        transitionDuration={800}
                        playOnce={false}
                    >
                        <button className='w-full rounded-lg text-sm px-4 py-2 font-semibold text-white transition'>
                            Sign Up
                        </button>
                    </GlareHover>
                </div>
            )}
        </header>
    );
};

export default Header;
